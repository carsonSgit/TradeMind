import React from 'react';

const WaveDivider = () => {
  return (
    <div style={{ background: '#443a90', overflow: 'hidden' }}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
        <path
          d="M0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: 'none', fill: '#443a90' }}>
        </path>
      </svg>
    </div>
  );
};

export default WaveDivider;