function sumDif(nums){
        // find the sum difference between the min and max
        // upgrade to have multiple entries
        // sumDif[5,7,10] = 45
        
        
        
        

        let diffArr = selectSort(nums); //sort numbers array from greatest to lest
        let diff = diffArr[0]-diffArr[diffArr.length-1] +1; //first element - last element offset
        let sum =0;
        
        for (i=0;i < diff;i++){ //Add every element
            sum += diffArr[0]-i;
        }   

        return sum;

    
}


function selectSort(num){ 
    for(i =0;i<num.length;i++){
        let max = i;
        for (let j = i + 1; j <num.length; j++){
            if(num[max] < num[j]){ // king
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

let toSum = [10,7,5];
console.log(sumDif(toSum)); //10+9+8+7+6+5 = 45

