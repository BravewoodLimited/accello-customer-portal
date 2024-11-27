/* eslint-disable react-refresh/only-export-components */
import CurrencyTypography from "common/CurrencyTypography";
import TanStandardTable from "common/TanStandardTable";
import LoanStatusChip from "./LoanStatusChip";
import { Link } from "react-router-dom";
import { LOAN_DETAILS, LOAN_SIGN } from "constants/urls";
import { ToggleButton } from "@mui/material";

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
        ) : row?.original?.status?.value == "Loan in draft" ?(
          <span className="flex text-nowrap gap-3"> <LoanStatusChip variant="soft" status={row?.original?.status} /><Link to={LOAN_SIGN+'/'+row?.original?.id} className="text-green-800">Sign Agreement</Link></span>
        )
        :
        <LoanStatusChip variant="soft" status={row?.original?.status} />
      }
      </>
    ),
  },
];
