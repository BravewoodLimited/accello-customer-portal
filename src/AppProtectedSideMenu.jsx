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
import { Logout } from "@mui/icons-material";
import clsx from "clsx";
import Logo from "common/Logo";
import { DASHBOARD, FAQS, LOAN_APPLY } from "constants/urls";
import MediaBreakpoint from "enums/MediaBreakpoint";
import useLogout from "hooks/useLogout";
import useSideNavigation from "hooks/useSideNavigation";
import { NavLink } from "react-router-dom";
import {
  ArrowBackIos,
  Dashboard,
  ChevronLeft,
  SignalCellular0Bar,
  Quiz,
} from "@mui/icons-material";
import dashboardicon from "./assets/dashboardicons/dashboard.svg";
import loanapplicationicon from "./assets/dashboardicons/loanapplication.svg";
import faqicon from "./assets/dashboardicons/faq.svg";

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
          <ChevronLeft
            color="inherit"
            onClick={() => sideNavigation.toggle()}
          />
        )}
      </Toolbar>
      <List className="p-4 md:p-8 flex-1 min-h-0 overflow-y-auto space-y-4">
        {NAV_LINKS.map(({ icon, children, ...linkProps }, index) => {
          return (
            <NavLink
              key={index}
              className={({ isActive }) =>
                clsx(
                  "flex items-center justify-start    text-left gap-2 px-4 py-3 rounded-xl",
                  isActive
                    ? "text-white text-primary-main bg-primary-main"
                    : "text-primary-contrastText ",
                  typeof linkProps?.className === "function"
                    ? linkProps?.className?.({ isActive })
                    : linkProps?.className
                )
              }
              {...linkProps}
            >
              <img src={icon} alt={children} className="w-[1.27rem]" />
              <Typography component="span" className="font-medium">
                {children}
              </Typography>
            </NavLink>
          );
        })}
      </List>

      <div className="p-4 md:px-8">
        <Typography
          variant="body2"
          className=" gap-2 px-4 py-3 flex flex-col font-semibold"
        >
          <span className="font-semibold font-nunito-sans text-[16px] text-[#FFEFCABF]">Contact us </span>
          <span className="text-[#FFEFCABF]/[75%] font-nunito-sans text-[14px]">+234 81370002223,</span>
          <span className="text-[#FFEFCABF]/[75%] font-nunito-sans text-[14px]">+234 80349981573</span>
        </Typography>
        <ButtonBase
          variant="text"
          color="error"
          className="text-left gap-2 px-4 py-3 rounded-xl mt-4 mb-4"
          onClick={() => logout()}
        >
          <Logout />
          <div>
            <Typography>Logout</Typography>
          </div>
        </ButtonBase>
      </div>
    </Drawer>
  );
}

export default AppProtectedSideMenu;

const NAV_LINKS = [
  {
    icon: dashboardicon,
    children: "Dashboard",
    to: "",
  },
  {
    icon: loanapplicationicon,
    children: "Loan application",
    to: "",
  },
  {
    icon: faqicon,
    children: "FAQS",
    to: "",
  },
];
