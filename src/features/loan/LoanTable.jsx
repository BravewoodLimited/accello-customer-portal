/* eslint-disable react-refresh/only-export-components */
import CurrencyTypography from "common/CurrencyTypography";
import TanStandardTable from "common/TanStandardTable";
import LoanStatusChip from "./LoanStatusChip";
import { Link } from "react-router-dom";
import { LOAN_DETAILS } from "constants/urls";

/**
 *
 * @param {import("common/TanStandardTable").TanStandardTableProps} props
 * @returns
 */
function LoanTable(props) {
  return <TanStandardTable {...props} />;
}

export default LoanTable;

/** @type {import("@tanstack/react-table").ColumnDef<any, any>[]} */
export const columns = [
  {
    header: "Action",
    cell: ({row})=><Link to={LOAN_DETAILS+'/'+row?.original?.id} className="text-blue-500" >View Details</Link>
  },{
    header: "Loan Account",
    accessorKey: "accountNo",
  },
  {
    header: "Product",
    accessorKey: "loanProductName",
  },
  {
    header: "Loan Type",
    accessorKey: "isTopup",
    cell: ({ getValue }) => (getValue() ? "Topup" : "New Loan"),
  },
  {
    header: "Principal",
    accessorKey: "proposedPrincipal",
    cell: ({ getValue }) => (
      <CurrencyTypography>{getValue()}</CurrencyTypography>
    ),
  },
  {
    header: "Loan Officer",
    accessorKey: "loanOfficerName",
  },
  {
    header: "Customer Name",
    accessorKey: "clientName",
    id: "clientName",
  },
  {
    header: "Created Date",
    accessorKey: "timeline.submittedOnDate",
    cell: ({ getValue }) => getValue()?.join("-"),
  },
  {
    header: "STATUS",
    accessorKey: "status",
    cell: ({ row }) => (
      <>
        {row?.original?.inArrears ? (
          <LoanStatusChip
            variant="soft"
            color={"error"}
            label={row?.original?.status?.value}
          />
        ) : (
          <LoanStatusChip variant="soft" status={row?.original?.status} />
        )}
      </>
    ),
  },
];
