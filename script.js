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
	let result = ""; // This will store the final Roman numeral

	// Step 1: First, handle subtractive cases
	for (let key in subtractiveCases) {
		let value = parseInt(key); // convert key string to number
		let symbol = subtractiveCases[key];

		while (num >= value) {
			result += symbol;
			num -= value;
		}
	}

	// Step 2: Handle the normal Roman numerals
	const valuesArray = Object.values(obj); // convert object to array

	for (let i = 0; i < valuesArray.length; i++) {
		let symbol = valuesArray[i][0];
		let value = valuesArray[i][1];

		while (num >= value) {
			result += symbol;
			num -= value;
		}
	}

	return result; 

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
