function checkCashRegister(price, cash, cid) {
	// get change amount dur
	var change = cash - price;
	// loop through cid array and check if denomination is greater than change
	// if returns true, go to the next one until it returns false
	return cid.map((denom) => {
		return denom[1] > change;
	});
}

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
);

/**
 * when you buy something for 19.50 and only have 20.00,
the cashier
1. subtracts 19.50 from 20.00
2. looks for .50 in change  using the largest denomination possible.
pennies? true, check if can go bigger
nickels? true, check if can go bigger
dimes? true, check if can go bigger
quarters? true, check if can go bigger
one dollar bills? false, too big so use quarters.
 */
