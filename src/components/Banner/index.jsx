import React from 'react';
import './banner.css';
import dp from '../../assets/IMG_2488.JPG'

function Banner() {
  return (
  <div class="relative z-10 pt-3 m-3 wrap w-1/4 flex flex-col bg-black border-white/20 border-[0.5px] rounded-2xl ">
          <div className='text-2xl m-2 text-white font-semibold mukund'>Mukund Kumar</div>
          <div className="z-11 max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
           <div className="h-64 w-full">
             <img src={dp} alt="dp" className="h-full w-full object-fill" />
           </div> 
          </div>

      <div className="relative shadow-xl  rounded-xl text-slate-200 w-auto h-[35vh] p-4 text-left">
        <p className="text-4xl absolute z-10">About Me</p>
    <div className='banner bg-black relative top-5'>
        <h1 className=''>System<span className="text-white">.<span className="text-white">out</span>.</span><span className="text-[#61afef];">println</span>("</h1>
      <div className="string">
        <h1 className="greeting en">&nbsp;&nbsp;</h1>
        <h1 className="greeting es">Developer!</h1>
        <h1 className="greeting de">coder!</h1>
        <h1 className="greeting it">&nbsp;&nbsp;</h1>  
      </div>
      <h1 className="closure after:bg-black before:bg-black">");</h1>
    </div>
  <p className="text-sm relative
   font-extralight w-60 z-10 cursor typewriter-animation">
    As a graduate of bachelors in computer applications with a foundation in web development, I am confident in my ability to add value to a team. My technical skills, combined with my drive to learn and solve problems, make me a good fit for any organization looking to bring on a motivated and skilled associate.
  </p>
</div>
</div>
  )
}

export default Banner;