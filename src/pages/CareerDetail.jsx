import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import BotHeader from "../components/BotHeader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/SideBar";
const CareerDetail = () => {
  const { careerCode } = useParams();
  const [careerDetail, setCareerDetail] = useState(null);
  const navigate = useNavigate();

  const [isSliding, setIsSliding] = useState(false);


  const handleClick = (path, state = {}) => {
    setIsSliding(true);
    setTimeout(() => {
      navigate(path, { state });
    }, 300); // Wait for the animation to complete before navigating
  };

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}`
        );
        console.log(response.data);
        setCareerDetail(response.data.career);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCareerDetails();
  }, [careerCode]);

  const [knowledge, setKnowledge] = useState(null);

  useEffect(() => {
    const fetchEducationDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/knowledge`
        );
        console.log(response.data);
        setKnowledge(response.data.knowledge.group);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEducationDetails();
  }, [careerCode]);

  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/skills`
        );
        console.log(response.data);
        setSkills(response.data.skills.group);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSkills();
  }, [careerCode]);

  const [abilities, setAbilities] = useState(null);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/abilities`
        );
        console.log(response.data);
        setAbilities(response.data.abilities.group);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAbilities();
  }, [careerCode]);

  const [personality, setPersonality] = useState(null);

  useEffect(() => {
    const fetchPersonality = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/careers/${careerCode}/personality`
        );
        console.log(response.data);
        setPersonality(response.data.personality);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPersonality();
  }, [careerCode]);

  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    const fetchTechnology = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/technology`
        );
        console.log(response.data);
        setTechnology(response.data.technology);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTechnology();
  }, [careerCode]);

  const [jobOutlook, setJobOutlook] = useState(null);

  useEffect(() => {
    const fetchJobOutlook = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/careers/${careerCode}/job_outlook`
        );
        console.log(response.data);
        setJobOutlook(response.data.job_outlook);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobOutlook();
  }, [careerCode]);

  const [exploreMore, setExploreMore] = useState(null);

  useEffect(() => {
    const fetchExploreMore = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/careers/${careerCode}/explore_more`
        );
        console.log(response.data);
        setExploreMore(response.data.explore_more);
      } catch (err) {
        console.log(err);
      }
    };

    fetchExploreMore();
  }, [careerCode]);

  const [careerVideo, setCareerVideo] = useState(null);
  useEffect(() => {
    const fetchCareerVideo = async () => {
      try {
        console.log(careerCode);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careerVideos/${careerCode}`
        );
        console.log(response.data);
        setCareerVideo(response.data.youtubeVideoPage);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCareerVideo();
  }, [careerCode]);

  const [education, setEducation] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/careers/${careerCode}/education`
        );
        console.log(response.data);
        setEducation(response.data.education);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEducation();
  }, [careerCode]);

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center bg-[#1a1a1a]">
      <div className="w-full flex">
        <SideBar />

        <div className="w-4/5 flex flex-col items-center">
          <BotHeader />

          <div
            className="w-full h-screen text-gray-200 overflow-y-scroll"
            style={{
              fontFamily: "Futura Now Headline",
            }}
          >
            <motion.h1
              className="text-3xl mb-[10vh]  font-bold text-white mt-[8vh]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {careerDetail?.title}
            </motion.h1>

            <div className="h-[100vh] flex flex-col gap-[15vh]">
              <motion.div
                className="flex gap-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col gap-10 w-[42vw]">
                  <p className="font-bold text-xl text-teal-400 ">
                    Also called as
                  </p>

                  {Array.isArray(careerDetail?.also_called?.title)
                    ? careerDetail?.also_called?.title.join(", ")
                    : "N/A"}
                </div>

                {careerVideo && (
                  <div
                    className="mr-[4vh]"
                    dangerouslySetInnerHTML={{ __html: careerVideo }}
                  />
                )}
              </motion.div>

              <motion.div
                className="grid grid-cols-2 mb-[5vh] gap-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h1 className="font-bold text-lg text-teal-400">
                    What they do:
                  </h1>
                  <p className="text-gray-300">{careerDetail?.what_they_do}</p>
                </div>
                <div>
                  <h1 className="font-bold text-lg text-teal-400">
                    On the job, you would:
                  </h1>
                  <ul className="flex flex-col list-disc gap-2 pl-5 text-gray-300">
                    {careerDetail?.on_the_job?.task?.map((task, index) => (
                      <li key={index} className="text-lg">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="h-[100vh]">
              <motion.div
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="border border-teal-500 rounded-lg p-6 bg-gray-800 transform transition-transform duration-300 hover:scale-95">
                  <h1 className="font-bold text-2xl mb-4 text-teal-400 uppercase">
                    Knowledge
                  </h1>
                  {knowledge ? (
                    knowledge.map((group, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-bold text-lg text-gray-200">
                          {group.title._}
                        </h3>
                        <ul className="list-disc pl-5 flex flex-col gap-1 text-gray-300">
                          {Array.isArray(group.element) ? (
                            group.element.map((item, subIndex) => (
                              <li key={subIndex}>{item._}</li>
                            ))
                          ) : (
                            <li>{group.element._}</li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>

                <div className="border border-teal-500 rounded-lg p-6 bg-gray-800 transform transition-transform duration-300 hover:scale-95">
                  <h1 className="font-bold text-2xl mb-4 text-teal-400 uppercase">
                    Skills
                  </h1>
                  {skills ? (
                    skills.map((group, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-bold text-lg text-gray-200">
                          {group.title._}
                        </h3>
                        <ul className="list-disc pl-5 flex flex-col gap-1 text-gray-300">
                          {Array.isArray(group.element) ? (
                            group.element.map((item, subIndex) => (
                              <li key={subIndex}>{item._}</li>
                            ))
                          ) : (
                            <li>{group.element._}</li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>

                <div className="border border-teal-500 rounded-lg p-6 bg-gray-800 transform transition-transform duration-300 hover:scale-95">
                  <h1 className="font-bold text-2xl mb-4 text-teal-400 uppercase">
                    Abilities
                  </h1>
                  {abilities ? (
                    abilities.map((group, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-bold text-lg text-gray-200">
                          {group.title._}
                        </h3>
                        <ul className="list-disc pl-5 flex flex-col gap-1 text-gray-300">
                          {Array.isArray(group.element) ? (
                            group.element.map((item, subIndex) => (
                              <li key={subIndex}>{item._}</li>
                            ))
                          ) : (
                            <li>{group.element._}</li>
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="h-[100vh]">
              <motion.div
                className="grid grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="border border-teal-500 rounded-lg p-6 bg-gray-800 transform transition-transform duration-300 hover:scale-95">
                  <h1 className="font-bold text-2xl mb-4 text-teal-400 uppercase">
                    Personality
                  </h1>
                  {personality ? (
                    <>
                      <p className="text-gray-300">
                        {personality.top_interest.description}
                      </p>
                      <p className="mt-4 text-gray-300">
                        They do well at jobs that need:
                      </p>
                      <div className="grid grid-cols-2 mt-4">
                        <ul className="flex flex-col list-disc gap-2 text-gray-300">
                          {personality.work_styles?.element
                            .slice(0, 3)
                            .map((item, index) => (
                              <li key={index}>{item._}</li>
                            ))}
                        </ul>
                        <ul className="flex flex-col list-disc gap-2 text-gray-300">
                          {personality.work_styles?.element
                            .slice(3)
                            .map((item, index) => (
                              <li key={index}>{item._}</li>
                            ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>

                <div className="border border-teal-500 rounded-lg p-6 bg-gray-800 transform transition-transform duration-300 hover:scale-95">
                  <h1 className="uppercase font-bold text-2xl mb-4 text-teal-400">
                    Technology
                  </h1>
                  <p className="text-gray-300">
                    You might use software like this on the job:
                  </p>
                  {technology ? (
                    <div className="flex flex-col gap-4 mt-4">
                      {technology.category.map((cat, index) => (
                        <div key={index}>
                          <h3 className="font-bold text-lg text-gray-200">
                            {cat.title}
                          </h3>
                          <ul className="list-disc pl-5 flex flex-col gap-1 text-gray-300">
                            {Array.isArray(cat.example) ? (
                              cat.example.map((item, idx) => (
                                <li key={idx}>{item._ || item}</li> 
                              ))
                            ) : (
                              <li>{cat.example._}</li> 
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="min-h-[65vh]">
              <motion.div
                className="grid grid-cols-3 gap-4 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-2 border-gray-700 bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-95 shadow-lg">
                  <h1 className="uppercase font-bold text-2xl text-teal-400 text-center mb-4">
                    Job Outlook
                  </h1>

                  {jobOutlook ? (
                    <>
                    
                      <div className="mb-6">
                        <p className="text-gray-300">
                          <span className="font-bold text-teal-400">
                            Description:
                          </span>{" "}
                          {jobOutlook.outlook.description}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-bold text-teal-400">
                            Category:
                          </span>{" "}
                          {jobOutlook?.outlook?.category}
                        </p>
                      </div>

                   
                      <div className="mb-6">
                        <p className="text-gray-300">
                          <span className="font-bold text-teal-400">
                            Bright Outlook:
                          </span>{" "}
                          {jobOutlook?.bright_outlook?.description}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-bold text-teal-400">
                            Category:
                          </span>{" "}
                          {jobOutlook?.bright_outlook?.category}
                        </p>
                      </div>

                     
                      <div className="mb-6">
                        <p className="text-gray-300">
                          <span className="font-bold text-teal-400">
                            Annual Salary 10th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.annual_10th_percentile}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-bold text-teal-400">
                            Annual Median Salary:
                          </span>{" "}
                          ${jobOutlook.salary.annual_median}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-bold text-teal-400">
                            Annual Salary 90th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.annual_90th_percentile}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-bold text-teal-400">
                            Hourly Salary 10th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.hourly_10th_percentile}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-bold text-teal-400">
                            Hourly Median Salary:
                          </span>{" "}
                          ${jobOutlook.salary.hourly_median}
                        </p>
                        <p className="text-gray-300 mt-2">
                          <span className="font-bold text-teal-400">
                            Hourly Salary 90th Percentile:
                          </span>{" "}
                          ${jobOutlook.salary.hourly_90th_percentile}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-300">Loading...</p>
                  )}
                </div>


                {/* <div className="border-2 border-gray-700 bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-95 shadow-lg">
                  <h1 className="uppercase font-bold text-2xl text-teal-400 text-center mb-4">
                    Explore More
                  </h1>

                
                  {exploreMore?.careers?.career?.length > 0 ? (
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exploreMore?.careers?.career?.length > 0 ? (
                          <div className="mb-6">
                            <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
                              Related Careers
                            </h2>
                            <ul className="space-y-2">
                              {exploreMore.careers.career.map(
                                (career, index) => {
                                  const careerCode = career.code; 
                                  return (
                                    <li
                                      key={index}
                                      className="bg-gray-700 p-3 rounded-lg text-sm"
                                    >
                                      <button
                                        onClick={() =>
                                          navigate(`/careers/${careerCode}`)
                                        } // Navigate on click
                                        className="text-teal-400 hover:underline w-full text-left"
                                      >
                                        {career.title}
                                      </button>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        ) : (
                          <p className="text-teal-400 text-center">
                            No related careers available.
                          </p>
                        )}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-teal-400 text-center">
                      No related careers available.
                    </p>
                  )}

               
                  {exploreMore?.industries?.industry?.length > 0 ? (
                    <div className="bg-gray-700 p-3 text-sm rounded-lg">
                      <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
                        Related Industries
                      </h2>
                      {exploreMore.industries.industry.map(
                        (industry, index) => {
                          const industryName = encodeURIComponent(
                            industry.title.replace(/\s+/g, "-").toLowerCase()
                          ); // Format industry title for URL
                          return (
                            <div key={index} className="mb-4">
                              <button
                                onClick={() =>
                                  navigate(`/careers/browse/${industryName}`, {
                                    state: { industryCode: industry.code },
                                  })
                                }
                                className="block text-teal-400 hover:underline text-center w-full"
                              >
                                {industry.title}
                              </button>
                              <p className="text-gray-300 text-sm text-center mt-2">
                                <span className="font-bold">
                                  Percent Employed:
                                </span>{" "}
                                {industry["$"].percent_employed}%
                              </p>
                            </div>
                          );
                        }
                      )}
                    </div>
                  ) : (
                    <p className="text-teal-400 text-center">
                      No related industries available.
                    </p>
                  )}
                </div> */}



<div className="border-2 border-gray-700 bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-95 shadow-lg">
  <h1 className="uppercase font-bold text-2xl text-teal-400 text-center mb-4">
    Explore More
  </h1>

  {exploreMore?.careers?.career?.length > 0 ? (
    <div className="mb-6">
      <ul className="space-y-2">
        <div className="mb-6">
          <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
            Related Careers
          </h2>
          <ul className="space-y-2">
            {exploreMore.careers.career.map((career, index) => {
              const careerCode = career.code;
              return (
                <li key={index} className="bg-gray-700 p-3 rounded-lg text-sm">
                  <a
                    href={`/careers/${careerCode}`} // Use a regular anchor tag for full reload
                    className="text-teal-400 hover:underline w-full text-left"
                  >
                    {career.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ul>
    </div>
  ) : (
    <p className="text-teal-400 text-center">No related careers available.</p>
  )}

  {exploreMore?.industries?.industry?.length > 0 ? (
    <div className="bg-gray-700 p-3 text-sm rounded-lg">
      <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
        Related Industries
      </h2>
      {exploreMore.industries.industry.map((industry, index) => {
        const industryName = encodeURIComponent(
          industry.title.replace(/\s+/g, "-").toLowerCase()
        ); // Format industry title for URL
        return (
          <div key={index} className="mb-4">
            <a
              
              onClick={() =>
                navigate(`/careers/browse/${industryName}`, {
                  state: { industryCode: industry.code },
                })
              }// Use a regular anchor tag for full reload
              className="block cursor-pointer text-teal-400 hover:underline text-center w-full"
            >
              {industry.title}
            </a>
            <p className="text-gray-300 text-sm text-center mt-2">
              <span className="font-bold">Percent Employed:</span> {industry["$"].percent_employed}%
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="text-teal-400 text-center">No related industries available.</p>
  )}
</div>



                <div className="border-2 border-gray-700 bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-95 shadow-lg">
                  <h1 className="uppercase font-bold text-2xl text-teal-400 text-center mb-4">
                    Education
                  </h1>

                  {/* Education Section */}
                  {education && (
                    <div className="mb-6">
                      <p className="text-gray-300">
                        <span className="font-bold text-teal-400">
                          Education Needed:
                        </span>
                        {Array.isArray(
                          education?.education_usually_needed?.category
                        ) ? (
                          education.education_usually_needed.category.map(
                            (category, index) => (
                              <span key={index}>
                                {category}
                                {index <
                                  education.education_usually_needed.category
                                    .length -
                                    1 && ", "}
                              </span>
                            )
                          )
                        ) : (
                          <span>
                            {education?.education_usually_needed?.category}
                          </span>
                        )}
                      </p>
                      <p className="text-gray-300 mt-2">
                        <span className="font-bold text-teal-400">
                          Job Zone:
                        </span>{" "}
                        {education.job_zone}
                      </p>
                      <p className="text-gray-300 mt-2">
                        <span className="font-bold text-teal-400">
                          Get started on your career:
                        </span>
                      </p>

                      <div className="flex flex-col gap-3 mt-2">
                        <div className="hover:bg-gray-900 h-[6vh] w-full border-2 rounded-lg flex items-center justify-center cursor-pointer">
                          Find Certification
                        </div>

                        <div className="hover:bg-gray-900 h-[6vh] w-full border-2 rounded-lg flex items-center justify-center cursor-pointer">
                          Find Licenses
                        </div>

                        <div className="h-[6vh] w-full border-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-900">
                          Apprenticeship.gov
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Apprenticeships Section */}
                  {education?.apprenticeships?.title &&
                    Array.isArray(education.apprenticeships.title) && (
                      <div className="bg-gray-700 p-3 text-sm rounded-lg mt-6">
                        <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
                          Apprenticeships
                        </h2>
                        {education.apprenticeships.title.map((item, index) => (
                          <div key={index} className="mb-2">
                            <p className="text-gray-300 text-center">
                              {item._}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </motion.div>
            </div>

            {/* salary card */}

            <div className="flex items-center justify-center h-[100vh]">
              <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-2 border-gray-700 bg-gray-800 p-6 rounded-lg transform transition-transform duration-300  shadow-lg flex flex-col w-[70vw]">
                  <div>
                    <h1 className="uppercase font-bold text-2xl text-teal-400 text-center mb-4">
                      Salary Statistics
                    </h1>
                  </div>

                  <div className="grid grid-cols-2 gap-10">
                    {/* Annual Salary Section */}
                    <div className="w-full bg-gray-700 p-4 rounded-lg hover:scale-95 transform transition-transform duration-300">
                      <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
                        Annual Salary
                      </h2>
                      <div className="relative w-full h-40">
                        {/* 10th Percentile Bar */}
                        <div
                          className="absolute bg-teal-500 text-xs text-center text-gray-900"
                          style={{
                            bottom: 0,
                            height: `${
                              (jobOutlook?.salary?.annual_10th_percentile /
                                jobOutlook?.salary?.annual_90th_percentile) *
                              100
                            }%`, // Dynamic height
                            left: "5%",
                            width: "20%", // Adjust width as needed
                          }}
                        >
                          ${jobOutlook?.salary?.annual_10th_percentile}
                        </div>
                        {/* Median Bar */}
                        <div
                          className="absolute bg-teal-400 text-xs text-center text-gray-900"
                          style={{
                            bottom: 0,
                            height: `${
                              (jobOutlook?.salary?.annual_median /
                                jobOutlook?.salary?.annual_90th_percentile) *
                              100
                            }%`, // Dynamic height
                            left: "40%",
                            width: "20%", // Adjust width as needed
                          }}
                        >
                          ${jobOutlook?.salary?.annual_median}
                        </div>
                        {/* 90th Percentile Bar */}
                        <div
                          className="absolute bg-teal-300 text-xs text-center text-gray-900"
                          style={{
                            bottom: 0,
                            height: "100%", // Full height as this is the highest value
                            left: "75%",
                            width: "20%", // Adjust width as needed
                          }}
                        >
                          ${jobOutlook?.salary?.annual_90th_percentile}
                        </div>
                      </div>
                      <div className="flex justify-between mt-4 text-gray-300 text-sm">
                        <span>10th Percentile</span>
                        <span>Median</span>
                        <span>90th Percentile</span>
                      </div>
                    </div>

                    {/* Hourly Salary Section */}
                    <div className="w-full bg-gray-700 p-4 rounded-lg hover:scale-95 transform transition-transform duration-300">
                      <h2 className="font-bold text-lg text-teal-400 mb-4 text-center">
                        Hourly Salary
                      </h2>
                      <div className="relative w-full h-40">
                        {/* 10th Percentile Bar */}
                        <div
                          className="absolute bg-teal-500 text-xs text-center text-gray-900"
                          style={{
                            bottom: 0,
                            height: `${
                              (jobOutlook?.salary?.hourly_10th_percentile /
                                jobOutlook?.salary?.hourly_90th_percentile) *
                              100
                            }%`, // Dynamic height
                            left: "5%",
                            width: "20%", // Adjust width as needed
                          }}
                        >
                          ${jobOutlook?.salary?.hourly_10th_percentile}
                        </div>
                        {/* Median Bar */}
                        <div
                          className="absolute bg-teal-400 text-xs text-center text-gray-900"
                          style={{
                            bottom: 0,
                            height: `${
                              (jobOutlook?.salary?.hourly_median /
                                jobOutlook?.salary?.hourly_90th_percentile) *
                              100
                            }%`, // Dynamic height
                            left: "40%",
                            width: "20%", // Adjust width as needed
                          }}
                        >
                          ${jobOutlook?.salary?.hourly_median}
                        </div>
                        {/* 90th Percentile Bar */}
                        <div
                          className="absolute bg-teal-300 text-xs text-center text-gray-900"
                          style={{
                            bottom: 0,
                            height: "100%", // Full height as this is the highest value
                            left: "75%",
                            width: "20%", // Adjust width as needed
                          }}
                        >
                          ${jobOutlook?.salary?.hourly_90th_percentile}
                        </div>
                      </div>
                      <div className="flex justify-between mt-4 text-gray-300 text-sm">
                        <span>10th Percentile</span>
                        <span>Median</span>
                        <span>90th Percentile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
