import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import { getIndex, isEmpty } from '../../../../../utils/arrays';
import Empty from '../../../../reusable-ui/Empty';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { theme } from '../../../../../theme';
import { scaleXAnimation } from '../../../../../theme/animations';
import { formatDate, formatPrice } from '../../../../../utils/maths';
import HorizontalCard from '../../../../reusable-ui/HorizontalCard';
import Button from '../../../../reusable-ui/Button';
import { initialiseInvoices } from '../../../order/helpers/initialiseUserSession';

export default function Invoices() {
    const { setInvoices, invoices, isModeAdmin, setInvoiceId, setCurrentPage, deleteInvoice, createInvoice, userId } = useContext(AdminContext)

    const title = "Vous n'avez pas de commandes"
    const description = "Cliquez ci-dessous pour créer une commande"
    const label = "Créer une commande"

    const handleDelete = (event, id) => {
        event.stopPropagation()
        deleteInvoice(id)
    }

    const handleClick = async (id) => {
        {
            await setInvoiceId(id)
            setCurrentPage("invoice")
        }
    }

    const handleCreateOrder = async () => {
        await createInvoice(userId, setInvoiceId)
        setCurrentPage("invoice")
    }


    useEffect(() => { initialiseInvoices(userId, setInvoices) }, [])

    // Affichage : 

    if (invoices === undefined) return <Loader />
    if (isEmpty(invoices)) return <Empty description={description} title={title} label={label} onClick={handleCreateOrder} />


    return (
        <TransitionGroup component={InvoicesStyled}>
            <div className='create-invoice'>
                <Button onClick={handleCreateOrder} label="Créer une commande" />
            </div>
            {invoices.slice().sort((a, b) => b.id - a.id).map(({ id, createdAt, total, customer }) => {
                return (
                    <CSSTransition
                        classNames={"animation-card"}
                        key={id}
                        timeout={300}
                    >
                        <div className='invoice'>
                            <HorizontalCard
                                key={id}
                                index={id}
                                surname={customer && customer.surname ? customer.surname : " "}
                                name={customer && customer.name ? customer.name : " "}
                                element1={total ? formatPrice(total) : "0 €"}
                                element2={formatDate(createdAt)}
                                showDeleteButton={isModeAdmin}
                                isInvoice={true}
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
    padding: 0 30px;
    align-items: center;


    .create-invoice{
        width: 75%;
        height: 40px;
        margin: 15px 0;
    }

    &:hover {
        scrollbar-color: initial;
    }
    .animation-card{
        width: 100%;
    }
    .invoice {
        width: 100%;
        &:hover{
            transform:scale(1.05);
            transition: ease-out ${theme.animation.speed.slow};
        }
    }
  
    ${scaleXAnimation}

    @media(max-width: 767px) { 
    padding: 0 5px;
    }
`;

