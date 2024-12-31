import React from 'react'
import { useNavigate } from 'react-router-dom';
const ExploreButton = () => {

    const navigate = useNavigate();

    const handleExplore = () => {
        navigate("/explore");
      };

  return (
    <>
        <button
          onClick={handleExplore}
          className="text-white font-semibold text-sm sm:text-lg underline hover:text-[#00aaff] transition-all duration-300"
        >
          Explore
        </button>
    </>
  )
}

export default ExploreButton
