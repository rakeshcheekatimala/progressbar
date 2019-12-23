export const formatValue = (value, symbol) => {
	return value + symbol;
}

export const displayNumberSign = (number) => {
	return number >= 0 ? "+" + number : number
}

export const extractNumberWithoutSymbol = (number, symbol) => {
	return number.split(symbol)[0];
}

export const calculatePercentage = (value, maximumValue = 100) => {
	value = parseInt(value);
	maximumValue = parseInt(maximumValue);
	return Math.round((value * 100) / maximumValue);
}