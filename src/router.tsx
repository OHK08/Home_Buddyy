import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/loginForm/LoginForm";
import SignupForm from "./components/signupForm/SignupForm";
// import SignupPage from "./pages/loginSignup/SignupPage";
// import LoginPage from "./pages/loginSignup/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/loginSignup", // Parent route
    element: <Layout>{null}</Layout>, // Wraps child routes with the Layout component
    children: [
      {
        path: "login", // Renders LoginForm at "/loginSignup/login"
        element: <LoginForm />,
      },
      {
        path: "signup", // Renders SignupForm at "/loginSignup/signup"
        element: <SignupForm />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
