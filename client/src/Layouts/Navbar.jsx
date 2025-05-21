import { UserDropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../Redux/Actions/User";
import { MenuDropdown } from "../components/MenuDropdown";

const Navbar = () => {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  return (
    <>
      {/* NAVBAR */}
      {userInfo && userInfo.isAdmin ? (
        <nav className="bg-red-700 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo y Nombre */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/LOGO-Tokyo-bites.png"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                alt="Tokyo Bites logo"
              />
              <span className="text-xl sm:text-3xl font-extrabold text-white whitespace-nowrap dark:text-slate-600 hidden sm:block">
                Tokyo Bites
              </span>
            </Link>

            {/* Botones de Usuario */}
            <div className="flex space-x-3">
              {!userInfo ? (
                <Link
                  to="/login"
                  className="text-black bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center border-2 border-black dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Iniciar sesión →
                </Link>
              ) : (
                <UserDropdown logoutHandler={logoutHandler} isAdmin={true} />
              )}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="bg-red-600 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo y Nombre */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/LOGO-Tokyo-bites.png"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                alt="Tokyo Bites logo"
              />
              <span className="text-xl sm:text-3xl font-extrabold text-white whitespace-nowrap dark:text-slate-600 hidden sm:block">
                Tokyo Bites
              </span>
            </Link>

            {/* Opciones de Usuario */}
            <div className="flex items-center space-x-3">
              {!userInfo ? (
                <Link
                  to="/login"
                  className="text-black bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center border-2 border-black dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Iniciar sesión →
                </Link>
              ) : (
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  {/* MenuDropdown */}
                  <MenuDropdown />

                  {/* UserDropdown */}
                  <UserDropdown logoutHandler={logoutHandler} isAdmin={false} />
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
