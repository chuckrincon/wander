import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from '../components/common/Toast';

import loadable from '@loadable/component';
const Landing = loadable(() => import('../components/landing/Landing'));
const Pricing = loadable(() => import('../components/pricing/Pricing'));
const DemoCalc = loadable(() => import('../components/demoCalc/DemoCalc'));
const Methodology = loadable(() => import('../components/methodology/Methodology'));

const Layout = () => {
  useEffect(() => {
    Landing.preload();
  }, []);

  return (
    <Router fallback={<span />}>
      <Switch>
        <Route path="/methodology" exact component={Methodology} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/demo" exact component={DemoCalc} />
        <Route component={Landing} />
      </Switch>
      <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
    </Router>
  );
};

export default Layout;
