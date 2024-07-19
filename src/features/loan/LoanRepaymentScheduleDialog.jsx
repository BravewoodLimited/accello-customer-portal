import { Dialog, DialogContent, Typography } from "@mui/material";
import CurrencyTypography from "common/CurrencyTypography";
import DialogTitleXCloseButton from "common/DialogTitleXCloseButton";
import TanStandardTable from "common/TanStandardTable";
import useTable from "hooks/useTable";
import useToggle from "hooks/useToggle";

function LoanRepaymentScheduleDialog(props) {
  const { schedule, children, onClose, ...restProps } = props;

  const [isOpen, toggleOpen, setOpen] = useToggle();

  const tableInstance = useTable({
    columns,
    data: schedule?.periods,
    initialState: { pagination: { pageSize: 36 } },
    meta: { schedule },
  });

  function handleClose() {
    setOpen(false);
    onClose?.(...arguments);
  }

  return (
    <>
      <Dialog open={isOpen} fullWidth {...restProps}>
        <DialogTitleXCloseButton onClose={handleClose}>
          Repayment Schedule
        </DialogTitleXCloseButton>
        <DialogContent>
          {schedule?.decision ? (
            <div className="my-8 space-y-4">
              <Typography variant="body1" color="error" className="text-center">
                {schedule?.decision}
              </Typography>
              <Typography className="text-center">
                Suggested Amount:{" "}
                <CurrencyTypography
                  variant="inherit"
                  component="span"
                  className="font-bold"
                >
                  {schedule?.suggestedAmount}
                </CurrencyTypography>
              </Typography>
            </div>
          ) : (
            <TanStandardTable footer instance={tableInstance} />
          )}
        </DialogContent>
      </Dialog>
      {typeof children === "function"
        ? children?.({ isOpen, toggleOpen, setOpen })
        : children}
    </>
  );
}

export default LoanRepaymentScheduleDialog;

/** @type {import("@tanstack/react-table").ColumnDef<any, any>[]} */
const columns = [
  {
    header: "#",
    accessorKey: "period",
    width: 10,
    footer: "Total",
  },
  //   {
  //     header: "Days",
  //     width: 10,
  //     accessorKey: "daysInPeriod",
  //   },
  // {
  //   header: "Paid",
  //   width: 10,
  //   accessorKey: "complete",
  //   cell: ({ getValue }) =>
  //     getValue() !== undefined && (
  //       <Icon color={getValue() ? "success" : "error"}>
  //         {getValue() ? "check_circle" : "cancel"}
  //       </Icon>
  //     ),
  // },
  //   {
  //     header: "Start Date",
  //     accessorKey: "fromDate",
  //     cell: ({ getValue }) => getValue()?.join("-"),
  //   },
  {
    header: "Due Date",
    accessorKey: "dueDate",
    cell: ({ getValue }) => getValue()?.join("-"),
  },

  // {
  //   header: "Paid Date",
  //   accessorKey: "obligationsMetOnDate",
  //   cell: ({ getValue }) => getValue()?.join("-"),
  // },
  {
    header: "Principal",
    accessorKey: "principalDue",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalPrincipalDisbursed}
      </CurrencyTypography>
    ),
  },

  {
    header: "Balance Of Loan",
    accessorKey: "principalLoanBalanceOutstanding",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
  },
  {
    header: "Interest",
    accessorKey: "interestDue",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalInterestCharged}
      </CurrencyTypography>
    ),
  },
  {
    header: "Fees",
    accessorKey: "feeChargesDue",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalFeeChargesCharged}
      </CurrencyTypography>
    ),
  },
  {
    header: "Penalties",
    accessorKey: "penaltyChargesDue",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalPenaltyChargesCharged}
      </CurrencyTypography>
    ),
  },
  {
    header: "Due",
    accessorKey: "totalDueForPeriod",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalRepaymentExpected}
      </CurrencyTypography>
    ),
    // width: 150,
  },
  {
    header: "Paid",
    accessorKey: "totalPaidForPeriod",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalPaid}
      </CurrencyTypography>
    ),
    // width: 150,
  },
  //   {
  //     header: "In Advance",
  //     cell: ({ row }) =>
  //       `${formatNumberToCurrency(row?.original?.totalPaidInAdvanceForPeriod)}`,
  //     width: 150,
  //     footer: `₦${formatNumberToCurrency(dataTableTotal?.totalPaidInAdvance)}`,
  //   },
  //   {
  //     header: "Late",
  //     cell: ({ row }) =>
  //       `${formatNumberToCurrency(row?.original?.totalPaidLateForPeriod)}`,
  //     width: 150,
  //     footer: `₦${formatNumberToCurrency(dataTableTotal?.totalPaidLate)}`,
  //   },
  {
    header: "Waived",
    accessorKey: "totalWaivedForPeriod",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalWaived}
      </CurrencyTypography>
    ),
    // width: 150,
  },
  {
    header: "Outstanding",
    accessorKey: "totalOutstandingForPeriod",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
    footer: ({ table }) => (
      <CurrencyTypography>
        {table.options.meta?.schedule?.totalOutstanding}
      </CurrencyTypography>
    ),
    // width: 150,
  },
];
