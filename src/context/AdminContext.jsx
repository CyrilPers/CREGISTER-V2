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
    resetCategoryAndProducts: () => { },
    setProducts: () => { },
    addProduct: () => { },
    deleteProduct: () => { },
    editProduct: () => { },
    filteredProducts: [],
    setFilteredProducts: () => { },

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
    totalBasket: {},
    setTotalBasket: () => { },


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
    resetCustomers: () => { },


    invoices: [],
    setInvoices: () => { },
    editInvoice: () => { },
    createInvoice: () => { },
    getPdf: () => { },

    invoice: {},
    setInvoice: () => { },
    deleteInvoice: () => { },

    currentPage: {},
    setCurrentPage: () => { },

    initialiseBasket: () => { },
    initialiseInvoice: () => { },
    initialiseCustomers: () => { },
});
