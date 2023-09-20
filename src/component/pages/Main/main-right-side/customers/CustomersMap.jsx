import React from 'react'

export default function CustomersMap({ customers }) {
    return (
        <>
            {customers.map(({ id, name, surename, index, phoneNumber, city }) => {
                return (
                    <CSSTransition
                        classNames={"animation-card"}
                        key={id}
                        timeout={300}
                    >
                        <div className={containerClassname}>
                            <CustomerCard
                                key={id}
                                index={index}
                                name={name}
                                surename={surename}
                                city={city}
                                phoneNumber={phoneNumber}
                                showDeleteButton={isModeAdmin}
                                onDelete={(event) => handleCardDelete(event, id)}
                                className="card"
                            />
                        </div>
                    </CSSTransition>
                )
            })}
        </>
    )
}

