function fizzBuzz(numbers) {
    let str = '';
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 3 == 0 && numbers[i] % 5 != 0)
            str += 'fizz';
        else if(numbers[i] % 5 == 0 && numbers[i] % 3 != 0)
            str += 'buzz';
        else if(numbers[i] % 5 == 0 && numbers[i] % 3 == 0)
            str += 'fizzbuzz';
    }
    return str;
}