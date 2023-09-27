import { Suspense } from "react";
import { Loader } from "./components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Asosiy, Jihozlar, Mahsulotlar, Mijozlar, SavolJavob, Sitatistika, Ustozlar } from "./components/AdminLayouts/AdminContent";
import {Men,BuyurtmalarimUser,JihozlarUser,MahsulotlarUser,SavoljavobUser,StatistikaUser,UstozlarUser} from "./components/UserLayout/UserContent"
import { Admin, Error, Login, User } from "./pages";
const App = () => {

  // const Verify = lazy(() => import("./pages/VerifyCode"));
  // const ResendCode = lazy(() => import("./pages/ResendCode"));
  // const Registration = lazy(() => import("./pages/Registration"));
  // const ResetPassword = lazy(() => import("./pages/ResetPassword"));
  // const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          path: "",
          element: <Asosiy />,
        
        },   
        {
          path: "asosiy",
          element: <Asosiy />,
        
        },
        {
          path: "ustozlar",
          element: <Ustozlar />,
        },
        {
          path: "mijozlar",
          element: <Mijozlar />,
        },
        {
          path: "jihozlar",
          element: <Jihozlar />,
        },
        {
          path: "maxsulotlar",
          element: <Mahsulotlar />,
        },
        {
          path: "savol-javob",
          element: <SavolJavob />,
        },
        {
          path: "statistika",
          element: <Sitatistika />,
        },
      ]
    },
    {
      path: "/user",
      element: <User />,
      children: [
        {
          path: "",
          element:<Men /> ,
        },
        {
          path:"men",
          element:<Men />,
        },
        {
          path:"ustozlar",
          element:<UstozlarUser/>
        },
        {
          path:"buyurtmalarim",
          element:<BuyurtmalarimUser />
        },
        {
          path:"jihozlar",
          element:<JihozlarUser />
        },
        {
          path:'savol-javob',
          element:<SavoljavobUser />,
        },
        {
          path:"Statistika",
          element:<StatistikaUser />
        },
        {
          path:"maxsulotlar",
          element:<MahsulotlarUser />
        }
      ]
    },
    {
      path: "*",
      element: <Error />,
    },

    // }
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    // ],
    // },   
    // {
    //   path: "/admin",
    //   element: <Admin />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <Admin />,
    //     },
    //   ],
    // },

    // {
    //   path: "*",
    //   element: <Error />,
    // },

    // {
    //   path: "/registration",
    //   element: <Registration />,
    // },
    // {
    //   path: "/verify",
    //   element: <Verify />,
    // },
    // {
    //   path: "/forgotPassword",
    //   element: <ForgotPassword />,
    // },
    // {
    //   path: "/resetPassword",
    //   element: <ResetPassword />,
    // },
    // {
    //   path: "/resendCode",
    //   element: <ResendCode />,
    // },
  ]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
};

export default App;
