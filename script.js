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
	const special = {
		900: 'CM', 400: 'CD',
		90: 'XC', 40: 'XL',
		9: 'IX', 4: 'IV'
	};

	let result = '';

	for (let val of [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]) {
		if (special[val]) {
			while (num >= val) {
				result += special[val];
				num -= val;
			}
		} else {
			for (let key in obj) {
				let [sym, value] = obj[key];
				while (val === value && num >= value) {
					result += sym;
					num -= value;
				}
			}
		}
	}
	return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
