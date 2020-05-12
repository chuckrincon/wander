import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../components/landing/Landing';
import Antler from '../components/properties/antler/Antler';

// import loadable from '@loadable/component';
// const Landing = loadable(() => import('../components/landing/Landing'));
// const Antler = loadable(() => import('../components/properties/antler/Antler'));

const Layout = () => {
  // useEffect(() => {
  //   Landing.preload();
  //   Antler.preload();
  // }, []);

  return (
    <Router fallback={<span />}>
      <Switch>
        <Route path="/antler" exact component={Antler} />
        <Route component={Landing} />
      </Switch>
    </Router>
  );
};

export default Layout;
