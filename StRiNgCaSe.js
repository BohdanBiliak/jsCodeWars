function toWeirdCase(string) {
    return string.split(" ").map(word => {
        let newWord = word.split("").map((char, i )=> i % 2 === 0 ?
       char.toUpperCase(): char.toLowerCase()).join("")

        return newWord

    })
   .join(" ")

}
str1 = "string"
console.log(toWeirdCase(str1))