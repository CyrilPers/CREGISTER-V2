import React, { useContext, useState } from 'react'
import AdminContext from '../../../../../../context/AdminContext'
import { useSuccessMessage } from '../../../../../../hooks/useSuccessMessage'
import Form from '../Form'
import SavingMessage from '../SavingMessage'
import EditInfoMessage from '../EditInfoMessage'

export default function CustomerEditForm() {

    const { selectedCustomer, setSelectedCustomer, editCustomer, titleEditRef } = useContext(AdminContext)
    const [valueOnFocus, setValueOnFocus] = useState()
    const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

    const handleChange = (event) => {
        const { name, value } = event.target
        const customerBeingEdited = {
            ...selectedCustomer,
            [name]: value,
            address: {
                ...selectedCustomer.address,
                [name]: value
            }
        }
        setSelectedCustomer(customerBeingEdited) // update formulaire
        editCustomer(customerBeingEdited) // update menu state
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
            element={selectedCustomer}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={titleEditRef}
        >
            {isSaved ? <SavingMessage /> : <EditInfoMessage />}

        </Form>
    )
}