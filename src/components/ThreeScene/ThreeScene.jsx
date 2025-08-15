import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Wireframe Globe Component
const WireframeGlobe = ({ isHovered, setIsHovered }) => {
  const meshRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.005);
  
  useFrame(() => {
    if (meshRef.current) {
      // Gentle idle rotation
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x += rotationSpeed * 0.3;
    }
  });

  const handlePointerEnter = () => {
    setIsHovered(true);
    setRotationSpeed(0.02); // Faster rotation on hover
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setRotationSpeed(0.005); // Return to gentle rotation
  };

  return (
    <group ref={meshRef}>
      {/* Main wireframe sphere */}
      <mesh onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial 
          color={isHovered ? '#00d4ff' : '#ffffff'}
          transparent
          opacity={isHovered ? 0.8 : 0.4}
          wireframe={true}
        />
      </mesh>
      
      {/* Additional decorative rings */}
      <mesh onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
        <ringGeometry args={[2.5, 2.7, 64]} />
        <meshBasicMaterial 
          color={isHovered ? '#00d4ff' : '#ffffff'} 
          transparent 
          opacity={isHovered ? 0.3 : 0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
        <ringGeometry args={[2.3, 2.5, 64]} />
        <meshBasicMaterial 
          color={isHovered ? '#00d4ff' : '#ffffff'} 
          transparent 
          opacity={isHovered ? 0.2 : 0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Floating particles around the globe */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle key={i} index={i} isHovered={isHovered} />
      ))}
    </group>
  );
};

// Floating Particle Component
const FloatingParticle = ({ index, isHovered }) => {
  const particleRef = useRef();
  const speed = 0.5 + Math.random() * 0.5;
  const radius = 3 + Math.random() * 2;
  
  useFrame((state) => {
    if (particleRef.current) {
      const time = state.clock.elapsedTime * speed;
      const angle = (index / 20) * Math.PI * 2 + time;
      
      particleRef.current.position.x = Math.cos(angle) * radius;
      particleRef.current.position.y = Math.sin(angle) * radius * 0.5;
      particleRef.current.position.z = Math.sin(time * 0.5) * 2;
      
      // Scale animation
      particleRef.current.scale.setScalar(
        isHovered ? 1.5 + Math.sin(time * 3) * 0.3 : 0.5 + Math.sin(time * 2) * 0.2
      );
    }
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial 
        color={isHovered ? '#00d4ff' : '#ffffff'} 
        transparent 
        opacity={isHovered ? 0.8 : 0.4}
      />
    </mesh>
  );
};

// Main ThreeScene Component
const ThreeScene = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.3} />
        
        {/* Point light for highlights */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
        
        {/* Wireframe Globe */}
        <WireframeGlobe isHovered={isHovered} setIsHovered={setIsHovered} />
        
        {/* Orbit Controls for drag interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
