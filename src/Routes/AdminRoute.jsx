import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [user, loading] = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    <div className="w-full h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-lg text-red-600"></span>
    </div>;
  }

  return <div></div>;
};

export default AdminRoute;
