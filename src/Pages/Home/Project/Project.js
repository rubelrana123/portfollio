import React, { useEffect } from 'react';
import img1 from "../../../assert/Project/screencapture-recycle-clothh-web-app-2022-12-04-15_47_03.png";
import img2 from "../../../assert/Project/screencapture-skill-boxx-web-app-2022-12-04-20_22_04.png";
import img3 from "../../../assert/Project/screencapture-kajolcreative-web-app-2022-12-04-20_28_11.png";
import ProjectItem from './ProjectItem';
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const Projects = [
    {  id: 1,
      name : "Recycle-Cloth",
      technology : " Technologies : React JS, MongoDB, Node JS, Express JS",
      image : img1,
      live_link : "https://recycle-clothh.web.app/",
      server_link : "https://github.com/rubelrana123/recycle-cloth-server",
      client_link : "https://github.com/rubelrana123/recycle-cloth-client"
    

    },
    {  id: 2,
      name : "Skill_Box",
      technology : "Technologies: ReactJs, JSX, ,React Router Dom, Hooks, firebase Authentication, firebaseDeploy, etc ;",
      image : img2,
      live_link : "https://skill-boxx.web.app/",
      server_link : "https://github.com/rubelrana123/skill-box-server",
      client_link : "https://github.com/rubelrana123/skill-box-client"
    },
    {  id: 3,
      name : "Kajol Creative",
      technology : "Technologies: ReactJs, JSX, ,React Router Dom, Hooks, React Tailwind,firebase Authentication,Express Js , MongoDb,JWT Token,",
      image : img3,
      live_link : "https://kajolcreative.web.app/",
     client_link : "https://github.com/rubelrana123/kajol-creative-client",
      server_link : "https://github.com/rubelrana123/kajol-creative-server"
    }
  ]
  return (
    <div className='lg:px-12 px-4 pt-8'>
      <h1 className='text-white mt-12 text-4xl font-semibold'>Recent Project</h1>

      <div data-aos="fade-right" className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center mt-12'>
        {
          Projects.map(Project => <ProjectItem key={Project.id} project={Project} ></ProjectItem> )
        }
      </div>
    </div>
  );
};

export default Project;