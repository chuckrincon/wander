import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from './context/AppContext';
import toggleRTL from './helpers/toggleRTL';

class Main extends Component {
  setFluid = isFluid => {
    localStorage.setItem('isFluid', isFluid);
    window.location.reload();
  };
  setRTL = isRTL => {
    this.setState({ isRTL });
    localStorage.setItem('isRTL', isRTL);
    toggleRTL(isRTL);
  };
  setShowBurgerMenu = showBurgerMenu => this.setState({ showBurgerMenu });

  state = {
    isFluid: JSON.parse(localStorage.getItem('isFluid') || false),
    setFluid: this.setFluid,
    isRTL: JSON.parse(localStorage.getItem('isRTL') || false),
    setRTL: this.setRTL,
    showBurgerMenu: false,
    setShowBurgerMenu: this.setShowBurgerMenu
  };

  componentDidMount() {
    this.state.isRTL && toggleRTL(this.state.isRTL);
  }

  render() {
    return <AppProvider value={this.state}>{this.props.children}</AppProvider>;
  }
}

Main.propTypes = { children: PropTypes.node };

export default Main;
