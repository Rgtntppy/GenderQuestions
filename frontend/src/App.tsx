import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'src/app.scss';
import TopPage from 'src/Components/TopPage';
import GameComponent from 'src/Components/GameComponent';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage/>} />
      <Route path='/GameComponent' element={<GameComponent/>} />
    </Routes>
  );
};

export default App;