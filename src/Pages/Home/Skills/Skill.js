import React from 'react';
import { SkillBars } from 'react-skills';
import { SkillBar } from 'react-skills';
const Skill = () => {
 

  return (
    <div className='px-12 pt-8'>
      <div >
      <h1 className='text-white text-4xl font-semibold'>My Skill</h1>
      </div>
      <div className='flex flex-col gap-7 mt-12 lg:w-[75%] w-full '>
      <SkillBar className="rounded-lg h-2 w-2"  name="HTML" level={90} color="blue" />
      <SkillBar  name="CSS" level={85} color="blue" />
      <SkillBar  name="Tailwind CSS" level={80} color="blue" />
      <SkillBar  name="Javascript" level={85} color="blue" />
      <SkillBar  name="React JS" level={80} color="blue" />
      <SkillBar  name="Node JS" level={50} color="blue" />
      <SkillBar  name="Express JS" level={50} color="blue" />
 

      
      </div>

    </div>
  );
};

export default Skill;