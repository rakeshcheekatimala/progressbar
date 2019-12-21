import React from 'react';
import PropTypes from 'prop-types';
import { displayNumberSign } from '../util/format';

const NumberButton = (props) => {
	let { value, onClick } = props;
	return (
		<button className="NumberButton" data-testid="numberbutton" value={value} onClick={onClick}>{displayNumberSign(value)}</button>
	)
}


NumberButton.propTypes = {
	value: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}

export default NumberButton;