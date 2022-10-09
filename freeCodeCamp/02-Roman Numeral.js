function convertToRoman(num) {
  const numeros = {
    /* Apartir de estos construimos 
    los demas numeros */
    1:"I",
    4:"IV",
    5:"V",
    9:"IX",
    10:"X",
    40:"XL",
    50:"L",
    90:"XC",
    100:"C",
    400:"CD",
    500:"D",
    900:"CM",
    1000:"M",
  };

  let romanos = "";
  const numerosDecimales = Object.keys(numeros).reverse();
  numerosDecimales.forEach(key =>{
    while (key <= num){
      romanos += numeros[key];
      num -= key;
    }
  });

 return romanos;
}

console.log(convertToRoman(23));