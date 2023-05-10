import React from 'react';
import Header from './component/Header';
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
