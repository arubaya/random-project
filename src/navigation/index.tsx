import { Routes, Route, Navigate } from 'react-router-dom';

import * as Page from './Pages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Page.HomePage />} />
      <Route path="/neumorphism-calc" element={<Page.NeumorphismCalcPage />} />
    </Routes>
  );
}
