import {
  Search,
  User,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Wallet,
  Activity,
  IndianRupee,
  GraduationCap,
} from "lucide-react";
import { useRef, useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "/contexts/authContext.jsx";

const Navbar = () => {
  const [isDown, setIsDown] = useState(false);

  const { user, signOut } = useAuth();

  const dropdownRef = useRef(null);

  // Close dropdown if click happens outside

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <nav className="flex z-50 justify-between items-center backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl py-3 px-6 fixed w-11/12 max-w-6xl mt-6 rounded-full">
        <div>
          <h1
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 
                 text-2xl font-extrabold tracking-widest uppercase drop-shadow-2xl select-none"
          >
            Tech Advisor
          </h1>
        </div>
        <div className="relative flex items-center w-72">
          <input
            type="text"
            placeholder="Enter device name"
            className="rounded-full backdrop-blur-sm bg-white/30 border border-white/40 pl-4 pr-10 py-2 w-full outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/40 transition-all duration-300 placeholder-white/70 text-white"
          />
          <Search className="text-white absolute right-3 w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDown(!isDown)}
                className="bg-white text-black px-4 py-2 rounded-3xl font-medium"
              >
                <div className="flex items-center space-x-2 px-3 py-2 rounded-full cursor-pointer transition-colors">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{user.username}</span>
                  {isDown ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {isDown && (
                <div className="absolute right-0 mt-2  p-4 bg-white text-black rounded-lg shadow-lg  z-10 flex flex-col shadow-gray-600">
                  <div className="border-gray-300 pb-6 flex flex-col gap-6">
                    <div className="flex justify-between  gap-2">
                      <div className="flex flex-col gap-2">
                        <div className="text-4xl font-semibold">
                          {user?.username}
                        </div>
                        <div>5 ⭐️</div>
                      </div>
                      <div>
                        <img
                          src="./profile.jpeg"
                          className="rounded-full size-12"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-between">
                      <Link to="/help">
                        <div className="bg-gray-100 p-8 rounded-2xl cursor-pointer flex flex-col items-center">
                          <HelpCircle size={20} />
                          <span>Help</span>
                        </div>
                      </Link>
                      <div className="bg-gray-100 p-8 rounded-2xl cursor-pointer flex flex-col items-center">
                        <Wallet size={20} />
                        <span>Wallet</span>
                      </div>
                      <div className="bg-gray-100 p-8 rounded-2xl cursor-pointer flex flex-col items-center">
                        <Activity size={20} />
                        <span>Activity</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-2xl py-4 px-3 flex items-center justify-between">
                      <div className="ml-2">Uber Cash</div>

                      <div className="flex items-center">
                        <IndianRupee size={20} />
                        <p className="font-bold">100.00</p>
                      </div>
                    </div>
                    <div className="cursor-pointer  py-4 px-3 flex items-center">
                      <User size={20} className="mr-2" />
                      <span>Manage account</span>
                    </div>
                    <div className="cursor-pointer py-4 px-3 flex items-center">
                      <GraduationCap size={20} className="mr-2" />
                      <span>Promotions</span>
                    </div>

                    <div className="border-t border-gray-300 pt-6 justify-center flex py-4">
                      <button
                        onClick={signOut}
                        className="text-red-500 px-30 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer"
                      >
                        Signout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 rounded-3xl bg-black text-white font-medium">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
