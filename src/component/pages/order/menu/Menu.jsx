import { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import AdminContext from '../../../../context/AdminContext.jsx';
import { EMPTY_PRODUCT } from '../../../../enum/product';
import { findInArray } from '../../../../utils/arrays';
import Loader from './Loader';
import { TransitionGroup } from 'react-transition-group';
import { menuAnimation } from '../../../../theme/animations';
import { initialiseCategories, initialiseProducts, resetCategoryAndProducts } from '../helpers/initialiseUserSession'
import ProductsMap from './ProductsMap';
import CategoriesMap from './CategoriesMap';
import EmptyMenu from './EmptyMenu';
import { isEmpty } from '../../../../utils/arrays.jsx'

export default function Menu() {

  const [showBackButton, setShowBackButton] = useState(false)


  const {
    deleteProductsFromCategory,
    deleteCategory,
    setCategories,
    categories,
    userId,
    setProducts,
    products,
    isModeAdmin,
    deleteProduct,
    setSelectedProduct,
    selectedProduct,
    addBasketProduct,
    selectProduct,
    invoiceId,
    setSelectedCategory,
    selectedCategory,
  } = useContext(AdminContext)


  useEffect(() => {
    initialiseProducts(userId, setProducts)
    initialiseCategories(userId, setCategories)
  }, [])


  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    deleteProduct(idProductToDelete)
    idProductToDelete === selectedProduct.id && setSelectedProduct(EMPTY_PRODUCT)
  }

  const handleAddButton = (idProductToAdd) => {
    const productToAdd = findInArray(idProductToAdd, products)
    productToAdd.isAvailable ? addBasketProduct(productToAdd, invoiceId) : null;
  }

  const handleClick = (id) => {
    isModeAdmin ? selectProduct(id) : handleAddButton(id);
  }


  const handleBackButtonClick = () => {
    // Mettre à jour l'état de la catégorie sélectionnée et cacher bouton retour
    setSelectedCategory(null)
    setShowBackButton(false)
  }

  const handleCategoryClick = (id) => {
    // Mettre à jour l'état de la catégorie sélectionnée et faire apparaitre bouton retour
    setSelectedCategory(id)
    setShowBackButton(true)
  }

  const handleCategoryDelete = async (event, categoryId) => {
    event.stopPropagation()
    await deleteCategory(categoryId)
    deleteProductsFromCategory(categoryId, products)
  }

  const handleReset = () => {
    resetCategoryAndProducts(userId, setCategories, setProducts)
  }

  let containerClassName = isModeAdmin ? "card-container is-hoverable" : 'card-container'

  const displayedCategories = categories ? categories.filter((category) => category.name !== "MAIN") : null


  // Affichage 
  if (products === undefined || categories === undefined) return <Loader />

  if (isEmpty(products) && isEmpty(displayedCategories)) return <EmptyMenu onClick={handleReset} />


  return (
    <TransitionGroup component={MenuStyled} className='menu'>
      <CategoriesMap selectedCategory={selectedCategory} handleBackButtonClick={handleBackButtonClick} showBackButton={showBackButton} handleCategoryClick={handleCategoryClick} categories={categories} isModeAdmin={isModeAdmin} containerClassName="category" handleCategoryDelete={handleCategoryDelete} />
      <ProductsMap selectedCategory={selectedCategory} selectedProduct={selectedProduct} isModeAdmin={isModeAdmin} products={products} handleCardDelete={handleCardDelete} handleClick={handleClick} containerClassName={containerClassName} />
    </TransitionGroup>
  )
}

const MenuStyled = styled.div`
  
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 50px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  &:hover {
        scrollbar-color: initial;
    }

  ${menuAnimation}

  .card-container {
    position: relative; 
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    &.is-hoverable {
      &:hover{
        transform:scale(1.05);
        transition: ease-out ${theme.animation.speed.slow};
      }
    }
  }
    .ribbon {
      z-index: 2;
  }
  
  @media(max-width: 767px) {
    grid-auto-rows: 90px;
    max-width: 100%;
    overflow-x: hidden;
    padding: 10px 0;
    .card-container {
      height: 140px;
    }
  }

  @media(min-width: 768px) and (max-width: 1388px) { 
    padding: 10px 10px;
    grid-auto-rows: 140px;
    max-width: 100%;
    overflow-x: hidden;
    .card-container {
      height: 190px;
    }

  }
`;