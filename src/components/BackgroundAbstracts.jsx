// src/components/BackgroundAbstracts.jsx
import React from "react";

export default function BackgroundAbstracts() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ overflow: "hidden" }}
    >
      {/* Example abstract circles and shapes with Tailwind and opacity */}
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 opacity-80 dark:opacity-80 blur-3xl animate-slow-spin"></div>
      <div className="absolute bottom-[-120px] right-[-200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow-400 via-green-400 to-cyan-500 opacity-75 dark:opacity-50 blur-2xl animate-slow-spin-reverse"></div>
      <div className="absolute top-[30%] left-[50%] w-[300px] h-[300px] rounded-full border-4 border-indigo-400 opacity-80 dark:opacity-5 mix-blend-screen blur-xl"></div>
    </div>
  );
}