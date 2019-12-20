import React from 'react';
import { formatValue } from '../util/format';

const Bar = (props) => {
	let displayValue = props.value;
	if (props.formatSymbol) {
		displayValue = formatValue(props.value, props.formatSymbol);
	}
	return (
		<div className="Bar" data-testid="Bar" >
			<span className="Bar__value">{displayValue}</span>
		</div>
	)
}

export default Bar;