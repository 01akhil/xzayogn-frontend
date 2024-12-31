import React, { useState } from 'react';
import fore_cleanup from "../assets/fore_cleanup.png";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios'
const SignUp = () => {

    const navigate = useNavigate();
const location=useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogInRedirect = () => {
    navigate('/login'); // Redirect to /signup page
  };

const handleSignUp=async (e)=>{
  e.preventDefault();
  try{
    const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`,{email,password});
    if(response.data.success){
      navigate(location.state?.from || '/explore'); 
    }
    else{
      alert(response.data.message);
    }
  }
  catch(error){
    console.error('Sign up failed', error);
    alert(error); 
  }
}

  return (
    <div
      className="w-[100vw] text-white min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center "
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      <div className="bg-transparent border-gray-50 p-4 rounded-lg shadow-lg lg:w-[50vw] md:w-[50vw] xl:w-[30vw] xl:h-[45vh] h-[45vh]">
        <h1 className="text-xl font-bold text-center text-gray-100"></h1>

   
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[7vh] p-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00aaff] duration-300 bg-transparent hover:shadow-[0_0_5px_#9b59b6,0_0_10px_#9b59b6,0_0_15px_#9b59b6] transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
      
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[7vh] p-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition-all duration-300 bg-transparent hover:shadow-[0_0_5px_#9b59b6,0_0_10px_#9b59b6,0_0_15px_#9b59b6]"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className='flex items-center'>
            <button
              type="submit"
              className="w-[50%] mx-auto border hover:shadow-[0_0_10px_#9b59b6,0_0_20px_#9b59b6,0_0_30px_#9b59b6]  text-white py-1 rounded-md  transition-all duration-300"
            >
              Sign Up
            </button>

           
          </div>
        </form>

    
        <div className="text-center flex items-center justify-center gap-2 mt-5">
          <p className="text-sm text-[#636262]">Already have an account?</p>
             <span onClick={handleLogInRedirect}  className="text-[#00aaff] hover:underline">Login</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
