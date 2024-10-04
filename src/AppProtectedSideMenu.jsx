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
import { Logout } from "@mui/icons-material"
import clsx from "clsx";
import Logo from "common/Logo";
import { DASHBOARD, FAQS, LOAN_APPLY } from "constants/urls";
import MediaBreakpoint from "enums/MediaBreakpoint";
import useLogout from "hooks/useLogout";
import useSideNavigation from "hooks/useSideNavigation";
import { NavLink } from "react-router-dom";
import {ArrowBackIos, Dashboard, ChevronLeft, SignalCellular0Bar, Quiz} from "@mui/icons-material"


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
            <ChevronLeft color="inherit" onClick={() => sideNavigation.toggle()}/>
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
              {icon}
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
          <Logout />
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
    icon: <Dashboard/>,
    children: "Dashboard",
    to: DASHBOARD,
  },
  {
    icon: <SignalCellular0Bar/>,
    children: "Loan application",
    to: LOAN_APPLY,
  },
  {
    icon: <Quiz />,
    children: "FAQS",
    to: FAQS,
  },
];
