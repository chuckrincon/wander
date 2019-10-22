import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from '../components/common/Toast';

import loadable from '@loadable/component';
const Landing = loadable(() => import('../components/landing/Landing'));
const Pricing = loadable(() => import('../components/pricing/Pricing'));

const Layout = () => {
  useEffect(() => {
    Landing.preload();
  }, []);

  return (
    <Router fallback={<span />}>
      <Switch>
        <Route path="/methodology" exact component={Landing} />
        <Route path="/pricing" exact component={Pricing} />
        <Route component={Landing} />
      </Switch>
      <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
    </Router>
  );
};

export default Layout;
