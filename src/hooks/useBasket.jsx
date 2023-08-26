import { useState } from 'react'
import { fakeBasket } from '../fakeData/fakeBasket'
import { deepClone } from '../utils/arrays'

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.LARGE)
    const addToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket)
        const updatedBasket = [productToAdd, ...basketCopy]
        setBasket(updatedBasket)
    }

    return { basket, addToBasket }

}

