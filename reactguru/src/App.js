import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login';
import ExpanseManagement from './pages/ExpanseManagement';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={login} />
        <Route path="/expanse-management" component={ExpanseManagement} />
        {/* Other routes if needed */}
      </Switch>
    </Router>
  );
};

export default App;
