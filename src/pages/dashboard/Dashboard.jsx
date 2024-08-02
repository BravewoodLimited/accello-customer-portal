import {
  Divider,
  Paper,
  Typography,
  Link as MuiLink,
  Button,
} from "@mui/material";
import useTable from "hooks/useTable";
import LoanTable, { columns as loanColumns } from "features/loan/LoanTable";
import LoanTransactionTable, {
  columns as transactionColumns,
} from "features/loan/LoanTransactionTable";
import CurrencyTypography from "common/CurrencyTypography";
import { Fragment, useMemo, useState } from "react";
import LoanApi from "apis/LoanApi";
import useAuthUser from "hooks/useAuthUser";
import usePagination from "hooks/usePagination";
import LoadingUI from "common/LoadingUI";
import { Navigate } from "react-router-dom";
import { LOAN_APPLY } from "constants/urls";

import AccountDetailsModal from "./AccountDetailsModal";
import PaystackModal from "./PaystackModal";
import PaymentOptionModal from "./PaymentOptionModal";



function Dashboard() {
  const authUser = useAuthUser();
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [paystackModalOpen, setPaystackModalOpen] = useState(false);
  const [paymentOptionModalOpen, setPaymentOptionModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [pagination, setPagination, { offset, limit }] = usePagination();

  const loansQueryResult = LoanApi.useGetLoansQuery(
    useMemo(
      () => ({
        params: {
          clientId: authUser?.clientId,
          associations: "all",
          offset,
          limit,
        },
      }),
      [authUser?.clientId, limit, offset]
    ),
    { skip: !authUser?.clientId }
  );

  const loansSingleQueryResult = LoanApi.useGetLoansQuery(
    useMemo(
      () => ({
        params: {
          clientId: authUser?.clientId,
          offset: 0,
          limit: 1,
        },
      }),
      [authUser?.clientId]
    ),
    { skip: !authUser?.clientId }
  );

  const loansSingle = loansSingleQueryResult?.data?.data?.pageItems?.[0];

  const loanQueryResult = LoanApi.useGetLoanQuery(
    useMemo(
      () => ({
        path: { id: loansSingle?.id },
        params: {
          associations: "all",
        },
      }),
      [loansSingle?.id]
    ),
    { skip: !loansSingle }
  );

  const activeLoan = loanQueryResult.data?.data;

  // const activeLoanTransactionsQueryResult = LoanApi.useGetLoanTransactionsQuery(
  //   useMemo(() => ({ params: { id: activeLoan?.id } }), [activeLoan?.id]),
  //   { skip: !activeLoan?.id }
  // );

  const loanTableInstance = useTable({
    columns: loanColumns,
    data: loansQueryResult?.data?.data?.pageItems,
    manualPagination: true,
    pageCount: loansQueryResult?.data?.data?.totalFilteredRecords
      ? Math.ceil(
          loansQueryResult?.data?.data?.totalFilteredRecords /
            pagination?.pageSize
        )
      : -1,
    state: { pagination },
    onPaginationChange: setPagination,
  });

  const loanTransactionTableInstance = useTable({
    columns: transactionColumns,
    data: activeLoan?.transactions,
  });

  if (!authUser?.clientId) {
    return <Navigate to={LOAN_APPLY} />;
  }

  const handleAccountModalOpen = (row) => {
    setSelectedRow(row);
    setPaymentOptionModalOpen(true);
  };

  const handlePaymentOptionClose = () => {
    setPaymentOptionModalOpen(false);
  };

  const handlePaystack = () => {
    setPaystackModalOpen(true);
    setPaymentOptionModalOpen(false);
  };

  const handleAccount = () => {
    setAccountModalOpen(true);
    setPaymentOptionModalOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 bg-white p-4 mb-12">
        <Typography variant="h6" className="font-bold">
          Dashboard
        </Typography>
      </div>
      <LoadingUI
        loading={loansSingleQueryResult.isLoading || loanQueryResult.isLoading}
        error={loansSingleQueryResult.isError || loanQueryResult.isError}
        onRetry={() => {
          if (loansSingleQueryResult.isError) {
            loansSingleQueryResult.refetch();
          }

          if (loanQueryResult.isError) {
            loanQueryResult.refetch();
          }
        }}
      >
        {() => (
          <>
            <div className="flex flex-wrap gap-4 md:gap-8 mb-8">
              <div className="w-full md:w-1/3 space-y-4">
                <Typography variant="h5" className="font-bold">
                  Hi {authUser?.displayName},
                </Typography>
                {activeLoan ? (
                  <>
                    <Paper className="p-4 md:p-8">
                      <div className="grid grid-cols-2">
                        {[
                          {
                            label: "Loan amount",
                            value: activeLoan?.proposedPrincipal,
                            type: "currency",
                          },
                          {
                            label: "Tenor",
                            value: `${activeLoan?.termFrequency} month(s)`,
                          },
                          {
                            label: "Monthly repayment",
                            value:
                              activeLoan?.repaymentSchedule?.periods?.[1]
                                ?.totalDueForPeriod,
                            type: "currency",
                          },
                        ].map(({ label, value, type }, index) => {
                          const isEven = (index + 1) % 2 == 0;

                          return (
                            <Fragment key={label}>
                              <div>
                                <Typography
                                  variant="body2"
                                  className="text-text-secondary"
                                  gutterBottom
                                >
                                  {label}
                                </Typography>
                                {type === "currency" ? (
                                  <CurrencyTypography
                                    variant="body1"
                                    className="font-bold"
                                  >
                                    {value}
                                  </CurrencyTypography>
                                ) : (
                                  <Typography
                                    variant="body1"
                                    className="font-bold"
                                  >
                                    {value}
                                  </Typography>
                                )}
                              </div>
                              {isEven && (
                                <div className="col-span-2 my-4">
                                  <Divider />
                                </div>
                              )}
                            </Fragment>
                          );
                        })}
                      </div>
                    </Paper>
                    {!activeLoan.status?.active && (
                      <div className="grid grid-cols-2 gap-2">
                        <Button onClick={handleAccountModalOpen}>Settle Loan</Button>
                        <Button variant="outlined">Repay Loan</Button>
                      </div>
                    )}
                  </>
                ) : null}
              </div>
              <div className="w-full md:flex-1 space-y-4">
                {activeLoan ? (
                  <>
                    <div className="flex items-center">
                      <Typography variant="h5" className="font-bold">
                        Transaction History
                      </Typography>
                      <div className="flex-1" />
                      <MuiLink>View All</MuiLink>
                    </div>
                    <Paper className="p-4">
                      <LoanTransactionTable
                        instance={loanTransactionTableInstance}
                      />
                    </Paper>
                  </>
                ) : null}
              </div>
            </div>
          </>
        )}
      </LoadingUI>

      <div>
        <div className="flex items-center py-2">
          <Typography variant="h5" className="font-bold">
            Loans
          </Typography>
          <div className="flex-1" />
          <MuiLink>View All</MuiLink>
        </div>
        <Paper className="p-4">
          <LoanTable
            instance={loanTableInstance}
            loading={loansQueryResult.isLoading}
            error={loansQueryResult.isError}
            onEmptyRetry={loansQueryResult.refetch}
            onErrorRetry={loansQueryResult.refetch}
          />
        </Paper>
      </div>
      <PaymentOptionModal
        open={paymentOptionModalOpen}
        handleClose={handlePaymentOptionClose}
        handlePaystack={handlePaystack}
        handleAccount={handleAccount}
      />
      <AccountDetailsModal
        open={accountModalOpen}
        handleClose={() => setAccountModalOpen(false)}
      />
      <PaystackModal
        open={paystackModalOpen}
        handleClose={() => setPaystackModalOpen(false)}
        email={authUser?.email}
      />
    </>
  );
}

export default Dashboard;

export const Component = Dashboard;
