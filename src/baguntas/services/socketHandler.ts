import socketio from 'socket.io-client';
import { handleGameWinner, restartGame } from '.';
import store, { dispatch } from '../../store';
import {
  setCountingDown,
  setIsResultDisplay,
  setIsStarted,
  setPlayersChoice,
  setRoomData,
  setWinnerName,
} from '../redux/actions';

const ENDPOINT = process.env.REACT_APP_ENDPOINT as string;
const socket = socketio(ENDPOINT, { autoConnect: false });

export const onCreateRoom = (gameChoice: any) => {
  const roomId = Math.random().toString(36).substring(2, 8);
  socket.connect();
  socket.emit('createRoom', roomId);
  getRoomPlayers(roomId);
  gameChoice('multi');
};

export const onJoinRoom = () => {
  const { roomData } = store.getState().baguntasReducer;
  socket.connect();
  socket.emit('joinRoom', roomData.roomId);
};

export const onJoinRoomStatus = (gameChoice: any) => {
  socket.on('joinRoomStatus', (data) => {
    if (data.status === 'reject') {
      console.log(data.message);
    } else {
      console.log(data.message);
      dispatch(
        setRoomData({
          roomPlayers: data.roomData.roomPlayers,
          roomId: data.roomData.roomId,
        })
      );
      gameChoice('multi');
    }
  });
};

export const onJoinedPlayer = () => {
  socket.on('joinedPlayer', () => {
    const { roomData } = store.getState().baguntasReducer;
    getRoomPlayers(roomData.roomId);
  });
};

export const disconectSocket = () => {
  socket.disconnect();
  dispatch(
    setRoomData({
      roomId: '',
      roomPlayers: 0,
    })
  );
};
export const getRoomPlayers = (roomId: string) =>
  socket.emit('getRoomPlayers', roomId);

export const onRoomPlayers = () => {
  socket.on('roomPlayers', (roomData) => {
    dispatch(
      setRoomData({
        roomId: roomData.roomId,
        roomPlayers: roomData.roomPlayers,
      })
    );
  });
};

export const socketRestartGame = () => {
  const { roomData } = store.getState().baguntasReducer;
  socket.emit('restartGame', roomData.roomId);
};

export const onRestartedGame = () => {
  socket.on('restartedGame', () => {
    restartGame();
  });
};

export const onDisconectOtherPlayer = () => {
  socket.on('disconectPlayer', () => {
    const { roomData } = store.getState().baguntasReducer;
    console.log('ada yang keluar');
    getRoomPlayers(roomData.roomId);
  });
};

export const onStarted = () => {
  socket.on('started', (countdown: number) => {
    const { playersChoice } = store.getState().baguntasReducer;
    if (countdown === 0) {
      if (playersChoice.player2.choice !== '') {
        dispatch(setWinnerName(handleGameWinner(playersChoice)));
        dispatch(setIsResultDisplay(true));
      } else {
        dispatch(setWinnerName('You'));
        dispatch(setIsResultDisplay(true));
      }
    } else {
      dispatch(setIsStarted(true));
      dispatch(setCountingDown(countdown));
    }
  });
};

export const startTheGame = () => {
  const { roomData } = store.getState().baguntasReducer;
  socket.emit('startTheGame', roomData.roomId);
};

export const sendChoice = (data: string) => {
  const { roomData } = store.getState().baguntasReducer;
  socket.emit('sendChoice', { roomId: roomData.roomId, data });
};

export const onPlayer2Choice = () => {
  socket.on('player2Choice', (data: string) => {
    const { playersChoice } = store.getState().baguntasReducer;
    dispatch(
      setPlayersChoice({
        ...playersChoice,
        player2: {
          choice: data,
          name: 'Player 2',
        },
      })
    );
  });
};
