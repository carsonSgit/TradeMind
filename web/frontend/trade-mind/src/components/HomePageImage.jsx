import React from 'react';

const HomePageImage = ({ imageUrl, side }) => {
  return (
    <div className={`home-page-image ${side}`}>
      <img src={imageUrl} alt="About" className='home-page-image'/>
    </div>
  );
};

export default HomePageImage;