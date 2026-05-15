function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	

  //your code here
	const values = [
    obj[0],
    obj[1],
    ["CM", 900],
    obj[2],
    ["CD", 400],
    obj[3],
    ["XC", 90],
    obj[4],
    ["XL", 40],
    obj[5],
    ["IX", 9],
    obj[6],
    ["IV", 4]
  ];

  let result = "";

  for (let [symbol, value] of values) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
	
// Example usage
const input = parseInt(prompt("Enter a number"));
alert(convertToRoman(input));

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
