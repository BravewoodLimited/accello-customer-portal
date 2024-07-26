import AppErrorBoundary from "./AppErrorBoundary";
import {
  DASHBOARD,
  FAQS,
  LOAN_APPLY,
  SIGNIN,
  SIGNIN_VERIFICATION,
} from "constants/urls";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   path:"/",
    
  //   children:[
  //     // {path:'/', lazy: () => import ("pages/homePage/Landing")}
  //     {path:'/', element:<Landing/>},
  //     {path:'/about-us/', element:<AboutUs/>},
  //     {path:'/faqs', element:<FAQ/>},
  //     {path:'/contact', element:<ContactUs/>}
      
  //   ]
  // },
  {
    path: "/loan/",
    lazy: () => import("./App"),
    ErrorBoundary: AppErrorBoundary,
    children: [
      {
        lazy: () => import("./AppPublic"),
        children: [
          {
            lazy: () => import("./AppAuthLayout"),
            children: [
              { path: SIGNIN, lazy: () => import("pages/signin/Signin") },
              {
                path: SIGNIN_VERIFICATION,
                lazy: () => import("pages/signin/SigninVerification"),
              },
            ],
          },
        ],
      },
      {
        lazy: () => import("./AppProtected"),
        children: [
          { index: true, lazy: () => import("pages/dashboard/Dashboard") },
          { path: DASHBOARD, lazy: () => import("pages/dashboard/Dashboard") },
          { path: LOAN_APPLY, lazy: () => import("pages/loan/LoanApply") },
          { path: FAQS, lazy: () => import("pages/faq/Faq") },
        ],
      },
    ],
  },
]);

export default router;
