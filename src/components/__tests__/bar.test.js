import React from "react";
import ReactDOM from "react-dom";
import Bar from "./../Bar";
import { render, cleanup } from "@testing-library/react";


afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Bar value="5" />, div);
});

it("renders bar with correct value", () => {
	const { getByTestId } = render(<Bar value="5" />);
	expect(getByTestId("Bar")).toHaveTextContent("5");
});

it("renders bar with correct value with formatSymbol", () => {
	const { getByTestId } = render(<Bar value="5" formatSymbol="%" />);
	expect(getByTestId("Bar")).toHaveTextContent("%");
	expect(getByTestId("Bar")).toHaveTextContent("5");
});

it("renders bar with correct value with formatSymbol", () => {
	const { getByTestId } = render(<Bar value="15" formatSymbol="$" />);
	expect(getByTestId("Bar")).toHaveTextContent("$");
	expect(getByTestId("Bar")).toHaveTextContent("15");
});