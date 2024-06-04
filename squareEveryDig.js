function squareDigits(num){
    Rezult =  num.toString().split("")
    let  rezult = ""
    console.log(Rezult)
    for(let i = 0; i < Rezult.length; i++){
        console.log(rezult)
        rezult +=parseInt(Rezult[i])*parseInt(Rezult[i])
        console.log(rezult)
    }
     
     return parseInt(rezult)
  }
console.log(squareDigits(9119 ))