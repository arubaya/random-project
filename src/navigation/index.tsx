import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';

import * as Page from './Pages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Page.HomePage />} />
      <Route
        path="/neumorphism-calc"
        element={
          <Header>
            <Page.NeumorphismCalcPage />
          </Header>
        }
      />
      <Route
        path="/sudoku-solver"
        element={
          <Header>
            <Page.SudokuSolverPage />
          </Header>
        }
      />
      <Route
        path="/hummingbird"
        element={
          <Header>
            <Page.HummingbirdPage />
          </Header>
        }
      />
      <Route
        path="/simple-aimlab"
        element={
          <Header>
            <Page.SimpleAimLabPage />
          </Header>
        }
      />
      <Route
        path="/baguntas"
        element={
          <Header>
            <Page.BaguntasPage />
          </Header>
        }
      />
      <Route
        path="/spotify-player"
        element={
          <Header>
            <Page.SpotifyPlayerPage />
          </Header>
        }
      />
      <Route
        path="/kamus-alay"
        element={
          <Header>
            <Page.KamusAlayPage />
          </Header>
        }
      />
      <Route
        path="/text-to-password"
        element={
          <Header>
            <Page.TextToPasswordPage />
          </Header>
        }
      />
      <Route path="/win-clone" element={<Page.WinClonePage />} />
    </Routes>
  );
}
