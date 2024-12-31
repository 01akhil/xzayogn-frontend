import React from 'react';

const SubmitButton = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 w-[10vw] h-[7vh] text-white py-2 px-4 rounded-2xl cursor-pointer mt-[50vh] mr-[15vh]"
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Submit'}
    </button>
  );
};

export default SubmitButton;
