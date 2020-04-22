function repeatString(str, num){
    let finStr = "";
    for(i =0;i< num;i++){
        finStr += str;
    }
    return finStr;
}

console.log(repeatString("hell",6));