import {
  ButtonBase,
  Drawer,
  Icon,
  IconButton,
  List,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import clsx from "clsx";
import Logo from "common/Logo";
import { DASHBOARD, FAQS, LOAN_APPLY } from "constants/urls";
import MediaBreakpoint from "enums/MediaBreakpoint";
import useLogout from "hooks/useLogout";
import useSideNavigation from "hooks/useSideNavigation";
import { NavLink } from "react-router-dom";

function AppProtectedSideMenu() {
  const islg = useMediaQuery(MediaBreakpoint.LG);

  const sideNavigation = useSideNavigation();

  const { logout } = useLogout();

  return (
    <Drawer
      open={sideNavigation.isOpen}
      variant={islg ? "permanent" : "temporary"}
      PaperProps={{
        rounded: "default",
        className:
          "flex flex-col border-r-0 w-[270px] bg-primary-main text-primary-contrastText rounded-r-3xl",
      }}
      onClose={() => sideNavigation.toggle()}
    >
      <Toolbar className="flex items-center justify-between">
        <Logo color="white" />
        {!islg && (
          <IconButton color="inherit" onClick={() => sideNavigation.toggle()}>
            <Icon>chevron_left</Icon>
          </IconButton>
        )}
      </Toolbar>
      <List className="p-4 md:p-8 flex-1 min-h-0 overflow-y-auto space-y-4">
        {NAV_LINKS.map(({ icon, children, ...linkProps }, index) => {
          return (
            <NavLink
              key={index}
              className={({ isActive }) =>
                clsx(
                  "flex items-center justify-start text-left gap-2 px-4 py-3 rounded-xl",
                  isActive
                    ? "bg-primary-contrastText text-primary-main"
                    : "text-primary-contrastText",
                  typeof linkProps?.className === "function"
                    ? linkProps?.className?.({ isActive })
                    : linkProps?.className
                )
              }
              {...linkProps}
            >
              <Icon fontSize="medium">{icon}</Icon>
              <Typography component="span" className="font-medium">
                {children}
              </Typography>
            </NavLink>
          );
        })}
      </List>
      <div className="p-4 md:px-8">
        <ButtonBase
          variant="text"
          color="error"
          className="text-left gap-2 px-4 py-3 rounded-xl"
          onClick={() => logout()}
        >
          <Icon>logout</Icon>
          <div>
            <Typography>Logout</Typography>
            <Typography variant="body2">23481370002223</Typography>
          </div>
        </ButtonBase>
      </div>
    </Drawer>
  );
}

export default AppProtectedSideMenu;

const NAV_LINKS = [
  {
    icon: "dashboard",
    children: "Dashboard",
    to: `/dashboard/${DASHBOARD}` ,
  },
  {
    icon: "real_estate_agent",
    children: "Loan application",
    to: `/dashboard/${LOAN_APPLY}`,
  },
  {
    icon: "quiz",
    children: "FAQS",
    to: `/dashboard/${FAQS}`,
  },
];
