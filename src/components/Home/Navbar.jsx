import { Search } from "lucide-react";

const Navbar = () => {
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
        <div>
          <img
            src="./profile.jpeg"
            alt="user-profile"
            className="h-11 w-11 rounded-full border-2 border-white/40 hover:border-white/60 transition-all cursor-pointer hover:scale-105 shadow-lg"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;