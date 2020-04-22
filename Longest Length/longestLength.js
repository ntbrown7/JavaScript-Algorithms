//A function that takes in a string and returns the length of the longest string and outputs an array using selection sort

function longCheck(sentence){// returns longest word
    let wordArr = stringToArray(sentence);//convert string into array, words are divided by spaces.
    let longestWord="";
    for(i = 0; i< wordArr.length; i++){
        if(wordArr[i].length > longestWord.length ){
            longestWord = wordArr[i];
        }
    }
    wordArr = selectSort(wordArr); 
     return "The longest word is " + longestWord + ". \n The order of words from greatest to least: " + wordArr;
}

function selectSort(num){ 
    for(i =0;i<num.length;i++){
        let max = i;
        for (let j = i + 1; j <num.length; j++){
            if(num[max].length < num[j].length){ // king
                max = j;
            }
        }
        if (max !== i){
            let temp = num[i];
            num[i] = num[max];
            num[max] = temp;
        }
    } 
    return num;
}

function stringToArray(str){
    let arr = [];
    let tempWord="";
    for (i=0; i < str.length; i++){
        tempWord += str.charAt(i); // build temp word
       if(str.charAt(i+1) == " " || str.charAt(i+1) == "." || str.charAt(i+1)==","){ 

           arr.push(tempWord);
           tempWord = "";   
       } // cut off and put in temp word into the array
    }
    return arr;
}

let sen = "Do not swear by the moon, for she changes constantly. then your love would also change.";

console.log(longCheck(sen)); //would return constantly
