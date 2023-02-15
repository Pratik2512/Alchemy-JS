function findFirstX(string) {
    for(let i=0; i<string.length; i++){
        if(string[i] == 'x')
            return i;
    }
    // return 0;
}

module.exports = findFirstX;