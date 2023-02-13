function scream(n) {
    let orad="";
    for(let i=0;i<n;i++){
        if(i%2 == 0)
            orad += "a";
        else
            orad += "A";
    }    
    return orad;
}

module.exports = scream;