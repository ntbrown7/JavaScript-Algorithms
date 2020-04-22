//The parent function  "mrsNumber()" will return every number missing in the array between the lowest and highest number.

function mrsNumber(numArr){ 
    numArr = selectionSort(numArr); 
    let numOffset = 0;
    let missingNums = []; //increases each time a number is missing so that the comparison doesnt lose track.
    for(i=0;i<numArr.length;i++){
        while(numArr[0] + i + numOffset != numArr[i]){
            
            missingNums.push(numArr[0]+i+numOffset); //3
            numOffset++;
        }
    }  
    return missingNums; 
}
function selectionSort(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log(mrsNumber([3,2,1,5,10])); 