import { forwardRef, useMemo } from "react";
import { useMaskito } from "@maskito/react";
import { maskitoNumberOptionsGenerator } from "@maskito/kit";
import { maskitoTransform } from "@maskito/core";
import { TextField } from "@mui/material";

const NumberTextField = forwardRef(
  /**
   *
   * @param {NumberTextFieldProps} props
   * @returns
   */
  function NumberTextField(props, ref) {
    const {
      freeSolo,
      maskOptions,
      value = "",
      onChange,
      onInput,
      ...restProps
    } = props;
    const { precision, thousandSeparator } = maskOptions || {};

    const options = useMemo(
      () => ({
        ...(freeSolo
          ? { mask: /^[0-9]+$/i }
          : maskitoNumberOptionsGenerator({
              precision: precision ?? 2,
              thousandSeparator: thousandSeparator ?? ",",
            })),
      }),
      [freeSolo, precision, thousandSeparator]
    );

    const inputRef = useMaskito({ options });

    function handleChange(e) {
      const value = e.target.value;
      e.target.value = value && value.replace(/\s|,/g, "");
      onChange?.(e);
      onInput?.(e);
    }

    return (
      <TextField
        ref={ref}
        inputRef={inputRef}
        value={value && maskitoTransform(String(value), options)}
        onInput={handleChange}
        {...restProps}
      />
    );
  }
);

export default NumberTextField;

/**
 * @typedef {{
 * freeSolo?: boolean;
 * maskOptions: MaskOptions;
 * } & import("@mui/material").TextFieldProps} NumberTextFieldProps
 */

/**
 * @typedef {{
 * precision?: number;
 * thousandSeparator?: string;
 * }} MaskOptions
 */
