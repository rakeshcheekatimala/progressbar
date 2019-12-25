import React from "react";
import ReactDOM from "react-dom";
import BarServiceMock from "./../services/__mocks__/BarService";
import ProgressBar from "./../ProgressBar";
import { cleanup, render, waitForElementToBeRemoved, act } from "@testing-library/react";

afterEach(cleanup);

beforeEach(() => {
	BarServiceMock.getBars = jest.fn(() => Promise.resolve({
		json: {
			"buttons": [22, 37, -34, -22],
			"bars": [31, 70, 89, 50],
			"limit": 130
		}
	}));
});


it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ProgressBar />, div);
});


it("fetches and displays data without crashing", async () => {
	await act(async () => {
		const { getByTestId } = render(<ProgressBar />);
		await waitForElementToBeRemoved(() => getByTestId('loading'));
	});
});
