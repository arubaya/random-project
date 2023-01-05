import React from 'react';
import { Box } from '@mui/material';
import DesktopIconContainer from './DesktopIconContainer';

import desktopIconList from './defaultDesktopIconList';
import HomePopup from './HomePopup';
import AppWindowLayout from './AppWindowLayout';
import { useSelector } from 'react-redux';
import { dispatch } from '../../store';
import { setTaskManagerData } from '../redux/actions';
import AppLists from '../services/appList';

interface DesktopDisplayProps {
  taskbarHeight: number;
}

export default function DesktopDisplay({ taskbarHeight }: DesktopDisplayProps) {
  const { tasksManager } = useSelector(
    (state: RootState) => state.winCloneReducer
  );

  return (
    <Box
      sx={{ height: `calc(100vh - ${taskbarHeight}px)` }}
      className="w-full relative flex justify-center items-center"
    >
      {/* Desktop icons container */}
      <Box id="" className="w-full min-w-[60px] h-full absolute px-2 py-1 z-10">
        {desktopIconList.map((data) => (
          <DesktopIconContainer
            key={data.title}
            icon={data.icon}
            title={data.title}
            onClick={data.onClick}
          />
        ))}
      </Box>

      {tasksManager.map((task) => (
        <AppWindowLayout key={task.appId} data={task} />
      ))}

      <HomePopup />
    </Box>
  );
}
