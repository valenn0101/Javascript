function rot13(str) {
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let nuevoString = "";

  for (let i = 0; i<str.length; i++){
    let index = alfabeto.indexOf(str[i]);
    if (index == -1){
      nuevoString += str[i];
    } else {
      let nuevoIndex = (index + 13) %26;
      nuevoString += alfabeto[nuevoIndex];
    }
  }


  return nuevoString;
}

rot13("SERR PBQR PNZC");