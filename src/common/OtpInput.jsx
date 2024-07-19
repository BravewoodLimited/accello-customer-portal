import { TextField } from "@mui/material";
import ReactOtpInput from "react-otp-input";

/**
 *
 * @param {{inputProps: import("react").ComponentPropsWithoutRef<'input'>} & import("react-otp-input").OTPInputProps} props
 * @returns
 */
function OtpInput(props) {
  const { inputProps, ...restProps } = props;
  return (
    <ReactOtpInput
      renderSeparator={<span className="mx-2"></span>}
      renderInput={(props) => (
        <input
          {...props}
          style={{ ...inputProps?.style }}
          placeholder="*"
          className="w-14 h-14 text-center outline-none rounded-lg bg-[#FFFFFF]"
          {...inputProps}
        />
      )}
      {...restProps}
    />
  );
}

export default OtpInput;
