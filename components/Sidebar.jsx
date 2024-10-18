"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaUserFriends,
  FaTrophy,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "Teams", icon: <FaUserFriends />, link: "/teams" },
    { name: "Tournaments", icon: <FaTrophy />, link: "/tournaments" },
    { name: "Settings", icon: <FaCogs />, link: "/settings" },
    { name: "Logout", icon: <FaSignOutAlt />, link: "/logout" },
  ];

  return (
    <>
      <button
        className="lg:hidden p-4 text-white bg-indigo-600 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? "block" : "hidden lg:block"
        }`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800">Sparta</h2>
          <nav className="mt-6">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 mt-2 text-gray-700 rounded-md hover:bg-indigo-100 transition-colors duration-200"
                >
                  <span className="mr-2">{item.icon}</span>
                  <a href={item.link} className="text-lg">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
