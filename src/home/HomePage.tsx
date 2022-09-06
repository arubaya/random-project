import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeCardItem from './components/HomeCardItem';
import projectList from './services/projectList';

export default function HomePage() {
  return (
    <Box
      sx={{ backgroundColor: '#edf1f4' }}
      className="min-w-screen min-h-screen flex justify-center items-center"
    >
      <Box className="p-6">
        <Typography variant="h1" className="font-bold mb-8">
          Personal Demo Project
        </Typography>
        <Box className="grid grid-cols-3 gap-4">
          {projectList.map((data) => (
            <HomeCardItem image={data.image} title={data.title} to={data.to} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
