import {
  AppBar,
  Avatar,
  Container,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import useAuthUser from "hooks/useAuthUser";
import useSideNavigation from "hooks/useSideNavigation";

function AppProtectedHeader(props) {
  const { ...restProps } = props;

  const authUser = useAuthUser();

  const sideNavigation = useSideNavigation();

  return (
    <AppBar
      elevation={0}
      position="sticky"
      color="transparent"
      className="left-0 lg:left-[270px] w-full lg:w-[calc(100%-270px)]"
      {...restProps}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            className="lg:hidden"
            color="inherit"
            onClick={() => sideNavigation.toggle()}
          >
            <Icon>menu</Icon>
          </IconButton>
          <div className="flex-1" />
          {authUser?.clientId ? (
            <div className="flex items-center gap-2">
              <Avatar>{authUser?.displayName?.[0]}</Avatar>
              <Typography className="font-semibold">
                {authUser?.displayName}
              </Typography>
            </div>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppProtectedHeader;
