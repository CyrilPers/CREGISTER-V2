import React from 'react'
import Card from '../../../reusable-ui/Card'

export default function CategoriesMap({ categories, containerClassName }) {
    return (
        <>{categories.slice().reverse().map(({ id, name }) => {
            return (
                <div className={containerClassName}>
                    <Card
                        key={id}
                        title={name}
                        className="category-card"
                    />
                </div>
            )
        })}
        </>
    )
}
