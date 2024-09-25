import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'src/app.scss';

const TopPage = lazy(() => import('src/Components/TopPage'));
const GameComponent = lazy(() => import('src/Components/GameComponent'));
const ResultComponent = lazy(() => import('src/Components/Result/Result'));

const App = () => {
  return (
    <Router basename='/GenderQuestions/docs'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='/GameComponent' element={<GameComponent />} />
          <Route path='/Result/Result' element={<ResultComponent />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;