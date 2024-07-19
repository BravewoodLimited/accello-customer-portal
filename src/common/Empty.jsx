import { Typography, Icon } from "@mui/material";
import clsx from "clsx";
import "./Empty.css";

/**
 *
 * @param {EmptyProps} props
 * @returns
 */
export function Empty(props) {
  const { title, className, ...rest } = props;
  return (
    <div className={clsx("Empty", className)} {...rest}>
      <Icon className={clsx("Empty__icon")}>insert_drive_file</Icon>
      <Typography variant="h6" className={clsx("Empty__text")}>
        No data
      </Typography>
    </div>
  );
}

export default Empty;

/**
 * @typedef {{} & import("react").ComponentPropsWithoutRef<'div'>} EmptyProps
 */
