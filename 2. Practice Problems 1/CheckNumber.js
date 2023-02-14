function checkNumber(num) {
    if(num > 0)
     return 'positive';
    else if (num < 0)
     return 'negative';
     return 'zero';
 }
 
 module.exports = checkNumber;