import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Floating Cube Component
const FloatingCube = ({ position, rotation, color, isHovered, setIsHovered, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotationSpeed] = useState(0.01 + Math.random() * 0.02);
  const [floatSpeed] = useState(0.5 + Math.random() * 0.5);
  const [floatAmplitude] = useState(0.5 + Math.random() * 0.5);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
      meshRef.current.rotation.z += rotationSpeed * 0.3;
      
      // Floating animation
      const time = state.clock.elapsedTime * floatSpeed;
      meshRef.current.position.y = position[1] + Math.sin(time) * floatAmplitude;
      
      // Scale animation on hover
      const scale = hovered || isHovered ? 1.2 : 1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const handlePointerEnter = () => {
    setHovered(true);
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setHovered(false);
    setIsHovered(false);
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial 
        color={hovered || isHovered ? '#00d4ff' : color}
        transparent
        opacity={hovered || isHovered ? 0.9 : 0.6}
        wireframe={hovered || isHovered}
      />
    </mesh>
  );
};

// Connecting Line Component
const ConnectingLine = ({ start, end, isHovered }) => {
  const points = [start, end];
  
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([
            start[0], start[1], start[2],
            end[0], end[1], end[2]
          ])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial 
        color="#00d4ff" 
        transparent 
        opacity={isHovered ? 0.6 : 0.2}
      />
    </line>
  );
};

// Main Floating Cubes Scene
const FloatingCubes = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate random cube positions and properties
  const cubes = Array.from({ length: 15 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 8
    ],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    ],
    color: ['#00d4ff', '#ffffff', '#ff6b6b', '#4ecdc4', '#45b7d1'][Math.floor(Math.random() * 5)],
    index: i
  }));

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.4} />
        
        {/* Point lights for dynamic lighting */}
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ffffff" />
        <pointLight position={[0, 10, 0]} intensity={0.3} color="#ff6b6b" />
        
        {/* Floating Cubes */}
        {cubes.map((cube) => (
          <FloatingCube
            key={cube.index}
            position={cube.position}
            rotation={cube.rotation}
            color={cube.color}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            index={cube.index}
          />
        ))}
        
        {/* Connecting lines between cubes */}
        {cubes.slice(0, 8).map((cube, i) => {
          const nextCube = cubes[(i + 1) % 8];
          return (
            <ConnectingLine
              key={`line-${i}`}
              start={cube.position}
              end={nextCube.position}
              isHovered={isHovered}
            />
          );
        })}
        
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

export default FloatingCubes;
