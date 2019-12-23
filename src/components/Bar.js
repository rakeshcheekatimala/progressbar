import React from 'react';
import { formatValue, extractNumberWithoutSymbol, calculatePercentage } from '../util/format';
import PropTypes from 'prop-types';


const Bar = (props) => {
	let { value, formatSymbol, maxLimitValue, limitExceedColor } = props;
	let displayValue = value = calculatePercentage(value, maxLimitValue);
	let excessColor = parseInt(displayValue) === 0 ? '' : 'Bar--normal'; // default value is Bar--normal if its greater than zero
	let maximumWidth = 100;
	let calcWidthValue = displayValue;
	if (formatSymbol) {
		displayValue = formatValue(value, formatSymbol);
	}
	if (maxLimitValue && limitExceedColor) {
		excessColor = extractNumberWithoutSymbol(displayValue, formatSymbol) > maximumWidth ? "Bar--" + limitExceedColor : excessColor
	}

	calcWidthValue = parseInt(value) >= maximumWidth ? maximumWidth : value;
	calcWidthValue = calcWidthValue + "%"
	return (
		<div className={`Bar`} data-testid="Bar" >
			<div className={`Bar__color ${excessColor}`} style={{ "maxWidth": calcWidthValue }}>
				<span className="Bar__value">{displayValue}</span>
			</div>

		</div>
	)
}

Bar.propTypes = {
	value: PropTypes.any.isRequired,
	formatSymbol: PropTypes.string
}

export default Bar;