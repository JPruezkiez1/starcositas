export const totalvalue = (cartProducts) => {
    return cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
};
