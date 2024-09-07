import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Logout = ({ handleLogoutClick }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("loggdin");
    sessionStorage.removeItem('userId');
    Cookies.remove('activeUserId');
    Cookies.remove('token');
    handleLogoutClick(false);
    navigate("/welcome");
  }, [navigate, handleLogoutClick]);

  return null;
};

export default Logout;
