function sumTogether(arr1, arr2) {
    let newArr = []; 
    // let new1 = 0; 
    for(let i=0; i< arr1.length; i++){
        // new1 = arr1[i] + arr2[i];
        newArr.push(arr1[i] + arr2[i]);
    }
    return newArr;
}