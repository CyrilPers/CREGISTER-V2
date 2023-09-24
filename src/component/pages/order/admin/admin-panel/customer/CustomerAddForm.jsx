import React, { useContext } from 'react'
import AdminContext from '../../../../../../context/AdminContext.jsx';
import Form from '../Form.jsx';
import AddFormButton from '../AddFormButton.jsx';
import { useSuccessMessage } from '../../../../../../hooks/useSuccessMessage.jsx';
import { findIdInArray } from '../../../../../../utils/arrays.jsx';
import { EMPTY_CUSTOMER } from '../../../../../../enum/customer.jsx';

export default function CustomerAddForm() {

    const { addCustomer, setNewCustomer, newCustomer, userId, currentPage } = useContext(AdminContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
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
        setNewCustomer({ ...newCustomer, [name]: value })
    }


    return (
        <Form
            currentPage={currentPage}
            onSubmit={handleSubmit}
            onChange={handleChange}
            element={newCustomer}
            isSubmitted={isSubmitted}
            isProduct={false}
        >
            <AddFormButton isSubmitted={isSubmitted} label={"Ajouter le client"} />
        </Form>
    )
};
