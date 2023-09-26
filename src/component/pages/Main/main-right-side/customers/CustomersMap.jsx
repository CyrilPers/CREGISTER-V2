import React from 'react'
import { CSSTransition } from 'react-transition-group'
import CustomerCard from './CustomerCard.jsx'
import { menuAnimation } from '../../../../../theme/animations'
import styled from 'styled-components'

export default function CustomersMap({ customers, isModeAdmin, handleDelete }) {
    return (

        /// FICHIER A SUPPRIMER //

        <TransitionGroup component={CustomersMapStyled}>
            {customers.map(({ id, name, surname, index, phoneNumber, address }) => {
                return (
                    <CSSTransition
                        classNames={"animation-card"}
                        key={id}
                        timeout={300}
                    >
                        <div className="customer">
                            <CustomerCard
                                key={id}
                                index={index}
                                name={name}
                                surname={surname}
                                address={address}
                                phoneNumber={phoneNumber}
                                showDeleteButton={isModeAdmin}
                                onDelete={(event) => handleDelete(event, id)}
                            />
                        </div>
                    </CSSTransition>
                )
            })}
        </TransitionGroup>
    )
}

const CustomersMapStyled = styled.div`

${menuAnimation}

`;
