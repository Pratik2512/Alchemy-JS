function endsWithX(string) {
    if(string[string.length -1] == 'x' || string[string.length-1] == 'X')
        return true;
    return false;    
}

module.exports = endsWithX;