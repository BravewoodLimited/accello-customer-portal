import { Chip } from "@mui/material";
import { LoanStatusColor } from "./LoanEnums";

/**
 *
 * @param {import("@mui/material").ChipProps} props
 * @returns
 */
function LoanStatusChip(props) {
  const { status, ...rest } = props;

  return (
    <Chip
      variant="soft"
      color={LoanStatusColor[status?.code]}
      label={status?.value == "Loan in draft" ? "Incomplete" : status.value}
      size="small"
      {...rest}
    />
  );
}

export default LoanStatusChip;
