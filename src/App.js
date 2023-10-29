// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
