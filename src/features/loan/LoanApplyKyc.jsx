import { LoadingButton } from "@mui/lab";
import {
  Typography,
  TextField,
  MenuItem,
  Chip,
  CircularProgress,
  Autocomplete,
  Dialog,
  DialogContent,
  DialogContentText,
  FormHelperText,
  DialogActions,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  InputAdornment,
} from "@mui/material";
import BankApi from "apis/BankApi";
import ClientApi from "apis/ClientApi";
import CodeApi from "apis/CodeApi";
import EmployerApi from "apis/EmployerApi";
import DatePicker from "common/DatePicker";
import NumberTextField from "common/NumberTextField";
import OtpInput from "common/OtpInput";
import { useSnackbar } from "notistack";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import Dropzone from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import { differenceInMonths, isBefore, subMonths } from "date-fns";

import {
  getFormikTextFieldError,
  getFormikTextFieldHelperText,
  getFormikTextFieldHelperTextAndErrorProps,
  getFormikTextFieldProps,
} from "utils/formik";
import { updateBVNCred, updateNINCred } from "configs/store-slicecred";

function LoanApplyEligibility({ dataRef, formik, clientKyc, clientId }) {
  const { enqueueSnackbar } = useSnackbar();

  const [employerQ, setEmployerQ] = useState("");

  const deferredEmployerQ = useDeferredValue(employerQ);

  const employmentSectorId =
    formik.values.kyc?.clientEmployers?.[0]?.employmentSectorId;

  const employmentTypeId =
    formik.values.kyc?.clientEmployers?.[0]?.employmentTypeId;

  const employmentSectorsQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 36 } }), [])
  );
  const titleQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 37 } }), [])
  );
  const genderQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 4 } }), [])
  );
  const maritalQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 30 } }), [])
  );
  const educationQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 38 } }), [])
  );

  const relationshipQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 31 } }), [])
  );

  const stateQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 27 } }), [])
  );

  const personalInfostateQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 27 } }), [])
  );

  const { data: LGAIdList } = CodeApi.useGetStateLGAQuery(
    useMemo(
      () => formik.values?.kyc?.addresses?.[1]?.stateProvinceId,
      // eslint-disable-next-line
      [formik.values?.kyc?.addresses?.[1]?.stateProvinceId]
    ),
    { skip: !formik.values?.kyc?.addresses?.[1]?.stateProvinceId }
  );

  const { data: personalInfoLGAIdList } = CodeApi.useGetStateLGAQuery(
    useMemo(
      () => formik.values?.kyc?.addresses?.[0]?.stateProvinceId,
      // eslint-disable-next-line
      [formik.values?.kyc?.addresses?.[0]?.stateProvinceId]
    ),
    { skip: !formik.values?.kyc?.addresses?.[0]?.stateProvinceId }
  );

  const employmentSectors = employmentSectorsQueryResult.data?.data;

  const employmentTypesQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 16 } }), [])
  );

  useEffect(() => {
    console.log(formik?.values?.kyc?.clientEmployers?.[0]?.employmentTypeId);

    if (formik?.values?.kyc?.clientEmployers?.[0]?.employmentTypeId) {
      if (
        formik?.values?.kyc?.clientEmployers?.[0]?.employmentTypeId === 67 ||
        formik?.values?.kyc?.clientEmployers?.[0]?.employmentTypeId === 68 ||
        formik?.values?.kyc?.clientEmployers?.[0]?.employmentTypeId === 2492
      ) {
        formik.setFieldValue("kyc.clientEmployers.0.employmentSectorId", 18);
      } else {
        formik.setFieldValue("kyc.clientEmployers.0.employmentSectorId", 17);
      }
    }
    // eslint-disable-next-line
  }, [formik?.values?.kyc?.clientEmployers?.[0]?.employmentTypeId]);

  const employmentTypes = employmentTypesQueryResult.data?.data;

  const sectorEmploymentTypes = employmentTypes;

  const employersQueryResult = EmployerApi.useGetEmployersQuery(
    useMemo(
      () => ({
        params: {
          selectOnlyParentEmployer: true,
          sectorId: employmentSectorId,
          employmentTypeId: employmentTypeId,
          name: deferredEmployerQ,
        },
      }),
      [deferredEmployerQ, employmentSectorId, employmentTypeId]
    ),
    { skip: !(employmentSectorId && deferredEmployerQ && employmentTypeId) }
  );

  const employers = employersQueryResult.data?.data?.pageItems;

  const normalizedEmployers = employers?.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  const salaryRangesQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 43 } }), [])
  );

  const salaryRanges = salaryRangesQueryResult.data?.data;

  const banksQueryResult = BankApi.useGetBanksQuery(
    useMemo(() => ({ params: { active: true } }), [])
  );

  const banks = banksQueryResult.data?.data;

  const normalizedBanks = useMemo(
    () =>
      banks?.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {}),
    [banks]
  );

  const selectedBankSortCode =
    normalizedBanks?.[formik.values.kyc.clientBanks?.[0]?.bankId]?.bankSortCode;
  const bankAccountNumber = formik.values.kyc.clientBanks?.[0]?.accountnumber;

  const verifyClientAccountNumberQueryResult =
    ClientApi.useVerifyClientAccountNumberQuery(
      useMemo(
        () => ({
          body: {
            account_number: bankAccountNumber,
            bank_code: selectedBankSortCode,
          },
        }),
        [bankAccountNumber, selectedBankSortCode]
      ),
      {
        skip: !(selectedBankSortCode && bankAccountNumber.length === 10),
      }
    );

  const accountNumberVerification =
    verifyClientAccountNumberQueryResult.data?.data;

  const verifyClientBVNQueryResult = ClientApi.useVerifyClientBVNQuery(
    useMemo(
      () => ({
        body: {
          bvn: formik.values.kyc.clients.bvn,
        },
      }),
      [formik.values.kyc.clients.bvn]
    ),
    {
      skip: !(formik.values.kyc.clients.bvn?.length === 11),
    }
  );

  const bvnVerification = verifyClientBVNQueryResult.data?.data;

  const verifyClientNINQueryResult = ClientApi.useVerifyClientNINQuery(
    useMemo(
      () => ({
        body: {
          nin: formik.values.kyc.clients.nin,
        },
      }),
      [formik.values.kyc.clients.nin]
    ),
    {
      skip: !(formik.values.kyc.clients.nin?.length === 11),
    }
  );

  const ninVerification = verifyClientNINQueryResult.data?.data;

  // Access state
  const dispatch = useDispatch(); // Dispatch actions
  useEffect(() => {
    dispatch(updateBVNCred(verifyClientBVNQueryResult.data?.data.data));
    dispatch(updateNINCred(verifyClientNINQueryResult.data?.data.data));
  }, [verifyClientBVNQueryResult, verifyClientNINQueryResult]);

  useEffect(() => {
    console.log(clientKyc);

    if (clientKyc?.clientEmployers?.[0]?.employer?.name) {
      setEmployerQ(clientKyc?.clientEmployers?.[0]?.employer?.name);
    }
  }, [clientKyc?.clientEmployers]);

  useEffect(() => {
    if (accountNumberVerification) {
      dataRef.current.formik.setValues((values) => {
        return {
          ...values,
          kyc: {
            ...values.kyc,
            clientBanks: [
              {
                ...values.kyc.clientBanks?.[0],
                accountname: accountNumberVerification?.data?.account_name,
              },
            ],
          },
        };
      });
    }
  }, [accountNumberVerification, dataRef]);
  useEffect(() => {
    formik.setFieldValue("kyc.verify.token", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.kyc.verify?.step]);

  const handleDateChange = (value) => {
    const currentDate = new Date();
    const selectedDate = new Date(value);

    // Calculate the difference in months
    const monthDifference = differenceInMonths(currentDate, selectedDate);
    console.log(monthDifference);

    const nineMonthsAgo = subMonths(new Date(), 9);

    if (isBefore(value, nineMonthsAgo)) {
      formik.setFieldValue("kyc.clientEmployers.0.employmentDate", value);
    } else {
      formik.setFieldError(
        "kyc.clientEmployers.0.employmentDate",
        "Employee must have been in service for more than 9 months"
      );
    }
  };

  return (
    <>
      <div className="flex gap-4 mb-8">
        {!clientId ? (
          <div className="max-w-80">
            <Typography variant="h6" className="font-bold" gutterBottom>
              Fill Out the Form to Apply for a Loan
            </Typography>
            <Typography variant="body2" className="text-text-secondary">
              Complete the KYC process to verify your eligibility for the loan.
            </Typography>
          </div>
        ) : (
          <div className="max-w-80">
            <Typography variant="h6" className="font-bold" gutterBottom>
              Add your Salary account details
            </Typography>
            <Typography variant="body2" className="text-text-secondary">
              We need your bank account details to generate your bank statement
              and verify your eligibility.
            </Typography>
          </div>
        )}
        <div className="flex-1" />
        <div></div>
      </div>

      <div className="space-y-8 max-w-3xl">
        <div>
          {!clientId ? (
            <Typography className="font-bold mb-2">Fill the form</Typography>
          ) : (
            <Typography className="font-bold mb-2">Bank details</Typography>
          )}
          <div className="grid grid-cols-2 gap-4">
            {!clientId ? (
              <>
                <div>
                  <NumberTextField
                    freeSolo
                    fullWidth
                    label="Bank Verification Number (BVN)"
                    {...getFormikTextFieldProps(formik, "kyc.clients.bvn")}
                    {...(clientId && clientKyc?.clients?.bvn
                      ? { disabled: true, onChange: () => {} }
                      : {})}
                  />
                  {verifyClientBVNQueryResult.isFetching ? (
                    <div className="flex items-center gap-1 mb-2">
                      <CircularProgress size={12} thickness={8} />
                      <Typography
                        variant="body2"
                        color="primary"
                        className="font-bold"
                      >
                        Validating BVN
                      </Typography>
                    </div>
                  ) : bvnVerification &&
                    formik.values.kyc?.clients?.bvn?.length == 11 ? (
                    bvnVerification?.status ? (
                      <Chip
                        label={`${bvnVerification?.data?.first_name} ${bvnVerification?.data?.middle_name} ${bvnVerification?.data?.last_name}`}
                        variant="soft"
                        color="info"
                        size="small"
                        className="mt-2"
                      />
                    ) : (
                      <Chip
                        label={
                          bvnVerification?.message === "Request Unsuccessful"
                            ? "BVN Not found"
                            : bvnVerification?.message
                        }
                        variant="soft"
                        color="error"
                        size="small"
                        className="mt-2"
                      />
                    )
                  ) : null}
                </div>
                <div>
                  <NumberTextField
                    freeSolo
                    fullWidth
                    label="National Identification Number (NIN)"
                    {...getFormikTextFieldProps(formik, "kyc.clients.nin")}
                    {...(clientId && clientKyc?.clients?.nin
                      ? { disabled: true, onChange: () => {} }
                      : {})}
                  />
                  {verifyClientNINQueryResult.isFetching ? (
                    <div className="flex items-center gap-1 mb-2">
                      <CircularProgress size={12} thickness={8} />
                      <Typography
                        variant="body2"
                        color="primary"
                        className="font-bold"
                      >
                        Validating NIN
                      </Typography>
                    </div>
                  ) : ninVerification &&
                    formik.values.kyc?.clients?.nin?.length == 11 ? (
                    ninVerification?.status != "failed" ? (
                      <Chip
                        label={`${ninVerification?.data?.first_name} ${ninVerification?.data?.middle_name} ${ninVerification?.data?.surname}`}
                        variant="soft"
                        color="info"
                        size="small"
                        className="mt-2"
                      />
                    ) : (
                      <Chip
                        label={ninVerification?.message || "Invalid NIN"}
                        variant="soft"
                        color="error"
                        size="small"
                        className="mt-2"
                      />
                    )
                  ) : null}
                </div>

                <div className="col-span-2">
                  {/* <FormControl>
                    <FormLabel>Verify with</FormLabel>
                    <RadioGroup
                      row
                      value={formik.values.kyc?.verify?.type}
                      onChange={(e) => {
                        formik.setFieldValue("kyc.verify.type", e.target.value);
                      }}
                    >
                      <FormControlLabel
                        value="bvn"
                        control={<Radio />}
                        label="BVN"
                      />
                     
                    </RadioGroup>
                  </FormControl> */}
                </div>
              </>
            ) : (
              <>
                <TextField
                  fullWidth
                  label="Select your bank"
                  select
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clientBanks.0.bankId"
                  )}
                >
                  {banks?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <div>
                  <TextField
                    fullWidth
                    label="Account Number"
                    {...getFormikTextFieldProps(
                      formik,
                      "kyc.clientBanks.0.accountnumber"
                    )}
                  />
                  {verifyClientAccountNumberQueryResult.isFetching ? (
                    <div className="flex items-center gap-1 mb-2">
                      <CircularProgress size={12} thickness={8} />
                      <Typography
                        variant="body2"
                        color="primary"
                        className="font-bold"
                      >
                        Resolving Account Name
                      </Typography>
                    </div>
                  ) : accountNumberVerification &&
                    formik.values.kyc.clientBanks?.[0]?.accountnumber?.length ==
                      10 ? (
                    accountNumberVerification?.status ? (
                      <Chip
                        label={accountNumberVerification?.data?.account_name}
                        variant="soft"
                        color="info"
                        size="small"
                        className="mt-2"
                      />
                    ) : (
                      <Typography variant="body2" color="error" gutterBottom>
                        {accountNumberVerification?.message ||
                          "Invalid Account Number"}
                      </Typography>
                    )
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>

        {!!clientId && (
          <>
            <div>
              <Typography className="font-bold mb-2">
                Personal information
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  fullWidth
                  label="Title"
                  select
                  {...getFormikTextFieldProps(formik, "kyc.clients.titleId")}
                >
                  {titleQueryResult?.data?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  disabled={clientKyc.clients.firstname}
                  label="First Name"
                  {...getFormikTextFieldProps(formik, "kyc.clients.firstname")}
                />

                <TextField
                  fullWidth
                  label="Last Name"
                  disabled={clientKyc.clients.lastname}
                  {...getFormikTextFieldProps(formik, "kyc.clients.lastname")}
                />
                <TextField
                  fullWidth
                  // disabled={clientKyc.clients.middlename}
                  label="Middle Name"
                  {...getFormikTextFieldProps(formik, "kyc.clients.middlename")}
                />

                <DatePicker
                  fullWidth
                  label="Date of Birth"
                  disabled={clientKyc.clients.dateOfBirth}
                  value={formik.values.kyc.clients?.dateOfBirth}
                  onChange={(value) => {
                    formik.setFieldValue("kyc.clients.dateOfBirth", value);
                  }}
                  disableFuture
                  slotProps={{
                    textField: {
                      ...getFormikTextFieldHelperTextAndErrorProps(
                        formik,
                        "kyc.clients.dateOfBirth"
                      ),
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Gender"
                  select
                  {...getFormikTextFieldProps(formik, "kyc.clients.genderId")}
                >
                  {genderQueryResult?.data?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Marital status"
                  select
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clients.maritalStatusId"
                  )}
                >
                  {maritalQueryResult?.data?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  label="Email address"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clients.emailAddress"
                  )}
                />
                 <TextField
                  fullWidth
                  label="Residential address"
                  className=""
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.addresses.0.addressLine1"
                  )}
                />
                
               
                <TextField
                  fullWidth
                  label="Residential state"
                  select
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.addresses.0.stateProvinceId"
                  )}
                >
                  {personalInfostateQueryResult.data?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Residential LGA"
                  select
                  {...getFormikTextFieldProps(formik, "kyc.addresses.0.lgaId")}
                >
                  {personalInfoLGAIdList?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>

            <div>
              <Typography className="font-bold mb-2">
                Next of Kin Details
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  fullWidth
                  label="First Name"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.familyMembers.0.firstName"
                  )}
                />

                <TextField
                  fullWidth
                  label="Last Name"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.familyMembers.0.lastName"
                  )}
                />
                <TextField
                  fullWidth
                  label="Middle Name"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.familyMembers.0.middleName"
                  )}
                />

                <TextField
                  fullWidth
                  label="Relationship"
                  select
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.familyMembers.0.relationshipId"
                  )}
                >
                  {relationshipQueryResult?.data?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  label="Phone Number"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.familyMembers.0.mobileNumber"
                  )}
                />

                <TextField
                  fullWidth
                  label="Residential state"
                  select
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.addresses.1.stateProvinceId"
                  )}
                >
                  {stateQueryResult.data?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  label="Residential LGA"
                  select
                  {...getFormikTextFieldProps(formik, "kyc.addresses.1.lgaId")}
                >
                  {LGAIdList?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>

                {/* <TextField
          fullWidth
          label="LGA"
          select
          {...getFormikTextFieldProps(formik, "kyc.nextOfKin.relationshipId")}
        >
          {[]?.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField> */}

                <TextField
                  fullWidth
                  label="Residential Address"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.addresses.1.addressLine1"
                  )}
                />

                {/* <TextField
                  fullWidth
                  label=" Email Address"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.familyMembers.1.emailAddress"
                  )}
                /> */}
              </div>
            </div>

            <div>
              <Typography className="font-bold mb-2">
                Verify employment details
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  fullWidth
                  label="Employment Type"
                  select
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clientEmployers.0.employmentTypeId"
                  )}
                >
                  {sectorEmploymentTypes?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Employment sector"
                  select
                  disabled
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clientEmployers.0.employmentSectorId"
                  )}
                >
                  {employmentSectors?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <Autocomplete
                  className="col-span-2"
                  freeSolo
                  isOptionEqualToValue={(option, value) => {
                    return option?.id === value || option?.id === value?.id;
                  }}
                  inputValue={employerQ}
                  onInputChange={(_, value) => setEmployerQ(value)}
                  value={formik.values.organizationId || null}
                  onChange={(_, value) => {
                    formik.setFieldValue(
                      "kyc.clientEmployers.0.employerId",
                      value?.id || ""
                    );
                  }}
                  getOptionLabel={(option) => {
                    const pOption = normalizedEmployers?.[option?.id || option];
                    return pOption?.name || "";
                  }}
                  filterOptions={(x) => x}
                  options={employers || []}
                  loading={normalizedEmployers?.isFetching}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...getFormikTextFieldHelperTextAndErrorProps(
                        formik,
                        "kyc.clientEmployers.0.employerId"
                      )}
                      label="Search Employer's Name"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {employersQueryResult.isFetching ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                    />
                  )}
                />
                <DatePicker
                  fullWidth
                  label="Date of Employment"
                  value={formik.values.kyc.clientEmployers?.[0]?.employmentDate}
                  onChange={(value) => {
                    formik.setFieldValue(
                      "kyc.clientEmployers.0.employmentDate",
                      value
                    );
                  }}
                  disableFuture
                  slotProps={{
                    textField: {
                      ...getFormikTextFieldHelperTextAndErrorProps(
                        formik,
                        "kyc.clientEmployers.0.employmentDate"
                      ),
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Staff ID (IPPIS/Oracle Number)"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clientEmployers.0.staffId"
                  )}
                />

                <TextField
                  fullWidth
                  label="Salary Range"
                  select
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clientEmployers.0.salaryRangeId"
                  )}
                >
                  {salaryRanges?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Office Address"
                  className="col-span-2"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clientEmployers.0.officeAddress"
                  )}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {formik.values.kyc.verify?.step === 1 && (
        <Dialog open fullWidth>
          <DialogContent>
            <DialogContentText className="mb-8">
              {formik.values.kyc.verify?.message}
            </DialogContentText>
            <div className="flex items-center justify-center">
              <OtpInput
                value={formik.values.kyc.verify.token}
                onChange={(token) => {
                  formik.setFieldValue("kyc.verify.token", token).then(() => {
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
            {getFormikTextFieldError(formik, "kyc.verify.token") && (
              <FormHelperText error>
                {getFormikTextFieldHelperText(formik, "kyc.verify.token")}
              </FormHelperText>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              color="error"
              variant="outlined"
              disabled={formik.isSubmitting}
              onClick={() => formik.setFieldValue("kyc.verify.step", 0)}
            >
              Cancel
            </Button>
            <div className="flex-1" />
            <LoadingButton
              loading={formik.isSubmitting}
              loadingPosition="start"
              onClick={formik.handleSubmit}
            >
              Verify
            </LoadingButton>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default LoanApplyEligibility;
