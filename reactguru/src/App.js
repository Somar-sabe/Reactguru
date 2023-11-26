import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login';
import Registration from './pages/register';
import ExpenseListing from './pages/expenseListing';
import PasswordReset from './pages/resetpassword';
import ExpenseManagement from './pages/expansemangment';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={login} />
        <Route path="/expanse-management" component={ExpenseManagement} />
        <Route path="/expenselisting" component={ExpenseListing} />
        <Route path="/register" component={Registration} />
        <Route path="/passwordreset" component={PasswordReset} />
      </Switch>
    </Router>
  );
};

export default App;
