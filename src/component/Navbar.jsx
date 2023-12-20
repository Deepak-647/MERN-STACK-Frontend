import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header>
        <div className="flex items-center justify-between p-6">
          <div className="text-2xl">
            <Link to="/">
              Beyond<span className="text-slate-300 ml-2">Tech</span>
              
            </Link>
            
          </div>
          <nav className="hidden sm:flex">
            <ul className="flex list-none gap-2">
              <li className="px-2 text-lg">
                <Link to="/" className="focus:underline focus:text-xl">
                  Home
                </Link>
                
              </li>
              <li className="px-2 text-lg">
                <Link
                  to="/about"
                  className="focus:underline focus:text-xl"
                >
                  About
                </Link>
              </li>
              <li className="px-2 text-lg">
                <Link
                  to="/service"
                  className="focus:underline focus:text-xl"
                >
                  Services
                </Link>
              </li>
              <li className="px-2 text-lg">
                <Link
                  to="/contact"
                  className="focus:underline focus:text-xl"
                >
                  Contact
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="px-2 text-lg">
                  <Link
                    to="/logout"
                    className="focus:underline focus:text-xl"
                  >
                    Log Out
                  </Link>
                  
                </li>
              ) : (
                <>
                  <li className="px-2 text-lg">
                    <Link
                      to="/register"
                      className="focus:underline focus:text-xl"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="px-2 text-lg">
                    <Link
                      to="/login"
                      className="focus:underline focus:text-xl"
                    >
                      Log In
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div
            className="sm:hidden flex text-3xl hover:cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? <MdOutlineClose /> : <HiMenu />}
          </div>
          <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-slate-800   absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl  z-10`}
        >
          <ul className="list-none flex  flex-col justify-end items-center flex-1">
          <li className="p-2 text-lg" onClick={()=> setToggle(false)}>
                <Link to="/" className="focus:text-violet-950 focus:text-xl">
                  Home
                </Link>
              </li>
              <li className="p-2 text-lg" onClick={()=> setToggle(false)}>
                <Link
                  to="/about"
                  className="focus:text-violet-950 focus:text-xl"
                >
                  About
                </Link>
              </li>
              <li className="p-2 text-lg" onClick={()=> setToggle(false)}>
                <Link
                  to="/service"
                  className="focus:text-violet-950 focus:text-xl"
                >
                  Services
                </Link>
              </li>
              <li className="p-2 text-lg" onClick={()=> setToggle(false)}>
                <Link
                  to="/contact"
                  className="focus:text-violet-950 focus:text-xl"
                >
                  Contact
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="p-2 text-lg" onClick={()=> setToggle(false)}>
                  <Link
                    to="/logout"
                    className="focus:text-violet-950 focus:text-xl"
                  >
                    Log Out
                  </Link>
                </li>
              ) : (
                <>
                  <li className="p-2 text-lg" onClick={()=> setToggle(false)}>
                    <Link
                      to="/register"
                      className="focus:text-violet-950 focus:text-xl"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="p-2 text-lg" onClick={()=> setToggle(false)}>
                    <Link
                      to="/login"
                      className="focus:text-violet-950 focus:text-xl"
                    >
                      Log In
                    </Link>
                  </li>
                </>
              )}
          </ul>
        </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
