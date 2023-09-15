export const calculateSumToPay = (basket) => {
    return basket.reduce((total, basketProduct) => {
        const productPrice = basketProduct.productPrice;
        if (isNaN(productPrice)) return total; // Vérification si productPrice est un nombre
        total += productPrice * basketProduct.quantity;
        return total;
    }, 0);
}
