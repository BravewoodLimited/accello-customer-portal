import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import MiscApi from "apis/MiscApi";

// const documentTypes = [
//   { id: 60, name: "Affidavit", systemDefined: false },
//   { id: 1, name: "Customer Identifier", systemDefined: true },
//   { id: 55, name: "Loan Agreement Form", systemDefined: false },
//   { id: 51, name: "Proof of Employment", systemDefined: true },
//   { id: 50, name: "Proof of Residence", systemDefined: true },
//   { id: 59, name: "Report", systemDefined: false },
//   { id: 64, name: "Signature", systemDefined: false },
//   { id: 58, name: "Statement", systemDefined: false }
// ];

const LoanDocumentUpload = ({ formik, clientKyc }) => {
  const [files, setFiles] = useState([]);
  const [specificDocumentTypes, setSpecificDocumentTypes] = useState({});
  const [documentTypes, setDocumentTypes] = useState([]);
  const [existingFile, setExistingFile] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const [allDocMutation, parentType] = MiscApi.useGetAllDocumentTypeMutation();
  const [specDocMutation, specType] =
    MiscApi.useGetSpecificDocumentTypeMutation();
    useEffect(() => {
      allDocMutation();
    }, []);


    useEffect(() => {
      handleFormSubmit();
    }, [files]);

  useEffect(() => {
    console.log("====================================");
    console.log(parentType, clientKyc);
    setExistingFile(clientKyc?.clientIdentifiers || []);
    setDocumentTypes(parentType?.data?.data?.codeData || []);
    console.log(specificDocumentTypes);
    console.log("====================================");
  }, [parentType, specificDocumentTypes]);



  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: uuidv4(),
      file,
      description: "",
      documentTypeId: "",
      expiryDate: "",
      specificDocumentTypes: [],
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    enqueueSnackbar("Files selected successfully!", { variant: "info" });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  //   const formik = useFormik({
  //     initialValues: {
  //       clients: { id: 10106 },
  //       avatar: '',
  //       clientIdentifiers: []
  //     },
  //     validationSchema: Yup.object({
  //       clients: Yup.object({
  //         id: Yup.number().required('Client ID is required')
  //       }),
  //       clientIdentifiers: Yup.array().of(
  //         Yup.object({
  //           documentTypeId: Yup.number().required('Document Type is required'),
  //           expiryDate: Yup.date().required('Expiry Date is required'),
  //           attachment: Yup.object({
  //             name: Yup.string().required('File name is required'),
  //             fileName: Yup.string().required('File name is required'),
  //             size: Yup.number().required('File size is required'),
  //             type: Yup.string().required('File type is required'),
  //             location: Yup.string().required('File location is required')
  //           })
  //         })
  //       )
  //     }),
  //     onSubmit: (values) => {
  //       console.log(values);
  //     }
  //   });

  const fetchSpecificDocumentTypes = async (documentTypeId) => {
    try {
      const response = await specDocMutation(documentTypeId).unwrap();
      setSpecificDocumentTypes((prevTypes) => ({
        ...prevTypes,
        [documentTypeId]: response.data,
      }));
    } catch (error) {
      enqueueSnackbar("Error fetching specific document types", {
        variant: "error",
      });
    }
  };

  const handleDocumentTypeChange = (id, documentTypeId) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === id ? { ...file, documentTypeId } : file
      )
    );
    fetchSpecificDocumentTypes(documentTypeId);
    // handleFormSubmit()
  };

  const handleFileDetailsChange = (id, key, value) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === id ? { ...file, [key]: value } : file
      )
    );
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFormSubmit = async () => {
    const clientIdentifiers = await Promise.all(
      files.map(async (file) => {
        const base64Location = await convertToBase64(file.file);
        return {
          documentKey: uuidv4(),
          documentTypeId: file.specificDocumentType,
          status: "ACTIVE",
          expiryDate: file.expiryDate,
          dateFormat: "dd MMMM yyyy",
          locale: "en",
          attachment: {
            name: file.file.name,
            fileName: file.file.name,
            size: file.file.size,
            type: file.file.type,
            location: base64Location,
          },
        };
      })
    );

    console.log(formik.values);
    formik.setFieldValue("clientIdentifiers", clientIdentifiers);
    // formik.submitForm();
  };

  return (
    <div className="p-5">
      <div
        {...getRootProps()}
        className="p-5 border-2 border-dashed border-gray-300 rounded-md cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-center">
          Drag & drop some files here, or click to select files
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {existingFile.map((file) => (
          <div key={file?.id} className="p-3 border rounded-md">
            <p className="truncate">
              {file?.attachment?.fileName?.split(".")[0]}
            </p>
            <p className="text-sm text-gray-500">
              {(file?.attachment?.size / 1024)?.toFixed(2)} KB
            </p>
            <div className="mt-2 p-2 border rounded w-full">
              {file?.documentType?.name}
            </div>
            <div className="mt-2 p-2 border rounded w-full"></div>
          </div>
        ))}
        {files.map(({ id, file, description, documentTypeId, expiryDate }) => (
          <div key={id} className="p-3 border rounded-md">
            <p className="truncate">{file.name}</p>
            <p className="text-sm text-gray-500">
              {(file.size / 1024).toFixed(2)} KB
            </p>
            <input
              type="text"
              placeholder="Description"
              className="mt-2 p-2 border rounded w-full"
              value={description}
              onChange={(e) =>
                handleFileDetailsChange(id, "description", e.target.value)
              }
            />
            <select
              className="mt-2 p-2 border rounded w-full"
              value={documentTypeId}
              onChange={(e) => handleDocumentTypeChange(id, e.target.value)}
            >
              <option value="" label="Select document type" />
              {documentTypes.map((type) => (
                <option key={type.id} value={type.id} label={type.name} />
              ))}
            </select>
            <select
              className="mt-2 p-2 border rounded w-full"
              //   value={specificDocumentTypes[documentTypeId] || ""}
              onChange={(e) =>
                handleFileDetailsChange(
                  id,
                  "specificDocumentType",
                  e.target.value
                )
              }
              disabled={!specificDocumentTypes[documentTypeId]}
            >
              <option value="" label="Select specific document type" />
              {specificDocumentTypes[documentTypeId]?.map((type) => (
                <option key={type.id} value={type.id} label={type.name} />
              ))}
            </select>
            <input
              type="date"
              placeholder="expires on"
              className="mt-2 p-2 border rounded w-full"
              value={expiryDate}
              onChange={(e) =>
                handleFileDetailsChange(id, "expiryDate", e.target.value)
              }
            />
            <div>Expiry Date</div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default LoanDocumentUpload;
