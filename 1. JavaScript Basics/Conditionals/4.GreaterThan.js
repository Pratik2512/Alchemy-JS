function greater(first, last) {
    if(first > last)
        return first;
    if (last > first)
        return last;
}

module.exports = greater;