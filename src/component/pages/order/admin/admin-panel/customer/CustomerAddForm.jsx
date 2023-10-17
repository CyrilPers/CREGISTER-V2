import React, { useContext } from 'react'
import AdminContext from '../../../../../../context/AdminContext.jsx';
import Form from '../Form.jsx';
import AddFormButton from '../AddFormButton.jsx';
import { useSuccessMessage } from '../../../../../../hooks/useSuccessMessage.jsx';
import { EMPTY_CUSTOMER } from '../../../../../../enum/customer.jsx';

export default function CustomerAddForm() {

    const { addCustomer, setNewCustomer, newCustomer, userId, currentPage } = useContext(AdminContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (event) => {
        event.preventDefault()
        const now = new Date()
        const id = BigInt(now)
        const newCustomerToAdd = {
            ...newCustomer,
            id
        }
        addCustomer(newCustomerToAdd, userId)
        setNewCustomer(EMPTY_CUSTOMER)
        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        const newCustomerToAdd = {
            ...newCustomer,
            [name]: value,
            address: {
                ...newCustomer.address,
                [name]: value
            }
        }
        setNewCustomer(newCustomerToAdd)
    }


    return (
        <Form
            currentPage={currentPage}
            onSubmit={handleSubmit}
            onChange={handleChange}
            element={newCustomer}
            isSubmitted={isSubmitted}
        >
            <AddFormButton isSubmitted={isSubmitted} label={"Ajouter le client"} />
        </Form>
    )
};
