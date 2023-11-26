import React from 'react'
import Card from '../../../reusable-ui/Card'
import { IoChevronBack } from "react-icons/io5";


export default function CategoriesMap({ handleCategoryDelete, selectedCategory, isModeAdmin, handleBackButtonClick, categories, handleCategoryClick }) {

    const filteredCategories =
        selectedCategory === null
            ? categories.filter((category) => category.name !== "MAIN")
            : []

    return (
        <>{selectedCategory && <Card
            key="back"
            title="RETOUR"
            className="minimize back"
            onClick={handleBackButtonClick}
        />}
            {filteredCategories.slice().reverse().map(({ id, name }) => {
                return (
                    <div className="category" key={id}>
                        <Card
                            key={id}
                            title={name}
                            className="minimize"
                            onClick={() => handleCategoryClick(id)}
                            onDelete={(event) => handleCategoryDelete(event, id)}
                            showDeleteButton={isModeAdmin}
                        />
                    </div>
                )
            })}
        </>
    )
}
