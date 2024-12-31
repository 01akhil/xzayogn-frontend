// import React from 'react'

// const ContactUs = () => {
//   return (
//     <div className='w-[100%] h-[80vh] flex flex-col items-center gap-10'>
//       <h1 className='text-[#dbdce1] text-3xl'>Connect with us</h1>
//       <div className='flex gap-10 font-semibold '>
//       <div className='flex flex-col gap-6'>
//             <h3 className='text-white text-xl'>Yash Chitransh</h3>
            
//            <div className='flex flex-col gap-3'>
//            <h2 className='text-[#9299a4]'>Co-Founder & CEO</h2>
//            <h5 className='text-[#9299a4]'>xyz@gmail.com</h5>
//            </div>
//         </div>

//         <div className='flex flex-col gap-6'>
//             <h3 className='text-white text-xl'>ABC</h3>
//            <div className='flex flex-col gap-3'>
//            <h2 className='text-[#9299a4]'>Co-Founder & CEO</h2>
//            <h5 className='text-[#9299a4]'>xyz@gmail.com</h5>
//            </div>
//         </div>

//         <div className='flex flex-col gap-6'>
//             <h3 className='text-white text-xl'>DEF</h3>
//            <div className='flex flex-col gap-3'>
//            <h2 className='text-[#9299a4]'>Co-Founder & CEO</h2>
//            <h5 className='text-[#9299a4]'>xyz@gmail.com</h5>
//            </div>
//         </div>

        
//       </div>
//     </div>
//   )
// }

// export default ContactUs


import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center gap-10 p-4">
      <h1 className="text-[#dbdce1] text-3xl sm:text-2xl text-center">Connect with us</h1>
      <div className="flex flex-wrap justify-center gap-10 font-semibold">
        {/* Card 1 */}
        <div className="flex flex-col gap-6 w-[300px] sm:w-[250px] text-center">
          <h3 className="text-white text-xl sm:text-lg">Yash Chitransh</h3>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#9299a4]">Co-Founder & CEO</h2>
            <h5 className="text-[#9299a4] break-words">xyz@gmail.com</h5>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-6 w-[300px] sm:w-[250px] text-center">
          <h3 className="text-white text-xl sm:text-lg">ABC</h3>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#9299a4]">Co-Founder & CEO</h2>
            <h5 className="text-[#9299a4] break-words">xyz@gmail.com</h5>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-6 w-[300px] sm:w-[250px] text-center">
          <h3 className="text-white text-xl sm:text-lg">DEF</h3>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#9299a4]">Co-Founder & CEO</h2>
            <h5 className="text-[#9299a4] break-words">xyz@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
