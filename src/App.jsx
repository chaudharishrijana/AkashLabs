import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ApiPage from './pages/ApiPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/api-demo" element={<ApiPage />} />
      </Routes>
    </Router>
  );
}

export default App;