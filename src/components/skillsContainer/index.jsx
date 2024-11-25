import React from 'react'
import Skills from '../skills.jsx'
import reactIcon from '../../assets/react.svg';
import nodeIcon from '../../assets/nodejs-icon.svg';
import nextIcon from '../../assets/nextjs.svg';
import htmlIcon from '../../assets/html-5.svg';
import cssIcon from '../../assets/css-3_official.svg';
import tailIcon from '../../assets/tailwindcss-icon.svg';
import fireIcon from '../../assets/firebase.svg';
import jsIcon from '../../assets/javascript.svg'

function index(props) {
  return (
<div className='absolute p-10 align-middle bg-black bottom-0 right-0 w-[50%] h-[100%] '>
  {/* <p className='text-white'>Skills</p> */}
    <div className='  grid grid-cols-4 grid-rows-4 gap-5  pt-24 justify-center'>
       <Skills skillName="Html5" skillImg={htmlIcon} skillAlt="html"/>
       <Skills skillName="Css3" skillImg={cssIcon} skillAlt="css3"/>
       <Skills skillName="React JS" skillImg={reactIcon} skillAlt="react"/>
       <Skills skillName="Next JS" skillImg={nextIcon} skillAlt="next"/>
       <Skills skillName="Node JS" skillImg={nodeIcon} skillAlt="node"/>
       <Skills skillName="Tailwind CSS" skillImg={tailIcon} skillAlt="tailW"/>
       <Skills skillName="Firebase" skillImg={fireIcon} skillAlt="Firebase"/>
       <Skills skillName="JavaScript" skillImg={jsIcon} skillAlt="JavaS"/>
    </div>
    <button
        onClick={props.onClose}
        className='font-semibold rounded-full absolute top-10 left-10 text-black w-10 h-10 bg-[#ffffff70]'
    >
        X
    </button>
</div>
  )
}

export default index