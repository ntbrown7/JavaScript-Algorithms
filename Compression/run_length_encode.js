function run_length_encode(str){
    var count = 0;
    var finalStr = "";

    for(i=0;i<str.length;i++){
        if(str.charAt(i) == str.charAt(i+1)){ // if the next character is the same add it
            if(count == 0){
                count = 1;
            }
            count++;//count will continue until if is not true
        }
        else { //when not true, add the remaining count, reset count.
             finalStr += str.charAt(i);
             if(count > 0){
                finalStr += count;
             }
             count =0;
        }
    }
    return finalStr;
}
function run_length_decode(str){
    var finalStr = "";
    
    for(i =0; i < str.length; i++){
        if(isNaN(str.charAt(i))){//if current is an integer add to sting
        finalStr += str.charAt(i);
        }
        if(!isNaN(str.charAt(i+1))){ //if the next is an integer repeat
            for(j =0;j< str.charAt(i+1)-1;j++){
                finalStr += str.charAt(i);
            }

        }
        
    }
    
   return finalStr;
}
console.log(run_length_encode("WWWWBBWWWWW"));
console.log(run_length_decode("W4B2W5"));

