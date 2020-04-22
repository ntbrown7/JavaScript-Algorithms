function fizBiz(num){
    if(num % 3 === 0 && num % 5 === 0){ //divisible by 3 and 5
        return "fizzbizz";
    }
    else if(num % 3 === 0){ //divisible by 3
        return "fizz";
    }
    else if(num % 5 === 0){ //divisible by 5
        return "bizz";
    }
    
    else{
        return "none";
    }

}
console.log(fizBiz(6));   // divisible by 3
console.log(fizBiz(10));  // divisible by 5
console.log(fizBiz(435)); // divisible 3 or 5 
console.log(fizBiz(7));   // divisible by nothin