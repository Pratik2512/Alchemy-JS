function unique(array) {
    const newArray = [];
    for( let i=0; i< array.length; i++){
        const element = array[i];

        if(array.indexOf(element) == i){
            newArray.push(element);
        }
    }
    return newArray;
}

module.exports = unique;