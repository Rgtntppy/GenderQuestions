import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'src/app.scss';
import TopPage from 'src/Components/TopPage';
import GameComponent from 'src/Components/GameComponent';
import ResultComponent from 'src/Components/Result/Result';

const App = () => {
  return (
    <Router basename='/GenderQuestions/frontend/docs'>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/GameComponent' element={<GameComponent />} />
        <Route path='/Result/Result' element={<ResultComponent />} />
      </Routes>
    </Router>
  );
};

export default App;