import { LoadingButton } from "@mui/lab";
import {
  TextField,
  Typography,
  Link as MuiLink,
  ButtonBase,
  CircularProgress,
  IconButton,
  Icon,
} from "@mui/material";
import ClientApi from "apis/ClientApi";
import OtpApi from "apis/OtpApi";
import { DASHBOARD, LOAN_APPLY, SIGNIN } from "constants/urls";
import { useFormik } from "formik";
import useAuthUser from "hooks/useAuthUser";
import useCountdown from "hooks/useCountdown";
import useLogout from "hooks/useLogout";
import { useSnackbar } from "notistack";
import { useMemo } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { getFormikTextFieldProps } from "utils/formik";
import * as yup from "yup";

function SigninVerification() {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const authUser = useAuthUser();

  const { logout } = useLogout();

  const location = useLocation();

  const mobileNo = location.state?.mobileNo;

  const [requestOtpMutation, requestOtpMutationResult] =
    OtpApi.useRequestOtpMutation();

  const [verifyClientOtpMutation] = ClientApi.useVerifyClientOtpMutation();

  const countdown = useCountdown(
    useMemo(() => {
      const date = new Date();
      date.setTime(
        authUser?.twoFactor?.requestTime +
          authUser?.twoFactor?.tokenLiveTimeInSec * 1000
      );
      return date;
    }, [
      authUser?.twoFactor?.requestTime,
      authUser?.twoFactor?.tokenLiveTimeInSec,
    ])
  );

  const formik = useFormik({
    initialValues: {
      token: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      token: yup.string().label("Token").trim().required(),
    }),
    onSubmit: async (values) => {
      try {
        const data = await verifyClientOtpMutation({
          path: { mobileNo },
          params: { token: values.token },
        }).unwrap();

        enqueueSnackbar("Signed in successfull" || data?.message, {
          variant: "success",
        });

        navigate(data?.data?.id ? DASHBOARD : LOAN_APPLY);
      } catch (error) {
        enqueueSnackbar(error?.message || "Failed to Sign in", {
          variant: "error",
        });
      }
    },
  });

  async function resendOtp() {
    try {
      const data = await requestOtpMutation({
        path: { mobileNo: mobileNo },
      }).unwrap();

      enqueueSnackbar(data?.message || "Otp sent successfully", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(error?.data?.message || "Failed to send otp", {
        variant: "error",
      });
    }
  }

  const logoutUser = () => {
    logout();
    navigate(-1);
  };

  if (!mobileNo) {
    return <Navigate to={SIGNIN} />;
  }

  const isCodeSent =
    countdown.days ||
    countdown.minutes ||
    countdown.seconds ||
    countdown.seconds;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-0 flex justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="block w-full max-w-sm">
          <div className="mb-4">
            <IconButton edge="start" onClick={logoutUser} className="mb-4">
              <Icon>arrow_back_ios</Icon>
            </IconButton>
            <Typography variant="h5" className="font-bold mb-2">
              Verify your phone number
            </Typography>
            <Typography variant="body2" className="text-text-secondary">
              Please enter the verification code that was sent to{" "}
              {mobileNo?.replace(/\w(?=\w{0,2}@)/g, "*") || "******@*****"}.
             <span  onClick={logoutUser} className="text-blue-900 cursor-pointer">Change number</span> 
            </Typography>
          </div>
          <TextField
            fullWidth
            margin="normal"
            label="Enter code"
            required
            {...getFormikTextFieldProps(formik, "token")}
          />
          <LoadingButton
            type="submit"
            fullWidth
            size="large"
            loading={formik.isSubmitting}
            loadingPosition="start"
            startIcon={<></>}
            className="mt-12 mb-4"
          >
            Verify
          </LoadingButton>

          {isCodeSent ? (
            <Typography className="text-center">
              Code sent. You can request a new one in{" "}
              <span className="font-bold">
                {countdown.minutes}:
                {countdown.seconds < 10
                  ? `0${countdown.seconds}`
                  : countdown.seconds}
              </span>
            </Typography>
          ) : (
            <div className="flex items-center justify-center">
              <Typography className="text-center">
                Didn’t receive code?{" "}
                <ButtonBase
                  disableRipple
                  disabled={requestOtpMutationResult.isLoading}
                  component={MuiLink}
                  onClick={resendOtp}
                  className="underline text-text-primary font-bold"
                >
                  Send it again.
                </ButtonBase>
              </Typography>
              {requestOtpMutationResult.isLoading && (
                <CircularProgress size={12} thickness={8} className="ml-1" />
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SigninVerification;

export const Component = SigninVerification;
