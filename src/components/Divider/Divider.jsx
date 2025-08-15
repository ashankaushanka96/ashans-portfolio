import React from 'react';

const Divider = () => {
  return (
    <div 
      style={{
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Simple gradient line */}
      <div
        style={{
          width: '60%',
          maxWidth: '600px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.6) 25%, rgba(0,212,255,1) 50%, rgba(0,212,255,0.6) 75%, transparent 100%)',
          borderRadius: '1px',
          boxShadow: '0 0 10px rgba(0,212,255,0.3)',
        }}
      />
    </div>
  );
};

export default Divider;
