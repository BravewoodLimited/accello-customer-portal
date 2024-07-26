import { LoadingButton } from "@mui/lab";
import { Chip, TextField, Typography } from "@mui/material";
import OtpApi from "apis/OtpApi";
import StaffApi from "apis/StaffApi";
import { SIGNIN_VERIFICATION } from "constants/urls";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getFormikTextFieldProps } from "utils/formik";
import { urlSearchParamsExtractor } from "utils/url";
import * as yup from "yup";
import { useEffect, useMemo, useState } from "react";

function Signin() {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  // const [searchParam] = useSearchParams();

  // const { referralCode } = urlSearchParamsExtractor(searchParam, {
  //   referralCode: "",
  // });

  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    // Step 1: Get the referral link from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const referral = urlParams.get('referral');

    // Step 2: Store the referral link in sessionStorage
    if (referral) {
      sessionStorage.setItem('referralCode', referral);
      setReferralCode(referral);
    } else {
      // If no referral in URL, check if it's already stored in sessionStorage
      const storedReferral = sessionStorage.getItem('referralCode');
      if (storedReferral) {
        setReferralCode(storedReferral);
      }
    }
  }, []);


  const [requestOtpMutation] = OtpApi.useRequestOtpMutation();

  const staffInfoResult = StaffApi.useGetStaffByMobileNoQuery(
    useMemo(() => ({ path: { mobileNo: referralCode } }), [referralCode]),
    { skip: !referralCode }
  );

  const formik = useFormik({
    initialValues: {
      mobileNo: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      mobileNo: yup.string().label("Phone Number").trim().required(),
    }),
    onSubmit: async (values) => {
      try {
        const data = await requestOtpMutation({
          path: { mobileNo: values.mobileNo },
        }).unwrap();

        // enqueueSnackbar(data?.message || "Otp sent successfully", {
        //   variant: "success",
        // });

        navigate(SIGNIN_VERIFICATION, { state: { mobileNo: values.mobileNo } });
      } catch (error) {
        enqueueSnackbar(error?.data?.message || "Failed to Sign in", {
          variant: "error",
        });
      }
    },
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-0 flex justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="block w-full max-w-sm">
          <div className="mb-4">
            <Typography variant="h5" className="font-bold mb-2">
              Fast & Easy Personal Loans
            </Typography>
            <Typography variant="body2" className="text-text-secondary">
              Input your phone number
            </Typography>
          </div>
          <TextField
            fullWidth
            margin="normal"
            label="Your phone number"
            required
            {...getFormikTextFieldProps(formik, "mobileNo")}
          />
          {referralCode ? (
            <Chip
              variant="soft"
              label={`You were referred by ${referralCode}`}
              size="small"
              color="success"
              className="mt-1 capitalize"
            />
          ) : null}
          <LoadingButton
            type="submit"
            fullWidth
            size="large"
            loading={formik.isSubmitting}
            loadingPosition="start"
            startIcon={<></>}
            className="mt-12 mb-4"
          >
            Proceed
          </LoadingButton>
          <Typography className="text-center">
            You will receive an OTP code to verify your number.
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default Signin;

export const Component = Signin;
