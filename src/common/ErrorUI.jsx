"use client";

import { Button, Typography, Icon } from "@mui/material";
import clsx from "clsx";
import "./ErrorUI.css";

/**
 *
 * @param {ErrorUIProps} props
 */
function ErrorUI(props) {
  const {
    onTryAgain = () => window.location.reload(),
    onSendReport,
    title = "Something went wrong",
    description = "We're quite sorry about this!",
    className,
    ...restProps
  } = props;

  return (
    <div className={clsx("ErrorUI", className)} {...restProps}>
      <Typography variant="h6" className="font-bold text-center">
        {title}
      </Typography>
      <div>
        <Icon fontSize="100px" className={clsx("ErrorUI__icon")}>
          sentiment_dissatisfied
        </Icon>
      </div>
      <Typography variant="body2" className="text-center mb-4 font-bold">
        {description}
      </Typography>
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="outlined" onClick={onSendReport}>
          Send Report
        </Button>
        <Button onClick={onTryAgain}>Try Again</Button>
      </div>
    </div>
  );
}

export default ErrorUI;

/**
 * @typedef {{
 * onTryAgain: Function
 * onSendReport: Function
 * } & import("react").ComponentPropsWithoutRef<'div'>} ErrorUIProps
 */

/**
 * @typedef {{} & import("react").ComponentPropsWithoutRef<'div'>} EmptyProps
 */
