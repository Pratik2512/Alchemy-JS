function catchError(fn) {
    try{
        fn();
    }
    catch(err){}
}