import React from 'react';
import ReactDOM from "react-dom";
import Dropdown from "./../Dropdown";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);
let dropDownValues = { "Bar 0": 51, "Bar 1": 70, "Bar 2": 79 };

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Dropdown datatype="object" dropDownValues={dropDownValues} onChange={() => { console.log('test') }} />, div);
});

it("renders selectbox with default value as Bar 0", () => {
	const { getByTestId } = render(<Dropdown datatype="object" dropDownValues={dropDownValues} onChange={() => { console.log('test') }} />);
	expect(getByTestId("select")).toHaveTextContent("Bar 0");
});


it("renders selectbox with all values as per dropDownValues object keys", () => {
	const { getByTestId } = render(<Dropdown datatype="object" dropDownValues={dropDownValues} onChange={() => { console.log('test') }} />);
	expect(getByTestId("select")).toHaveTextContent("Bar 0");
	expect(getByTestId("select")).toHaveTextContent("Bar 1");
	expect(getByTestId("select")).toHaveTextContent("Bar 2");
});