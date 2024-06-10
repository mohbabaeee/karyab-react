import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState, useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();
  // Initialize state for dark mode from local storage or default to false
  const [isDark, setDark] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Sync state with local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDark = () => {
    setDark(!isDark);
  };

  // Check if the current route is a known route
  let isKnownRoute =
    ["/", "/jobs", "/edit-job", "/addJob"].includes(location.pathname) ||
    /^\/jobs\/\d+$/.test(location.pathname) ||
    /^\/edit-job\/\d+$/.test(location.pathname);

  return (
    <div className={`flex flex-col min-h-screen ${isDark ? "dark" : ""}`}>
      {isKnownRoute && <Navbar toggleDark={toggleDark} />}
      <Outlet />
      {isDark ? <ToastContainer rtl theme="dark" /> : <ToastContainer rtl />}
      {isKnownRoute && <Footer />}
    </div>
  );
};

export default MainLayout;
