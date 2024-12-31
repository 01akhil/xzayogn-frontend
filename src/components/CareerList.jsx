import React from 'react';

const CareerList = ({ careerInfo, onCareerClick }) => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #111a19, #1b2928, #2a3d3c)' }} className="mt-[70vh] w-[100vw] p-12 pb-20">
      <h2 className="text-3xl font-semibold text-white ">Best Careers for you</h2>
      <div className="space-y-4 mt-4 text-gray-50">
        {careerInfo.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span onClick={() => onCareerClick(item.code)} className="font-medium">{item.career}</span>
            <span className="text-sm text-gray-300">{item.fit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerList;
