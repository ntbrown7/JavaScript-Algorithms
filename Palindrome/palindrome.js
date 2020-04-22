function palindrome(word){ //test to see if the words ar the same forwards as backwards.

    word = simplifyWord(word);
    let revWord = reverseString(word);
    
    if (revWord === word){
        return true;
    }
    else 
        return false;
}


function simplifyWord(word){//makes input all lower case and no spaces.
    
    let simWord = word.replace(/[\W_]/g, '').toLowerCase(); //get rid of spaces & special characters and underscore
    return simWord;
}


function reverseString(word){
    let temp = ""; 

    for(i = 1; i < word.length+1; i++){
        
        temp += word.charAt(word.length - i);
         
    }
    return temp;

}

console.log(palindrome("Top, spot#")); //returns true