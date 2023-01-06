import React from 'react';
import { Box, BoxTypeMap, Typography } from '@mui/material';
import minimizeIcon from '../assets/icons/ui/minimize.png';
import maximizeIcon from '../assets/icons/ui/maximize.png';
import maxminIcon from '../assets/icons/ui/maxmin.png';
import closeIcon from '../assets/icons/ui/close.png';
import {
  changeWindowSize,
  closeWindowApp,
  handleDragWindowApp,
  minimizeWindowApp,
} from '../services/titleBar';
import {
  AppWindowLayoutProps,
  AppWindowTitlebarButtonProps,
  AppWindowTitlebarProps,
} from '..';

function AppWindowTitlebarButton({
  isCloseButton,
  icon,
  onCLick,
}: AppWindowTitlebarButtonProps) {
  return (
    <Box
      component="button"
      className={`transition-all bg-transparent w-12 h-full p-0 m-0 border-0 ${
        isCloseButton ? 'hover:bg-red-500' : 'hover:bg-black/10'
      }`}
      onClick={() => onCLick()}
    >
      <Box
        className={`w-full h-full flex justify-center items-center ${
          isCloseButton ? 'hover:invert' : ''
        }`}
      >
        <img src={icon} alt="title button" className="w-[30%]" />
      </Box>
    </Box>
  );
}

function AppWindowTitlebar({
  appColor,
  textColor,
  titleBarData,
  appId,
  windowStatus,
}: AppWindowTitlebarProps) {
  const titleBar = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (titleBar.current !== null) {
      handleDragWindowApp(titleBar.current, appId);
    }
  }, []);

  return (
    <Box
      ref={titleBar}
      component="div"
      sx={{ color: textColor, backgroundColor: appColor }}
      className="w-full h-9 flex items-center justify-between select-none"
    >
      <Box className="flex items-center w-full px-2">
        <Box className="w-[15px] h-full flex justify-center items-center">
          <img src={titleBarData.icon} alt="title button" className="w-full" />
        </Box>
        <Typography
          variant="caption"
          className="ml-2 text-[10px]"
          color={textColor}
        >
          {titleBarData.title}
        </Typography>
      </Box>
      <Box className="h-full flex pb-1">
        <AppWindowTitlebarButton
          onCLick={() => minimizeWindowApp(appId, windowStatus)}
          icon={minimizeIcon}
          isCloseButton={false}
        />
        <AppWindowTitlebarButton
          onCLick={() =>
            changeWindowSize(
              windowStatus === 'maximize' ? 'maxmin' : 'maximize',
              appId
            )
          }
          icon={windowStatus === 'maximize' ? maximizeIcon : maxminIcon}
          isCloseButton={false}
        />
        <AppWindowTitlebarButton
          onCLick={() => closeWindowApp(appId)}
          icon={closeIcon}
          isCloseButton
        />
      </Box>
    </Box>
  );
}

export default function AppWindowLayout({ data }: AppWindowLayoutProps) {
  return (
    <Box
      sx={{
        width: data.size?.width,
        height: data.size?.height,
        zIndex: data.zIndex,
        top: data.pos?.y,
        left: data.pos?.x,
        borderRadius: data.windowStatus === 'maxmin' ? '0.375rem' : '0px',
        border:
          data.windowStatus === 'maxmin' ? '1px solid rgba(0,0,0,0.1)' : '0px',
        boxShadow:
          data.windowStatus === 'maxmin'
            ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            : '0px',
        // opacity: data.windowStatus === 'minimize' ? 0 : 1,
      }}
      className="transition-all duration-300 flex flex-col absolute overflow-hidden"
    >
      <AppWindowTitlebar
        appColor={data.appColor}
        textColor={data.textColor}
        titleBarData={data.titleBarData}
        appId={data.appId}
        windowStatus={data.windowStatus}
      />
      <Box
        sx={{ backgroundColor: data.appColor }}
        className=" w-full h-[calc(100%_-_36px)]"
      >
        {data.appComponent}
      </Box>
    </Box>
  );
}
