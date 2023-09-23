import React, { useContext } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import Form from './Form';
import AddFormButton from './AddFormButton';
import { useSuccessMessage } from '../../../../../hooks/useSuccessMessage';
import { findIdInArray } from '../../../../../utils/arrays';
import { EMPTY_CUSTOMER } from '../../../../../../enum/customer';

export default function AddFormCustomer() {

    const { addCustomer, setNewCustomer, newCustomer, userId } = useContext(AdminContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
        const newCustomerToAdd = {
            ...newCustomer,
            id
        }
        addProduct(newCustomerToAdd, userId)
        setNewProduct(EMPTY_CUSTOMER)
        displaySuccessMessage()
    }

    return (
        <div>AddFormCustomer</div>
    )
}
