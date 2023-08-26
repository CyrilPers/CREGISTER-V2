import { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import Card from '../../reusable-ui/Card.jsx';
import { formatPrice } from '../../../utils/maths';
import AdminContext from '../../../context/AdminContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from '../../../enum/product';
import { findInArray } from '../../../utils/arrays';

export default function Menu() {


  const {
    products,
    isModeAdmin,
    deleteProduct,
    resetProducts,
    setSelectedProduct,
    selectedProduct,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    addToBasket,
  } = useContext(AdminContext)

  if (products.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onClick={resetProducts} />
  }

  const selectProduct = async (productIdSelected) => {
    if (!isModeAdmin) return
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn = findInArray(products, productIdSelected)
    await setSelectedProduct(productClickedOn)
    titleEditRef.current.focus()
  }

  const checkIfProductIsClicked = (idProductInMenu, idProductClicked) => {
    return idProductInMenu === idProductClicked
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    deleteProduct(idProductToDelete)
    idProductToDelete === selectedProduct.id && setSelectedProduct(EMPTY_PRODUCT)
    titleEditRef.current.focus()
  }

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation()
    const productToAdd = findInArray(products, idProductToAdd)
    console.log(productToAdd)
    addToBasket(productToAdd)
  }

  return (

    <MenuStyled className='menu'>
      {products.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            showDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => selectProduct(id)}
            isHoverable={isModeAdmin}
            onAdd={(event) => handleAddButton(event, id)}
            isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
  &:hover {
        scrollbar-color: initial;
    }
`;