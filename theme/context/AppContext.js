import { createContext } from 'react';

const AppContext = createContext({
  isFluid: false,
  isRTL: false,
  showBurgerMenu: false // controls showing vertical nav on mobile
});

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;
