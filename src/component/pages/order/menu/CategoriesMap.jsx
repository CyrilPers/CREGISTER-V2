import React from 'react'
import Card from '../../../reusable-ui/Card'



export default function CategoriesMap({ showBackButton, isModeAdmin, handleBackButtonClick, categories, handleCategoryClick }) {
    console.log(isModeAdmin)
    return (

        <>{showBackButton && <Card
            key="back"
            title="RETOUR"
            className="minimize"
            isNotHoverable={isModeAdmin}
            onClick={handleBackButtonClick}
        />}
            {categories.slice().reverse().map(({ id, name }) => {
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
