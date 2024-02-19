import React from 'react';

const AboutPageText = ({ textContent, nameContent, side, link }) => {
  return (
    <div className={`text ${side} summaryBlock`}>
        <button className="devTitle cta">
        <span class="hover-underline-animation"><a target="blank" href={link}>{nameContent}</a></span> 
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="30"
          viewBox="0 0 46 16"
        >
        <path
          id="Path_10"
          data-name="Path 10"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          transform="translate(20)"
        ></path>
        </svg>

        </button>
        <p className="devSummary">{textContent}</p>
    </div>
  );
};

export default AboutPageText;