import React, { useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import InflowTable from "features/loan/InflowTable";
import { Link, useParams } from "react-router-dom";
import { DASHBOARD } from "constants/urls";
import LoanApi from "apis/LoanApi";
import RepaymentScheduleTable from "features/loan/RepaymentSchedule";
import LoadingUI from "common/LoadingUI";
import { formatNumberToCurrency, parseDateToString } from "utils/number";

const ClientDetails = () => {
  const { loanId } = useParams();

  const loanQueryResult = LoanApi.useGetLoanQuery(
    useMemo(
      () => ({
        path: { id: loanId },
        params: {
          associations: "all",
        },
      }),
      [loanId]
    ),
    { skip: !loanId }
  );
  const data = loanQueryResult.data?.data;
  const repaymentSchedule = loanQueryResult.data?.data?.repaymentSchedule;
  return (
    <LoadingUI
      loading={loanQueryResult.isLoading || loanQueryResult.isLoading}
      error={loanQueryResult.isError || loanQueryResult.isError}
      onRetry={() => {
        if (loanQueryResult.isError) {
          loanQueryResult.refetch();
        }

        if (loanQueryResult.isError) {
          loanQueryResult.refetch();
        }
      }}
    >
      <Container maxWidth="lg">
        <div className="flex items-center gap-4 sticky top-0 bg-white p-4 mb-12">
          <Typography variant="h5" fontWeight={'bold'}>Client Details</Typography>
        </div>
        {/* <Paper  sx={{ p: 4 }}> */}
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link to={DASHBOARD}>Back</Link>
            </Grid>
            <Grid  border={"WindowFrame"} item xs={12} md={8}>
              <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h5" fontWeight={'bold'}>Loan Details</Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {[
                    {
                      label: "Loan Balance",
                      value: (
                        <>
                          {data?.currency?.displaySymbol}
                          {formatNumberToCurrency(
                            data?.summary?.totalOutstanding || 0
                          )}
                        </>
                      ),
                    },
                    { label: "Settlement Balance (Daily)", value: <></> },
                    { label: "Settlement Balance (Monthly)", value: <></> },
                    {
                      label: "Net Pay",
                      value: `${
                        data?.currency?.displaySymbol || ""
                      }${formatNumberToCurrency(data?.netPay)}`,
                    },
                    {
                      label: "Disbursement Date",
                      value: parseDateToString(
                        data?.timeline?.expectedDisbursementDate
                      ),
                    },
                    {
                      label: "Maturity Date",
                      value: parseDateToString(
                        data?.timeline?.expectedMaturityDate
                      ),
                    },
                    {
                      label: "Approved Amount",
                      value: `${data?.currency?.displaySymbol || ""}${
                        data?.status?.id === 10
                          ? 0
                          : formatNumberToCurrency(data?.approvedPrincipal)
                      }`,
                    },
                    {
                      label:
                        data?.status?.id < 300
                          ? "Expected Disbursed Amount:"
                          : "Disbursed Amount:",
                      value: `${
                        data?.currency?.displaySymbol || ""
                      }${formatNumberToCurrency(
                        data?.summary?.cdlPrincipalDisbursed
                        // (data?.summary?.principalDisbursed ||
                        //   data?.approvedPrincipal ||
                        //   0) - (data?.feeChargesAtDisbursementCharged || 0)
                      )}`,
                    },
                    {
                      label: "Monthly Repayment:",
                      value: `${
                        data?.repaymentSchedule?.currency?.displaySymbol
                      }
                  ${formatNumberToCurrency(
                    data?.repaymentSchedule?.periods?.[1]
                      ?.totalOriginalDueForPeriod || 0
                  )}`,
                    },
                    {
                      label: "Employer:",
                      value: (
                        <div className="flex items-center">
                          <Typography noWrap>
                            {data?.employerData?.name}
                          </Typography>
                        </div>
                      ),
                    },
                    {
                      label: "Employee Number:",
                      value: <>{data?.employeeNumber || "N/A"}</>,
                    },
                    {
                      label: "Customer ID",
                      value: data?.clientId,
                    },
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Typography color="textSecondary">
                        {item.label}
                      </Typography>
                      <Typography variant="body1">{item.value}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
              <Button variant="contained" color="primary">
                Generate Payment Link
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h5" fontWeight={'bold'}>Client Info</Typography>
                {/* {[
                  { label: "Name", value: "OGHENERONA ESTHER AKPOBOME" },
                  { label: "Customer Type", value: "Public Sector" },
                  { label: "Customer ID", value: "10106" },
                  { label: "External ID", value: "0000101062" },
                  { label: "Activation Date", value: "18 June 2024" },
                  { label: "Client Status", value: "Active" },
                ].map((item, index) => (
                  <Box key={index} sx={{ mt: 2 }}>
                    <Typography color="textSecondary">{item.label}</Typography>
                    <Typography variant="body1">{item.value}</Typography>
                  </Box>
                ))} */}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Repayment Schedule
              </Typography>
              <RepaymentScheduleTable  data={repaymentSchedule}/>
            </Grid>
          </Grid>
        {/* </Paper> */}
      </Container>
    </LoadingUI>
  );
};

export default ClientDetails;