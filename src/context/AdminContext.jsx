import { createContext } from 'react';

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},
 
    currentTabSelected: true,
    setCurrentTabSelected: () => {},

    products: [],
    setProducts: () => {},
    addProduct: () => {},

});
