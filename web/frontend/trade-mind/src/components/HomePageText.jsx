import React from 'react';

const HomePageText = ({ text, title, side }) => {
  return (
    <div className={`${side} home-page-block-text`}>
      <div className='titleContainer'>
        <div className='home-page-info-block-title'> {title} </div>
      </div>
      <div className='text'> {text} </div>
    </div>
  );
};

export default HomePageText;