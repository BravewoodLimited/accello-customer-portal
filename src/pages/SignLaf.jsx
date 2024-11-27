import { LoadingButton, ToggleButton } from "@mui/lab";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import ClientApi from "apis/ClientApi";
import LoanApi from "apis/LoanApi";
import MiscApi from "apis/MiscApi";
import OtpInput from "common/OtpInput";
import Suspense from "common/Suspense";
import { DASHBOARD } from "constants/urls";
import LoanApplyOffer from "features/loan/LoanApplyOffer";
import useAuthUser from "hooks/useAuthUser";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SignLaf() {
  const { loanId } = useParams();
  const [agreed, setAgreed] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [token, settoken] = useState("");
  const navigation = useNavigate();

  const authUser = useAuthUser();

  const clientId = authUser?.clientId;

  const [verifyClientOtpMutation] = ClientApi.useVerifyLafOtpMutation();
  const [sendLaf] = MiscApi.useSendLaffMutation();

  const [approvedLoanMutation] = LoanApi.useApproveLoanMutation();
  const clientKycDetailsQueryResult = ClientApi.useGetClientKycDetailsQuery(
    useMemo(() => ({ path: { id: clientId } }), [clientId]),
    { skip: !clientId }
  );

  const clientKyc = clientKycDetailsQueryResult.data?.data;

  const handleSubmit = () => {
    if (otpModal && token.length > 5) {
      const data = verifyClientOtpMutation({
        path: { mobileNo: clientKyc?.clients?.mobileNo },
        params: { token: token },
      }).unwrap();
      approvedLoanMutation({
        path: { id: loanId },
        params: { command: "draftApprove" },
      });

      enqueueSnackbar("verified" || data?.message, {
        variant: "success",
      });
      navigation(DASHBOARD);
    } else {
      sendLaf({ path: clientIdLoans });
      setOtpModal(true);
      return;
    }
  };
  useEffect(() => {
    if (token.length > 5) {
      handleSubmit();
    }
  }, [token]);

  return (
    <div>
      <Suspense>
        <LoanApplyOffer loanId={loanId} />
        <div className="flex-1" />

        <div className="flex items-center gap-4 sticky bottom-0 py-4 px-5 bg-white shadow-lg ">
          <div className="flex-1" />
          <div className="flex items-center">
            <Checkbox value={agreed} onChange={(e) => setAgreed(!agreed)} />
            <div>
              I hereby accept the terms and conditions contained in this offer
              letter, by clicking on the checkbox.
            </div>
          </div>

          <LoadingButton
            onClick={handleSubmit}
            // loading={formik.isSubmitting}
            disabled={!agreed}
          >
            Accept
          </LoadingButton>
        </div>
      </Suspense>
      {otpModal && (
        <Dialog open fullWidth>
          <DialogContent>
            <DialogContentText className="mb-8">
              {/* {formik.values.kyc.verify?.message} */}
            </DialogContentText>
            <Typography className="text-center">
              Enter the OTP sent to you to verify the Loan Agreement.
            </Typography>
            <div className="flex items-center justify-center">
              <OtpInput
                value={token}
                onChange={(t) => {
                  settoken(t);
                }}
                numInputs={6}
                shouldAutoFocus
                // inputType="password"
                inputProps={
                  {
                    // style: { opacity: formik.isSubmitting ? 0.5 : 1 },
                    // disabled: formik.isSubmitting,
                  }
                }
              />
            </div>
            {/* {getFormikTextFieldError(formik, "kyc.verify.token") && (
                      <FormHelperText error>
                        {getFormikTextFieldHelperText(
                          formik,
                          "kyc.verify.token"
                        )}
                      </FormHelperText>
                    )} */}
          </DialogContent>
          <DialogActions>
            <Button
              color="error"
              variant="outlined"
              // disabled={formik.isSubmitting}
              onClick={() => {
                setOtpModal(false);
              }}
            >
              Cancel
            </Button>
            <div className="flex-1" />
            {/* <LoadingButton
                      loading={formik.isSubmitting}
                      loadingPosition="start"
                      onClick={formik.handleSubmit}
                    >
                      Verify
                    </LoadingButton> */}
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
