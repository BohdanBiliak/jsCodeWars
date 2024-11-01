function pigIt(str){
   return str.split(' ').map(word =>{
    let letters = word.match(/^[a-zA-Z]+/)
    let punctuation = word.match(/^[a-zA-Z]+/)
    if(letters){
        let pigLatinWord = letters[0].slice(1) + letters[0][0]+ "ay"
        return punctuation ? pigLatinWord:pigLatinWord;

    }
    return word

   })
   .join(' ')

  }
str = "Pig latin is cool"  
console.log(pigIt(str))