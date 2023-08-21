import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'
import Navbar from '../../navbar/Navbar'
import AdminContext from "../../../context/AdminContext"
import { fakeMenu } from '../../../fakeData/fakeMenu'
import { EMPTY_PRODUCT } from './admin/admin-panel/AddForm'


export default function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [products, setProducts] = useState(fakeMenu.SMALL)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  
  const resetProducts = () => {
    setProducts(fakeMenu.LARGE)
  }

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  }
  
  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  }

  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    addProduct,
    deleteProduct,
    resetProducts,
    newProduct,
    setNewProduct,
  }

  return (
    <AdminContext.Provider value={adminContextValue}>
      <OrderPageStyled>
      <div className='container'>
        <Navbar />
        <Main />
      </div>
      </OrderPageStyled>
    </AdminContext.Provider>
  )
}

const OrderPageStyled = styled.div`  
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: ${theme.borderRadius.extraRound}
  }  
`;