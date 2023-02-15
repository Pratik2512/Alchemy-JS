function splitAtX(string) {
    let start; let end;
    for(let i=0; i< string.length; i++)
    {
        if(string[i] == 'x')
        {
            start = string.slice(0,i);
            end = string.slice(i+1);
        }
    }    
    if (start.length >= end.length)
        return start;   
    else
        return end;
    
}

module.exports = splitAtX;