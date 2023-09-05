import { useContext, useState } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import Form from './Form';
import EditInfoMessage from './EditInfoMessage.jsx'
import SavingMessage from './SavingMessage';
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage.jsx'
import { updateProductFromApi } from '../../../../../API/product';

export default function EditForm() {

  const { selectedProduct, setSelectedProduct, editProduct, titleEditRef, username } = useContext(AdminContext)
  const [valueOnFocus, setValueOnFocus] = useState()
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

  const handleChange = (event) => {
    const { name, value } = event.target
    const productBeingEdited = {
      ...selectedProduct,
      [name]: value
    }
    setSelectedProduct(productBeingEdited) // update formulaire
    editProduct(productBeingEdited, username) // update menu state
  }

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value
    setValueOnFocus(valueOnFocus)
  }

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage()
    }
  }

  return (
    <Form
      product={selectedProduct}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}

    </Form>
  )
};

