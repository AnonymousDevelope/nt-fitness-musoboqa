import Routes from "./routes";
import { lazy, Suspense } from "react";
import { Loader } from "./components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const Admin = lazy(() => import("./pages/Admin"));
  const Login = lazy(() => import("./pages/Login"));
  const User = lazy(() => import("./pages/User"));
  // const Error = lazy(() => import("./pages/Error"));
  // const Verify = lazy(() => import("./pages/VerifyCode"));
  // const ResendCode = lazy(() => import("./pages/ResendCode"));
  // const Registration = lazy(() => import("./pages/Registration"));
  // const ResetPassword = lazy(() => import("./pages/ResetPassword"));
  // const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
          {
      path: "/",
      element: <Login />,
    },
    {
      path: "/user",
      element: <User />,
    }
        // {
        //   path: "/",
        //   element: <Home />,
        // },
      ],
    },   
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
