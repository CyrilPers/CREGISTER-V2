import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { initialiseInvoices } from '../../../order/helpers/initialiseUserSession';
import AdminContext from '../../../../../context/AdminContext';
import { getIndex, isEmpty } from '../../../../../utils/arrays';
import Empty from '../../../../reusable-ui/Empty';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CustomerCard from '../customers/CustomerCard';
import { theme } from '../../../../../theme';
import { menuAnimation } from '../../../../../theme/animations';

export default function Invoices() {
    const { invoices, userId, setInvoices, isModeAdmin, setInvoiceId, invoiceId, setCurrentPage } = useContext(AdminContext)

    useEffect(() => {
        initialiseInvoices(userId, setInvoices)
    }, [])

    const title = "La liste de clients est vide"
    const description = "Cliquez ci-dessous pour la réinitialiser"
    const label = "Générer de nouveaux clients"

    const handleReset = () => { } // A CHANGER

    const handleDelete = (event, id) => {
        event.stopPropagation()
        deleteInvoice(id)
    }

    const handleClick = async (id) => {
        { !isModeAdmin && (await setInvoiceId(id), setCurrentPage("invoice")) }
    }


    // Affichage : 

    if (invoices === undefined) return <Loader />
    if (isEmpty(invoices)) return <Empty description={description} title={title} label={label} onClick={handleReset} />


    return (
        <TransitionGroup component={InvoicesStyled} classNames="invoices">
            {invoices.slice().reverse().map(({ id, createdAt, total, customer }) => {
                return (
                    <CSSTransition
                        classNames={"animation-card"}
                        key={id}
                        timeout={300}
                    >
                        <div className='invoice'>
                            <CustomerCard
                                key={id}
                                name={getIndex(id, invoices)}
                                surname={createdAt}
                                address={customer ? customer : ""}
                                phoneNumber={total}
                                showDeleteButton={isModeAdmin}
                                onDelete={(event) => handleDelete(event, id)}
                                onClick={() => handleClick(id)}
                            />


                        </div>
                    </CSSTransition>)
            })}
        </TransitionGroup>
    )
}

const InvoicesStyled = styled.div`
    background: ${theme.colors.background_white};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    padding: 0 20px;

    &:hover {
        scrollbar-color: initial;
    }
    .customer {
        &:hover{
            transform:scale(1.05);
            transition: ease-out ${theme.animation.speed.slow};
        }
    }
    ${menuAnimation}
`;

