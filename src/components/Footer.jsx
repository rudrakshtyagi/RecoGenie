// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-100 text-gray-400 dark:text-gray-700 text-center py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm select-none">
          &copy; {new Date().getFullYear()} Recogenie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}