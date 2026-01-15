"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {
		arr = [];
	}

	if (discriminant == 0) {
		arr.push(-b / (2 * a));
	}

	if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	amount = amount - contribution;
	percent = (percent / 100) / 12;

	let result = amount * (percent + (percent / (((1 + percent) ** countMonths) - 1)));

	result = result * countMonths;

	return Number(result.toFixed(2));
}