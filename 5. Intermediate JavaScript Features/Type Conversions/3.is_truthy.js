// When converting to booleans,
//  values that are falsey are converted to false: false, 0, "", null, undefined, and NaN.
//  All other values are converted to true.
function isTruthy(a) {
    // if(!!a)
    if(Boolean(a))
        return true;
    return false;
}