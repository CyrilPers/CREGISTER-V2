import { useContext } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import ImagePreview from './ImagePreview';
import { getInputsConfig } from './inputsConfig';
import TextInput from '../../../../reusable-ui/TextInput';


export default function EditForm() {

  const {selectedProduct, setSelectedProduct, editProduct} = useContext(AdminContext)
  const inputsEdit = getInputsConfig(selectedProduct)


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
    <EditFormStyled>
        <ImagePreview imageSource={selectedProduct.imageSource} title={selectedProduct.title} handleChange={handleChange} />  
        <div className='input-fields'>
            {inputsEdit.map((input) => 
            <TextInput 
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
            />
            )}
        </div> 
    </EditFormStyled>
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
    
        .submit-button {
            height: 100%;
        }
    }

`;