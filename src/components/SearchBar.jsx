import React, { useEffect, useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input.trim());
    }, 400);

    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <input
      type="search"
      placeholder="Search internships..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="w-full max-w-3xl px-4 py-3 rounded-md bg-card-dark dark:bg-card-dark text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light transition shadow-sm"
      aria-label="Search internships"
      spellCheck="false"
      autoComplete="off"
    />
  );
}

export default SearchBar;
