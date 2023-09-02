import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'
import Navbar from '../../navbar/Navbar'
import AdminContext from "../../../context/AdminContext"
import { EMPTY_PRODUCT } from '../../../enum/product.jsx'
import { useProducts } from '../../../hooks/useProducts'
import { useBasket } from '../../../hooks/useBasket'
import { useParams } from 'react-router-dom'
import { initialiseUserSession } from './helpers/initialiseUserSession'
import { findInArray } from '../../../utils/arrays'



export default function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  const { products, resetProducts, addProduct, deleteProduct, editProduct, setProducts } = useProducts()
  const { basket, addBasketProduct, deleteBasketProduct, setBasket } = useBasket()
  const { username } = useParams()

  const selectProduct = async (productIdSelected) => {
    const productClickedOn = findInArray(productIdSelected, products)
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    await setSelectedProduct(productClickedOn)
    titleEditRef.current.focus()
  }



  useEffect(() => {
    initialiseUserSession(username, setProducts, setBasket)
  }, [])


  const adminContextValue = {
    username,
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
    selectedProduct,
    setSelectedProduct,
    editProduct,
    titleEditRef,
    basket,
    addBasketProduct,
    deleteBasketProduct,
    selectProduct,
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
  background: 
  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('/images/background.png') fixed center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: ${theme.borderRadius.extraRound}
  }  

  @media(max-width: 1388px) {
    padding: 0 0px;
    min-height: 100vh;
    max-height: none;

    .container {
      max-width: 100%;
      width: 100%;
      max-height: none;
      padding: 0 5px;
    }
  }
`;