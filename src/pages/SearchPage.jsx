import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import SideBar from '../components/SideBar';
import BotHeader from '../components/BotHeader';
import { motion } from 'framer-motion';  
import { CircleArrowRight } from 'lucide-react';

const SearchPage = () => {
  const navigate = useNavigate();
  const { searchItem } = useParams();
  console.log(searchItem);

  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/search/${searchItem}`);
        console.log(response.data);

      
        const fetchedCareers = response.data.careers.career;
        setCareers(Array.isArray(fetchedCareers) ? fetchedCareers : [fetchedCareers]);
      } catch (err) {
        console.error(err);
      }
    };

    if (searchItem) {
      fetchCareers();
    }
  }, [searchItem]);

  const handleCareerClick = (careerCode) => {
    navigate(`/careers/${careerCode}`);
  };

  return (
    <div>
      <div className='w-full h-screen overflow-hidden flex justify-center bg-[#1a1a1a]'>
        <div className='w-[100vw] flex'>
          <SideBar />
          <div className='flex flex-col items-center w-[80vw] text-white'>
            <BotHeader />
            <h1 className="text-2xl font-semibold my-4 text-teal-400"></h1>
            <ul className="w-full space-y-4 overflow-y-scroll">
              {careers.map((career, index) => (
                <motion.li
                  key={career.code}
                  onClick={() => handleCareerClick(career.code)}
                  className="cursor-pointer px-4 py-2 rounded-lg bg-[#2c2d2c] hover:bg-[#343535] transition-colors duration-300 flex justify-between group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-lg font-medium">{career.title}</span>
                  <motion.div
                    className="invisible group-hover:visible group-hover:scale-105 flex justify-center items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CircleArrowRight />
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
