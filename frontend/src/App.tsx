import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'src/app.scss';
import TopPage from 'src/Components/TopPage';
import GameComponent from 'src/Components/GameComponent';
import ResultComponent from 'src/Components/Result/Result';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path='/GameComponent' element={<GameComponent />} />
      <Route path='/Result/Result' element={<ResultComponent />} />
    </Routes>
  );
};

export default App;