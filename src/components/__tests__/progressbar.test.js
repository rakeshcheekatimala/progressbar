import React from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./../ProgressBar";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ProgressBar />, div);
});
