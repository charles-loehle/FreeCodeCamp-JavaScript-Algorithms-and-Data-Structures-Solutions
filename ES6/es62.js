// Only change code below this line
class Thermostat {
	constructor(originalTemp) {
		this._originalTemp = originalTemp;
	}
	// fahrenheit to celcius
	get temperature() {
		return ((5 / 9) * (this._originalTemp - 32)).toFixed(2);
	}
	// celcius to fahrenheit
	set temperature(celcius) {
		this._originalTemp = (celcius * 9.0) / 5 + 32;
	}
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
