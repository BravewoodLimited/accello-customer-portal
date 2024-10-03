import { SnackbarProvider } from "notistack";
import { Icon, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material"
import { notistackRef } from "constants/refs";

function MuiSnackbarProvider({ children }) {
  return (
    <SnackbarProvider
      ref={notistackRef}
      preventDuplicate
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      action={(key) => (
        
          <Close onClick={() => {
            notistackRef.current.closeSnackbar(key);
          }}
          color="inherit"
          size="small" />
      )}
    >
      {children}
    </SnackbarProvider>
  );
}

export default MuiSnackbarProvider;
