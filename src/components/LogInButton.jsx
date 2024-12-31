import React from 'react'
import { useNavigate } from 'react-router-dom';
const LogInButton = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
      };

  return (
    <>
      <button
          onClick={handleLogin}
          className="text-white font-semibold text-sm sm:text-lg  hover:text-[#00aaff] transition-all duration-300"
        >
          Log In
        </button>
    </>
  )
}

export default LogInButton
