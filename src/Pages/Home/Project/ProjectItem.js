import React, { Children } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const ProjectItem = ({project}) => {

  return (
		 <div>
       
      <div className='place-content-center flex border-spacing-4 '>
        <div className="card card-compact w-96   shadow-2xl border-emerald-200  border-solid border-2">
   
      <div className="foo">
       
      
            <img className='object-cover w-full h-56 md:h-64 xl:h-80 rounded-lg' src={project?.image} alt="" />
       
        
      </div>
    
          {/* <figure><img src={imgage} alt="Shoes" /></figure> */}
          <div className="card-body">
            <div className='flex gap-5'>
                 <h2 className="card-title text-white">{project?.name}</h2>  
                                 
            </div>
						<div className='flex justify-between'>
							 <a href={project?.live_link} className='btn btn-sm  rounded-md  text-white bg-transparent border-2 border-emerald-400 text-sm  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Live Link</a>
              <a href={project?.client_link} className='btn btn-sm  rounded-md  text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Client Link</a>
              <a href={project?.server_link} className='btn btn-sm   rounded-md  text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Server Link</a>
						</div>
         
						<div>
              
            <p>{ project?.description?.length > 100 && project?.description?.slice(1,120) + "....."  }</p>
                
						</div>
            <div className="card-actions justify-between">

              
              <Link to={`/project/${project.id}`}>
           
              <button className="btn btn-outline btn-primary rounded-md">Details</button>

              </Link>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
    // <div>
    //  	<Link  aria-label='View Item'>
		// 	<div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
		// 		<img
		// 			className='object-cover w-full h-56 md:h-64 xl:h-80'
		// 			src={Project?.image}
		// 			alt=''
		// 		/>
		// 		<div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
		// 			<p className='mb-4 text-lg font-bold text-gray-100'>{Project?.name}</p>
		// 			<br />
		// 			<p className='text-sm tracking-wide text-gray-300'>{Project?.technology}</p>
		// 			<br />
					 
    //     <div className='flex justify-around gap-3'>
					
       
       
		// 			   <button onclick={window.location.replace(Project?.live_link)}   className='btn mt-2 rounded-md  text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Live Link</button>
			 
     
		// 		 <button onclick={window.location.replace(Project?.client_link)}  className='btn mt-2 rounded-md text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Client Link</button>
		 
   
		// 		 <butto onclick={window.location.replace(Project?.server_link)} className='btn mt-2 rounded-md text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Server Link</butto>
	 
    //     </div>
		// 		</div>
		// 	</div>
		// </Link>
    // </div>
  );
};

export default ProjectItem;