import React from "react";
import ReactDOM from "react-dom";
import BarServiceMock from "BarService";
import ProgressBar from "./../ProgressBar";
import { cleanup, render, waitForElement } from "@testing-library/react";

afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ProgressBar />, div);
});


it("fetches and displays data", async () => {
	BarServiceMock.getBars.mockResolvedValueOnce({
		json: {
			"buttons": [22, 37, -34, -22],
			"bars": [31, 70, 89, 50],
			"limit": 130
		},
	});
	const { getByTestId } = render(<ProgressBar />);
	expect(getByTestId("loading")).toHaveTextContent("Loading data...");
});
