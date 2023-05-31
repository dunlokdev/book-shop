import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from "./pages/contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./pages/register";
import Home from "./components/Home";
import LoginPage from "./pages/login";
import About from "./pages/about";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
