
import React, { useState } from 'react';
import axios from 'axios';
import { BookOpenCheck, BookOpenText, BriefcaseBusiness, GraduationCap, Lightbulb, Menu,  SendHorizontal, Store } from 'lucide-react';
import BotHeader from '../components/BotHeader';
import HeadingWithTypingEffect from '../components/HeadingWithTypingEffect';
import SideBar from '../components/SideBar';

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState(['Conversation 1', 'Conversation 2']);
  const [activeConversation, setActiveConversation] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Dark theme by default

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const updatedMessages = [...messages, { type: 'user', text: input }];
    setMessages(updatedMessages);
    setInput('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate`, {
        prompt: input,
      });
      const botReply = response.data.text;

      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: botReply },
      ]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: "I am your career guide right now I am under development, wait for few days for further updates" },
      ]);
    }
  };

  const switchConversation = (index) => {
    setActiveConversation(index);
    setMessages([]);
  };

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    // <div
    //   className={`w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-[#f0f0f0]'}`}
    // >
    //   <div className="flex w-full">
    //     {/* Sidebar */}
      
    //   <div className='hidden lg:block xl:block'>
    //     <SideBar/>
    //   </div>

    //     {/* Main Section */}
    //     <div className="w-4/5 flex flex-col items-center">
    //       <BotHeader />

    //       <div className="flex flex-col rounded-md mt-2 w-[98%] h-[90vh]">
    //         {/* Chat Container */}
    //         <div className="flex flex-col overflow-y-auto flex-grow p-6 space-y-4">
    //           {messages.length === 0 ? (
    //             <div className="flex flex-col gap-[35vh] items-center space-y-8">
    //               <HeadingWithTypingEffect
    //                 text="Heeyy, What are we looking today?"
    //                 className={`text-3xl text-center ${isDarkTheme ? 'text-white' : 'text-black'}`}
    //               />

    //               <div className="grid grid-cols-2 gap-2 pl-[10vh] pr-[18vh] w-full">
    //                 {Array(4)
    //                   .fill()
    //                   .map((_, i) => (
    //                     <div
    //                       key={i}
    //                       className={`bg-[#2c2d2c] rounded-lg p-3 text-white text-sm leading-relaxed w-[30vw] h-[10vh] transition-transform transform hover:scale-105 hover:bg-[#3a3b3a]`}
    //                     >
    //                       I am a first year student and want to be a full stack developer, what should be my roadmap.
    //                     </div>
    //                   ))}
    //               </div>
    //             </div>
    //           ) : (
    //             messages.map((message, index) => (
    //               <div
    //                 key={index}
    //                 className={`flex items-start space-x-2 rounded-lg px-4 py-2 ${
    //                   message.type === 'user'
    //                     ? 'ml-auto bg-[#303131]'
    //                     : 'mr-auto bg-[#2c2d2c]'
    //                 }`}
    //               >
    //                 {message.type === 'bot' && (
    //                   <img
    //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz95qTVjnz42D9y-F4hQzvklxMoQEWCHu_Q&s"
    //                     alt="Bot"
    //                     className="w-8 h-8 rounded-full"
    //                   />
    //                 )}
    //                 <span className={`text-[#e3e3e2]`}>{message.text}</span>
    //               </div>
    //             ))
    //           )}
    //         </div>

    //         {/* Input Section */}
    //         <div className="flex items-center h-[10vh] p-4 bg-[#2c2d2c] rounded-b-md space-x-4 w-[61vw] ml-[15vh] rounded-xl mb-2">
    //           <textarea
    //             value={input}
    //             onChange={(e) => setInput(e.target.value)}
    //             placeholder="How may I help you today?"
    //             className="flex-grow p-3 bg-[#2c2d2c] text-white rounded-lg border-none focus:outline-none resize-none max-h-[10vh]"
    //             rows={1}
    //             style={{ lineHeight: '1.5' }}
    //             onKeyDown={(e) =>
    //               e.key === 'Enter' && !e.shiftKey && sendMessage()
    //             }
    //           />
    //           <button
    //             onClick={sendMessage}
    //             className="p-2 text-white hover:bg-[#202120] rounded-lg"
    //           >
    //             <SendHorizontal />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

   
     
    // </div>







// <div className="w-[100vw] bg-[#1a1a1a] h-[100vh] flex">
//   {/* Sidebar - Hidden on small screens, shown on xl and larger */}
//   <div className="w-[20vw] h-[100vh] hidden xl:block">
//     <div className="border-b-2 border-white h-[9vh] flex items-center">
//       <h1
//         className="text-white text-2xl"
//         style={{
//           fontFamily: 'Futura Now Headline',
//         }}
//       >
//         Chats
//       </h1>
//     </div>

//     <div className="flex gap-1 flex-col mt-1 w-[98%]">
//       <div
//         className="bg-[#202120] hover:bg-[#202120] cursor-pointer h-[8vh] text-white text-lg flex items-center"
//         style={{
//           fontFamily: 'Futura Now Headline',
//         }}
//       >
//         <h1>Conversation 1</h1>
//       </div>

//       <div
//         className="hover:bg-[#202120] h-[8vh] cursor-pointer text-white text-lg flex items-center"
//         style={{
//           fontFamily: 'Futura Now Headline',
//         }}
//       >
//         <h1>Conversation 2</h1>
//       </div>
//     </div>
//   </div>

//   {/* Main Content - Responsive widths for different screen sizes */}
//   <div className="flex flex-col w-full xl:w-[80vw] sm:w-[100vw]">
//     <div className="bg-[#2c2d2c] w-full h-[8.7vh] flex items-center justify-between p-3">
//       <h1
//         className="text-white text-3xl tracking-widest"
//         style={{
//           fontFamily: 'Futura Now Headline',
//           WebkitTextStroke: '2px',
//         }}
//       >
//         ECS
//       </h1>

//       {/* Search bar - Hidden on small screens, shown on xl and larger */}
//       <div className="w-[40vw] ml-[25vh] bg-[#2c2d2c] text-white">
//         <input
//           type="text"
//           placeholder="Search careers here"
//           className="w-full max-w-md p-2 border-2 rounded-lg focus:outline-none focus:ring-2 bg-[#2c2d2c] border-white hidden xl:block"
//         />
//       </div>

//       {/* Menu - Text for xl and larger, icons for smaller screens */}
//       <div
//         className="text-white font-semibold text-sm xl:text-md flex items-center gap-4 mr-[1vh] "
//         style={{
//           fontFamily: 'Futura Now Headline',
//         }}
//       >
//         {/* Text for xl screens */}
//         <ul className="hidden xl:flex gap-4">
//           <li>Market Place</li>
//           <li>Psychometric Test</li>
//         </ul>

//         {/* Icons for smaller screens */}
//         <ul className="flex xl:hidden gap-4">
//           <Store />
//           <BookOpenCheck />
//         </ul>
//       </div>
//     </div>

//     {/* Main Content Area */}
//     <div className=" w-full h-[100vh] flex flex-col items-center justify-center">

//         <h1 className='text-white text-4xl'>What can I help with ?</h1>


//         <div className="flex items-center h-[10vh] p-4 bg-[#2c2d2c] rounded-b-md space-x-4 xl:w-[61vw] sm:w-[full] rounded-xl fixed bottom-40">
//               <textarea
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="How may I help you today?"
//                 className="flex-grow p-3 bg-[#2c2d2c] text-white rounded-lg border-none focus:outline-none resize-none max-h-[10vh]"
//                 rows={1}
//                 style={{ lineHeight: '1.5' }}
//                 onKeyDown={(e) =>
//                   e.key === 'Enter' && !e.shiftKey && sendMessage()
//                 }
//               />
//               <button
//                 onClick={sendMessage}
//                 className="p-2 text-white hover:bg-[#202120] rounded-lg"
//               >
//                 <SendHorizontal />
//               </button>
//             </div>


//     </div>
//   </div>
// </div>


<div className="w-[100vw] bg-[#1a1a1a] h-[100vh] flex flex-col md:flex-row overflow-hidden">
  {/* Sidebar - Hidden on small screens, shown on xl and larger */}
  <div className="w-full md:w-[20vw] h-[100vh] hidden xl:block lg:block">
    <div className="border-b-2 border-white h-[9vh] flex items-center">
      <h1
        className="text-white text-2xl p-2"
        style={{
          fontFamily: 'Futura Now Headline',
        }}
      >
        Chats
      </h1>
    </div>

    <div className="flex gap-1 flex-col mt-1 w-[98%]">
      <div
        className="bg-[#202120] hover:bg-[#202120] cursor-pointer h-[8vh] text-white flex items-center p-2"
        style={{
          fontFamily: 'Futura Now Headline',
        }}
      >
        <h1>Conversation 1</h1>
      </div>

      <div
        className="hover:bg-[#202120] h-[8vh] cursor-pointer text-white p-2 flex items-center"
        style={{
          fontFamily: 'Futura Now Headline',
        }}
      >
        <h1>Conversation 2</h1>
      </div>
    </div>
  </div>

  {/* Main Content - Responsive widths for different screen sizes */}
  <div className="flex flex-col w-[100vw] lg:w-[80vw] xl:w-[80vw]">
    <div className="bg-[#2c2d2c] w-full h-[8.7vh] flex items-center justify-between p-3">
    
    
      <div className='flex items-center gap-2'>

      <Menu className='text-white block xl:hidden lg:hidden'/>

      <h1
        className="text-white text-3xl tracking-widest"
        style={{
          fontFamily: 'Futura Now Headline',
          WebkitTextStroke: '2px',
        }}
      >
        ECS
      </h1>

      
      </div>

    

      {/* Search bar - Hidden on small screens, shown on xl and larger */}
      <div className="w-[40vw] sm:w-[50vw] md:w-[40vw] xl:w-[40vw] ml-[25vh] bg-[#2c2d2c] text-white">
        <input
          type="text"
          placeholder="Search careers here"
          className="w-full max-w-md p-2 border-2 rounded-lg focus:outline-none focus:ring-2 bg-[#2c2d2c] border-white hidden xl:block"
        />
      </div>

      {/* Menu - Text for xl and larger, icons for smaller screens */}
      <div
        className="text-white font-semibold text-sm xl:text-md flex items-center gap-4 mr-[1vh]"
        style={{
          fontFamily: 'Futura Now Headline',
        }}
      >
        {/* Text for xl screens */}
        <ul className="hidden xl:flex gap-4">
          <li>Market Place</li>
          <li>Psychometric Test</li>
        </ul>

        {/* Icons for smaller screens */}
        <ul className="flex xl:hidden gap-4">
          <Store />
          <BookOpenCheck />
        </ul>
      </div>
    </div>

    {/* Main Content Area */}
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl fixed top-40">

      <HeadingWithTypingEffect
                    text="Heeyy, What are we looking today?"/>

      </h1>

        <div className='xl:grid lg:grid hidden grid-cols-2 gap-3 mt-[30vh] cursor-pointer'>
          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex items-center justify-center pl-2 hover:scale-105 transition-transform duration-200 '>
            <h1>Hii , I am a first year student of computer science engineering, Give me resources to learn web development</h1>
          </div>

          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex items-center justify-center pl-2 hover:scale-105 transition-transform duration-200 '>
            <h1>Hii , I am a first year student of computer science engineering, Give me resources to learn web development</h1>
          </div>

          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex items-center justify-center pl-2 hover:scale-105 transition-transform duration-200 '>
            <h1>Hii , I am a first year student of computer science engineering, Give me resources to learn web development</h1>
          </div>

          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex items-center justify-center pl-2 hover:scale-105 transition-transform duration-200 '>
            <h1>Hii , I am a first year student of computer science engineering, Give me resources to learn web development</h1>
          </div>
        
        
        </div>

        <div className='lg:hidden xl:hidden grid grid-cols-2 gap-2 mt-[30vh] cursor-pointer'>
          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex items-center justify-center hover:scale-105 transition-transform duration-200 flex-col gap-2'>
          <BriefcaseBusiness/>
          <p>Internships</p>
          </div>

          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200 gap-2'>
          <Lightbulb/>
          <p>Research</p>
          </div>

          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex items-center justify-center hover:scale-105 transition-transform duration-200 flex-col gap-2'>
          <GraduationCap/>
          <p>Scholarships</p>
          </div>

          <div className='bg-[#2c2d2c] w-[30vw] h-[10vh] rounded-md text-white text-sm flex items-center justify-center hover:scale-105 transition-transform duration-200 flex-col gap-2'>
          <BookOpenText/>
          <p>Courses</p>
          </div>
        
        
        </div>


      <div className="flex items-center h-[10vh] p-4 bg-[#2c2d2c] space-x-4 xl:w-[61vw] lg:w-[61vw] w-[88vw] rounded-xl  fixed bottom-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How may I help you today?"
          className="flex-grow p-3 bg-[#2c2d2c] text-white rounded-lg border-none focus:outline-none resize-none max-h-[10vh]"
          rows={1}
          style={{ lineHeight: '1.5' }}
          onKeyDown={(e) =>
            e.key === 'Enter' && !e.shiftKey && sendMessage()
          }
        />
        <button
          onClick={sendMessage}
          className="p-2 text-white hover:bg-[#202120] rounded-lg"
        >
          <SendHorizontal />
        </button>
      </div>
    </div>
  </div>
</div>


  );
};

export default Bot;
