import { TaskManagerData } from '..';
import TextToPasswordPage from '../../text-to-password/TextToPasswordPage';
import KamusAlayPage from '../../kamus-alay/KamusAlayPage';
import ExecuteProject from '../assets/icons/win/877.png';

const AppLists: TaskManagerData[] = [
  {
    appId: 'text-password',
    appComponent: <TextToPasswordPage />,
    appColor: '#f5f5f5',
    isActive: false,
    textColor: '#000',
    titleBarData: {
      icon: ExecuteProject,
      title: 'Text to Password',
    },
    windowStatus: 'maximize',
    zIndex: 11,
    pos: {
      x: '0px',
      y: '0px',
    },
    size: {
      width: '100%',
      height: '100%',
    },
  },
  {
    appId: 'kamus-alay',
    appComponent: <KamusAlayPage />,
    appColor: '#f5f5f5',
    isActive: false,
    textColor: '#000',
    titleBarData: {
      icon: ExecuteProject,
      title: 'Kamus Alay',
    },
    windowStatus: 'maximize',
    zIndex: 12,
    pos: {
      x: '0px',
      y: '0px',
    },
    size: {
      width: '100%',
      height: '100%',
    },
  },
];

export default AppLists;
