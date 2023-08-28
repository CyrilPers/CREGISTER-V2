export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const findInArray = (id, array) => {
    return array.find((item) => item.id === id)
}

export const getIndex = (id, array) => {
    return array.findIndex((item) => item.id === id)
}

export const removeItemFromArray = (id, array) => {
    return array.filter((item) => item.id !== id)
}

export const isEmpty = (array) => {
    return array.length === 0
}