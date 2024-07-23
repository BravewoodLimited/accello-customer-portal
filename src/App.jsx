import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Landing from "pages/homePage/Landing";

function App() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default App;

export const Component = App;
