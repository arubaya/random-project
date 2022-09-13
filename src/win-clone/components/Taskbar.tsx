import React from 'react';
import { Box, Typography } from '@mui/material';

import TaskbarButton from './TaskbarButton';

import WidgetIcon from '../assets/icons/widget.png';
import HomeIcon from '../assets/icons/home.png';
import SearchIcon from '../assets/icons/search.png';
import SettingIcon from '../assets/icons/settings.png';
import ExplorerIcon from '../assets/icons/explorer.png';
import EdgeIcon from '../assets/icons/edge.png';

import WifiIcon from '../assets/icons/ui/wifi.png';
import AudioIcon from '../assets/icons/ui/audio3.png';
import BatteryIcon from '../assets/icons/ui/battery.png';

import { ExpandLessRounded } from '@mui/icons-material';
import moment from 'moment';
import { dispatch } from '../../store';
import { setIsHomePopup } from '../redux/actions';
import { useSelector } from 'react-redux';

interface TaskbarProps {
  taskbarHeight: number;
}

export default function Taskbar({ taskbarHeight }: TaskbarProps) {
  const [toolbarWidth, setToolbarWidth] = React.useState(0);
  const [time, setTime] = React.useState(moment().format('LT'));
  const [taskbarGoDown, setTaskbarGoDown] = React.useState(false);

  const { isHomePopup } = useSelector(
    (state: RootState) => state.winCloneReducer
  );

  React.useEffect(() => {
    const toolbarWidths = document.getElementById('toolbar')?.offsetWidth;
    setToolbarWidth(toolbarWidths as number);

    const interval = setInterval(() => setTime(moment().format('LT')), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePopupTaskbar = () => {
    setTaskbarGoDown(false);
    setTimeout(() => setTaskbarGoDown(true), 2000);
  };

  const handleClickHome = () => {
    dispatch(setIsHomePopup(!isHomePopup));
  };
  return (
    <Box
      sx={{ height: `${taskbarHeight}px`, bottom: taskbarGoDown ? -47 : 0 }}
      // onMouseOver={() => handlePopupTaskbar()}
      className="w-full bg-white/80 backdrop-blur flex justify-between items-center px-2 py-1 fixed transition-all duration-500 z-50"
    >
      <Box sx={{ width: toolbarWidth }} className="h-fit">
        <TaskbarButton icon={WidgetIcon} />
      </Box>
      <Box className="flex">
        <Box className="mx-1" onClick={() => handleClickHome()}>
          <TaskbarButton icon={HomeIcon} />
        </Box>
        <Box className="mx-1">
          <TaskbarButton icon={SearchIcon} />
        </Box>
        <Box className="mx-1">
          <TaskbarButton icon={SettingIcon} />
        </Box>
        <Box className="mx-1">
          <TaskbarButton icon={ExplorerIcon} />
        </Box>
        <Box className="mx-1">
          <TaskbarButton icon={EdgeIcon} />
        </Box>
      </Box>
      <Box className="flex w-fit" id="toolbar">
        <Box className="w-[25px] h-[40px] flex justify-center items-center hover:bg-white rounded transition-all select-none cursor-pointer">
          <ExpandLessRounded fontSize="small" />
        </Box>

        <Box className="w-fit h-[40px] px-2 ml-1 flex items-center hover:bg-white rounded transition-all select-none cursor-pointer">
          <Box className="w-4 flex mx-1">
            <img src={WifiIcon} alt="wifi" className="w-full" />
          </Box>
          <Box className="w-4 flex mx-1">
            <img src={AudioIcon} alt="audio" className="w-full" />
          </Box>
          <Box className="w-4 flex mx-1">
            <img src={BatteryIcon} alt="battery" className="w-full" />
          </Box>
        </Box>
        <Box className="w-fit h-[40px] px-2 ml-1 flex flex-col text-right hover:bg-white rounded transition-all select-none cursor-pointer">
          <Typography variant="caption">{time}</Typography>
          <Typography variant="caption">
            {moment().format('DD/MM/YYYY')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
