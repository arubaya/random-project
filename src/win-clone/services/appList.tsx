import { DefaultTaskConfig, TaskManagerData } from '..';
import ExecuteProject from '../assets/icons/win/877.png';
import CalculatorIcon from '../assets/icons/calculator.png';
import SpotifyIcon from '../assets/icons/spotify.png';

import TextToPasswordPage from '../../text-to-password/TextToPasswordPage';
import KamusAlayPage from '../../kamus-alay/KamusAlayPage';
import NeumorphismCalcPage from '../../neumorphism-calc/NeumorphismCalcPage';
import SpotifyPlayerPage from '../../spotify-player/SpotifyPlayerPage';

const defaultTaskConfig: DefaultTaskConfig = {
  isActive: false,
  windowStatus: 'maximize',
  zIndex: 0,
  pos: {
    x: '0px',
    y: '0px',
  },
  size: {
    width: '100%',
    height: '100%',
  },
};

const AppLists: TaskManagerData[] = [
  {
    appId: 'calculator',
    appComponent: <NeumorphismCalcPage />,
    appColor: '#f5f5f5',
    textColor: '#000',
    titleBarData: {
      icon: CalculatorIcon,
      title: 'Calculator',
    },
    ...defaultTaskConfig,
  },
  {
    appId: 'spotify-embeded',
    appComponent: <SpotifyPlayerPage />,
    appColor: '#f5f5f5',
    textColor: '#000',
    titleBarData: {
      icon: SpotifyIcon,
      title: 'Spotify Embeded Player',
    },
    ...defaultTaskConfig,
  },
  {
    appId: 'text-password',
    appComponent: <TextToPasswordPage />,
    appColor: '#f5f5f5',
    textColor: '#000',
    titleBarData: {
      icon: ExecuteProject,
      title: 'Text to Password',
    },
    ...defaultTaskConfig,
  },
  {
    appId: 'kamus-alay',
    appComponent: <KamusAlayPage />,
    appColor: '#f5f5f5',
    textColor: '#000',
    titleBarData: {
      icon: ExecuteProject,
      title: 'Kamus Alay',
    },
    ...defaultTaskConfig,
  },
];

export default AppLists;
