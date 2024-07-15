import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'src/app.scss';
import TopPage from 'src/Components/TopPage';
import GameComponent from 'src/Components/GameComponent';
import ResultComponent from 'src/Components/Result/Result';

const App = () => {
  return (
    <Router basename='/GenderQuestions'>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/GameComponent' element={<GameComponent />} />
        <Route path='/Result/Result' element={<ResultComponent />} />
      </Routes>
    </Router>
  );
};

export default App;