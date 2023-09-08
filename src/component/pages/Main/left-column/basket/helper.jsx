import { findInArray } from "../../../../../utils/arrays"

export const calculateSumToPay = (basket, products) => {
    return basket.reduce((total, basketProduct) => {
        const product = findInArray(basketProduct.id, products)
        if (isNaN(product.price)) return total
        total += basketProductprice * basketProduct.quantity
        return total
    }, 0)
}
