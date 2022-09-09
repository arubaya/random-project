export interface BaguntasInitialState {
  yourChoice: string;
  yourName: string;
  winnerName: string;
  playersChoice: PlayersChoiceData;
  isResultDisplay: boolean;
  countDown: number;
  gameMode: GameMode;
  isLobby: boolean;
  roomData: RoomData;
  isStarted: boolean;
}

export interface PlayerData {
  choice: string;
  name: string;
}

export interface PlayersChoiceData {
  player1: PlayerData;
  player2: PlayerData;
}

export type GameMode = 'single' | 'multi';
export type MultiPlayerMode = 'create' | 'join';

export interface RoomData {
  roomId: string;
  roomPlayers: number;
}
