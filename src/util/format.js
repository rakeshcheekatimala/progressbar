export const formatValue = (value, symbol) => {
	return value + symbol;
}

export const displayNumberSign = (number) => {
	return number >= 0 ? "+" + number : number
}

export const extractNumberWithoutSymbol = (number, symbol) => {
	return number.split(symbol)[0];
}