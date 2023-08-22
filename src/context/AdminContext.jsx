import { createContext } from 'react';

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},
 
    currentTabSelected: true,
    setCurrentTabSelected: () => {},

    products: [],
    productSelected: [],
    setProductSelect: () => {},

    setProducts: () => {},
    addProduct: () => {},
    deleteProduct: () => {},
    resetProducts: () => {},
    editProduct: () => {},

    selectedProduct: {},
    setSelectedProduct: () => {},
    
    newProduct: {},
    setNewProduct: () => {},    
});
