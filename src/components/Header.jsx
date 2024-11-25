import React from 'react';
import instagram from '../assets/instagram-icon.svg';
import linkdin from '../assets/linkedin-icon.svg';
import git from '../assets/github-icon.svg';
import mail from '../assets/google-gmail.svg';

function Header() {
  return (
    <div className='z-10 bg-none absolute m-0 p-4 flex flex-row min-w-full justify-end'>
      <div className='flex w-fit flex-row'>
        <img src={instagram} alt="instagram" className='shadow-black/35 shadow-sm h-10 w-10 mx-2 p-2 text-white rounded-lg bg-white hover:shadow-[3px_3px_0px_0px_rgba(109,40,217)] duration-200 ease-in' />
        <img src={linkdin} alt="linkedin" className='shadow-black/35 shadow-sm h-10 w-10 mx-2 p-2 text-white rounded-lg bg-white hover:shadow-[3px_3px_0px_0px_rgba(109,40,217)] duration-200 ease-in' />
        <img src={git} alt="github" className='shadow-black/35 shadow-sm h-10 w-10 mx-2 p-2 text-white rounded-lg bg-white hover:shadow-[3px_3px_0px_0px_rgba(109,40,217)] duration-200 ease-in' />
        <img src={mail} alt="gmail" className='shadow-black/35 shadow-sm h-10 w-10 mx-2 p-2 text-white rounded-lg bg-white hover:shadow-[3px_3px_0px_0px_rgba(109,40,217)] duration-200 ease-in' />
      </div>
    </div>
  );
}

export default Header;
