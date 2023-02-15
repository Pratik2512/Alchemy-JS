
function numberOfPizzas(orders) {
    let sum = 0;
    for(let i=0; i<orders.length; i++){
        // if(orders[i].type == )
            sum += orders[i].pizzas;
    }
    return sum;
}

module.exports = numberOfPizzas;