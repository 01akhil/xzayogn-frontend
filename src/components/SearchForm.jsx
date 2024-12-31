import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full sm:w-[60%] md:w-[40%] relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for careers, tests, or resources..."
        className="w-full py-2 pl-4 pr-10 border-b-2 border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#00aaff] transition-all duration-300"
      />
      <button
        type="submit"
        className="absolute right-2 top-2 text-[#00aaff] hover:text-[#0077cc] transition-all"
      >
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
