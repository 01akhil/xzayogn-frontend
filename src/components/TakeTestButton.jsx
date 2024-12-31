import React from 'react'
import { useNavigate } from 'react-router-dom';
const TakeTestButton = () => {

    const navigate = useNavigate();

    const handleTakeTest = () => {
        navigate("/pschometric-test");
      };

  return (
    <div>
       <button
          onClick={handleTakeTest}
          className="w-[15vw] py-2 bg-gradient-to-r from-[#080908] via-[#313131] to-[#080908] glowing-border border-2 border-gray-300 rounded-lg text-md font-semibold hover:scale-105 transition-transform duration-300"
        >
          Take Test
        </button>
    </div>
  )
}

export default TakeTestButton
