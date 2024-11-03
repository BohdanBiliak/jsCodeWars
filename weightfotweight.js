function orderWeight(strng) {
  return strng.trim().split(/\s+/)
  .sort((a, b) =>{
    const weightA = a.split('').reduce((sum, d) => sum + +d, 0);
    const weightB = b.split('').reduce((sum, d) => sum + +d, 0);
    return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
  })
  .join(' ');
}    
  

const inputStr = "56 65 74 100 99 68 86 180 90";
const result = orderWeight(inputStr);
console.log(result); // Output: "100 180 90 56 65 74 68 86 99"
