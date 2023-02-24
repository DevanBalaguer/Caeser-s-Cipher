function rot13(str) {

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newAlpha = "";

//if the location + key > 26, loop back
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + 13) % alphabet.length;
        newAlpha += alphabet[offset];
}

//find location in alphabet
    let result = "";
    
    for (let i = 0; i < str.length; i++){
      const char = str[i];
      const isALetter = alphabet.includes(char);
      if (isALetter === true) {
          let index = newAlpha.indexOf(str[i]);
          result += alphabet[index];
  } else {
        result += char;
      }
    }
return result;
 }



console.log(rot13("SERR PBQR PNZC"));
