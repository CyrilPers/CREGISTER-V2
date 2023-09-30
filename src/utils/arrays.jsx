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


export const removeItemsCategoryFromArray = (categoryId, array) => {
    return array.filter((item) => item.category.id !== categoryId)
}


export const isEmpty = (array) => {
    return array.length === 0
}

export const findIdInArray = (name, array) => {
    const foundItem = array.find(item => item.name === name);
    return foundItem.id
}

export const addItemToArray = (newItem, array) => {
    return [...array, newItem];
}