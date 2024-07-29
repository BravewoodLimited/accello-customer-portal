import AppErrorBoundary from "./AppErrorBoundary";
import {
  DASHBOARD,
  ENTRY,
  FAQS,
  LOAN_APPLY,
  SIGNIN,
  SIGNIN_VERIFICATION,
} from "constants/urls";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import FAQ from "pages/FAQ";
import Landing from "pages/homePage/Landing";
import { createBrowserRouter } from "react-router-dom";
import Landing from "pages/homePage/Landing";

const router = createBrowserRouter([
  {
    path:"/",
    
    children:[
      // {path:'/', lazy: () => import ("pages/homePage/Landing")}
<<<<<<< HEAD
      {path:'/', element:<Landing/>}
    ]
  },
  {
    path: "/auth",
=======
      {path:'/', element:<Landing/>},
      {path:'/about-us/', element:<AboutUs/>},
      {path:'/faqs', element:<FAQ/>},
      {path:'/contact', element:<ContactUs/>}
      
    ]
  },
  {
    path: "/loan/",
>>>>>>> staging
    lazy: () => import("./App"),
    ErrorBoundary: AppErrorBoundary,
    children: [
    
    
      {
        lazy: () => import("./AppPublic"),
        children: [
          
          {
            lazy: () => import("./AppAuthLayout"),
            children: [
             
              { path: `/auth${SIGNIN}`, lazy: () => import("pages/signin/Signin") },
              {
                path: `/auth${SIGNIN_VERIFICATION}`,
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
        { path: `/dashboard${DASHBOARD}`, lazy: () => import("pages/dashboard/Dashboard") },
        { path: `/dashboard${LOAN_APPLY}`, lazy: () => import("pages/loan/LoanApply") },
        { path: `/dashboard${FAQS}`, lazy: () => import("pages/faq/Faq") },
      ],
  }
]);

export default router;
