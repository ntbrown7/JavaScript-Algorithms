//Write a function that takes in a string and capitalizes the first letter of each word. 
function capitalizer(word){
    let arr = arrayilizer(word);
    let tempWord = "";
    let finArr = [];

    for(i=0;i<arr.length;i++){
        firstLetter =arr[i].charAt(0).toUpperCase();
        restOfWord = arr[i].slice(1,arr[i].length);
        tempWord =  firstLetter + restOfWord; 
        finArr.push(tempWord);
        tempWord = "";

    }
    return finArr.join("");
}


function arrayilizer(str){
    let arr = [];
    let tempWord="";

    for (i=0; i < str.length; i++){
        tempWord += str.charAt(i); 

       if(str.charAt(i) == " " || str.charAt(i+1) == ""){ 
           arr.push(tempWord);
           tempWord = "";   
       } 

    }
    return arr;
}

let sen = "Coconut bliss icecream is the best icecream and the world and it's only 2 dollars .";
console.log(capitalizer(sen));