import React, { useState, useRef, useEffect } from "react";
import { SlidersHorizontal, Search } from "lucide-react";

const SearchBar = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]); // Changed to an array for multiple categories
  const filterMenuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "Categories:", categories);
  };

  const toggleFilterMenu = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (filterMenuRef.current && !filterMenuRef.current.contains(e.target)) {
      setIsFilterVisible(false);
    }
  };

  const handleCategoryToggle = (category) => {
    setCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category); // Remove category if already selected
      } else {
        return [...prev, category]; // Add category if not already selected
      }
    });
    setIsFilterVisible(false); // Close the filter menu after selecting a category
  };

  // Close the filter menu if the user clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[10vh] flex items-center justify-center text-[#fbfbfae7] space-y-6 sm:space-y-4">
      {/* Search form */}
      <form
        onSubmit={handleSearch}
        className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] relative mt-2"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search careers, tests, resources..."
          className="w-full py-2 pl-4 pr-10 border-b-2 border-white bg-transparent text-white placeholder-[#fbfbfae7] focus:outline-none focus:border-[#00aaff] transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 py-2 px-4 text-[#00aaff] hover:text-[#00aaff]"
        >
          <Search />
        </button>
      </form>

      {/* Filter menu toggle */}
      <div className="relative">
        <SlidersHorizontal
          className="text-white mb-3 ml-1 md:ml-4 lg:ml-4 xl:ml-4 cursor-pointer transition-all duration-300 hover:text-[#00aaff]"
          onClick={toggleFilterMenu}
        />

        {isFilterVisible && (
          <div
            ref={filterMenuRef}
            className="absolute top-12 h-[50vh] overflow-y-auto right-0 bg-[#636262] text-white p-4 rounded-lg shadow-lg w-48 transform transition-all duration-300 ease-in-out z-10"
          >
            <div className="mb-4">
              {/* Display categories as clickable buttons */}
              <div className="space-y-2">
                {[
                  "moocs",
                  "upskilling",
                  "jobHunting",
                  "saasTools",
                  "scholarships",
                  "examPrep",
                  "research",
                  "mentorship",
                  "artCreative",
                  "interviewPrep",
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryToggle(category)}
                    className={`block w-full text-left p-2 bg-[#636262] hover:bg-[#757474] transition-all duration-300 ${
                      categories.includes(category) ? "bg-[#00aaff]" : ""
                    }`}
                  >
                    {category
                      .charAt(0)
                      .toUpperCase() +
                      category.slice(1).replace(/([A-Z])/g, " $1")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
