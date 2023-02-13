function topDouble(value, top) {
    while(value <= top){
        if(value * 2 > top)
            return value;
        value = value * 2;
    }
    // return value;
}

module.exports = topDouble;