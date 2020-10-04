import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import TopNav from './components/Layout/TopNav';
import Home from './pages/Home';

const Router: React.FC = () => {
  return (
    <>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default withRouter(Router);
