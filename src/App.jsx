import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import authApi from "./api/auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./pages/about";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import Register from "./pages/register";
import { doGetAccountAction } from "./redux/account/accountSlice";
import Loading from "./components/Loading";
import NotFound from "./components/Notfound";
import AdminPage from "./pages/admin";
import ProtectedRoute from "./components/ProtectedRoute";

const Layout = () => {
  return (
    <div className="layout-app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const LayoutAdmin = () => {
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  const user = useSelector((state) => state.account.user);
  const userRole = user.role;

  return (
    <div className="layout-app">
      {isAdminRoute && userRole === "ADMIN" && <Header />}
      <Outlet />
      {isAdminRoute && userRole === "ADMIN" && <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
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
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.account.isLoading);

  useEffect(() => {
    (async () => {
      if (
        window.location.pathname === "/login" ||
        window.location.pathname === "/register"
      ) {
        return;
      }

      console.log("Fetch account");
      const res = await authApi.fetchAccount();
      if (res && res.data) {
        dispatch(doGetAccountAction(res.data.user));
      }
    })();
  }, [dispatch]);

  return (
    <>
      {isLoading === false ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/register" ||
      window.location.pathname === "/" ? (
        <RouterProvider router={router} />
      ) : (
        <Loading />
      )}
    </>
  );
}
