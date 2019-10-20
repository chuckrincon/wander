import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import NavbarTop from '../components/navbar/NavbarTop';
import NavbarVertical from '../components/navbar/NavbarVertical';
import Footer from '../components/footer/Footer';

import loadable from '@loadable/component';
const DashboardRoutes = loadable(() => import('./DashboardRoutes'));

const DashboardLayout = ({ location }) => {
  const { isFluid } = useContext(AppContext);

  useEffect(() => {
    DashboardRoutes.preload();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      <NavbarVertical />
      <div className="content">
        <NavbarTop />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <DashboardRoutes />
          <Redirect to="/errors/404" />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

DashboardLayout.propTypes = { location: PropTypes.object.isRequired };

export default DashboardLayout;
