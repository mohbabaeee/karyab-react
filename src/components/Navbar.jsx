import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold "
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold";

  return (
    <nav className="bg-green-700 border-b border-green-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="md:ml-auto">
              <div className="flex space-x-2 gap-2">
                <NavLink to="/" className={linkClass}>
                  خانه
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  مشاغل
                </NavLink>
                <NavLink to="/addJob" className={linkClass}>
                  درج آگهی
                </NavLink>
              </div>
            </div>
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Karyab
              </span>
              <img className="h-10 w-auto " src={logo} alt="React Jobs" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
