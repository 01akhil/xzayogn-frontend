import React from 'react'
import { Plus } from 'lucide-react'
import { useState } from 'react';
const SideBar = () => {

    const [conversations, setConversations] = useState(['Conversation 1', 'Conversation 2']);
     const [activeConversation, setActiveConversation] = useState(0);
  return (
    <>
       <div
          className={`w-1/5 h-screen text-white flex flex-col `}
          style={{ fontFamily: 'Futura Now Headline' }}
        >
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-md font-semibold">Chats</h2>
            <Plus />
          </div>
          <div className="flex-1 overflow-y-auto space-y-1">
            {conversations.map((conversation, index) => (
              <div
                key={index}
                onClick={() => switchConversation(index)}
                className={`p-3 ml-2 mr-2 text-md rounded-lg cursor-pointer hover:bg-[#202120] ${
                  index === activeConversation ? 'bg-[#202120]' : ''
                }`}
              >
                {conversation}
              </div>
            ))}
          </div>

          <div>
          <button
       
        className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full"
      >
       
      </button>
          </div>
        </div>
    </>
  )
}

export default SideBar
