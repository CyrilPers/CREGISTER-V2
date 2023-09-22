import React from 'react'
import { CSSTransition } from 'react-transition-group'
import CustomerCard from './CustomerCard'

export default function CustomersMap({ customers, isModeAdmin, handleDelete }) {
    return (
        <>
            {customers.map(({ id, name, surname, index, phoneNumber, address }) => {
                console.log("id", id)
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
        </>
    )
}

