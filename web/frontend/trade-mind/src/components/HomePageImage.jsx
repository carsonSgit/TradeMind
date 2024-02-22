import React from 'react';

const HomePageImage = ({ imageUrl, side }) => {
  return (
    <div className={`home-page-image ${side}`}>
      <img src={imageUrl} alt="About" className={`home-image ${side}`}/>
    </div>
  );
};

export default HomePageImage;