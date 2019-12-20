import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const ProgressBar = () => {

	let [barObject, setbarObject] = useState({});

	useEffect(() => {
		async function loadBars() {
			let response = await fetch(
				process.env.REACT_APP_REST_API
			);
			let json = await response.json();
			let resultObj = {};
			for (let i = 0; i < json.bars.length; i++) {
				resultObj["Bar " + i] = json.bars[i];
			}
			setbarObject(resultObj); // setting the resultObj to display the bars
		}
		loadBars();
	}, []);

	return (
		<div className="ProgressBar">
			<h1 className="ProgressBar__title">ProgressBar Demo</h1>
			<div className="ProgressBar__list">
				{
					Object.entries(barObject).map(([key, barValue]) => {
						return <Bar value={barValue} key={key} formatSymbol={process.env.REACT_APP_FORMAT_SYMBOL} />
					})
				}
			</div>
		</div>
	)
}

export default ProgressBar;