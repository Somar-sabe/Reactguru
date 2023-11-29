import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Registration from './pages/register';
import ExpenseListing from './pages/expenseListing';
import PasswordReset from './pages/resetpassword';
import ExpenseManagement from './pages/expansemangment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/expanse-management" element={<ExpenseManagement />} />
        <Route path="/expenselisting" element={<ExpenseListing />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
};

export default App;
