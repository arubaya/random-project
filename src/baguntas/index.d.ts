export interface BaguntasInitialState {
  yourChoice: string;
  yourName: string;
  winnerName: string;
  playersChoice: PlayersChoiceData;
  isResultDisplay: boolean;
  countDown: number;
}

export interface PlayerData {
  choice: string;
  name: string;
}

export interface PlayersChoiceData {
  player1: PlayerData;
  player2: PlayerData;
}
