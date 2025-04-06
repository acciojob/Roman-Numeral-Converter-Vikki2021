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
	let result = "";
	const symbols = Object.values(obj);

	// Manually add subtractive cases
	const subtractive = {
		900: "CM",
		400: "CD",
		90: "XC",
		40: "XL",
		9: "IX",
		4: "IV"
	};

	// Handle subtractive cases first
	for (let value in subtractive) {
		while (num >= value) {
			result += subtractive[value];
			num -= value;
		}
	}

	// Then handle remaining values
	for (let [symbol, value] of symbols) {
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
