import React, { useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'
import Navbar from '../../navbar/Navbar'
import AdminContext from "../../../context/AdminContext"
import { fakeMenu } from '../../../fakeData/fakeMenu'

export default function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [products, setProducts] = useState(fakeMenu.MEDIUM)

  
  const addProduct = (newProduct) => {
    const productsCopy = [...products]
    const productsUpdated = [newProduct, ...productsCopy]
    setProducts(productsUpdated)
  }

  const deleteProduct = (productId) => { 
    const productsCopy = [...products]
    const productsUpdated = productsCopy.filter((product) => product.id !== productId) // filter-in, garder tous sauf le produit à supprimer
    setProducts(productsUpdated)
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