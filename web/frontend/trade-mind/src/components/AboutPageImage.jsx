import React from 'react';

const AboutPageImage = ({ imageUrl, side }) => {
  return (
    <div className={`image ${side}`}>
      <img src={imageUrl} alt="About" className='responsive-image'/>
    </div>
  );
};

export default AboutPageImage;