function numberOfKeys(object) {
    let sum = 0;
    for(let key in object){
        if(key)    
            sum += 1;
    }
    return sum;
}

module.exports = numberOfKeys;