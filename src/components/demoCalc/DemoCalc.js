import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Dashboard from '../dashboard/Dashboard';
import NavbarStandard from '../navbar/NavbarStandard';
import FooterStandard from '../landing/FooterStandard';

const DashboardLayout = ({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <NavbarStandard />
      <Container style={{ marginTop: '90px', marginBottom: '16px' }}>
        <Dashboard />
      </Container>
      <FooterStandard />
    </>
  );
};

DashboardLayout.propTypes = { location: PropTypes.object.isRequired };

export default DashboardLayout;
