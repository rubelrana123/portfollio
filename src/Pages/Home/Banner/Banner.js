import React, { useEffect } from 'react';
import img from "../../../assert/profile/tinywow_profile_photo_9101936.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed"
const Banner = () => {
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='lg:mt-20 mt-16 lg:px-12 md:px-10 px-4  '>
     <div className="flex lg:justify-evenly lg:flex-row items-center flex-col-reverse text-white ">
  <div  data-aos="fade-left"  className=" lg:w-2/3 w-full items-center leading-10" >
    <h1 className='text-4xl font-bold'> <span className='text-emerald-400'> RUBEL <span className='text-emerald-500'>RANA</span></span> <br />
     <Typed
      strings={[
            "Full Stack Developer",
            "Front End Developer",
             
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
    </h1>
     <h1 className='max-w-[90%] text-gray-200'>Hi, My name is Rubel Rana and I am a full-stack web developer with 1 years of experience with modern technologie like React,Tailwind CSS, Node js, Mongo DB, Express JS etc..</h1>
     <div className='flex gap-8'>
      <a href="https://drive.google.com/file/d/1129On3B9mGkGs4Okjev0sqjg_tjoZWiO/view?usp=share_link" target="_blank">
       <button className='btn mt-2 rounded-md text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Download Resume</button>

      </a>
        <button className='btn mt-2 rounded-md text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'> Hire me</button>
     </div>
  </div>
  <div data-aos="fade-right">

  <figure><img src={img} alt="profile" className='h-[360px] border-4 rounded-[50%] border-emerald-600' /></figure>
  </div>

</div>
    </div>
  );
};

export default Banner;