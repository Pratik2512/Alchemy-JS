function countElements(elements) {
    let obj = new Object();
    for(let i=0; i<elements.length; i++){
        let count = 0;
        for(let j=0; j<elements.length; j++){
                console.log[elements[j]];
            if(elements[j] === elements[i])
                count ++;
        }
        // let key = elements[i];
        obj[elements[i]] = count;
    }
    return obj;
}