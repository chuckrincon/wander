import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Modal,
  ModalBody,
  NavbarBrand,
  Container,
  NavLink,
  CardBody,
  Card
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import handleNavbarTransparency from '../../helpers/handleNavbarTransparency';
import Registration from '../auth/basic/Registration';

const breakpoint = 'lg';

const NavbarStandard = ({ hasTransition }) => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

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
          disrupDER
        </NavbarBrand>
        <NavbarToggler onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Collapse isOpen={!navbarCollapsed} navbar>
          <Nav navbar className="ml-auto">
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
            <NavItem>
              <NavLink tag={Link} to="#!" onClick={() => setShowRegistrationModal(!showRegistrationModal)}>
                Register
              </NavLink>
              <Modal
                isOpen={showRegistrationModal}
                centered
                toggle={() => setShowRegistrationModal(!showRegistrationModal)}
              >
                <ModalBody className="p-0">
                  <Card>
                    <CardBody className="fs--1 font-weight-normal p-4">
                      <Registration />
                    </CardBody>
                  </Card>
                </ModalBody>
              </Modal>
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
