import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FcBinoculars } from "react-icons/fc";

const Navbar = ({ toggleDark }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    toggleDark();
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-md p-2 px-3 font-bold ring-4 ring-gray-200 dark:ring-gray-600"
      : "text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-md p-2 px-3 font-bold";

  return (
    <nav className="border-b fixed w-full top-0 bg-white z-10 dark:bg-gray-900 dark:border-gray-700">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
            <div className="md:ml-auto">
              <div className="flex gap-2">
                <NavLink to="/" className={linkClass}>
                  خانه
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  مشاغل
                </NavLink>
                <NavLink to="/addJob" className={linkClass}>
                  درج آگهی
                </NavLink>
                <button className="px-2 rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 bg-white lg:mr-4">
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
            <Link className="flex flex-shrink-0 items-center ml-2" to="/">
              <span className="hidden md:block text-gray-900 text-2xl font-bold ml-4 dark:text-gray-200">
                کاریاب
              </span>
              <FcBinoculars className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
