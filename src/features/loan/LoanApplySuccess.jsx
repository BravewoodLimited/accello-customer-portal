import { Button, Typography } from "@mui/material";
import { DASHBOARD } from "constants/urls";
import { Link } from "react-router-dom";

function LoanApplySuccess() {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-sm">
        <Typography variant="h5" className="font-bold text-center">
          Your loan request received and is undergoing review
        </Typography>
        <Typography className="text-text-secondary text-center">
          Just one more thing, create an account to manage your loan and get
          access to a lot more.
        </Typography>
        <Button component={Link} to={`/dashboard/${DASHBOARD}`}>
          Manage your account
        </Button>
      </div>
    </div>
  );
}

export default LoanApplySuccess;
