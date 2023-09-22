import React, { useContext, useEffect } from 'react'
import AdminContext from '../../../../../context/AdminContext';
import { theme } from '../../../../../theme';
import Empty from '../../../../reusable-ui/Empty';
import { isEmpty } from '../../../../../utils/arrays';
import CustomersMap from './CustomersMap';
import Loader from '../../../order/menu/Loader';
import styled from 'styled-components';
import { initialiseCustomers } from '../../../order/helpers/initialiseUserSession';

export default function Customers() {

    const { customers, setCustomers, userId, isModeAdmin, deleteCustomer } = useContext(AdminContext)

    useEffect(() => {
        initialiseCustomers(userId, setCustomers)
    }, [])

    const title = "La liste de clients est vide"
    const description = "Cliquez ci-dessous pour la réinitialiser"
    const label = "Générer de nouveaux clients"

    const handleReset = () => { } // A CHANGER !

    const handleDelete = (event, id) => {
        event.stopPropagation()
        console.log("idHandleDelete", id)
        deleteCustomer(id)
    }


    // Affichage 
    if (customers === undefined) return <Loader />
    if (isEmpty(customers)) return <Empty description={description} title={title} label={label} onClick={handleReset} />

    return (
        <CustomersStyled>
            <CustomersMap customers={customers} isModeAdmin={isModeAdmin} handleDelete={handleDelete} />
        </CustomersStyled>
    )
}


const CustomersStyled = styled.div`
    background: ${theme.colors.background_white};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    &:hover {
        scrollbar-color: initial;
    }
`;