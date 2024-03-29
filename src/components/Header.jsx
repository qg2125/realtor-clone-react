import { useLocation, useNavigate } from "react-router";
function Header() {
  const locations = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(Route) {
    return Route === locations.pathname;
  }

  return (
    <div className="bg-white border-b shadow-sm stikcy top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-3xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm  cursor-pointer ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500  border-b-[3px] font-semibold"
                  : "font-semibold text-gray-400 border-b-[3px] border-b-transparent"
              } `}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm  cursor-pointer ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-red-500  border-b-[3px] font-semibold"
                  : "font-semibold text-gray-400 border-b-[3px] border-b-transparent"
              } `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm  cursor-pointer ${
                pathMatchRoute("/sign-in")
                  ? "text-black border-b-red-500  border-b-[3px] font-semibold"
                  : "font-semibold text-gray-400 border-b-[3px] border-b-transparent"
              } `}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
