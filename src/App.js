import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={0} path={route.path} element={route.component} exact />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
