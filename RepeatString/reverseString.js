function reverseStr(word){
    temp = "";
    for (i = 1; i < word.length; i++){
        temp += (word.charAt(word.length -i));
    }
    return temp;
}
console.log