import { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import AdminContext from '../../../../context/AdminContext.jsx';
import { EMPTY_PRODUCT } from '../../../../enum/product';
import { findIdInArray, findInArray } from '../../../../utils/arrays';
import Loader from './Loader';
import ProductsMap from './ProductsMap';
import CategoriesMap from './CategoriesMap';
import { isEmpty } from '../../../../utils/arrays.jsx'
import Empty from '../../../reusable-ui/Empty';

export default function Menu() {


  const {
    resetCategoryAndProducts,
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
    invoice,
    setSelectedCategory,
    selectedCategory,
    filteredProducts,
    setFilteredProducts,
  } = useContext(AdminContext)


  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    deleteProduct(idProductToDelete)
    idProductToDelete === selectedProduct.id && setSelectedProduct(EMPTY_PRODUCT)
  }

  const handleAddButton = async (idProductToAdd) => {
    const productToAdd = findInArray(idProductToAdd, products)
    productToAdd.isAvailable && await addBasketProduct(productToAdd, invoice, userId)
  }

  const handleClick = (id) => {
    isModeAdmin ? selectProduct(id) : handleAddButton(id);
  }


  const handleBackButtonClick = () => {
    // Mettre à jour l'état de la catégorie sélectionnée et cacher bouton retour
    setSelectedCategory(null)
  }

  const handleCategoryClick = (id) => {
    // Mettre à jour l'état de la catégorie sélectionnée et faire apparaitre bouton retour
    setSelectedCategory(id)
  }

  const handleCategoryDelete = async (event, categoryId) => {
    event.stopPropagation()
    await deleteCategory(categoryId)
    deleteProductsFromCategory(categoryId, products)
  }

  const handleReset = () => {
    resetCategoryAndProducts(userId, setCategories, setProducts)
  }


  const initialiseFilteredProducts = () => {
    let productsFiltered
    let mainId = findIdInArray("MAIN", categories)

    selectedCategory
      ? productsFiltered = products.filter((product) => product.category.id === selectedCategory) || []
      : productsFiltered = products.filter((product) => product.category.id === mainId) || []
    setFilteredProducts(productsFiltered)
  }

  let containerClassName = isModeAdmin ? "card-container is-hoverable" : 'card-container'

  const displayedCategories = categories ? categories.filter((category) => category.name !== "MAIN") : null

  const title = "Le menu est vide"
  const description = "Cliquez ci-dessous pour le réinitialiser"
  const label = "Générer de nouveaux produits"

  useEffect(() => { initialiseFilteredProducts() }, [selectedCategory, products])



  // Affichage 
  if (products === undefined || categories === undefined) return <Loader />

  if (isEmpty(products) && isEmpty(displayedCategories)) return <Empty onClick={handleReset} description={description} title={title} label={label} />


  return (
    <MenuStyled>
      <CategoriesMap selectedCategory={selectedCategory} handleBackButtonClick={handleBackButtonClick} handleCategoryClick={handleCategoryClick} categories={categories} isModeAdmin={isModeAdmin} containerClassName="category" handleCategoryDelete={handleCategoryDelete} />
      <ProductsMap filteredProducts={filteredProducts} selectedCategory={selectedCategory} selectedProduct={selectedProduct} isModeAdmin={isModeAdmin} products={products} handleCardDelete={handleCardDelete} handleClick={handleClick} containerClassName={containerClassName} />
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  padding: 50px 50px 50px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;


  &:hover {
        scrollbar-color: initial;
    }

  .card-container {
    position: relative; 
    height: 300px;
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
    grid-template-columns: repeat(3, 1fr);
    padding: 10px 10px;
    max-width: 100%;
    overflow-x: hidden;
    padding: 10px 0;
    .card-container {
      height: 140px;
    }
  }

  @media(min-width: 768px) and (max-width: 1388px) { 
    grid-template-columns: repeat(3, 1fr);
    padding: 10px 10px;
    max-width: 100%;
    overflow-x: hidden;
    .card-container {
      height: 190px;
    }

  }
`;