import React from 'react';
import { Link } from 'react-router-dom';
 import { FaBeer, FaFacebook, FaFacebookSquare, FaGit, FaGitSquare, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
 
 

  
  return (
    <div className=''>
<div className="w-full px-2 py-4   sm:px-4  navbar  text-white text-xl ">
  <div className="navbar-start px-5">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 pt-2   rounded-box w-96 ">
        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>
 
       <li><Link to="/portfollio">Portfollio</Link></li>
 
       <li><Link to="/contact">Contact</Link></li>
 </ul>
    </div>
    <Link  to="/" className="text-4xl font-thin">
      <h1>RUBEL</h1>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>
 
       <li><Link to="/portfollio">Portfollio</Link></li>
 
       <li><Link to="/contact">Contact</Link></li>
   </ul>
  </div>
  <div className='navbar-end gap-3'>
   
  <a href="https://github.com/rubelrana123">
      <FaGitSquare className='hover:bg-emerald-500 hover:text-white  rounded'>\
  </FaGitSquare>

  </a>
  <a href="https://www.facebook.com/rubel400310/">

  <FaFacebookSquare className='hover:bg-emerald-500 hover:text-white  rounded'></FaFacebookSquare>
  </a>
  <a href="https://www.linkedin.com/in/rubelrana123/">

  <FaLinkedin className='hover:bg-emerald-500 hover:text-white  rounded'></FaLinkedin>
  </a>
 
  </div>
 
  </div>
</div>
  
  );
};

export default Navbar;