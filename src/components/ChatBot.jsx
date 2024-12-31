import React from 'react'
import { useNavigate } from 'react-router-dom';
const ChatBot = () => {
    
    const navigate = useNavigate();

    const handleChatBot=()=>{
        navigate("/bot");
      }

    return (
    <>
       <button onClick={handleChatBot} className="hover:bg-teal-900 w-[10vh] rounded-full bg-teal-950 fixed bottom-2 right-8 h-[10vh] text-white">ChatBot</button>
    </>
  )
}

export default ChatBot