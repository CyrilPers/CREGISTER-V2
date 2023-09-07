import { createContext } from 'react';

export default createContext({

    username: "",

    userId: 0,

    isModeAdmin: false,
    setIsModeAdmin: () => { },

    isCollapsed: false,
    setIsCollapsed: () => { },

    currentTabSelected: false,
    setCurrentTabSelected: () => { },

    products: [],
    productSelected: [],
    setProductSelect: () => { },

    setProducts: () => { },
    addProduct: () => { },
    deleteProduct: () => { },
    resetProducts: () => { },
    editProduct: () => { },

    selectProduct: () => { },
    selectedProduct: {},
    setSelectedProduct: () => { },

    newProduct: {},
    setNewProduct: () => { },

    titleEditRef: {},

    basket: [],
    addBasketProduct: () => { },
    deleteBasketProduct: () => { },
});
