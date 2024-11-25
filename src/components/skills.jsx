import React from 'react';

function Skills(props) {
  return (
    <div className='skills-portal w-32'>
      <div className='skills-portal w-32 h-auto rounded-md flex flex-col bg-white p-2  items-center'>
        <img src={props.skillImg} alt={props.skillAlt} className='mb-2 p-2 w-[80px] h-[80px] align-top' />
        <p className='text-gray-900 font-sans text-lg'>{props.skillName}</p>
      </div>
      {/* Add any other content for the Skills component */}
    </div>
  );
}

export default Skills;
