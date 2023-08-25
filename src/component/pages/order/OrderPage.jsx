import { useRef, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'
import Navbar from '../../navbar/Navbar'
import AdminContext from "../../../context/AdminContext"
import { fakeMenu } from '../../../fakeData/fakeMenu'
import { EMPTY_PRODUCT } from '../../../enum/product.jsx'
import { deepClone } from '../../../utils/arrays'


export default function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [products, setProducts] = useState(fakeMenu.SMALL)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  
  

  const resetProducts = () => {
    setProducts(fakeMenu.LARGE)
  }

  const addProduct = (newProduct) => {
    const productsCopy = deepClone(products)
    const productsUpdated = [newProduct, ...productsCopy]
    setProducts(productsUpdated)
  }
  
  const deleteProduct = (productId) => {
    const productsCopy = deepClone(products)
    const productsUpdated = productsCopy.filter((product) => product.id !== productId) 
    setProducts(productsUpdated)
  }

  const editProduct = (productBeingEdited) => {
    const productsCopy = deepClone(products)
    const indexOfProducToEdit = products.indexOf(selectedProduct)
    productsCopy[indexOfProducToEdit] = productBeingEdited
    setProducts(productsCopy)
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
    selectedProduct,
    setSelectedProduct,
    editProduct,
    titleEditRef,
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