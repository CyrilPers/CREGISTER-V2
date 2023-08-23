import { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import Card from '../../reusable-ui/Card.jsx';
import { formatPrice } from '../../../utils/maths';
import AdminContext from '../../../context/AdminContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {

  const {products, isModeAdmin, deleteProduct, resetProducts, setSelectedProduct} = useContext(AdminContext)
  
  if (products.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient /> 
    return <EmptyMenuAdmin onClick={resetProducts} />
  }

  const selectProduct = (productIdSelected) => { 
    const productClickedOn = products.find((product) => product.id === productIdSelected)
    setSelectedProduct(productClickedOn)
  }

  return (

      <MenuStyled className='menu'>
      {products.map(({id, title, imageSource, price}) => {
        return (
          <Card 
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT }
          leftDescription={formatPrice(price)}
          showDeleteButton={isModeAdmin}
          onDelete={() => deleteProduct(id)}
          onClick={() => selectProduct(id)}
          isHoverable={isModeAdmin}
          isSelected={false}
        />
          )
          })}
      </MenuStyled>
    )
  }

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  `