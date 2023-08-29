import { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import Card from '../../reusable-ui/Card.jsx';
import { formatPrice } from '../../../utils/maths';
import AdminContext from '../../../context/AdminContext';
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from '../../../enum/product';
import { findInArray, isEmpty } from '../../../utils/arrays';
import EmptyMenu from './EmptyMenu';
import Loader from './Loader';

export default function Menu() {


  const {
    products,
    isModeAdmin,
    deleteProduct,
    resetProducts,
    setSelectedProduct,
    selectedProduct,
    titleEditRef,
    addBasketProduct,
    username,
    selectProduct,
  } = useContext(AdminContext)


  const checkIfProductIsClicked = (idProductInMenu, idProductClicked) => {
    return idProductInMenu === idProductClicked
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    deleteProduct(idProductToDelete, username)
    idProductToDelete === selectedProduct.id && setSelectedProduct(EMPTY_PRODUCT)
    titleEditRef.current.focus()
  }

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation()
    const productToAdd = findInArray(idProductToAdd, products)
    addBasketProduct(productToAdd, username)
  }

  // Afficahge 
  if (products === undefined) return <Loader />

  if (isEmpty(products)) {
    return <EmptyMenu onClick={() => resetProducts(username)} />
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
            onClick={isModeAdmin ? () => selectProduct(id) : null}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
            onAdd={(event) => handleAddButton(event, id)}
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

  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
  &:hover {
        scrollbar-color: initial;
    }
`;