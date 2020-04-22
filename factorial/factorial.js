function factorial(num){
    
    num += 1;
    var fac = 1;


    for (i = 1; i < num; i++){
        fac *= i;
    }
   
    return fac;
}
console.log(factorial(7));