import { DialogTitle, IconButton, Icon } from "@mui/material";
import clsx from "clsx";
import { Close, } from "@mui/icons-material"


/**
 *
 * @param {DialogTitleXCloseButtonProps} props
 */
function DialogTitleXCloseButton(props) {
  const { children, onClose, className, ...other } = props;

  return (
    <DialogTitle className={clsx("", className)} {...other}>
      {children}
      {onClose ? (
        <Close
          className="absolute right-2 top-3"
          aria-label="close"
          onClick={onClose}
        >
        </Close>
      ) : null}
    </DialogTitle>
  );
}

export default DialogTitleXCloseButton;

/**
 * @typedef {{onClose: Function} & DialogTitleXCloseButtonProps} DialogTitleXCloseButtonProps
 */
