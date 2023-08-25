import { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext';
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
};

