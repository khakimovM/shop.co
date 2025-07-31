import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import CardInfoPage from "../pages/CardInfoPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        path: "",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      {
        path: "/signin",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      {
        path: "/card-info",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <CardInfoPage />,
          },
        ],
      },
    ],
  },
]);
