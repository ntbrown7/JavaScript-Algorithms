function celToFah(cel){
   const fahr = cel * (9/5) +32;
   return fahr;
}
function fahToCel(fahr){
    const cel = (fahr - 32)/(9/5);
    return cel;
}

console.log(celToFah(30)); //converts Celsius to Farhenheight 

console.log(fahToCel(86)); //converts Farhenheight to Celsius
