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
import {
  getFormikTextFieldError,
  getFormikTextFieldHelperText,
  getFormikTextFieldHelperTextAndErrorProps,
  getFormikTextFieldProps,
} from "utils/formik";

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

  const employmentSectors = employmentSectorsQueryResult.data?.data;

  const employmentTypesQueryResult = CodeApi.useGetCodeValuesInfoQuery(
    useMemo(() => ({ path: { id: 16 } }), [])
  );

  const employmentTypes = employmentTypesQueryResult.data?.data;

  const sectorEmploymentTypes = employmentTypes;

  const employersQueryResult = EmployerApi.useGetEmployersQuery(
    useMemo(
      () => ({
        params: {
          selectOnlyParentEmployer: true,
          sectorId: employmentSectorId,
          name: deferredEmployerQ,
        },
      }),
      [deferredEmployerQ, employmentSectorId]
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

  useEffect(() => {
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

  return (
    <>
      <div className="flex gap-4 mb-8">
        <div className="max-w-80">
          <Typography variant="h6" className="font-bold" gutterBottom>
            Add your Salary account details
          </Typography>
          <Typography variant="body2" className="text-text-secondary">
            We need your bank account details to generate your bank statement
            and verify your eligibility.
          </Typography>
        </div>
        <div className="flex-1" />
        <div></div>
      </div>

      <div className="space-y-8 max-w-3xl">
        <div>
          <Typography className="font-bold mb-2">Bank details</Typography>
          <div className="grid grid-cols-2 gap-4">
            {formik.&& <div>
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
                    label={bvnVerification?.message || "Invalid BVN"}
                    variant="soft"
                    color="error"
                    size="small"
                    className="mt-2"
                  />
                )
              ) : null}
            </div>}
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
                ninVerification?.status ? (
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

            {!clientId ? (
              <>
                <div className="col-span-2">
                  <FormControl>
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
                      <FormControlLabel
                        value="nin"
                        control={<Radio />}
                        label="NIN"
                      />
                    </RadioGroup>
                  </FormControl>
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
                Verify employment details
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  fullWidth
                  label="Employment sector"
                  select
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
                  label="Staff ID"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.clientEmployers.0.staffId"
                  )}
                />
                <Dropzone
                  multiple
                  maxSize={1024 * 1024 * 2}
                  minSize={1}
                  accept={{
                    "image/*": [".png", ".jpg", ".jpeg"],
                    "application/pdf": [],
                  }}
                  onDropRejected={async (files) => {
                    try {
                      for (const fileR of files) {
                        for (const error of fileR.errors) {
                          enqueueSnackbar(
                            error?.message || "Failed to attach file",
                            {
                              variant: "error",
                            }
                          );
                        }
                      }
                    } catch (error) {}
                  }}
                  onDropAccepted={(files) =>
                    formik.setFieldValue("assets_ids", [
                      ...formik.values.assets_ids,
                      ...files,
                      // ...files.map((url) => ({ name: url.name, url })),
                    ])
                  }
                >
                  {({ getRootProps, getInputProps, open }) => (
                    <div>
                      <input {...getInputProps()} />
                      <TextField
                        {...getRootProps({
                          label: "Proof of Employment",
                          fullWidth: true,
                          margin: "normal",
                          disableRipple: true,
                          onClick: open,
                          className: "flex items-center w-full",
                          InputProps: {
                            readOnly: true,
                            endAdornment: (
                              <InputAdornment position="end">
                                <Chip
                                  color="default"
                                  label="Upload"
                                  className="bg-slate-700 text-white"
                                />
                              </InputAdornment>
                            ),
                          },
                        })}
                      />
                    </div>
                  )}
                </Dropzone>
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

            <div>
              <Typography className="font-bold mb-2">Other details</Typography>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  fullWidth
                  label="Address"
                  className="col-span-2"
                  {...getFormikTextFieldProps(
                    formik,
                    "kyc.addresses.0.addressLine1"
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
