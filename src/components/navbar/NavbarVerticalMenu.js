import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import NavbarVerticalMenuItem from './NavbarVerticalMenuItem';

const NavbarVerticalMenu = ({ routes, location, handleNavbarVerticalCollapse }) => {
  const [opened, setOpened] = useState(null);
  useEffect(() => {
    let openedDropdown = null;
    routes.forEach((route, index) => {
      if (location.pathname.indexOf(route.to) === 0) openedDropdown = index;
    });

    setOpened(openedDropdown);
    // eslint-disable-next-line
  }, []);

  const toggleOpened = index => setOpened(opened === index ? null : index);

  return routes.map((route, index) => {
    if (!route.children) {
      return (
        <NavItem key={index}>
          <NavLink className="nav-link" {...route} onClick={handleNavbarVerticalCollapse}>
            <NavbarVerticalMenuItem route={route} />
          </NavLink>
        </NavItem>
      );
    }

    return (
      <NavItem key={index}>
        <NavLink
          to="#"
          onClick={() => toggleOpened(index)}
          className="nav-link dropdown-indicator"
          aria-expanded={opened === index}
        >
          <NavbarVerticalMenuItem route={route} />
        </NavLink>
        <Collapse isOpen={opened === index}>
          <Nav>
            <NavbarVerticalMenu
              routes={route.children}
              location={location}
              handleNavbarVerticalCollapse={handleNavbarVerticalCollapse}
            />
          </Nav>
        </Collapse>
      </NavItem>
    );
  });
};

NavbarVerticalMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(NavbarVerticalMenu);
