import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState } from "react";

const MainLayout = () => {
  // Dark Mode
  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar toggleDark={toggleDark} />
      <Outlet />
      {isDark ? <ToastContainer rtl theme="dark" /> : <ToastContainer rtl />}
      <Footer />
    </div>
  );
};

export default MainLayout;
