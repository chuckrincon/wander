import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from './context/AppContext';

class Main extends Component {
  setFluid = isFluid => {
    localStorage.setItem('isFluid', isFluid);
    window.location.reload();
  };
  setShowBurgerMenu = showBurgerMenu => this.setState({ showBurgerMenu });

  state = {
    isFluid: JSON.parse(localStorage.getItem('isFluid') || false),
    setFluid: this.setFluid,

    showBurgerMenu: false,
    setShowBurgerMenu: this.setShowBurgerMenu
  };

  render() {
    return <AppProvider value={this.state}>{this.props.children}</AppProvider>;
  }
}

Main.propTypes = { children: PropTypes.node };

export default Main;
