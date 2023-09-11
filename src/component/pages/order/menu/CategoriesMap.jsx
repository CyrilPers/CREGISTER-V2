import React from 'react'
import Card from '../../../reusable-ui/Card'



export default function CategoriesMap({ selectedCategory, showBackButton, isModeAdmin, handleBackButtonClick, categories, handleCategoryClick }) {

    const filteredCategories =
        selectedCategory === null
            ? categories.filter((categories) => categories.id !== 1)
            : categories.filter((categories) => categories.id === null)

    return (

        <>{showBackButton && <Card
            key="back"
            title="RETOUR"
            className="minimize"
            isNotHoverable={isModeAdmin}
            onClick={handleBackButtonClick}
        />}
            {filteredCategories.slice().reverse().map(({ id, name }) => {
                return (
                    <div className="category" key={id}>
                        <Card
                            key={id}
                            title={name}
                            className="minimize"
                            isNotHoverable={isModeAdmin}
                            onClick={() => handleCategoryClick(id)}
                        />
                    </div>
                )
            })}
        </>
    )
}
