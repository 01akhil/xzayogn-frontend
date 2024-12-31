import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fore_cleanup from "../assets/fore_cleanup.png";
import { ExternalLink } from "lucide-react";
import { CheckCircle } from "lucide-react";
import SearchBar from "../components/SearchBar";
import { ChevronDown, ChevronUp} from "lucide-react";
import axios from 'axios'
const Explore = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/product/get15`);
        console.log(response.data)
        setProducts(response.data); // Set products in state
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

 

  const data2 = [
    {
      Maincategory: "MOOCS",
      category: [ 'Academic',
        'Professional Development',
        'Skill-Based',
        'Specialized',
      'University MOOCs',
      'Corporate Training MOOCs'],
    },
    {
      Maincategory: "Jobs",
      category: ["Jobs", "Internship", "Externship"],
    },
    {
      Maincategory: "SAAS Tools",
      category: [
        'CRM',
  'Accounting and Finance',
  'Marketing',
  'Human Resources (HR)',
  'File Storage and Document Management',
  'E-Commerce',
  'Development and DevOps',
  'Customer Support',
  'Workflow Automation',
  'Learning Management System (LMS)',
  'Cybersecurity',
  'Analytics and Business Intelligence',
      ],
    },
    {
      Maincategory: "Scholarships",
      category: [
       'Merit-Based Scholarships',
  'Need-Based Scholarships',
  'Sports Scholarships',
  'Academic Scholarships',
  'Minority Scholarships',
  'Community Service Scholarships',
  'Artistic Scholarships',
  'Leadership Scholarships',
  'Religious Scholarships',
  'Employer-Sponsored Scholarships',
  'International Scholarships',
  'Disabled or Special Needs Scholarships',
  'Veterans and Military Scholarships',
  'Student Exchange Program Scholarships',
  'Research and Graduate Scholarships'
      ],
    },

    {
      Maincategory: "Exam Preparation",
      category: [
    'SAT, ACT, GRE, GMAT',
  'Professional Certification ',
  'Language Proficiency (TOEFL, IELTS)',
  'Entrance Exam',
  'Government Exam',
  'Competitive Exam',
  'High School Exam',
  'University Admission Exam',
  'Online Course Exam',
  'Coding and Technical Skill Exam',
  'Business Exam Prep',
  'Creative Arts Exam Prep',
  'Subject-Specific Exam Prep'
      ],
    },

    {
      Maincategory: "Research",
      category: [
   'Academic Research',
  'Market Research',
  'Case Study Research',
  'Experimental Research  ',
  'Survey Research ',
  'Qualitative Research  ',
  'Quantitative Research ',
  'Applied Research  ',
  'Literature Review Research',
  'Action Research',
  'Interdisciplinary Research',
  'Historical Research',
  'Innovative Technology Research',
  'Social Science Research',
  'Environmental Research',
  'Medical and Healthcare Research',
  'Educational Research',
  'Artistic and Creative Research',
  'Entrepreneurial Research'
      ],
    },

    {
      Maincategory: "Mentorship",
      category: [
   'One-on-One Mentorship',
  'Group Mentorship',
  'Peer Mentorship',
  'Reverse Mentorship',
  'E-Mentorship',
  'Career Mentorship',
  'Technical Mentorship',
  'Leadership Mentorship',
  'Academic Mentorship',
  'Entrepreneurship Mentorship',
  'Life Mentorship',
  'Cross-Cultural Mentorship',
  'Health and Wellness Mentorship',
  'Skill Development Mentorship',
  'Internship Mentorship',
  'Research Mentorship',
  'Networking Mentorship',
  'Public Speaking Mentorship',
  'Project-Based Mentorship',
  'Short-Term Mentorship'
      ],
    },

    {
      Maincategory: "Interview Prep",
      category: [
 'Technical Interview Preparation',
  'Behavioral Interview Preparation',
  'Case Study Interview Preparation',
  'Panel Interview Preparation',
  'Phone Interview Preparation',
  'Video Interview Preparation',
  'One-on-One Interview Preparation',
  'Group Discussion Preparation',
  'HR Interview Preparation',
  'Coding Interview Preparation',
  'Aptitude Test Preparation',
  'Situational Interview Preparation',
  'Competency-Based Interview Preparation',
  'Mock Interview Practice',
  'Portfolio Presentation Preparation',
  'Stress Interview Preparation',
  'Industry-Specific Interview Preparation',
  'Entry-Level Interview Preparation',
  'Executive-Level Interview Preparation',
  'Leadership and Management Interview Preparation'
      ],
    },
  ];

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(new Set());
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleVisitProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCategorySelect = async (subcategory) => {
    
    setSelectedSubCategory(subcategory);
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/product/getProductsByCategory`, {
        params: {
          subCategory: subcategory
        }
      });
      console.log(response.data)
      setProducts(response.data); // Set fetched products in the state
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to fetch products');
    }
  };

  const toggleCategorySelection = (subcategory) => {
    console.log(subcategory);
    handleCategorySelect(subcategory);
  };

  const handleHome = () => {
    navigate("/");
  };

  const filteredData =
  selectedSubCategory
    ? products.filter((item) =>
        
        item.subCategory?.toLowerCase() === selectedSubCategory?.toLowerCase()
      )
    : products;


      const [expandedCategories, setExpandedCategories] = useState({});

  const toggleExpand = (index) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className="w-[100vw] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      <div className="absolute top-4 left-4 z-10 flex">
        <button
          onClick={handleHome}
          className="text-white font-semibold text-sm sm:text-lg hover:text-[#00aaff] transition-all duration-300"
        >
          Home
        </button>
      </div>
      <SearchBar />

      <div className="w-[100vw] h-[90vh] flex items-center justify-center gap-2">
       
      <div className="w-[18vw] h-[90vh] border-2 border-[#ffffffa9] rounded-md hidden lg:flex flex-col">
      <div className="flex w-full h-[10vh] items-center justify-between p-4 border-b-2 border-[#ffffff8c]">
        <h1 className="text-white text-lg font-semibold">Categories</h1>
      </div>

      <div className="w-full h-[78vh] overflow-y-auto overflow-x-hidden">
        {data2.map((categoryData, index) => {
          const isExpanded = expandedCategories[index];
          const hasMoreThanFive = categoryData.category.length > 5;
          const displayedSubCategories = isExpanded
            ? categoryData.category
            : categoryData.category.slice(0, 5);

          return (
            <div
              key={index}
              className="p-4 border-b-[#ffffff8c] border-b-2 cursor-pointer"
            >
              <h2 className="text-[#d1cfcf] text-sm mb-4">
                {categoryData.Maincategory}
              </h2>
              <div className="space-y-3 ml-5">
                {displayedSubCategories.map((item, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:text-[#00aaff]"
                    onClick={() => toggleCategorySelection(item)}
                  >
                    <span
                      className={`w-[20px] h-[20px] rounded-full border-2 ${
                        selectedCategory.has(item)
                          ? "border-[#00aaff]"
                          : "border-white"
                      } bg-transparent flex items-center justify-center`}
                    >
                      {selectedCategory.has(item) && (
                        <CheckCircle className="text-[#00aaff] w-4 h-4" />
                      )}
                    </span>
                    <h3 className="text-white text-sm">{item}</h3>
                  </div>
                ))}
              </div>
              {hasMoreThanFive && (
                <div
                  className="text-gray-300 hover:text-gray-100 text-sm mt-2 ml-5 flex items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="ml-1" />
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

        <div className="w-[98vw] md:w-[78vw] h-[90vh] border-2 border-[#ffffffa9] rounded-md">
          <div className="w-full h-[10vh] border-b-2 border-[#ffffffa9] flex items-center">
            <h1 className="font-semibold text-white text-lg pl-4">Products</h1>
          </div>

          <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-x-hidden overflow-y-auto md:gap-2 md:w-[78vw] h-[78vh] p-2 pr-0">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="w-[45vw] h-[35vh] lg:h-[25vh] lg:w-[25vw] border-2 border-[#ffffffa9] rounded-lg bg-[#333] overflow-hidden transition-all duration-300 transform hover:shadow-xl relative md:w-[37vw] md:h-[40vh] xl:w-[18vw] xl:h-[42vh]"
              >
                <div className="flex items-center justify-center mt-2 gap-2">
                  <img
                    src={item.logo}
                    alt="Logo"
                    className="w-[10vh] h-[10vh] ml-3 object-cover rounded-md transition-all duration-300 transform hover:scale-110"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#ffffffb9] text-wrap text-xl font-semibold mb-1 hover:text-[#00aaff] transition-colors duration-300 truncate">
                      {item.productName}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">
                        {"★".repeat(item.noOfStars)}
                        {"☆".repeat(5 - item.noOfStars)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col h-[50%] justify-between">
                  <p className="text-[#d1cfcf] text-sm mb-4 line-clamp-5 mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-[#00aaff] text-white px-4 py-1 rounded-md hover:bg-[#0088cc] transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
                    onClick={() => handleVisitProduct(item._id)}
                  >
                    Visit
                    <ExternalLink className="w-[3vh]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;



