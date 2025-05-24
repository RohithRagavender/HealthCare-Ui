import React from "react";
import { Bell, Search, UserCircle, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm  sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="relative">
            <div className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <div className="hidden md:block relative flex-1 max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2  cursor-pointer  rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 ">
            <button className="p-1 rounded-full text-blue-500  hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 relative">
              <Bell className="h-5 w-5 md:h-6 md:w-6 cursor-pointer" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="hidden sm:flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 group">
              <div className="p-1 md:p-1.5 cursor-pointer hover:text-white bg-sky-500 rounded-full md:rounded-3xl transition-all duration-300 group-hover:rotate-180 text-black">
                <Plus className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </button>

            <div className="relative">
              <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <div className="relative">
                  <UserCircle className="h-8 w-8 cursor-pointer text-gray-500" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
