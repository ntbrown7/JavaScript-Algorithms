function timeCheck(time) {
    if (time.length == 5){
        hour = time.slice(0,2);
        min = time.slice(3,5);
    }
    if (time.length == 4){
        hour = time.slice(0,1);
        min = time.slice(2,4);
    }
    if(hour >= 0 && hour <= 23 && min >= 0 && min <= 59 ){
        return true;
    }
    else {
        return false;
    }
}

function timeCheck2(time){
    let timeArray = time.split(":");
    if (Number(timeArray[0] > 23)) {
        return false;
    }
    else if (Number(timeArray[1]) > 59) {
        return false;
    }
    return true;
}

console.log(timeCheck2("24:59"));
console.log(timeCheck2                                    ("0:00"));
console.log(timeCheck("5:30"));
console.log(timeCheck("19:20"));
console.log(timeCheck("0:60"))