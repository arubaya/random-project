import React from 'react';
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import {
  ChevronRightRounded,
  PowerSettingsNewRounded,
  ReplayRounded,
} from '@mui/icons-material';

import SearchIcon from '../assets/icons/ui/search.png';

import DesktopIconContainer from './DesktopIconContainer';
import { pinnedAppList, recomendedAppList } from './homeIconApp';
import { useNavigate } from 'react-router-dom';
import RecomendedAppContainer from './RecomendedAppContainer';

export default function HomePopup() {
  const { isHomePopup } = useSelector(
    (state: RootState) => state.winCloneReducer
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleOpenPowerMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePowerMenu = () => {
    setAnchorEl(null);
  };

  const handleShutdown = () => {
    navigate('/home', { replace: true });
  };

  return (
    <Box
      className="w-fit h-full flex items-end relative"
      sx={{ zIndex: isHomePopup ? 50 : 0 }}
    >
      <Box
        sx={{ bottom: isHomePopup ? 8 : -500, opacity: isHomePopup ? 1 : 0 }}
        className="w-[550px] h-max-[585px] h-[90%] bg-white/80 backdrop-blur-lg rounded-lg flex flex-col items-center relative transition-all duration-300 shadow-lg shadow-black/40 select-none"
      >
        {/* Search Bar */}
        <Box className="w-full h-fit px-9 pt-7 pb-4 overflow-hidden">
          <Box className="w-full h-[40px] bg-white rounded ">
            <Box className="h-[calc(100%_-_3px)] w-full flex items-center px-4">
              <img
                src={SearchIcon}
                alt="search icon"
                className="w-[15px] saturate-0"
              />
              <Typography variant="caption" className="ml-3">
                Type here to search
              </Typography>
            </Box>
            <Box className="w-full h-[3px] bg-blue-500 rounded-b-lg" />
          </Box>
        </Box>

        {/* Pinned Apps */}
        <Box className="w-full h-fit px-9 py-3">
          <Box className="w-full flex justify-between items-center">
            <Typography variant="caption" className="font-bold">
              Pinned
            </Typography>
            <Box
              role="button"
              className="px-2 py-[2px] bg-white/80 hover:bg-white/60 cursor-pointer rounded flex items-center justify-between shadow"
            >
              <Typography variant="caption">All apps</Typography>
              <ChevronRightRounded fontSize="small" />
            </Box>
          </Box>
          <Box className="w-full grid grid-cols-6">
            {pinnedAppList.map((data) => (
              <DesktopIconContainer
                icon={data.icon}
                key={data.title}
                title={data.title}
                isForHome={true}
                onClick={data.onClick}
              />
            ))}
          </Box>
        </Box>

        {/* Recomended Apps */}
        <Box className="w-full h-fit px-9 py-3">
          <Box className="w-full flex justify-between items-center">
            <Typography variant="caption" className="font-bold">
              Recomended
            </Typography>
            <Box
              role="button"
              className="px-2 py-[2px] bg-white/80 hover:bg-white/60 cursor-pointer rounded flex items-center justify-between shadow"
            >
              <Typography variant="caption">More</Typography>
              <ChevronRightRounded fontSize="small" />
            </Box>
          </Box>
          <Box className="w-full grid grid-cols-2">
            {recomendedAppList.map((data) => (
              <RecomendedAppContainer
                desc={data.desc as string}
                title={data.title}
                icon={data.icon}
                key={data.title}
              />
            ))}
          </Box>
        </Box>

        {/* Profile Section */}
        <Box className="w-full h-16 rounded-b-lg bg-gray-400 bg-opacity-20 mt-auto flex items-center justify-between px-9">
          <Box className="flex items-center">
            <Avatar
              alt="Account"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="body2" className="ml-3 font-semibold">
              Tsabit Arubaya
            </Typography>
          </Box>
          <Box
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpenPowerMenu}
            className="p-2 rounded hover:bg-white/50 active:bg-white/30 flex justify-center items-center"
          >
            <PowerSettingsNewRounded fontSize="small" />
          </Box>
          <Popover
            anchorEl={anchorEl}
            open={open}
            onClose={handleClosePowerMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            sx={{
              '& .MuiPaper-root': {
                paddingX: '3px',
                paddingY: '8px',
                minWidth: '120px',
              },
            }}
          >
            <Box className="w-full flex flex-col">
              <Box className="hover:bg-gray-400 hover:bg-opacity-20 active:bg-opacity-40 rounded flex select-none cursor-pointer px-1 py-1 items-center">
                <ReplayRounded className="text-lg" />
                <Typography variant="caption" className="ml-2 font-semibold">
                  Restart
                </Typography>
              </Box>
              <Box
                onClick={() => handleShutdown()}
                className="hover:bg-gray-400 hover:bg-opacity-20 active:bg-opacity-40 rounded flex select-none cursor-pointer px-1 py-1 items-center"
              >
                <PowerSettingsNewRounded className="text-lg" />
                <Typography variant="caption" className="ml-2 font-semibold">
                  Shutdown
                </Typography>
              </Box>
            </Box>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
}
