// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/hackathons", label: "Hackathons" },
    { path: "/internships", label: "Internships" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-800 dark:bg-gray-200 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-400 select-none">Recogenie</div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-gray-300 dark:text-gray-700 hover:text-indigo-400 dark:hover:text-indigo-600 transition ${
                  isActive ? "font-semibold underline" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <NavLink
            to="/login"
            className="px-3 py-1 border border-indigo-400 rounded hover:bg-indigo-400 hover:text-gray-900 transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-3 py-1 bg-indigo-400 text-gray-900 rounded hover:bg-indigo-500 transition"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}