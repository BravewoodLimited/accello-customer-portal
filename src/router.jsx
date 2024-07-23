import AppErrorBoundary from "./AppErrorBoundary";
import {
  DASHBOARD,
  ENTRY,
  FAQS,
  LOAN_APPLY,
  SIGNIN,
  SIGNIN_VERIFICATION,
} from "constants/urls";
import { createBrowserRouter } from "react-router-dom";
import Landing from "pages/homePage/Landing";
import AboutUs from "pages/AboutUs";
import FAQ from "pages/FAQ";

const router = createBrowserRouter([
  {
    path:"/",
    
    children:[
      // {path:'/', lazy: () => import ("pages/homePage/Landing")}
      {path:'/', element:<Landing/>},
      {path:'/about-us/', element:<AboutUs/>},
      {path:'/faqs', element:<FAQ/>}
      
    ]
  },
 
  {
    path: "/auth",
    lazy: () => import("./App"),
    ErrorBoundary: AppErrorBoundary,
    children: [
    
    
      {
        lazy: () => import("./AppPublic"),
        children: [
          
          {
            lazy: () => import("./AppAuthLayout"),
            children: [
             
              { path: `/auth/${SIGNIN}`, lazy: () => import("pages/signin/Signin") },
              {
                path: `/auth/${SIGNIN_VERIFICATION}`,
                lazy: () => import("pages/signin/SigninVerification"),
              },
            ],
          },
        ],
      },
     
    ],
  },{
    path:'/dashboard',
    lazy: () => import("./AppProtected"),
    ErrorBoundary: AppErrorBoundary,
      children: [
        { index: true, lazy: () => import("pages/dashboard/Dashboard") },
        { path: `/dashboard/${DASHBOARD}`, lazy: () => import("pages/dashboard/Dashboard") },
        { path: `/dashboard/${LOAN_APPLY}`, lazy: () => import("pages/loan/LoanApply") },
        { path: `/dashboard/${FAQS}`, lazy: () => import("pages/faq/Faq") },
      ],
  }
]);

export default router;
