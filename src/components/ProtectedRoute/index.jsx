import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import NotPermitted from "./NotPermitted";

const RoleBaseRoute = (props) => {
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  const user = useSelector((state) => state.account.user);
  const userRole = user.role;

  if (isAdminRoute && userRole === "ADMIN") {
    return <>{props.children}</>;
  } else {
    return <NotPermitted />;
  }
};

const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  return (
    <>
      {isAuthenticated === true ? (
        <RoleBaseRoute>
          <>{props.children}</>
        </RoleBaseRoute>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

// 👇️ define prop types for the component
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

RoleBaseRoute.propTypes = {
  children: PropTypes.node,
};
export default ProtectedRoute;
