function combineString(fName, lName){
    return "Hi, my name is ".concat( fName, " ", lName, ". ");
    
}

function combineString2(fName, lName){
    return "Hi, my name is " + fName + " " + lName + ". ";

}

function combineString3(fName, lName){
    return `Hi, my name is ${fName} ${lName}. `;

}

console.log(combineString("Nate", "Brown"));
console.log(combineString2("Nate", "Brown"));
console.log(combineString3("Nate", "Brown"));