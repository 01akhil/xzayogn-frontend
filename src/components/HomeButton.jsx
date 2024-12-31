import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="text-white font-semibold fixed right-10 text-sm sm:text-lg hover:text-[#00aaff] transition-all duration-300 top-2"
    >
      Home
    </button>
  );
};

export default HomeButton;
