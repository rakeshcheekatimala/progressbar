import React from "react";
import ReactDOM from "react-dom";
import NumberButton from "./../NumberButton";

import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<NumberButton value={5} onClick={() => { }} />, div);
});

it("renders button correctly", () => {
	const { getByTestId } = render(<NumberButton value={5} onClick={() => { }} />);
	expect(getByTestId("numberbutton")).toHaveTextContent("+5");
});

it("renders button correctly", () => {
	const { getByTestId } = render(<NumberButton value={-5} onClick={() => { }} />);
	expect(getByTestId("numberbutton")).toHaveTextContent("-5");
});

it("matches snapshot 1", () => {
	const tree = renderer.create(<NumberButton value={-5} onClick={() => { }} />).toJSON();
	expect(tree).toMatchSnapshot();
});


