import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Arena from './Arena';
import Join from './Join';

export interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <Router>
      <Switch>
        <Route path="/join">
          <Join />
        </Route>

        <ProtectedRoute path="/arena">
          <Arena />
        </ProtectedRoute>

        <Route exact path="/">
          <Redirect to="/join" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
