import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpinWheel from './components/SpinWheel';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpinWheel />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
