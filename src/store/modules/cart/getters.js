export default {
    orders(state) {
        return state.orders;
    },
    totalSum(state) {
        const ordersAmt = [];
        state.orders.forEach(el => {
            ordersAmt.push(el.quantityOrdered * el.price);
        });
        return ordersAmt.reduce((a, b) => a + b, 0);
    },
}