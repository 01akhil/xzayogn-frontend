import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/SideBar";
import BotHeader from "../components/BotHeader";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answerString } = location.state || {};

  const [result, setResult] = useState(null);
  const [result1, setResult1] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "Realistic",
      color: "#FF6384",
      details:
        "People with Realistic interests like work that includes practical, hands-on problems and answers. Often people with Realistic interests do not like careers that involve paperwork or working closely with others. They like working with plants and animals; real-world materials like wood, tools, and machinery; and outside work",
    },
    {
      title: "Investigative",
      color: "#36A2EB",
      details:
        "People with Investigative interests like work that has to do with ideas and thinking rather than physical activity or leading people. They like searching for facts and figuring out problems.",
    },
    {
      title: "Artistic",
      color: "#FFCE56",
      details:
        "People with Artistic interests like work that deals with the artistic side of things, such as acting, music, art, and design. They like creativity in their work and work that can be done without following a set of rules",
    },
    {
      title: "Social",
      color: "#4BC0C0",
      details:
        "People with Social interests like working with others to help them learn and grow. They like working with people more than working with objects, machines, or information. They like teaching, giving advice, and helping and being of service to people.",
    },
    {
      title: "Enterprising",
      color: "#9966FF",
      details:
        "People with Enterprising interests like work that has to do with starting up and carrying out business projects. These people like taking action rather than thinking about things. They like persuading and leading people, making decisions, and taking risks for profits.",
    },
    {
      title: "Conventional",
      color: "#FF9F40",
      details:
        "People with Conventional interests like work that follows set procedures and routines. They prefer working with information and paying attention to details rather than working with ideas. They like working with clear rules and following a strong leader.",
    },
  ];

  
  const fetchResults = async (url, setter) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setter(response.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!answerString) return;

    fetchResults(
      `${import.meta.env.VITE_API_URL}/api/results?answers=${answerString}`,
      setResult1
    );

    fetchResults(
      `${import.meta.env.VITE_API_URL}/api/careers?answers=${answerString}`,
      setResult
    );
  }, [answerString]);

  const careerInfo =
    result?.careers?.career?.map((career) => ({
      title: career.title,
      code: career.code,
      fit: career.$?.fit || "N/A",
      href: career.$?.href,
      tags: career.tags?.$ || {},
    })) || [];

  const handleCareerClick = (careerCode) => {
    navigate(`/careers/${careerCode}`);
  };

  const chartData = result1
    ? {
        labels: result1.results.result.map((r) => r.area),
        datasets: [
          {
            label: "Interest Areas",
            data: result1.results.result.map((r) => parseInt(r.score)),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
          },
        ],
      }
    : null;

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center bg-[#1a1a1a] text-white"
    style={{ fontFamily: 'Futura Now Headline' }}>
      <div className="flex w-full">
        <SideBar />
        <div className="flex flex-col items-center w-[80vw] text-white">
          <BotHeader />

          <h1 className="text-2xl h-[10vh]">Best Careers For You</h1>
          <main className="flex-grow w-full h-screen overflow-y-scroll">
            {chartData && (
              <div className="flex items-center justify-center w-[100%] h-[70vh] mb-[10vh]">
               
                <Pie data={chartData} />
              
                
                <div className="flex flex-col gap-3 mt-[10vh]">
     
      <div className="grid grid-cols-3 gap-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-md h-[25vh] w-[12vw] text-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: card.color }}
            onMouseEnter={() => setHoveredCard(card)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      
      <div className=" p-2 rounded-md text-white w-[37vw] h-[20vh]">
        <p>
          {hoveredCard
            ? hoveredCard.details
            : "Hover over a card to see more information."}
        </p>
      </div>
    </div>
              </div>
            )}

            {loading && (
              <p className="text-center">Getting Best Careers For You...</p>
            )}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && careerInfo.length > 0 ? (
              <ul className="career-list space-y-4">
                {careerInfo.map((career, index) => (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    key={index}
                    className="career-item bg-[#2c2d2c] hover:bg-[#343535] rounded-lg p-4 transition-colors duration-300 cursor-pointer"
                    onClick={() => handleCareerClick(career.code)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">{career.title}</h3>
                      <CircleArrowRight />
                    </div>
                    {career.apprenticeship && (
                      <ul className="tags flex flex-wrap mt-2 gap-2">
                        <li className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          Apprenticeships: {career.apprenticeship}
                        </li>
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p></p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
