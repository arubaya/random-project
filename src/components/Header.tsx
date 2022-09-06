import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HomeRounded } from '@mui/icons-material';

export default function Header(props: any) {
  return (
    <Box
      sx={{ backgroundColor: '#edf1f4' }}
      className="w-screen h-screen flex flex-col"
    >
      <Box component="header" className="w-full h-16 flex items-center px-4">
        <Box component="nav">
          <NavLink to="/home" className="no-underline text-inherit">
            <Box className="flex items-center">
              <HomeRounded fontSize="small" color="secondary" />
              <Typography className="ml-1" color="secondary">
                Back to home
              </Typography>
            </Box>
          </NavLink>
        </Box>
      </Box>
      <Box className="w-full h-[calc(100vh_-_64px)] flex">{props.children}</Box>
    </Box>
  );
}
