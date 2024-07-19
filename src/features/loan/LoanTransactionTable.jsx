/* eslint-disable react-refresh/only-export-components */
import { Typography } from "@mui/material";
import clsx from "clsx";
import CurrencyTypography from "common/CurrencyTypography";
import TanStandardTable from "common/TanStandardTable";

/**
 *
 * @param {import("common/TanStandardTable").TanStandardTableProps} props
 * @returns
 */
function LoanTransactionTable(props) {
  return <TanStandardTable {...props} />;
}

export default LoanTransactionTable;

/** @type {import("@tanstack/react-table").ColumnDef<any, any>[]} */
export const columns = [
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row, getValue }) => (
      <CurrencyTypography
        currency={row?.original?.currency?.code}
        className={clsx(
          row?.original?.manuallyReversed && "line-through text-red-500"
        )}
      >
        {getValue()}
      </CurrencyTypography>
    ),
  },
  {
    header: "Date",
    accessorKey: "date",
    cell: ({ row, getValue }) => (
      <Typography
        className={clsx(
          row?.original?.manuallyReversed && "line-through text-red-500"
        )}
      >
        {getValue()?.join("-")}
      </Typography>
    ),
  },
  {
    header: "Status",
    accessorKey: "type.value",
    cell: ({ row, getValue }) => {
      return (
        <Typography
          className={clsx(
            row?.original?.manuallyReversed && "line-through text-red-500"
          )}
        >
          {getValue()?.replace(
            "Repayment (at time of disbursement)",
            "Management Charge"
          )}
        </Typography>
      );
    },
  },
  // {
  //   header: "Principal",
  //   accessorKey: "principalPortion",
  //   cell: ({ row, getValue }) => (
  //     <CurrencyTypography
  //       className={clsx(
  //         row?.original?.manuallyReversed && "line-through text-red-500"
  //       )}
  //     >
  //       {getValue()}
  //     </CurrencyTypography>
  //   ),
  // },
  // {
  //   header: "Interest",
  //   accessorKey: "interestPortion",
  //   cell: ({ row, getValue }) => (
  //     <CurrencyTypography
  //       className={clsx(
  //         row?.original?.manuallyReversed && "line-through text-red-500"
  //       )}
  //     >
  //       {getValue()}
  //     </CurrencyTypography>
  //   ),
  // },
  // {
  //   header: "Fees",
  //   accessorKey: "feeChargesPortion",
  //   cell: ({ row, getValue }) => (
  //     <CurrencyTypography
  //       className={clsx(
  //         row?.original?.manuallyReversed && "line-through text-red-500"
  //       )}
  //     >
  //       {getValue()}
  //     </CurrencyTypography>
  //   ),
  // },
  // {
  //   header: "Penalties",
  //   accessorKey: "penaltyChargesPortion",
  //   cell: ({ row, getValue }) => (
  //     <CurrencyTypography
  //       className={clsx(
  //         row?.original?.manuallyReversed && "line-through text-red-500"
  //       )}
  //     >
  //       {getValue()}
  //     </CurrencyTypography>
  //   ),
  // },

  // {
  //   header: "Loan Balance",
  //   accessorKey: "outstandingLoanBalance",
  //   cell: ({ row, getValue }) => (
  //     <CurrencyTypography
  //       className={clsx(
  //         row?.original?.manuallyReversed && "line-through text-red-500"
  //       )}
  //     >
  //       {getValue()}
  //     </CurrencyTypography>
  //   ),
  // },
];
