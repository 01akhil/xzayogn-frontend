import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useState } from 'react'
const BotHeader = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/explore");
  };

  const handleTest = () => {
    navigate("/pschometric-test");
  };

  const [searchItem,setSearchItem]=useState('');

  const handleKeyDown=(event)=>{
    if(event.key==='Enter' && searchItem.trim()!==''){
      navigate(`/search/${searchItem}`)
    }
  }

  return (


    

    <div className='bg-[#2c2d2c] w-full h-[8.7vh] ml-4 rounded-md flex items-center justify-between p-4'>
      <h1 className='text-white text-3xl tracking-widest'
        style={{
          fontFamily: 'Futura Now Headline',
          WebkitTextStroke: '2px ',
        }}
      >ECS</h1>

<div className='w-[40vw] ml-[25vh]  bg-[#2c2d2c] text-white'>
 <input
 type='text'
 placeholder='Search careers here'
 value={searchItem}
 onChange={(e)=>setSearchItem(e.target.value)}  
 onKeyDown={handleKeyDown}

 className='w-full max-w-md p-2 border-2 rounded-lg focus:outline-none focus:ring-2  bg-[#2c2d2c] border-white'>
 

 </input>
</div>

      <div className='flex gap-2'>
        <button
          onClick={handleExplore}
          className="relative text-white font-semibold text-md sm:text-md group"
          style={{
            fontFamily: 'Futura Now Headline',
          }}
        >
          Market Place
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full group-hover:left-0 group-hover:bottom-0"></span>
        </button>

        <button
          onClick={handleTest}
          className="relative text-white font-semibold text-md sm:text-md group"
          style={{
            fontFamily: 'Futura Now Headline',
          }}
        >
          Psychometric Test
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full group-hover:left-0 group-hover:bottom-0"></span>
        </button>

        <div className='flex items-center'>
        <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white'>
          <img src="https://i.pravatar.cc/300" alt="User Avatar" className='w-full h-full object-cover' />
        </div>
      </div>
      </div>


      
    </div>
  )
}

export default BotHeader
