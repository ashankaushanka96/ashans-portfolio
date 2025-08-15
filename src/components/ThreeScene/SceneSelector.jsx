import React, { useState } from 'react';
import ThreeScene from './ThreeScene';
import FloatingCubes from './FloatingCubes';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Public, ViewInAr } from '@mui/icons-material';

const SceneSelector = ({ className = "" }) => {
  const [currentScene, setCurrentScene] = useState('globe'); // 'globe' or 'cubes'

  const scenes = {
    globe: {
      component: ThreeScene,
      icon: <Public />,
      tooltip: 'Wireframe Globe'
    },
    cubes: {
      component: FloatingCubes,
      icon: <ViewInAr />,
      tooltip: 'Floating Project Cubes'
    }
  };

  const CurrentSceneComponent = scenes[currentScene].component;

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* 3D Scene */}
      <CurrentSceneComponent />
      
      {/* Scene Selector Controls */}
      <Box className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {Object.entries(scenes).map(([key, scene]) => (
          <Tooltip key={key} title={scene.tooltip} placement="left">
            <IconButton
              onClick={() => setCurrentScene(key)}
              className={`w-10 h-10 transition-all duration-300 ${
                currentScene === key
                  ? 'bg-accent/20 text-accent border border-accent/30'
                  : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
              }`}
              sx={{
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  transform: 'scale(1.1)',
                }
              }}
            >
              {scene.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </div>
  );
};

export default SceneSelector;
