import { InputAdornment } from "@mui/material";
import { forwardRef } from "react";
import NumberTextField from "./NumberTextField";
import Currency from "enums/Currency";

const CurrencyTextField = forwardRef(
  /**
   *
   * @param {CurrencyTextFieldProps} props
   * @param {import("react").ComponentRef<typeof NumberTextField>} ref
   * @returns
   */
  function CurrencyTextField(props, ref) {
    const { code, InputProps, ...restProps } = props;
    const currency = Currency[code || "NGN"];

    return (
      <NumberTextField
        ref={ref}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{currency.symbol}</InputAdornment>
          ),
          ...InputProps,
        }}
        {...restProps}
      />
    );
  }
);

export default CurrencyTextField;

/**
 * @typedef {{
 * code: keyof typeof Currency
 * } & import("./NumberTextField").NumberTextFieldProps} CurrencyTextFieldProps
 */
