import {
  Typography,
  Slider,
  TextField,
  Link as MuiLink,
  ButtonBase,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import LoanApi from "apis/LoanApi";
import currencyImage from "assets/imgs/naira-nigeria-currency.png";
import CurrencyTypography from "common/CurrencyTypography";
import DateLocale from "enums/DateLocale";
import { useMemo } from "react";
import LoanRepaymentScheduleDialog from "./LoanRepaymentScheduleDialog";
import { getFormikTextFieldProps } from "utils/formik";
import CurrencyTextField from "common/CurrencyTextField";
import * as dfns from "date-fns";
import currencyjs from "currency.js";
import Currency from "enums/Currency";

function LoanApplyCalculator({ formik, loanTemplate }) {
  const loanScheduleQueryResult = LoanApi.useCalculateLoanScheduleQuery(
    useMemo(
      () => ({
        body: {
          productId: formik.values.loan.productId,
          principal: formik.values.loan.principal,
          netpay: formik.values.loan.netpay,
          tenor: formik.values.loan.loanTermFrequency,
          locale: DateLocale.DEFAULT,
        },
      }),
      [
        formik.values.loan.loanTermFrequency,
        formik.values.loan.netpay,
        formik.values.loan.principal,
        formik.values.loan.productId,
      ]
    ),
    {
      skip: !(
        formik.values.loan.netpay &&
        formik.values.loan.loanTermFrequency &&
        formik.values.loan.principal &&
        formik.values.loan.productId
      ),
    }
  );

  const loanRepaymentSchedule = loanScheduleQueryResult.data?.data;

  const firstRepayment = loanRepaymentSchedule?.periods?.[1];
  const lastRepayment =
    loanRepaymentSchedule?.periods?.[
      loanRepaymentSchedule?.periods?.length - 1
    ];
  const loanPurpose = [
    {
      id: 81,
      name: "Personal",
      position: 0,
      active: true,
      mandatory: false,
    },
    {
      id: 82,
      name: "Schooling",
      position: 1,
      active: true,
      mandatory: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-8">
        <div className="space-y-2">
          <Typography variant="h6" className="font-bold">
            Choose a loan amount
          </Typography>
          <CurrencyTypography variant="h5" className="font-bold">
            {formik.values.loan.principal}
          </CurrencyTypography>
          <div>
            <Slider
              step={1000}
              min={loanTemplate?.product?.minPrincipal}
              max={loanTemplate?.product?.maxPrincipal}
              value={formik.values.loan.principal}
              onChange={(_, value) =>
                formik.setFieldValue("loan.principal", value)
              }
            />
            <div className="flex justify-between items-center">
              <CurrencyTypography
                variant="body2"
                className="text-text-secondary"
              >
                {loanTemplate?.product?.minPrincipal}
              </CurrencyTypography>
              <CurrencyTypography
                variant="body2"
                className="text-text-secondary"
              >
                {loanTemplate?.product?.maxPrincipal}
              </CurrencyTypography>
            </div>
          </div>
          {/* Input field for loan amount */}
          <TextField
            fullWidth
            label="Enter Loan Amount"
            type="number"
            value={formik.values.loan.principal}
            onChange={(e) =>
              formik.setFieldValue("loan.principal", e.target.value)
            }
            inputProps={{
              min: loanTemplate?.product?.minPrincipal,
              max: loanTemplate?.product?.maxPrincipal,
              step: 1000,
            }}
          />
        </div>

        <div>
          <Typography variant="h6" className="font-bold">
            Duration: {formik.values.loan.loanTermFrequency} Months
          </Typography>
          <div>
            <Slider
              step={1}
              min={loanTemplate?.product?.minNumberOfRepayments}
              max={loanTemplate?.product?.maxNumberOfRepayments}
              value={formik.values.loan.loanTermFrequency}
              onChange={(_, value) =>
                formik.setFieldValue("loan.loanTermFrequency", value)
              }
            />
            <div className="flex justify-between items-center">
              <Typography variant="body2" className="text-text-secondary">
                {loanTemplate?.product?.minNumberOfRepayments} month(s)
              </Typography>
              <Typography variant="body2" className="text-text-secondary">
                {loanTemplate?.product?.maxNumberOfRepayments} months
              </Typography>
            </div>
          </div>
          {/* Input field for loan term frequency */}
          <TextField
            fullWidth
            label="Enter Loan Duration (Months)"
            type="number"
            value={formik.values.loan.loanTermFrequency}
            onChange={(e) =>
              formik.setFieldValue("loan.loanTermFrequency", e.target.value)
            }
            inputProps={{
              min: loanTemplate?.product?.minNumberOfRepayments,
              max: loanTemplate?.product?.maxNumberOfRepayments,
              step: 1,
            }}
          />
        </div>

        <div>
          <CurrencyTextField
            label="Net Pay"
            fullWidth
            {...getFormikTextFieldProps(
              formik,
              "loan.netpay",
              loanRepaymentSchedule?.decision
                ? `${
                    loanRepaymentSchedule?.decision
                  }. Suggested Amount: ${currencyjs(
                    loanRepaymentSchedule?.suggestedAmount ?? 0,
                    { symbol: Currency.NGN.symbol }
                  ).format()}`
                : undefined
            )}
          />
        </div>

        <TextField
          fullWidth
          label="Loan Purpose"
          select
          {...getFormikTextFieldProps(formik, "loan.loanPurposeId")}
        >
          {loanPurpose.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <div className="space-y-4">
          {[
            {
              label: "Loan Amount",
              value: formik.values.loan.principal,
              type: "currency",
            },
            {
              label: "Loan Tenor",
              value: `${formik.values.loan.loanTermFrequency} month(s)`,
            },
            {
              label: "Monthly repayment",
              value: firstRepayment?.principalDue,
              type: "currency",
            },
            {
              label: "Total Interest",
              value: loanRepaymentSchedule?.totalInterestCharged,
              type: "currency",
            },
            {
              label: "First Due Date",
              value: firstRepayment?.dueDate?.join("-"),
            },
            {
              label: "Maturity Date",
              value: lastRepayment?.dueDate?.join("-"),
            },
            {
              label: "Repayment Schedule",
              value: (
                <LoanRepaymentScheduleDialog schedule={loanRepaymentSchedule}>
                  {({ toggleOpen }) => (
                    <div className="flex items-center gap-1">
                      {loanScheduleQueryResult.isFetching && (
                        <CircularProgress size={12} thickness={8} />
                      )}
                      <ButtonBase
                        component={MuiLink}
                        disableRipple
                        disabled={!loanRepaymentSchedule}
                        className="font-bold underline"
                        classes={{ disabled: "text-text-secondary" }}
                        onClick={() => {
                          if (!loanScheduleQueryResult.isFetching) {
                            toggleOpen();
                          }
                        }}
                      >
                        View Schedule
                      </ButtonBase>
                    </div>
                  )}
                </LoanRepaymentScheduleDialog>
              ),
              type: "custom",
            },
          ].map(({ label, value, type }) => {
            return (
              <div key={label} className="flex gap-2">
                <Typography variant="body2" className="font-bold">
                  {label}
                </Typography>
                <div className="flex-1" />
                {type === "currency" ? (
                  <CurrencyTypography className="text-text-secondary text-right">
                    {value}
                  </CurrencyTypography>
                ) : type === "custom" ? (
                  value
                ) : (
                  <Typography className="text-text-secondary text-right">
                    {value}
                  </Typography>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-2">
          <img src={currencyImage} alt="coin" />
          <div>
            <Typography className="font-bold">
              Your Monthly Repayment is
            </Typography>
            <CurrencyTypography variant="h6" className="font-bold">
              {firstRepayment?.principalDue +
                (formik.values.loan.principal * 3.45) / 100}
            </CurrencyTypography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanApplyCalculator;
