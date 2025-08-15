import React from 'react';

const Divider = () => {
  return (
    <div 
      style={{
        width: '100%',
        height: '80px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,212,255,0.1) 50%, rgba(0,0,0,0) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Main gradient line */}
      <div
        style={{
          width: '60%',
          maxWidth: '600px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.3) 25%, rgba(0,212,255,0.8) 50%, rgba(0,212,255,0.3) 75%, transparent 100%)',
          borderRadius: '1px',
          boxShadow: '0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,212,255,0.2)',
          position: 'relative',
        }}
      />
      
      {/* Decorative dots */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          gap: '15px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(0,212,255,0.6)',
            boxShadow: '0 0 8px rgba(0,212,255,0.5)',
            animation: 'pulse 2s infinite',
          }}
        />
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(0,212,255,0.8)',
            boxShadow: '0 0 12px rgba(0,212,255,0.6)',
            animation: 'pulse 2s infinite 0.5s',
          }}
        />
        <div
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(0,212,255,0.6)',
            boxShadow: '0 0 8px rgba(0,212,255,0.5)',
            animation: 'pulse 2s infinite 1s',
          }}
        />
      </div>
      
      {/* Animated background elements */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          width: '2px',
          height: '2px',
          background: 'rgba(0,212,255,0.3)',
          borderRadius: '50%',
          animation: 'float 3s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '20%',
          width: '1px',
          height: '1px',
          background: 'rgba(0,212,255,0.4)',
          borderRadius: '50%',
          animation: 'float 3s ease-in-out infinite 1.5s',
        }}
      />
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default Divider;
