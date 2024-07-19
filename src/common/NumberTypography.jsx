import { Typography } from "@mui/material";
import currencyjs from "currency.js";
import { forwardRef } from "react";

const NumberTypography = forwardRef(
  /**
   *
   * @param {NumberTypographyProps} props
   * @returns
   */
  function NumberTypography(props, ref) {
    return (
      <Typography ref={ref} {...props}>
        {currencyjs(props.children, { precision: 0, symbol: "" }).format()}
      </Typography>
    );
  }
);

export default NumberTypography;

/**
 * @typedef {{} & import("@mui/material").TypographyProps} NumberTypographyProps
 */
