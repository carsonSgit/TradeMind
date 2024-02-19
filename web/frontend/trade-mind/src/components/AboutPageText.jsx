import React from 'react';

const AboutPageText = ({ textContent, nameContent, side, link }) => {
  return (
    <div className={`text ${side} summaryBlock`}>
        <h2 className="devTitle"><a target="_blank" href={link}>{nameContent}</a></h2>
        <p className="devSummary">{textContent}</p>
    </div>
  );
};

export default AboutPageText;