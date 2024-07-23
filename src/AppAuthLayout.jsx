import Logo from "common/Logo";
import { Link, Outlet } from "react-router-dom";
import authBackgroundUrl from "assets/imgs/auth-background.png";
import { Typography } from "@mui/material";
import { SIGNIN } from "constants/urls";

function AppAuthLayout() {
  return (
    <div className="flex h-full">
      <div className="w-1/2 hidden md:flex flex-col p-4 bg-white">
        <div className="flex-1 min-h-0 flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <div className="w-72 my-16">
              <img
                src={authBackgroundUrl}
                alt={authBackgroundUrl}
                className="w-full h-full"
              />
            </div>
            <div className="max-w-xs">
              <Typography
                variant="h4"
                gutterBottom
                className="font-bold text-center text-primary-main"
              >
                Fast Decision
              </Typography>
              <Typography className="text-center">
                Same-day decision, funds sent within hours.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:w-1/2 p-4">
        <div>
          <Link to={`/auth/${SIGNIN}`}>
            <Logo />
          </Link>
        </div>
        <div className="flex-1 min-h-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppAuthLayout;

export const Component = AppAuthLayout;
