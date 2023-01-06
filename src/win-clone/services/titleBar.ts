import store, { dispatch } from '../../store';
import { setTaskManagerData } from '../redux/actions';

export const changeWindowSize = (
  type: 'maxmin' | 'maximize',
  appId: string
) => {
  const { tasksManager } = store.getState().winCloneReducer;
  dispatch(
    setTaskManagerData(
      tasksManager.map((task) => {
        if (task.appId === appId) {
          switch (type) {
            case 'maxmin':
              return {
                ...task,
                windowStatus: 'maxmin',
                size: {
                  width: '60%',
                  height: '90%',
                },
                pos: {
                  x: '10%',
                  y: '10%',
                },
              };
            case 'maximize':
              return {
                ...task,
                windowStatus: 'maximize',
                size: {
                  width: '100%',
                  height: '100%',
                },
                pos: {
                  x: '0px',
                  y: '0px',
                },
              };
          }
        } else {
          return task;
        }
      })
    )
  );
};

export const closeWindowApp = (appId: string) => {
  const { tasksManager } = store.getState().winCloneReducer;
  dispatch(
    setTaskManagerData(tasksManager.filter((task) => task.appId !== appId))
  );
};

export const handleDragWindowApp = (el: HTMLDivElement, appId: string) => {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  let newTopPos = 0;
  let newLeftPos = 0;

  const elParent = el.parentElement as HTMLDivElement;
  const firstChild = el.firstChild as HTMLDivElement;

  const dragMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    elParent.classList.remove('transition-all');
    elParent.classList.remove('duration-300');
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;

    makeWindowAppOnTop(appId);
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: MouseEvent) => {
    e.preventDefault();
    elParent.classList.remove('transition-all');
    elParent.classList.remove('duration-300');
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    newTopPos = elParent.offsetTop - pos2;
    newLeftPos = elParent.offsetLeft - pos1;

    elParent.style.top = (newTopPos < 0 ? 0 : newTopPos) + 'px';
    elParent.style.left = (newLeftPos < 0 ? 0 : newLeftPos) + 'px';
  };

  const closeDragElement = () => {
    const { tasksManager } = store.getState().winCloneReducer;
    dispatch(
      setTaskManagerData(
        tasksManager.map((task) => {
          const isMove = newLeftPos > 0 && newTopPos > 0;
          if (task.appId === appId && isMove) {
            return {
              ...task,
              windowStatus: 'maxmin',
              pos: {
                x: `${newLeftPos}px`,
                y: `${newTopPos}px`,
              },
              size: {
                width: '60%',
                height: '90%',
              },
            };
          } else {
            return task;
          }
        })
      )
    );
    elParent.classList.add('transition-all');
    elParent.classList.add('duration-300');
    document.onmouseup = null;
    document.onmousemove = null;
    elParent.style.removeProperty('top');
    elParent.style.removeProperty('left');
  };

  firstChild.onmousedown = dragMouseDown;
};

export const endAllTask = () => {
  dispatch(setTaskManagerData([]));
};

export const makeWindowAppOnTop = (
  appId: string,
  isChangeWindowStatus?: boolean
) => {
  const { tasksManager } = store.getState().winCloneReducer;
  dispatch(
    setTaskManagerData(
      tasksManager.map((task) => {
        if (task.appId === appId) {
          if (task.windowStatus === 'minimize') {
            return {
              ...task,
              windowStatus: 'maximize',
              isActive: true,
              size: {
                width: '100%',
                height: '100%',
              },
              pos: {
                x: '0px',
                y: '0px',
              },
            };
          } else {
            return {
              ...task,
              windowStatus: isChangeWindowStatus ? 'maxmin' : task.windowStatus,
              isActive: true,
              zIndex:
                task.zIndex <= tasksManager.length + 11
                  ? 11 + tasksManager.length
                  : task.zIndex,
            };
          }
        } else {
          return {
            ...task,
            windowStatus: isChangeWindowStatus ? 'maxmin' : task.windowStatus,
            isActive: false,
            zIndex: task.zIndex === 11 ? task.zIndex : task.zIndex - 1,
          };
        }
      })
    )
  );
};

export const minimizeWindowApp = (appId: string, windowStatus: string) => {
  const { tasksManager } = store.getState().winCloneReducer;
  dispatch(
    setTaskManagerData(
      tasksManager.map((task) => {
        if (task.appId === appId) {
          if (windowStatus === 'minimize') {
            return {
              ...task,
              windowStatus: 'maximize',
              isActive: true,
              size: {
                width: '100%',
                height: '100%',
              },
              pos: {
                x: '0px',
                y: '0px',
              },
            };
          } else {
            return {
              ...task,
              windowStatus: 'minimize',
              isActive: false,
              size: {
                width: '0px',
                height: '0px',
              },
              pos: {
                x: '30%',
                y: '200%',
              },
            };
          }
        } else {
          return task;
        }
      })
    )
  );
};
