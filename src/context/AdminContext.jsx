import { createContext } from 'react';

export default createContext({

    username: "",

    invoiceId: "",
    setInvoiceId: () => { },

    userId: 0,
    setUserId: () => { },

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
    setBasket: () => { },
    addBasketProduct: () => { },
    deleteBasketProduct: () => { },
});
