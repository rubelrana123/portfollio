import React from 'react';
import Wave from 'react-wavify';

const Footer = () => {
  return (
    <div>
      <Wave fill='blue'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.1,
          points: 3
        }}
  />
    </div>
  );
};

export default Footer;