import store from './store/index';

declare global {
  interface ChildrenProps extends React.ComponentProps<> {
    children: React.ReactNode;
  }
  interface Action {
    type: string;
    payload: any;
  }
  interface UserData {
    userCode: string;
    userName: string;
    grpCode: string;
    grpName: string;
    empCode: string;
    empName: string;
    posName: string;
    deptName: string;
    isAllowedToAccessApproval: boolean;
  }
  type RootState = ReturnType<typeof store.getState>;

  export interface EmpCodeRequestBody {
    empCode: string;
  }
  export interface SelectInputOption {
    display: string | number;
    value: string | number;
  }
}
