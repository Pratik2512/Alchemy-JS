function carCrossing(aCrossing, bCrossing) {
    if((aCrossing && !bCrossing) || (!aCrossing && bCrossing))
        return true;
    return false;
}