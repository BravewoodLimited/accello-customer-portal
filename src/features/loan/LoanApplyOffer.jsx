import { Typography } from "@mui/material";
import PdfViewer from "libs/error-boundary/components/PdfViewer";

const LoanApplyOffer = ({ loanId }) => {
  return (
    <div className="p-5">
      <div className="mb-5 p-3 border rounded-md ">
      <Typography component="span">Loan Offer Agreement</Typography>
        <div className="h-[80vh]">
          <PdfViewer id={loanId} />
        </div>
      </div>
    </div>
  );
};

export default LoanApplyOffer;
