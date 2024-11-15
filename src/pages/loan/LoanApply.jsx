import LoanApplyBlacklisted from "features/loan/LoanApplyBlacklisted";
import useStepper from "hooks/useStepper";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormHelperText,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { lazy, useEffect, useMemo, useState } from "react";
import Suspense from "common/Suspense";
import DateFormat from "enums/DateFormat";
import DateLocale from "enums/DateLocale";
import ClientApi from "apis/ClientApi";
import useAuthUser from "hooks/useAuthUser";
import LoadingUI from "common/LoadingUI";
import LoanApi from "apis/LoanApi";
import useDataRef from "hooks/useDataRef";
import * as dfns from "date-fns";
import { removeEmptyProperties } from "utils/object";
import { LoadingButton } from "@mui/lab";
import LoanDocumentUpload from "features/loan/LoanDocumentUpload";
import MiscApi from "apis/MiscApi";
import OtpInput from "common/OtpInput";
import {
  getFormikTextFieldError,
  getFormikTextFieldHelperText,
} from "utils/formik";

const nineMonthsAgo = dfns.subMonths(new Date(), 9);

function LoanApply() {
  const [agreed, setAgreed] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [token, settoken] = useState("");
  const [loanId, setLoanID] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const authUser = useAuthUser();

  const clientId = authUser?.clientId;

  const isEdit = false;

  const stepper = useStepper();

  const [sendNewClientOtpMutation] = ClientApi.useSendNewClientOtpMutation();
  const [verifyClientOtpMutation] = ClientApi.useVerifyLafOtpMutation();

  const [verifyNewClientOtpMutation] =
    ClientApi.useVerifyNewClientOtpMutation();

  const [createClientKycMutation] = ClientApi.useCreateClientKycMutation();

  const [createLoanMutation] = LoanApi.useCreateLoanMutation();
  const [approvedLoanMutation] = LoanApi.useApproveLoanMutation();
  const [addDocMutation] = MiscApi.useAddDocumentMutation();
  const [sendLaf] = MiscApi.useSendLaffMutation();
  const today = new Date();
  const minDate = new Date(today.setFullYear(today.getFullYear() - 18));

  const clientKycDetailsQueryResult = ClientApi.useGetClientKycDetailsQuery(
    useMemo(() => ({ path: { id: clientId } }), [clientId, stepper]),
    { skip: !clientId }
  );

  const clientKyc = clientKycDetailsQueryResult.data?.data;
  const storedReferral = sessionStorage.getItem("referralCode");
  const formik = useFormik({
    initialValues: {
      kyc: {
        verify: {
          step: 0,
          type: "bvn",
          token: "",
        },
        clients: {
          bvn: "",
          nin: "",
          active: true,
          titleId: "",
          firstname: "",
          lastname: "",
          middlename: "",
          dateOfBirth: "",
          genderId: "",
          maritalStatusId: "",
          emailAddress: "",
          dateFormat: "dd MMMM yyyy",
        },
        clientBanks: [
          {
            bankId: "",
            accountnumber: "",
            accountname: "",
            active: true,
          },
        ],
        clientEmployers: [
          {
            workEmailVerified: false,
            // countryId: '',
            staffId: "",
            officeAddress: "",
            employmentTypeId: null,
            // employmentStatusId: "",
            employmentSectorId: "",
            employmentDate: null,
            salaryRangeId: "",
            employerId: "",
            dateFormat: DateFormat.SPACE_dd_MMMM_yyyy,
            locale: DateLocale.DEFAULT,
          },
        ],
        addresses: [
          {
            addressTypeId: 36,
            addressLine1: "",
            // "nearestLandMark": "General Hospital",
            stateProvinceId: null,
            // "dateMovedIn": "24 June 2020",
            // "countryId": 29,
            dateFormat: "dd MMMM yyyy",
            locale: "en",
          },
          {
            addressTypeId: 36,
            addressLine1: "",
            // "nearestLandMark": "General Hospital",
            stateProvinceId: null,
            // "dateMovedIn": "24 June 2020",
            // "countryId": 29,
            dateFormat: "dd MMMM yyyy",
            locale: "en",
          },
        ],
        familyMembers: [
          {
            id: null,
            titleId: null,
            firstName: " ",
            middleName: "",
            lastName: "",
            relationshipId: null,
            maritalStatusId: null,
            mobileNumber: "",
            emailAddress: "",
          },
        ],
      },
      clientIdentifiers: [],
      loan: {
        commitment: 0,
        netpay: 0,
        clientId: clientId ?? "",
        productId: null,
        principal: 0,
        loanTermFrequency: 0,
        loanTermFrequencyType: "",
        numberOfRepayments: "",
        repaymentEvery: "",
        repaymentFrequencyType: "",
        interestRatePerPeriod: "",
        amortizationType: "",
        interestType: "",
        interestCalculationPeriodType: "",
        transactionProcessingStrategyId: "",
        charges: [],
        dateFormat: DateFormat.SPACE_dd_MMMM_yyyy,
        locale: DateLocale.DEFAULT,
        loanType: "individual",
        expectedDisbursementDate: null,
        submittedOnDate: null,
        loanOfficerId: storedReferral || "1457",
      },
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: yup.object({
      ...[
        {
          kyc: yup.object({
            ...(!clientId
              ? {
                  verify: yup.object({
                    token: yup
                      .string()
                      .label("OTP")
                      .trim()
                      .when("step", ([step], schema) =>
                        step === 1 ? schema.required() : schema.optional()
                      ),
                    type: yup
                      .string()
                      .label("Verification Type")
                      .oneOf(["bvn", "nin"])
                      .required(),
                  }),
                }
              : {
                  clients: yup.object().shape({
                    // bvn: yup.string()
                    //     .required("BVN is required")
                    //     .length(11, "BVN must be exactly 11 digits")
                    //     .matches(/^\d{11}$/, "BVN must be numeric"),

                    // nin: yup.string()
                    //     .required("NIN is required")
                    //     .length(11, "NIN must be exactly 11 digits")
                    //     .matches(/^\d{11}$/, "NIN must be numeric"),

                    titleId: yup.number().required("Title ID is required"),

                    firstname: yup
                      .string()
                      .required("First name is required")
                      .min(2, "First name must be at least 2 characters")
                      .max(50, "First name cannot exceed 50 characters"),

                    lastname: yup
                      .string()
                      .required("Last name is required")
                      .min(2, "Last name must be at least 2 characters")
                      .max(50, "Last name cannot exceed 50 characters"),

                    middlename: yup
                      .string()
                      .optional() // Assuming middle name is optional
                      .max(50, "Middle name cannot exceed 50 characters"),

                    dateOfBirth: yup
                      .date()
                      .required("Date of birth is required")
                      .max(minDate, "You must be at least 18 years old"),

                    genderId: yup.string().required("Gender is required"),

                    maritalStatusId: yup
                      .string()
                      .required("Marital status is required"),
                    emailAddress: yup
                      .string()
                      .required("Email is required")
                      .email("Email must be a valid email address"),
                  }),

                  clientBanks: yup
                    .array(
                      yup.object({
                        bankId: yup.string().label("Bank").required(),
                        accountnumber: yup
                          .string()
                          .label("Account Number")
                          .required(),
                        accountname: yup
                          .string()
                          .label("Account Name")
                          .required(),
                      })
                    )
                    .required(),
                  clientEmployers: yup
                    .array(
                      yup.object({
                        // workEmailVerified: yup.boolean().label("Work Email Verified").optional(),
                        // countryId: '',
                        staffId: yup.string().label("Staff ID").required(),
                        officeAddress: yup
                          .string()
                          .label("Office Address")
                          .optional(),
                        // employmentStatusId: "",
                        employmentSectorId: yup
                          .string()
                          .label("Sector")
                          .required(),
                        employmentDate: yup
                          .date()
                          .label("Employment Date")
                          .max(
                            nineMonthsAgo,
                            "Employee must have been in service for more than 9 months"
                          )
                          .required("Employment Date is required"),
                        salaryRangeId: yup
                          .string()
                          .label("Salary Range")
                          .required(),
                        employerId: yup.string().label("Employer").required(),
                        // employmentTypeId:yup.string().label("employmentTypeId").required(),
                      })
                    )
                    .required(),
                  addresses: yup
                    .array(
                      yup.object({
                        addressLine1: yup.string().label("Address").required(),
                        // addressTypeId: 36
                      })
                    )
                    .required(),
                  familyMembers: yup.array(
                    yup.object().shape({
                      titleId: yup.string().nullable(), // Allows titleId to be null

                      firstName: yup
                        .string()
                        .trim() // Removes leading and trailing whitespace
                        .required("First name is required")
                        .min(2, "First name must be at least 2 characters")
                        .max(50, "First name cannot exceed 50 characters"),

                      middleName: yup
                        .string()
                        .trim() // Removes leading and trailing whitespace
                        .max(50, "Middle name cannot exceed 50 characters")
                        .nullable(), // Allows middleName to be null or empty

                      lastName: yup
                        .string()
                        .trim() // Removes leading and trailing whitespace
                        .required("Last name is required")
                        .min(2, "Last name must be at least 2 characters")
                        .max(50, "Last name cannot exceed 50 characters"),

                      relationshipId: yup.number().nullable(), // Allows relationshipId to be null
                      // .required("Relationship ID is required"), // Optional based on your requirements
                      maritalStatusId: yup.string().nullable(), // Allows maritalStatusId to be null
                      // .required("Marital status is required"), // Optional based on your requirements

                      mobileNumber: yup.string(), // Assuming 10 digits

                      // emailAddress: yup
                      //   .string()
                      //   .required("Email address is required")
                      //   .email("Email address must be a valid email format"),
                    })
                  ),
                }),
            clients: yup.object({
              bvn: yup.string().label("BVN").length(11).required(),
              nin: yup.string().label("NIN").length(11).required(),
            }),
          }),
        },
        {
          clientIdentifiers: yup.array().of(
            yup.object({
              documentTypeId: yup
                .number()
                .required("Document Type is required"),
              // expiryDate: yup.date().required("Expiry Date is required"),
              attachment: yup.object({
                name: yup.string().required("File name is required"),
                fileName: yup.string().required("File name is required"),
                size: yup.number().required("File size is required"),
                type: yup.string().required("File type is required"),
                location: yup.string().required("File location is required"),
              }),
            })
          ),
        },
        {
          loan: yup.object({
            // commitment: yup.number().label("Commitment").required(),
            netpay: yup.number().label("Netpay").required().moreThan(50000),
            productId: yup.number().label("Product").required(),
            principal: yup.number().label("Principal").required(),
            // loanPurposeId:yup.number().label("Loan Purpose").required(),
            loanTermFrequency: yup
              .string()
              .label("Loan Term Frequency Type")
              .required(),
            loanTermFrequencyType: yup
              .string()
              .label("Loan Term Frequency Type")
              .required(),
            numberOfRepayments: yup
              .string()
              .label("Number Of Repayments")
              .required(),
            repaymentEvery: yup.string().label("Repayment Every").required(),
            repaymentFrequencyType: yup
              .string()
              .label("Repayment Frequency Type")
              .required(),
            interestRatePerPeriod: yup
              .string()
              .label("Interest Rate Per Period")
              .required(),
            amortizationType: yup
              .string()
              .label("Amortization Type")
              .required(),
            interestType: yup.string().label("Interest Type").required(),
            interestCalculationPeriodType: yup
              .string()
              .label("Interest Calculation Period Type")
              .required(),
            transactionProcessingStrategyId: yup
              .string()
              .label("Transaction Processing Strategy")
              .required(),
            charges: yup
              .array(yup.mixed().label("Charge").required())
              .required(),
            loanType: yup.string().label("Loan Type").required(),
            // expectedDisbursementDate: yup
            //   .date()
            //   .label("Expected Disbursement Date")
            //   .min(new Date())
            //   .required(),
            // submittedOnDate: yup
            //   .date()
            //   .label("Submitted On Date")
            //   .min(new Date())
            //   .required(),
          }),
        },
      ][stepper.step],
    }),
    onSubmit: async (values, helper) => {
      try {
        if (stepper.step === 0) {
          if (!clientId) {
            switch (values.kyc.verify.step) {
              case 0: {
                const data = await sendNewClientOtpMutation({
                  params: {
                    type: values.kyc.verify.type,
                    verificationNo: {
                      bvn: values.kyc.clients.bvn,
                      nin: values.kyc.clients.nin,
                    }[values.kyc.verify.type],
                  },
                }).unwrap();
                enqueueSnackbar(data?.message || "KYC OTP Verification Sent", {
                  variant: "success",
                });
                helper.setFieldValue("kyc.verify.message", data?.message || "");
                helper.setFieldValue("kyc.verify.step", 1);

                break;
              }

              case 1: {
                const data = await verifyNewClientOtpMutation({
                  params: {
                    token: values.kyc.verify.token,
                    type: values.kyc.verify.type,
                    verificationNo: {
                      bvn: values.kyc.clients.bvn,
                      nin: values.kyc.clients.nin,
                    }[values.kyc.verify.type],
                  },
                  body: {
                    nin: values.kyc.clients.nin,
                  },
                }).unwrap();
                enqueueSnackbar(
                  data?.message || "KYC OTP Verified Successfully!!",
                  {
                    variant: "success",
                  }
                );
                helper.setFieldValue("kyc.verify.message", data?.message || "");
                helper.setFieldValue("kyc.verify.step", 0);
                helper.resetForm();

                break;
              }
              default:
                break;
            }

            return;
          } else {
            const data = await createClientKycMutation({
              body: removeEmptyProperties({
                ...values.kyc,
                addresses: values.kyc.addresses.map((x) => ({
                  ...x,
                  addressTypeId: 36,
                })),
                verify: undefined,
                clients: {
                  ...values.kyc.clients,
                  locale: "en",
                  doYouWantToUpdateCustomerInfo: !!clientId,
                  active: true,
                  dateOfBirth: values.kyc.clients?.dateOfBirth
                    ? dfns.format(
                        values.kyc.clients?.dateOfBirth,
                        values.kyc.clients?.dateFormat
                      )
                    : undefined,
                  nin: null,
                  bvn: null,
                },
                clientEmployers: [
                  {
                    ...values.kyc.clientEmployers[0],
                    employmentDate: values.kyc.clientEmployers[0]
                      ?.employmentDate
                      ? dfns.format(
                          values.kyc.clientEmployers[0]?.employmentDate,
                          values.kyc.clientEmployers[0]?.dateFormat
                        )
                      : undefined,
                  },
                ],
              }),
            }).unwrap();
            enqueueSnackbar(
              "KYC verified successfully" ||
                data?.message ||
                (isEdit
                  ? "KYC Updated Successfully"
                  : "KYC Created Successfully"),
              { variant: "success" }
            );
          }
        }
        if (stepper.step === 1) {
          // if no doc attached
          if (
            !values.clientIdentifiers.length &&
            !clientKyc?.clientIdentifiers?.length
          ) {
            throw new Error("No Document found");
          }
          // if(allDocumentAlreadyupload){
          //   do nothing
          // } else do excuted whats below

          // if (!clientId) {
          const data = await addDocMutation({
            body: removeEmptyProperties({
              clientIdentifiers: values.clientIdentifiers,
              clients: {
                id: values.loan.clientId ?? values.kyc.clients?.id,
              },
            }),
          }).unwrap();
          enqueueSnackbar(
            data?.message ||
              (isEdit
                ? "Loan Updated Successfully"
                : "Loan Created Successfully"),
            { variant: "success" }
          );

          // }
        }

        if (stepper.step === 2) {
          // console.log(values.kyc.clientEmployers[0].employmentSectorId, {
          //   2826: 57,
          //   67: 55,
          //   68: 56
          // }[values.kyc.clientEmployers[0].employmentTypeId],)
          const data = await createLoanMutation({
            body: removeEmptyProperties({
              ...values.loan,
              // productId: {
              //   2826: 57,
              //   67: 55,
              //   68: 56
              // }[values.kyc.clientEmployers[0].employmentTypeId],
              activationChannelId: 58,
              netpay: parseFloat(values.loan?.netpay || 0),
              productId: 2,
              clientId: values.loan.clientId ?? values.kyc.clients?.id,
              numberOfRepayments: values.loan.loanTermFrequency,
              expectedDisbursementDate: values.loan?.expectedDisbursementDate
                ? dfns.format(
                    values.loan?.expectedDisbursementDate,
                    values.loan?.dateFormat
                  )
                : undefined,
              submittedOnDate: values.loan?.submittedOnDate
                ? dfns.format(
                    values.loan?.submittedOnDate,
                    values.loan?.dateFormat
                  )
                : undefined,
            }),
          }).unwrap();
          setLoanID(data?.data?.loanId);
          enqueueSnackbar(
            data?.message ||
              (isEdit
                ? "Loan Updated Successfully"
                : "Loan Created Successfully"),
            { variant: "success" }
          );
        }
        if (stepper.step == 3) {
          console.log(otpModal, token);

          if (otpModal && token.length > 5) {
            const data = await verifyClientOtpMutation({
              path: { mobileNo: clientKyc?.clients?.mobileNo },
              params: { token: token },
            }).unwrap();
            approvedLoanMutation({
              path: { id: loanId },
              params: { command: "draftApprove" },
            });

            enqueueSnackbar("verified" || data?.message, {
              variant: "success",
            });
          } else {
            sendLaf({ path: values.loan.clientId ?? values.kyc.clients?.id });
            setOtpModal(true);
            return;
          }
        }
        refreshKyc();
        stepper.next();
      } catch (error) {
        enqueueSnackbar(
          error?.message ||
            error?.data?.message ||
            (isEdit ? "Failed to Update Loan" : "Failed to Create Loan"),
          { variant: "error" }
        );
      }
    },
  });

  formik.errors;
  useEffect(() => {
    settoken("");
    formik.setFieldValue("kyc.verify.token", "");
  }, [otpModal]);

  // console.log(formik.errors);

  const loanTemplateQueryResult = LoanApi.useGetLoanTemplateQuery(
    useMemo(
      () => ({
        path: { id: clientId },
        params: {
          templateType: "individual",
          productId: 2,
          // productId:{
          //   2826: 57,
          //   67: 55,
          //   68: 56
          // }[formik.values.kyc.clientEmployers[0].employmentTypeId||clientKyc?.clientEmployers[0]?.employer?.parent?.clientType?.id],
        },
      }),
      [clientId, formik.values.kyc.clientEmployers]
    ),
    { skip: !clientId }
  );

  const loanTemplate = loanTemplateQueryResult.data?.data;

  const dataRef = useDataRef({
    formik,
    stepper,
    clientId,
    loanTemplate,
    clientKyc,
    loanId,
  });

  useEffect(() => {
    console.log(formik.errors);

    dataRef.current.formik.setValues((values) => ({
      ...values,
      kyc: {
        ...values.kyc,
        clients: clientKyc?.clients
          ? {
              ...values.kyc.clients,
              id: clientKyc?.clients?.id,
              bvn: clientKyc?.clients?.bvn,
              nin: clientKyc?.clients?.nin,
              titleId: clientKyc?.clients?.title?.id,
              firstname: clientKyc?.clients?.firstname,
              lastname: clientKyc?.clients?.lastname,
              middlename: clientKyc?.clients?.middlename,
              dateOfBirth: clientKyc?.clients?.dateOfBirth
                ? new Date(
                    clientKyc?.clients?.dateOfBirth?.[0],
                    clientKyc?.clients?.dateOfBirth?.[1] - 1,
                    clientKyc?.clients?.dateOfBirth?.[2]
                  )
                : null,
              genderId: clientKyc?.clients?.gender?.id,
              maritalStatusId: clientKyc?.clients?.maritalStatus?.id,
              emailAddress: clientKyc?.clients?.emailAddress,
            }
          : values.kyc.clients,
        clientBanks: clientKyc?.clientBanks?.length
          ? [
              {
                id: clientKyc?.clientBanks?.[0]?.id,
                bankId: clientKyc?.clientBanks?.[0]?.bank?.id,
                accountnumber: clientKyc?.clientBanks?.[0]?.accountnumber,
                accountname: clientKyc?.clientBanks?.[0]?.accountname,
                active: true,
              },
            ]
          : values.kyc.clientBanks,
        clientEmployers: clientKyc?.clientEmployers?.length
          ? [
              {
                id: clientKyc?.clientEmployers?.[0]?.id,
                workEmailVerified:
                  clientKyc?.clientEmployers?.[0]?.workEmailVerified,
                countryId: clientKyc?.clientEmployers?.[0]?.country?.id,
                staffId: clientKyc?.clientEmployers?.[0]?.staffId,
                officeAddress: clientKyc?.clientEmployers?.[0]?.officeAddress,
                // employmentStatusId:
                //   clientKyc?.clientEmployers?.[0]?.employmentStatus?.id,
                employmentSectorId:
                  clientKyc?.clientEmployers?.[0]?.employer?.sector?.id,
                employmentTypeId:
                  values.kyc.clientEmployers[0].employmentTypeId ||
                  clientKyc?.clientEmployers[0]?.employer?.parent?.clientType
                    ?.id,
                employmentDate: clientKyc?.clientEmployers?.[0]?.employmentDate
                  ? new Date(
                      clientKyc?.clientEmployers?.[0]?.employmentDate?.[0],
                      clientKyc?.clientEmployers?.[0]?.employmentDate?.[1] - 1,
                      clientKyc?.clientEmployers?.[0]?.employmentDate?.[2]
                    )
                  : null,
                salaryRangeId: clientKyc?.clientEmployers?.[0]?.salaryRange?.id,
                employerId: clientKyc?.clientEmployers?.[0]?.employer?.id,
                dateFormat:
                  clientKyc?.clientEmployers?.[0]?.dateFormat ??
                  DateFormat.SPACE_dd_MMMM_yyyy,
                locale:
                  clientKyc?.clientEmployers?.[0]?.locale ?? DateLocale.DEFAULT,
              },
            ]
          : values.kyc.clientEmployers,
        addresses: [
          {
            id: clientKyc?.addresses?.[0]?.id,
            addressId: clientKyc?.addresses?.[0]?.addressId,
            addressLine1: clientKyc?.addresses?.[0]?.addressLine1,
            addressTypeId: 36,
          },
          {
            id: clientKyc?.addresses?.[1]?.id,
            addressId: clientKyc?.addresses?.[1]?.addressId,
            addressLine1: clientKyc?.addresses?.[1]?.addressLine1,
            lgaId: clientKyc?.addresses?.[1]?.lgaId,
            stateProvinceId: clientKyc?.addresses?.[1]?.stateProvinceId,
            addressTypeId: 36,
          },
        ],
        familyMembers: [
          {
            id: clientKyc?.familyMembers?.[0]?.id,
            emailAddress: clientKyc?.familyMembers?.[0]?.emailAddress,
            firstName: clientKyc?.familyMembers?.[0]?.firstName,
            lastName: clientKyc?.familyMembers?.[0]?.lastName,
            middleName: clientKyc?.familyMembers?.[0]?.middleName,
            maritalStatusId: clientKyc?.familyMembers?.[0]?.maritalStatusId||null,
            mobileNumber: clientKyc?.familyMembers?.[0]?.mobileNumber,
            relationshipId: clientKyc?.familyMembers?.[0]?.relationshipId,
            titleId: clientKyc?.familyMembers?.[0]?.titleId || null,
          },
        ],
      },
      loan: {
        // commitment: 0,
        netpay:
          parseFloat(values.loan?.netpay || 0) ?? loanTemplate?.minimumNetPay,
        clientId: clientId ?? values.loan.clientId,
        productId: 2,
        // productId: {
        //   2826: 57,
        //   67: 55,
        //   68: 56
        // }[values.kyc.clientEmployers[0].employmentTypeId],
        principal: loanTemplate?.product?.principal ?? values.principal,
        loanTermFrequency:
          loanTemplate?.numberOfRepayments ?? values.loan?.loanTermFrequency,
        loanTermFrequencyType:
          loanTemplate?.repaymentFrequencyType?.id ??
          values.loan?.loanTermFrequencyType,
        numberOfRepayments:
          loanTemplate?.numberOfRepayments ?? values.loan?.numberOfRepayments,
        repaymentEvery:
          loanTemplate?.repaymentEvery ?? values.loan?.repaymentEvery,
        repaymentFrequencyType:
          loanTemplate?.repaymentFrequencyType?.id ??
          values.loan?.repaymentFrequencyType,
        interestRatePerPeriod:
          loanTemplate?.interestRatePerPeriod ??
          values.loan?.interestRatePerPeriod,
        amortizationType:
          loanTemplate?.amortizationType?.id ?? values.loan?.amortizationType,
        interestType:
          loanTemplate?.interestType?.id ?? values.loan?.interestType,
        interestCalculationPeriodType:
          loanTemplate?.interestCalculationPeriodType?.id ??
          values.loan?.interestType,
        transactionProcessingStrategyId:
          loanTemplate?.transactionProcessingStrategyId ??
          values.loan?.transactionProcessingStrategyId,
        charges: loanTemplate?.charges ?? values.loan?.charges,
        dateFormat: DateFormat.SPACE_dd_MMMM_yyyy,
        locale: DateLocale.DEFAULT,
        loanType: "individual",
        expectedDisbursementDate: new Date(),
        submittedOnDate: new Date(),
        loanOfficerId: parseInt(storedReferral || 1457),
      },
    }));
  }, [
    clientId,
    clientKyc?.addresses,
    clientKyc?.clientBanks,
    clientKyc?.clientEmployers,
    clientKyc?.familyMembers,
    clientKyc?.clients,
    dataRef,
    loanTemplate?.amortizationType?.id,
    loanTemplate?.charges,
    loanTemplate?.interestCalculationPeriodType?.id,
    loanTemplate?.interestRatePerPeriod,
    loanTemplate?.interestType?.id,
    loanTemplate?.minimumNetPay,
    loanTemplate?.numberOfRepayments,
    loanTemplate?.product?.principal,
    loanTemplate?.repaymentEvery,
    loanTemplate?.repaymentFrequencyType?.id,
    loanTemplate?.transactionProcessingStrategyId,
    storedReferral,
  ]);

  const isBlacklisted = false;

  const contentProps = { ...dataRef.current, dataRef };

  if (isBlacklisted) {
    return <LoanApplyBlacklisted />;
  }

  const steps = [
    {
      title: "KYC",
      description: "What category of loan are you apply for?",
      content: <LoanApplyKyc {...contentProps} />,
    },
    {
      title: "Supporting Document",
      content: <LoanDocumentUpload {...contentProps} />,
    },
    {
      title: "My Loan Calculator",
      content: <LoanApplyCalculator {...contentProps} />,
    },
    {
      title: "Loan Offer",
      content: <LoanApplyOffer {...contentProps} />,
    },
  ];

  const currentStep = steps[stepper.step];
  const isFirstStep = !stepper.step;
  const isLastStep = stepper.step === steps.length - 1;

  const isShowFooter = true;
  const isFullContent = false;

  if (stepper.step === 4) {
    return (
      <Suspense>
        <LoanApplySuccess {...contentProps} />
      </Suspense>
    );
  }

  const isLoading =
    clientKycDetailsQueryResult.isLoading || loanTemplateQueryResult.isLoading;
  const isError =
    clientKycDetailsQueryResult.isError || loanTemplateQueryResult.isError;

  function refetch() {
    if (clientKycDetailsQueryResult.isError) {
      clientKycDetailsQueryResult.refetch();
    }

    if (loanTemplateQueryResult.isError) {
      loanTemplateQueryResult.refetch();
    }
  }
  function refreshKyc() {
    clientKycDetailsQueryResult.refetch();
  }

  return (
    <LoadingUI loading={isLoading} error={isError} onRetry={refetch}>
      {() => (
        <>
          {!isFullContent ? (
            <div className="flex flex-col min-h-[90vh]">
              <div className="flex items-center gap-4 sticky top-0 bg-white p-4 mb-12">
                {steps.map(({ title }, index) => (
                  <div key={title} className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full ${
                        title != currentStep.title
                          ? "bg-primary-main text-primary-contrastText"
                          : "bg-slate-400"
                      } flex justify-center items-center`}
                    >
                      <Typography component="span">{index + 1}</Typography>
                    </div>
                    <Typography>{title}</Typography>
                  </div>
                ))}
              </div>

              <Suspense>
                {currentStep.content}
                <div className="!min-h-[10vh] flex-1" />

                {isShowFooter && (
                  <div className="flex items-center gap-4 z-10 sticky bottom-0 py-4 px-5 bg-white border border-[#353D411A]/[0.1] shadow-lg max-w-[1240px] m-auto w-full  ">
                    <div className="flex-1" />
                    {stepper.step == 3 && (
                      <div className="flex items-center">
                        <Checkbox
                          value={agreed}
                          onChange={(e) => setAgreed(!agreed)}
                        />
                        <div>
                          I hereby accept the terms and conditions contained in
                          this offer letter, by clicking on the checkbox.
                        </div>
                      </div>
                    )}
                    {!isFirstStep && stepper.step != 3 && (
                      <Button
                        onClick={() => stepper.previous()}
                        disabled={formik.isSubmitting}
                      >
                        Back
                      </Button>
                    )}
                    <LoadingButton
                      onClick={() => formik.handleSubmit()}
                      loading={formik.isSubmitting}
                      disabled={!agreed && stepper.step == 3}
                    >
                      {["Verify KYC", "Proceed", "Submit", "Accept"][
                        stepper.step
                      ] ?? "Proceed"}
                    </LoadingButton>
                  </div>
                )}
              </Suspense>
              {otpModal && (
                <Dialog open fullWidth>
                  <DialogContent>
                    <DialogContentText className="mb-8">
                      {formik.values.kyc.verify?.message}
                    </DialogContentText>
                    <Typography className="text-center">
                      Enter the OTP sent to you to verify the Loan Agreement.
                    </Typography>
                    <div className="flex items-center justify-center">
                      <OtpInput
                        value={formik.values.kyc.verify.token}
                        onChange={(token) => {
                          settoken(token);
                          formik
                            .setFieldValue("kyc.verify.token", token)
                            .then(() => {
                              if (token.length === 6) {
                                formik.handleSubmit();
                              }
                            });
                        }}
                        numInputs={6}
                        shouldAutoFocus
                        // inputType="password"
                        inputProps={{
                          style: { opacity: formik.isSubmitting ? 0.5 : 1 },
                          disabled: formik.isSubmitting,
                        }}
                      />
                    </div>
                    {/* {getFormikTextFieldError(formik, "kyc.verify.token") && (
                      <FormHelperText error>
                        {getFormikTextFieldHelperText(
                          formik,
                          "kyc.verify.token"
                        )}
                      </FormHelperText>
                    )} */}
                  </DialogContent>
                  <DialogActions>
                    <Button
                      color="error"
                      variant="outlined"
                      disabled={formik.isSubmitting}
                      onClick={() => {
                        setOtpModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <div className="flex-1" />
                    {/* <LoadingButton
                      loading={formik.isSubmitting}
                      loadingPosition="start"
                      onClick={formik.handleSubmit}
                    >
                      Verify
                    </LoadingButton> */}
                  </DialogActions>
                </Dialog>
              )}
            </div>
          ) : (
            <div>{currentStep.content}</div>
          )}
        </>
      )}
    </LoadingUI>
  );
}

export default LoanApply;

export const Component = LoanApply;

const LoanApplyKyc = lazy(() => import("features/loan/LoanApplyKyc"));
const LoanApplyCalculator = lazy(() =>
  import("features/loan/LoanApplyCalculator")
);
const LoanApplyOffer = lazy(() => import("features/loan/LoanApplyOffer"));
const LoanApplySuccess = lazy(() => import("features/loan/LoanApplySuccess"));
