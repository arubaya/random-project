import RecycleBinIcon from '../assets/icons/bin1.png';
import StoreIcon from '../assets/icons/store.png';
import EdgeIcon from '../assets/icons/edge.png';
import WordIcon from '../assets/icons/winWord.png';
import ExcelIcon from '../assets/icons/excel.png';
import ExecuteProject from '../assets/icons/win/877.png';
import { AppIconData } from '..';
import store, { dispatch } from '../../store';
import AppLists from '../services/appList';
import { setTaskManagerData } from '../redux/actions';

const openApp = (appId: string) => {
  const { tasksManager } = store.getState().winCloneReducer;
  dispatch(
    setTaskManagerData([
      ...tasksManager,
      ...AppLists.filter((app) => appId === app.appId),
    ])
  );
};

const desktopIconList: AppIconData[] = [
  {
    icon: RecycleBinIcon,
    title: 'RecycleBin',
    onClick: () => {},
  },
  {
    icon: StoreIcon,
    title: 'Microsoft Store',
    onClick: () => {},
  },
  {
    icon: EdgeIcon,
    title: 'Edge',
    onClick: () => {},
  },
  {
    icon: WordIcon,
    title: 'Word',
    onClick: () => {},
  },
  {
    icon: ExcelIcon,
    title: 'Excel',
    onClick: () => {},
  },
  {
    icon: ExecuteProject,
    title: 'Kamus Alay',
    onClick: () => {
      openApp('kamus-alay');
    },
  },
  {
    icon: ExecuteProject,
    title: 'Text to Password',
    onClick: () => {
      openApp('text-password');
    },
  },
];

export default desktopIconList;
