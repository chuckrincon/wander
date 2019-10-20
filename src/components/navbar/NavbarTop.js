import React, { useContext } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, Nav } from 'reactstrap';
import AppContext from '../../context/AppContext';
import Logo from './Logo';
import SearchBox from './SearchBox';
import ProfileDropdown from './ProfileDropdown';
import NotificationDropdown from './NotificationDropdown';

const NavbarTop = () => {
  const { showBurgerMenu, setShowBurgerMenu } = useContext(AppContext);

  return (
    <Navbar light className="navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit" expand>
      <NavbarToggler onClick={() => setShowBurgerMenu(!showBurgerMenu)} id="burgerMenu" />
      <Logo at="navbar-top" width={40} id="topLogo" />
      <Collapse navbar>
        <Nav navbar className="align-items-center d-none d-lg-block">
          <NavItem>
            <SearchBox />
          </NavItem>
        </Nav>

        <Nav navbar className="align-items-center ml-auto">
          <NotificationDropdown />
          <ProfileDropdown />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarTop;
