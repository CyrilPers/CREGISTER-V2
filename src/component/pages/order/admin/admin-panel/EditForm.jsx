import { useContext } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import EditInfoMessage from './EditInfoMessage.jsx';
import Form from './Form';


export default function EditForm(inputTexts, ) {

  const {selectedProduct, setSelectedProduct, editProduct, titleEditRef} = useContext(AdminContext)



  const handleChange = (event) => {
    const {name, value} = event.target
    const productBeingEdited = {
      ...selectedProduct, 
      [name] : value 
    }
    setSelectedProduct(productBeingEdited) // update formulaire
    editProduct(productBeingEdited) // update menu
  }

  
  return (
    <Form 
    inputTexts={inputTexts}  
    product={selectedProduct}
    onChange={handleChange}
    ref={titleEditRef}
    
    />
  )
}

const EditFormStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 20px;
    height: 100%;
    width: 70%;

  .input-fields {
      grid-area: 1 / 2 / 4 / 5;
      display: grid;
      row-gap: 8px;
  }

  .submit {
    grid-area: 4 / 2 / 5 / 5; 
    display: flex; 
    align-items: center;
    position: relative;
    top: 3px;
  }

`;