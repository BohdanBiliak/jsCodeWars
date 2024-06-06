let num = [19, 5, 42, 2, 77]
function sumTwoSmallestNumbers(numbers) { 
    
    let arrayForSum = [] 
    for(let i = 0; i < numbers.length; i++){
        console.log("-------------" + numbers[i] + "-------------")
        for(let j = i+1; j <numbers.length; j++){
            console.log(numbers[j])
             if(numbers[i] < numbers[j]){
            arrayForSum.push(numbers[i])
            numbers.splice(numbers[i], 1)
            

        }
        } 
       
    }
    console.log(arrayForSum)
    console.log(numbers)
    
  }
  sumTwoSmallestNumbers(num)