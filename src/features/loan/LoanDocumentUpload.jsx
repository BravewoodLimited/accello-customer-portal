import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";
import MiscApi from "apis/MiscApi";
import { Button, Icon } from "@mui/material";

const LoanDocumentUpload = ({ formik, clientKyc }) => {
  const [files, setFiles] = useState([]);
  const [specificDocumentTypes, setSpecificDocumentTypes] = useState({});
  const [documentTypes, setDocumentTypes] = useState([]);
  const [existingFile, setExistingFile] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [selectedSpecificDocumentType, setSelectedSpecificDocumentType] =   useState("");
    useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [AddNewDoc, setAddNewDoc] = useState(false);

  const [allDocMutation, parentType] = MiscApi.useGetAllDocumentTypeMutation();
  const [specDocMutation] = MiscApi.useGetSpecificDocumentTypeMutation();

  useEffect(() => {
    allDocMutation();
  }, []);

  useEffect(() => {
    setExistingFile(clientKyc?.clientIdentifiers || []);
    setDocumentTypes(parentType?.data?.data?.codeData || []);
  }, [parentType]);

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

  const handleDocumentTypeChange = (documentTypeId) => {
    setSelectedDocumentType(documentTypeId);
    setSelectedSpecificDocumentType("");
    fetchSpecificDocumentTypes(documentTypeId);
  };

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: uuidv4(),
      file,
      description: "",
      documentTypeId: selectedDocumentType,
      specificDocumentTypeId: selectedSpecificDocumentType,
      expiryDate: expiryDate,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    enqueueSnackbar("Files selected successfully!", { variant: "info" });
    setSelectedDocumentType("");
    setSelectedSpecificDocumentType("");
    setExpiryDate("");
    setAddNewDoc(false)
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
          documentTypeId: file.specificDocumentTypeId || file.documentTypeId,
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

    formik.setFieldValue("clientIdentifiers", clientIdentifiers);
  };

  useEffect(() => {
    handleFormSubmit();
  }, [files]);

  const handleRemoveFile = (id) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    enqueueSnackbar("File removed successfully!", { variant: "info" });
  };

  // Get the document type name by its ID
  const getDocumentTypeName = (id) => {
    const type = documentTypes.find((type) => type.id == id);
    return type ? type.name : "";
  };

  // Get the specific document type name by its ID
  const getSpecificDocumentTypeName = (documentTypeId, specificDocumentTypeId) => {
    const types = specificDocumentTypes[documentTypeId] || [];
    const type = types.find((type) => type.id == specificDocumentTypeId);
    return type ? type.name : "";
  };

  return (
    <div className="p-5">
      <div className="mb-5 p-3 border rounded-md">
        {AddNewDoc ?<select
          className="mt-2 p-2 border rounded w-full"
          value={selectedDocumentType}
          onChange={(e) => handleDocumentTypeChange(e.target.value)}
        >
          <option value="" label="Select document type" />
          {documentTypes.map((type) => (
            <option key={type.id} value={type.id} label={type.name} />
          ))}
        </select>:
        <Button size="large" className="" startIcon={<Icon >add</Icon>} onClick={()=>setAddNewDoc(true)} color="primary" >Add Document</Button>
        }
        {selectedDocumentType && (
          <select
            className="mt-2 p-2 border rounded w-full"
            value={selectedSpecificDocumentType}
            onChange={(e) => {setSelectedSpecificDocumentType(e.target.value)}}
          >
            <option value="" label="Select specific document type" />
            {specificDocumentTypes[selectedDocumentType]?.map((type) => (
              <option key={type.id} value={type.id} label={type.name} />
            ))}
          </select>
        )}
        {selectedDocumentType && (
        <>
          <input
            type="date"
            className="mt-2 p-2 border rounded w-full"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <div>Expiry date</div>
        </>
        )}
        {(selectedSpecificDocumentType&&selectedDocumentType )&& (
          <div
            {...getRootProps()}
            className="mt-2 p-5 border-2 border-dashed border-gray-300 rounded-md cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-center">
              Drag & drop some files here, or click to select files
            </p>
          </div>
        )}
        {AddNewDoc&&<Button size="small" className="mt-3" startIcon={<Icon >remove</Icon>} onClick={()=>{setAddNewDoc(false); setSelectedDocumentType("")}} color="error" >Remove</Button>}
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {existingFile.map((file) => (
          <div key={file?.id} className="p-3 border rounded-md">
            <p className="truncate">{file?.attachment?.fileName?.split(".")[0]}</p>
            <p className="text-sm text-gray-500">{(file?.attachment?.size / 1024)?.toFixed(2)} KB</p>
            <div className="mt-2 p-2 border rounded w-full">{file?.documentType?.name}</div>
          </div>
        ))}
      </div> */}

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
          </div>
        ))}
        {files.map(
          ({
            id,
            file,
            description,
            documentTypeId,
            specificDocumentTypeId,
            expiryDate,
          }) => (
            <div key={id} className="p-3 border rounded-md relative">
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
                  setFiles((prevFiles) =>
                    prevFiles.map((f) =>
                      f.id === id ? { ...f, description: e.target.value } : f
                    )
                  )
                }
              />
              {/* Display the name of the document type */}
            <div className="mt-2 p-2 border rounded w-full">{getDocumentTypeName(documentTypeId)}</div>
            {/* Display the name of the specific document type */}
            <div className="mt-2 p-2 border rounded w-full">{getSpecificDocumentTypeName(documentTypeId, specificDocumentTypeId)}</div>
              <div className="mt-2 p-2 border rounded w-full">{expiryDate}</div>
              <button 
                onClick={() => handleRemoveFile(id)}
                className="absolute top-0 right-0 mt-2 mr-2 "
              >
                <Icon color="error">Close</Icon>
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LoanDocumentUpload;
