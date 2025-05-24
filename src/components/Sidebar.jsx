import React from "react";
import navLinks from "../data/navLinks";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen overflow-y-auto bg-white shadow-md flex flex-col p-4">
      <h1 className="text-3xl font-semibold text-sky-400 text-shadow-sky-800 mb-8 px-2">
        <span className="neon-sky">Health</span>
        <span className="text-gray-800">care.</span>
      </h1>
      {navLinks.map((section, idx) => (
        <div key={idx} className="mb-6">
          {section.title && (
            <h2 className="text-gray-400 text-sm font-semibold uppercase px-2 mb-2">
              {section.title}
            </h2>
          )}
          <ul className="space-y-2">
            {section.items.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center text-gray-700 hover:bg-sky-100 hover:text-sky-600 p-2 rounded-lg cursor-pointer transition"
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
