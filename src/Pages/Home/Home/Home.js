import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import Skill from '../Skills/Skill';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Project></Project>
      <Skill></Skill>
      <Contact/>
    </div>
  );
};

export default Home;