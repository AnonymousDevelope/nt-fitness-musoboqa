import { Suspense } from "react";
import { Loader } from "./components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Asosiy,
  Jihozlar,
  Mahsulotlar,
  Mijozlar,
  SavolJavob,
  Sitatistika,
  Ustozlar,
  YangiUstoz,
} from "./components/AdminLayouts/AdminContent";
import {
  Men,
  BuyurtmalarimUser,
  JihozlarUser,
  MahsulotlarUser,
  SavoljavobUser,
  StatistikaUser,
  UstozlarUser,
  Savat,
} from "./components/UserLayout/UserContent";
import { Admin, Error, Forgot, Login, Register, User } from "./pages";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/forgot",
      element: <Forgot />,
    },    
    {
      path: "/login",
      element: <Login />,
    },   
    {
      path: "/register",
      element: <Register />,
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
        {
          path: "yangi_ustoz_qoshish",
          element: <YangiUstoz />,
        },
      ],
    },
    {
      path: "/user",
      element: <User />,
      children: [
        {
          path: "",
          element: <Men />,
        },
        {
          path: "men",
          element: <Men />,
        },
        {
          path: "ustozlar",
          element: <UstozlarUser />,
        },
        {
          path: "buyurtmalarim",
          element: <BuyurtmalarimUser />,
        },
        {
          path: "jihozlar",
          element: <JihozlarUser />,
        },
        {
          path: "savol-javob",
          element: <SavoljavobUser />,
        },
        {
          path: "Statistika",
          element: <StatistikaUser />,
        },
        {
          path: "maxsulotlar",
          element: <MahsulotlarUser />,
        },
        {
          path: "savat",
          element: <Savat />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
