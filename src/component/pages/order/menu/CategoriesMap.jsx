import React from 'react'
import Card from '../../../reusable-ui/Card'

export default function CategoriesMap({ isModeAdmin, categories }) {
    return (
        <>{categories.slice().reverse().map(({ id, name }) => {
            return (
                <div key={id}>
                    <Card
                        key={id}
                        title={name}
                        className="minimize"
                        isNotHoverable={isModeAdmin}
                    />
                </div>
            )
        })}
        </>
    )
}
