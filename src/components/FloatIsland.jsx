import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SkillsContainer from './skillsContainer'; // Import your Skills component

function FloatIsland() {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const handleSkillsClick = () => {
    // Set the visibility state to true when the "Skills" button is clicked
    setIsSkillsVisible(true);
  };

  return (
    <div className='m-0  z-[1000] p-2 text-center items-center rounded-lg fixed flex flex-row top-5 left-1/2 transform -translate-x-1/2 text-white'>
      <button
        className='px-5 py-1 mx-1 text-sm bg-white/20 backdrop-blur-[2px] hover:backdrop-blur-sm bg-none text-white text-center  rounded-2xl  shadow-white/20 shadow-md hover:shadow-none'
      >
        Experiences
      </button>
      <button
        className='px-5 py-1 mx-1 text-sm bg-white/20 backdrop-blur-[2px] hover:backdrop-blur-sm bg-none text-white text-center  rounded-2xl  shadow-white/20 shadow-md hover:shadow-none'
      >
        Projects
      </button>
      <button onClick={handleSkillsClick} className='px-5 py-1 mx-1 text-sm bg-white/20 backdrop-blur-[2px] hover:backdrop-blur-sm bg-none text-white text-center  rounded-2xl  shadow-white/20 shadow-md hover:shadow-none'>
        Skills
      </button>
      <button
        className='px-5 py-1 mx-1 text-sm bg-white/20 backdrop-blur-[2px] hover:backdrop-blur-sm bg-none text-white text-center  rounded-2xl  shadow-white/20 shadow-md hover:shadow-none'
      >
        Contact Me
      </button>

      {/* Render the Skills component conditionally using a portal */}
      {isSkillsVisible &&
        ReactDOM.createPortal(
          
          <SkillsContainer onClose={() => setIsSkillsVisible(false)} />, // Pass a function to close the Skills component
          document.body // Render the Skills component directly into the document body
        )}
    </div>
  );
}

export default FloatIsland;
