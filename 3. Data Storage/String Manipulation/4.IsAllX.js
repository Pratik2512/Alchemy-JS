function isAllX(string) {
    for(let i=0; i< string.length; i++){
        if(string[i] == 'x' || string[i] == 'X'){}
        else return false;
    }
    return true;
}

module.exports = isAllX;
