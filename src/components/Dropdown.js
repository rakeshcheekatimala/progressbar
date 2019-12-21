import React from "react";
import PropTypes from 'prop-types';

const Dropdown = (props) => {
	return (
		<div className="SelectBox">
			<select component="select" data-testid="select"
				onChange={props.onChange}
				value={props.selectedValue}
			>
				{
					props.datatype === "array" && props.dropDownValues.map((item, index) => {
						return <option value={item.value} label={item.label} key={item.value}>{item.value}</option>
					})
				}
				{
					props.datatype === "object" && Object.entries(props.dropDownValues).map(([key, value]) => {
						return <option value={key} label={key} key={key}>{key}</option>
					})
				}
				}
		</select>
		</div>
	)
}

Dropdown.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default Dropdown;