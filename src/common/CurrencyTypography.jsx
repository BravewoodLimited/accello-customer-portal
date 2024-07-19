import { forwardRef } from "react";
import { Typography } from "@mui/material";
import CurrencyEnum from "enums/Currency";
import currencyjs from "currency.js";

export const CurrencyTypography = forwardRef(
  /**
   *
   * @param {{currency: keyof typeof CurrencyEnum} & import("@mui/material").TypographyProps} props
   */
  (props, ref) => {
    const { children, currency, ...rest } = props;
    const _currency = CurrencyEnum[currency || "NGN"] || CurrencyEnum.NGN;

    return (
      <Typography ref={ref} {...rest}>
        {currencyjs(children || 0, { symbol: _currency.symbol }).format()}
      </Typography>
    );
  }
);

CurrencyTypography.displayName = "CurrencyTypography";

CurrencyTypography.defaultProps = {
  currency: "NGN",
};

export default CurrencyTypography;
