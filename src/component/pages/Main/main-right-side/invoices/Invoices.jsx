import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import { getIndex, isEmpty } from '../../../../../utils/arrays';
import Empty from '../../../../reusable-ui/Empty';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { theme } from '../../../../../theme';
import { menuAnimation } from '../../../../../theme/animations';
import { formatDate } from '../../../../../utils/maths';
import HorizontalCard from '../../../../reusable-ui/HorizontalCard';
import Button from '../../../../reusable-ui/Button';

export default function Invoices() {
    const { invoices, isModeAdmin, setInvoiceId, setCurrentPage, deleteInvoice, currentPage } = useContext(AdminContext)

    useEffect(() => { }, [invoices])

    const title = "La liste de clients est vide"
    const description = "Cliquez ci-dessous pour la réinitialiser"
    const label = "Générer de nouveaux clients"
    const handleReset = () => { } // A CHANGER

    const handleDelete = (event, id) => {
        event.stopPropagation()
        deleteInvoice(id)
    }

    const handleClick = async (id) => {
        {
            !isModeAdmin && (await setInvoiceId(id), setCurrentPage("invoice"))
        }
    }

    const handleCreateOrder = () => {

    }


    useEffect(() => { }, [invoices])

    // Affichage : 

    if (invoices === undefined) return <Loader />
    if (isEmpty(invoices)) return <Empty description={description} title={title} label={label} onClick={handleReset} />


    return (
        <TransitionGroup component={InvoicesStyled}>
            <div className='create-invoice'>
                <Button onClick={handleCreateOrder} label="Créer une commande" />
            </div>
            {invoices.slice().reverse().map(({ id, createdAt, total, customer }) => {
                return (
                    <CSSTransition
                        classNames={"animation-card"}
                        key={id}
                        timeout={300}
                    >
                        <div className='invoice'>
                            <HorizontalCard
                                key={id}
                                index={getIndex(id, invoices) + 1}
                                surname={customer && customer.surname ? customer.surname : " "}
                                name={customer && customer.name ? customer.name : " "}
                                element1={total ? total + " €" : "0 €"}
                                element2={formatDate(createdAt)}
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
    ${menuAnimation}
`;

