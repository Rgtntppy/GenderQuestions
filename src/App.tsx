import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'app.scss';
import TopPage from 'Components/TopPage';
import GameComponent from 'Components/GameComponent';
import ResultComponent from 'Components/Result/Result';
import NotFoundRedirect from 'Components/System/NotFoundRedirect';

const App = () => {
  return (
    <Router basename='/GenderQuestions/docs'>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/GameComponent' element={<GameComponent />} />
        <Route path='/Result/Result' element={<ResultComponent />} />
        <Route path='*' element={<NotFoundRedirect />} />
      </Routes>
    </Router>
  );
};

export default App;