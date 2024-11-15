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
import { Menu } from "@mui/icons-material"
import ClientApi from "apis/ClientApi";
import { useMemo } from "react";
import useStepper from "hooks/useStepper";

function AppProtectedHeader(props) {
  const { ...restProps } = props;

  const authUser = useAuthUser();
  const stepper = useStepper();
  const clientId = authUser?.clientId;
  const clientKycDetailsQueryResult = ClientApi.useGetClientKycDetailsQuery(
    useMemo(() => ({ path: { id: clientId } }), [clientId, stepper]),
    { skip: !clientId }
  );
  console.log(clientKycDetailsQueryResult.data.data.avatar);
  

  // console.log(authUser);
  

  const sideNavigation = useSideNavigation();

  return (
    <AppBar
      elevation={99}
      position="sticky"
      // color="transparent"
      className="left-0 bg-white lg:left-[270px] w-full lg:w-[calc(100%-270px)]"
      {...restProps}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Menu
            className="lg:hidden"
            color="inherit"
            onClick={() => sideNavigation.toggle()}
          >
            {/* <Icon>menu</Icon> */}
          </Menu>
          <div className="flex-1" />
          {authUser?.clientId ? (
            <div className="flex items-center gap-2">
              <Avatar><img src={clientKycDetailsQueryResult.data.data.avatar} alt="" /></Avatar>
              <Typography className="font-semibold text-black">
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
