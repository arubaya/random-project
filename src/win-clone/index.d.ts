export interface WinCloneInitialState {
  isHomePopup: boolean;
  tasksManager: TaskManagerData[];
}

export interface AppWindowTitlebarProps {
  appColor: string;
  textColor: string;
  titleBarData: {
    title: string;
    icon: string;
  };
  windowStatus: 'maximize' | 'minimize' | 'maxmin' | 'close';
  appId: string;
}

export interface AppWindowTitlebarButtonProps {
  isCloseButton: boolean;
  icon: string;
  onCLick: () => void;
}

export interface AppWindowLayoutProps {
  data: TaskManagerData;
}

export interface TaskManagerData
  extends AppWindowTitlebarProps,
    DefaultTaskConfig {
  appId: string;
  appComponent: JSX.Element | string;
}

export interface AppIconData {
  icon: string;
  title: string;
  desc?: string;
  onClick: () => void;
}

export interface DefaultTaskConfig {
  size?: {
    width: string;
    height: string;
  };
  pos?: {
    x: string;
    y: string;
  };
  zIndex: number;
  windowStatus: 'maximize' | 'minimize' | 'maxmin' | 'close';
  isActive: boolean;
}
