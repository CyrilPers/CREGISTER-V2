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


    selectCustomer: () => { },
    setCustomers: () => { },
    customers: [],
    selectedCustomer: {},
    setSelectedCustomer: () => { },

    customer: {},
    setCustomer: () => { },
    deleteCustomer: () => { },
    newCustomer: {},
    setNewCustomer: () => { },
    addCustomer: () => { },
    editCustomer: () => { },


    invoices: [],
    setInvoices: () => { },
    editInvoice: () => { },

    invoice: {},
    setInvoice: () => { },
    deleteInvoice: () => { },

    currentPage: {},
    setCurrentPage: () => { },

    initialiseBasket: () => { },
    initialiseInvoice: () => { },
    initialiseCustomers: () => { },
});
