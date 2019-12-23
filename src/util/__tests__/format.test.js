import { formatValue, displayNumberSign, extractNumberWithoutSymbol, calculatePercentage } from '../format';

it("return value with symbol given as input", () => {
	let value = formatValue(300, "%")
	expect(value).toBe('300%');
});

it("return value with + sign", () => {
	let value = displayNumberSign(30);
	expect(value).toBe("+30");
});

it("return value with - sign", () => {
	let value = displayNumberSign(-30);
	expect(value).toBe(-30);
});

it("return a number value without symbol ", () => {
	let value = extractNumberWithoutSymbol("300%", "%")
	expect(value).toBe("300");
});

it("return value with the calculate percentage for the max value as i/p", () => {
	let value = calculatePercentage(50, 150);
	expect(value).toBe(33);

});
