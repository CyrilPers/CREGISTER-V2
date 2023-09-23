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


    setDisplayedCategories: () => { },
    categories: [],
    displayedCategories: [],
    setCategories: () => { },
    selectedCategory: [],
    setSelectedCategory: () => { },
    newCategory: {},
    setNewCategory: () => { },
    deleteCategory: () => { },
    addCategory: () => { },


    setCustomers: () => { },
    customers: [],
    selectedCustomer: {},
    setSelectedCustomer: () => { },

    customer: {},
    setCustomer: () => { },
    deleteCustomer: () => { },


    invoices: [],
    setInvoices: () => { },
    editInvoice: () => { },

    invoice: {},
    setInvoice: () => { },
});
