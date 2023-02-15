// File numberOfPizzas.js
const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let sum = 0;
    for(let i=0; i<orders.length; i++){
        if (orders[i].type == ORDER_TYPES.PIZZA)
            sum += orders[i].pizzas;
    }
    return sum;
}

module.exports = numberOfPizzas;