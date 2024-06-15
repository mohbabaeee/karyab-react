import icon from "/logo.png";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Hamburger from "hamburger-react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const Navbar = ({ toggleDark }) => {
  const [isOpen, setOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    toggleDark();
  };

  const smDeviceClass =
    "text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 rounded-3xl p-4 px-4 mb-4 font-bold text-4xl flex gap-2";
  const lgDeviceClass = ({ isActive }) =>
    isActive
      ? "text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 rounded-md p-2 px-3 font-bold ring-4 ring-gray-300 dark:ring-gray-600"
      : "text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 rounded-md p-2 px-3 font-bold";

  return (
    <nav className="border-b fixed w-full top-0 bg-white z-10 dark:bg-gray-900 dark:border-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 firefox:bg-opacity-90 dark:firefox:bg-opacity-90">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
            <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
              <div className="ml-auto flex items-center md:hidden rounded-lg text-gray-900 dark:text-gray-300 mr-4">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>

              <div
                className={`fixed w-[17rem] h-screen top-16 right-0 bg-gray-100 dark:bg-gray-900 z-30 p-4 transform ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out border-l-2 dark:border-gray-700`}
              >
                <NavLink
                  to="/"
                  className={smDeviceClass}
                  onClick={() => setOpen(false)}
                >
                  <FaHome className="inline-block ml-2" />
                  خانه
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={smDeviceClass}
                  onClick={() => setOpen(false)}
                >
                  <FaSearch className="inline-block ml-2" />
                  مشاغل
                </NavLink>
                <NavLink
                  to="/addJob"
                  className={smDeviceClass}
                  onClick={() => setOpen(false)}
                >
                  <FaPencil className="inline-block ml-2" />
                  درج آگهی
                </NavLink>
                <button
                  onClick={() => toggleDarkMode(!isDarkMode)}
                  className={smDeviceClass + "bg-gray-500"}
                >
                  <DarkModeSwitch
                    sunColor="#d1d5db"
                    moonColor="#111827"
                    checked={!isDarkMode}
                    onChange={toggleDarkMode}
                    size={38}
                    className="inline-block ml-3"
                  />
                  {!isDarkMode ? "حالت شب" : "حالت روز"}
                </button>
                <div className="fixed bottom-24 right-5">
                  <p className="text-gray-700 text-xl dark:text-gray-300 pb-2">
                    طراحی و پیاده‌سازی:
                  </p>
                  <h2 className="text-3xl font-bold animate-text bg-gradient-to-r from-slate-950 via-violet-950 to-cyan-400 bg-clip-text text-transparent dark:from-white dark:via-pink-300 dark:to-blue-300">
                    محمدحسین بابایی
                  </h2>
                </div>
              </div>
              <div className="hidden md:flex gap-2 items-center md:mr-4">
                <NavLink to="/" className={lgDeviceClass}>
                  <FaHome className="inline-block ml-2" />
                  خانه
                </NavLink>
                <NavLink to="/jobs" className={lgDeviceClass}>
                  <FaSearch className="inline-block ml-2" />
                  مشاغل
                </NavLink>
                <NavLink to="/addJob" className={lgDeviceClass}>
                  <FaPencil className="inline-block ml-2" />
                  درج آگهی
                </NavLink>
                <button className="p-2 rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 lg:mr-4 dark:bg-opacity-60">
                  <DarkModeSwitch
                    sunColor="#6B7280"
                    moonColor="#6B7280"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={24}
                  />
                </button>
              </div>
            </div>
            <Link className="flex flex-shrink-0 items-center ml-6" to="/">
              <span className="text-gray-900 text-3xl font-bold ml-4 dark:text-gray-200">
                کاریاب
              </span>
              <img src={icon} className="w-10" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
