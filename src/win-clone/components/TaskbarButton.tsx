import React from 'react';
import { Box } from '@mui/material';
import { minimizeWindowApp } from '../services/titleBar';

interface TaskbarButtonProps {
  icon: string;
  isActive?: boolean;
  isApp?: boolean;
  windowStatus?: 'maximize' | 'minimize' | 'maxmin' | 'close';
  appId?: string;
}

export default function TaskbarButton({
  icon,
  isActive,
  isApp,
  windowStatus,
  appId,
}: TaskbarButtonProps) {
  const onClickTaskbarButton = () => {
    if (appId !== undefined && windowStatus !== undefined) {
      minimizeWindowApp(appId, windowStatus);
    }
  };
  return (
    <Box
      component="div"
      onClick={() => onClickTaskbarButton()}
      className="w-[38px] h-[38px] hover:bg-white active:px-3 active:pt-3 px-2 pt-2 rounded transition-all select-none flex flex-col justify-between"
    >
      <img src={icon} alt="widget" className="w-full" />
      {windowStatus !== 'close' && isApp && (
        <Box className="w-full flex justify-center">
          <Box
            className={`h-[3px] transition-all rounded-full ${
              isActive ? 'w-[12px] bg-sky-500' : 'w-[6px] bg-gray-500/70'
            }`}
          />
        </Box>
      )}
    </Box>
  );
}
