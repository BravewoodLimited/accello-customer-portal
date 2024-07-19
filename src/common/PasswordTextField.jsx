import { InputAdornment, Icon, TextField, IconButton } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";

/** @param {import("@mui/material").TextFieldProps} props */
function PasswordTextField(props) {
  const { error, InputProps, ...rest } = props;
  const [isVisible, setVisible] = useState(false);

  const handleVisible = () => setVisible((p) => !p);

  return (
    <TextField
      type={isVisible ? "text" : "password"}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleVisible}
              disabled={props.disabled}
              size="small"
            >
              <Icon className={clsx(error ? "text-danger" : "text-primary")}>
                {isVisible ? "visibility_off" : "visibility"}
              </Icon>
            </IconButton>
          </InputAdornment>
        ),
      }}
      error={error}
      {...rest}
    />
  );
}

export default PasswordTextField;
