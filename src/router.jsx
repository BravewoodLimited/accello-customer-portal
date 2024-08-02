import AppErrorBoundary from "./AppErrorBoundary";
import {
  DASHBOARD,
  FAQS,
  LOAN_APPLY,
  LOAN_DETAILS,
  SIGNIN,
  SIGNIN_VERIFICATION,
} from "constants/urls";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import FAQ from "pages/FAQ";
import Landing from "pages/homePage/Landing";
import LoanApplication from "pages/ClientDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    
    children:[
      // {path:'/', lazy: () => import ("pages/homePage/Landing")}
      {path:'/', element:<Landing/>},
      {path:'/about-us/', element:<AboutUs/>},
      {path:'/faqs', element:<FAQ/>},
      {path:'/contact', element:<ContactUs/>}
      
    ]
  },
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
          { path: LOAN_DETAILS+'/:loanId', element:<LoanApplication/> },
        ],
      },
    ],
  },
]);

export default router;
