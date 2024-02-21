import React from 'react';

const HomePageText = ({ text, side }) => {
  return (
    <div className={`${side} home-page-block-text`}>
      <div className='titleContainer'>
        <div className='home-page-info-block-title'> Our Team </div>
      </div>
      <div className='text'> {text} </div>
    </div>
  );
};

export default HomePageText;