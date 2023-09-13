import { useContext } from 'react'
import AdminContext from '../../../../../../context/AdminContext'
import { useSuccessMessage } from '../../../../../../hooks/useSuccessMessage'
import { EMPTY_CATEGORY } from "../../../../../../enum/category.jsx"
import AddFormButton from '../AddFormButton'
import CategoryForm from './CategoryForm'


export default function CategoryAddForm() {

    const { addCategory, newCategory, setNewCategory } = useContext(AdminContext)
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
        const newCategoryToAdd = {
            ...newCategory,
            id
        }
        addCategory(newCategoryToAdd, userId)
        setNewCategory(EMPTY_CATEGORY)
        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewCategory({ ...newCategory, [name]: value })
    }

    return (

        <CategoryForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            category={newCategory}
            isSubmitted={isSubmitted}
        >
            <AddFormButton isSubmitted={isSubmitted} label={"Ajouter la catégorie"} />
        </CategoryForm>
    )
};
