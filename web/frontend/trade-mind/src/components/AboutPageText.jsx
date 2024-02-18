import React from 'react';

const AboutPageText = ({ textContent, nameContent, side }) => {
  return (
    <div className={`text ${side}`}>
        <h2 className="devTitle">{nameContent}</h2>
        <p className="devSummary">{textContent}</p>
    </div>
  );
};

export default AboutPageText;