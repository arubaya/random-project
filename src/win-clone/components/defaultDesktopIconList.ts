import RecycleBinIcon from '../assets/icons/bin1.png';
// import StoreIcon from '../assets/icons/store.png';
// import EdgeIcon from '../assets/icons/edge.png';
// import WordIcon from '../assets/icons/winWord.png';
// import ExcelIcon from '../assets/icons/excel.png';
import ExecuteProject from '../assets/icons/win/877.png';
import { AppIconData } from '..';
import store, { dispatch } from '../../store';
import AppLists from '../services/appList';
import { setTaskManagerData } from '../redux/actions';
import { makeWindowAppOnTop } from '../services/titleBar';

const openApp = (appId: string) => {
  const { tasksManager } = store.getState().winCloneReducer;
  let isAlreadyOpen = false;
  tasksManager.forEach((task) => {
    if (task.appId === appId) {
      isAlreadyOpen = true;
    }
  });
  if (!isAlreadyOpen) {
    dispatch(
      setTaskManagerData([
        ...tasksManager,
        ...AppLists.filter((app) => appId === app.appId).map((appData) => ({
          ...appData,
          zIndex: 11 + tasksManager.length,
          isActive: true,
        })),
      ])
    );
    makeWindowAppOnTop(appId, false);
  } else {
    makeWindowAppOnTop(appId, false);
  }
};

const desktopIconList: AppIconData[] = [
  {
    icon: RecycleBinIcon,
    title: 'RecycleBin',
    onClick: () => {},
  },
  ...AppLists.map((app) => ({
    icon: app.titleBarData.icon,
    title: app.titleBarData.title,
    onClick: () => {
      openApp(app.appId);
    },
  })),
];

export default desktopIconList;
