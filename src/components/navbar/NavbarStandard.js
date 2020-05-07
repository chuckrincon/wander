import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarToggler, Nav, NavItem, Collapse, NavbarBrand, Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import handleNavbarTransparency from '../../helpers/handleNavbarTransparency';
import wander from '../../assets/img/wander.svg';

const breakpoint = 'lg';

const NavbarStandard = ({ hasTransition }) => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    if (hasTransition) {
      window.addEventListener('scroll', handleNavbarTransparency);
      return () => window.removeEventListener('scroll', handleNavbarTransparency);
    }
  });

  return (
    <Navbar
      dark
      fixed="top"
      expand={breakpoint}
      className={classNames('fs--1 font-weight-semi-bold navbar-standard navbar-theme', {
        'bg-dark': !navbarCollapsed || !hasTransition
      })}
    >
      <Container>
        <NavbarBrand className="text-white" tag={Link} to="/">
          <img src={wander} alt="wander logo" style={{ height: '50px' }} /> wander
        </NavbarBrand>
        <NavbarToggler onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Collapse isOpen={!navbarCollapsed} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink tag={Link} to="/demo">
                Demo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/methodology">
                Methodology
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/pricing">
                Pricing
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;

NavbarStandard.propTypes = {
  hasTransition: PropTypes.bool
};
