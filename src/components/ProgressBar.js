import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import Dropdown from './Dropdown';

const initSelectedValue = "Bar 0";

const ProgressBar = () => {

	let [barObject, setbarObject] = useState({});
	let [selectedValue, setSelectedValue] = useState(initSelectedValue);

	let onChangeHandler = (e) => {
		setSelectedValue(e.target.value);
	}

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
			<div className="ProgressBar__actioncontrols">
				{barObject && <Dropdown dropDownValues={barObject} onChange={onChangeHandler} datatype="object" value={selectedValue} />}
			</div>
		</div>
	)
}

export default ProgressBar;