import {
  Search,
  User,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Wallet,
  Activity,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "/contexts/authContext.jsx";

const Navbar = () => {
  const [isDown, setIsDown] = useState(false);
  const { user, signOut } = useAuth();
  const dropdownRef = useRef(null);

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
      <nav className="flex z-50 justify-between items-center backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl py-3 px-6 fixed w-11/12 max-w-7xl mt-6 rounded-full">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 text-2xl font-extrabold tracking-widest uppercase drop-shadow-2xl select-none">
            SMARTBUY
          </h1>
        </Link>

        {/* Navigation Links - Hidden on small screens */}
        <div className="hidden lg:flex justify-center font-extralight gap-8 text-sm">
          <Link to="/mobiles" className="hover:text-blue-200 transition-colors">
            Smart Phones
          </Link>
          <Link to="/laptop" className="hover:text-blue-200 transition-colors">
            Laptop
          </Link>
          <Link to="/earbuds" className="hover:text-blue-200 transition-colors">
            Earbuds
          </Link>
          <Link
            to="/headphones"
            className="hover:text-blue-200 transition-colors"
          >
            Headphones
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center flex-shrink-0">
          <input
            type="text"
            placeholder="Search device"
            className="rounded-full backdrop-blur-sm bg-white/30 border border-white/40 pl-4 pr-10 py-2 w-48 lg:w-64 outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/40 transition-all duration-300 placeholder-white/70 text-white text-sm"
          />
          <Search className="text-white absolute right-3 w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* User Section */}
        <div className="flex items-center gap-6 flex-shrink-0">
          {user ? (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDown(!isDown)}
                className="bg-white/30 border border-white/40 text-white py-1 rounded-3xl font-medium hover:bg-white/40 transition-all"
              >
                <div className="flex items-center space-x-2 px-3 py-2 rounded-full cursor-pointer">
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
                <div className="absolute right-0 mt-2 w-80 p-4 bg-black/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-white/10 z-10 flex flex-col">
                  {/* User Info Section */}
                  <div className="pb-6 flex flex-col gap-6">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="text-3xl font-semibold">
                          {user?.username}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {user?.email}
                        </div>
                      </div>
                      <div>
                        <img
                          src="./profile.jpeg"
                          className="rounded-full w-14 h-14 object-cover border-2 border-white/20"
                          alt="Profile"
                        />
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 justify-between">
                      <Link to="/help" className="flex-1">
                        <div className="hover:bg-white/10 p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 transition-all">
                          <HelpCircle size={22} />
                          <span className="text-xs">Help</span>
                        </div>
                      </Link>
                      <div className="hover:bg-white/10 p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 transition-all flex-1">
                        <Wallet size={22} />
                        <span className="text-xs">Wallet</span>
                      </div>
                      <div className="hover:bg-white/10 p-6 rounded-xl cursor-pointer flex flex-col items-center gap-2 transition-all flex-1">
                        <Activity size={22} />
                        <span className="text-xs">Activity</span>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex flex-col border-t border-white/10 pt-4">
                    <Link to="/account">
                      <div className="cursor-pointer rounded-xl py-3 px-3 mb-2 flex items-center transition-all">
                        <User size={20} className="mr-3" />
                        <span>Manage account</span>
                      </div>
                    </Link>

                    {/* Sign Out */}
                    <div className="pt-4 flex justify-center">
                      <button
                        onClick={signOut}
                        className="w-full text-black hover:bg-gray-200 py-3 rounded-xl bg-white font-medium cursor-pointer transition-all"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-blue-200 transition-colors text-sm"
              >
                Login
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2 rounded-3xl bg-white text-black font-medium hover:bg-gray-100 transition-all text-sm">
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
