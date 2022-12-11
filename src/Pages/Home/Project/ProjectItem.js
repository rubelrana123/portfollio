import React, { Children } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const ProjectItem = ({Project}) => {
 
	const handleLivelink = (link) => {
        window.location.replace(link)
 
	}
  return (
    <div>
     	<Link  aria-label='View Item'>
			<div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
				<img
					className='object-cover w-full h-56 md:h-64 xl:h-80'
					src={Project?.image}
					alt=''
				/>
				<div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
					<p className='mb-4 text-lg font-bold text-gray-100'>{Project?.name}</p>
					<br />
					<p className='text-sm tracking-wide text-gray-300'>{Project?.technology}</p>
					<br />
					 
        <div className='flex justify-around gap-3'>
					
       
       
					   <button onclick={ () =>  window.location.replace(Project?.live_link)}   className='btn mt-2 rounded-md  text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Live Link</button>
			 
     
				 <button onclick={() => handleLivelink(Project?.client_link)}  className='btn mt-2 rounded-md text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Client Link</button>
		 
   
				 <button onclick={() => handleLivelink(Project?.server_link)} className='btn mt-2 rounded-md text-white bg-transparent border-2 border-emerald-400  hover:bg-emerald-500 hover:border-2 hover:border-emerald-400'>Server Link</button>
	 
        </div>
				</div>
			</div>
		</Link>
    </div>
  );
};

export default ProjectItem;