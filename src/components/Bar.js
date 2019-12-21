import React from 'react';
import { formatValue, extractNumberWithoutSymbol } from '../util/format';
import PropTypes from 'prop-types';


const Bar = (props) => {
	let displayValue = props.value;
	let excessColor = parseInt(displayValue) === 0 ? '' : 'Bar--normal'; // default value is Bar--normal if its greater than zero
	let maxLimitValue = props.maxLimitValue;
	if (props.formatSymbol) {
		displayValue = formatValue(props.value, props.formatSymbol);
	}
	if (maxLimitValue && props.limitExceedColor) {
		excessColor = extractNumberWithoutSymbol(displayValue, props.formatSymbol) > maxLimitValue ? "Bar--" + props.limitExceedColor : excessColor
	}
	return (
		<div className={`Bar ${excessColor}`} data-testid="Bar" >
			<span className="Bar__value">{displayValue}</span>
		</div>
	)
}

Bar.propTypes = {
	value: PropTypes.any.isRequired,
	formatSymbol: PropTypes.string
}

export default Bar;