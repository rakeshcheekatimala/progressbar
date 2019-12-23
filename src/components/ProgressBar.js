import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import Dropdown from './Dropdown';
import NumberButton from './NumberButton';

const initSelectedValue = "Bar 0";

const ProgressBar = () => {
	let [totalButtons, setTotalButtons] = useState([]);
	let [barObject, setbarObject] = useState({});
	let [selectedValue, setSelectedValue] = useState(initSelectedValue);
	const [maxLimitValue, setMaximumValue] = useState(100);
	let [isLoading, setIsLoading] = useState(true);

	let onChangeHandler = (e) => {
		setSelectedValue(e.target.value);
	}

	let onClickHanlder = (e) => {
		let temp = Object.assign({}, barObject);
		temp[selectedValue] = barObject[selectedValue] + parseInt(e.target.value);
		temp[selectedValue] = temp[selectedValue] > 0 ? temp[selectedValue] : 0;
		setbarObject(temp);// update the barObject with the corrected values 
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
			setTotalButtons(json.buttons);
			setMaximumValue(json.limit);
			setIsLoading(true);
		}
		loadBars();
	}, []);

	return (
		<div className="ProgressBar">
			<h1 className="ProgressBar__title">ProgressBar Demo</h1>
			{isLoading && <div className="ProgressBar__list">
				{
					Object.entries(barObject).map(([key, barValue]) => {
						return <Bar value={barValue} key={key} formatSymbol={process.env.REACT_APP_FORMAT_SYMBOL} limitExceedColor="red" maxLimitValue={maxLimitValue} />
					})
				}
			</div>
			}
			<div className="ProgressBar__actioncontrols">
				<div className="ProgressBar__selectcontainer">
					{Object.entries(barObject).length > 0 && <Dropdown dropDownValues={barObject} onChange={onChangeHandler} datatype="object" value={selectedValue} />}
				</div>

				<div className="ProgressBar__buttongroup">
					{
						totalButtons.map((barValue) => {
							return <NumberButton value={barValue} key={barValue} onClick={onClickHanlder} />
						})
					}
				</div>
			</div>

			<br />

		</div>
	)
}

export default ProgressBar;