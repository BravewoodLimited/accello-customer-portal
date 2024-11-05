/* eslint-disable react-refresh/only-export-components */
import store from "configs/store";
import AppProtectedHeader from "./AppProtectedHeader";
import AppProtectedSideMenu from "./AppProtectedSideMenu";
import { Outlet, redirect } from "react-router-dom";
import { SIGNIN } from "constants/urls";

function AppProtected() {
  return (
    <>
      <AppProtectedHeader />
      <AppProtectedSideMenu />
      <div className="px-4 pt-6 md:px-8 lg:ml-[270px]">{<Outlet />}</div>
    </>
  );
}

export default AppProtected;

export const Component = AppProtected;

export function loader() {
  const { authUser } = store.getState().global;

  if (!(authUser && authUser?.token)) {
    return redirect(SIGNIN);
  }

  return null;
}
