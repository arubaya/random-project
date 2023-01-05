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
                  width: '600px',
                  height: '400px',
                },
                pos: {
                  x: 'calc(100% - 900px)',
                  y: 'calc(100% - 500px)',
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

  const dragMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    elParent.classList.remove('transition-all');
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e: MouseEvent) => {
    // const { tasksManager } = store.getState().winCloneReducer;
    e.preventDefault();
    elParent.classList.remove('transition-all');
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    newTopPos = elParent.offsetTop - pos2;
    newLeftPos = elParent.offsetLeft - pos1;

    elParent.style.top = newTopPos + 'px';
    elParent.style.left = newLeftPos + 'px';

    // dispatch(
    //   setTaskManagerData(
    //     tasksManager.map((task) => {
    //       if (task.appId === appId) {
    //         return {
    //           ...task,
    //           windowStatus: 'maxmin',
    //           pos: {
    //             x: `${newTopPos}px`,
    //             y: `${newLeftPos}px`,
    //           },
    //           size: {
    //             width: '600px',
    //             height: '400px',
    //           },
    //         };
    //       } else {
    //         return task;
    //       }
    //     })
    //   )
    // );
  };

  const closeDragElement = () => {
    const { tasksManager } = store.getState().winCloneReducer;
    dispatch(
      setTaskManagerData(
        tasksManager.map((task) => {
          if (task.appId === appId) {
            return {
              ...task,
              windowStatus: 'maxmin',
              pos: {
                x: `${newTopPos}px`,
                y: `${newLeftPos}px`,
              },
              size: {
                width: '600px',
                height: '400px',
              },
            };
          } else {
            return task;
          }
        })
      )
    );
    elParent.classList.add('transition-all');
    document.onmouseup = null;
    document.onmousemove = null;
  };

  el.onmousedown = dragMouseDown;
};

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
