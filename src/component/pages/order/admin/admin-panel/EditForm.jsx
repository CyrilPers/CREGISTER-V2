import { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import Form from './Form';
import EditInfoMessage from './EditInfoMessage.jsx'

export default function EditForm() {

  const { selectedProduct, setSelectedProduct, editProduct, titleEditRef, username } = useContext(AdminContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    const productBeingEdited = {
      ...selectedProduct,
      [name]: value
    }
    setSelectedProduct(productBeingEdited) // update formulaire
    editProduct(productBeingEdited, username) // update menu
  }

  return (
    <Form
      product={selectedProduct}
      onChange={handleChange}
      ref={titleEditRef}
    >
      <EditInfoMessage />
    </Form>
  )
};

