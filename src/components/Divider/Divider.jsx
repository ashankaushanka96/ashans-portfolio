import React from 'react';

const Divider = () => {
  return (
    <div 
      className="w-full py-8 sm:py-12 lg:py-16 flex justify-center items-center relative"
      style={{
        position: 'relative',
      }}
    >
      {/* Simple gradient line */}
      <div
        className="w-3/4 sm:w-2/3 lg:w-1/2 max-w-4xl h-0.5 sm:h-1"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.6) 25%, rgba(0,212,255,1) 50%, rgba(0,212,255,0.6) 75%, transparent 100%)',
          borderRadius: '2px',
          boxShadow: '0 0 15px rgba(0,212,255,0.4)',
        }}
      />
    </div>
  );
};

export default Divider;
