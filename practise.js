function abc(...rest) {
return rest;
}
console.log(abc(10, 1, 2, 3, 4, 5));


function abd(a,b,c,d){

    return {a,b,c,d};
}
console.log(abd(...[1,2,3,5]));