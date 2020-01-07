import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from '../components/Dropdown';

export default {
	title: 'Dropdown',
};

let dropDownValues = { "Bar 0": 51, "Bar 1": 70, "Bar 2": 79 };

export const Select = () => <Dropdown datatype="object" dropDownValues={dropDownValues} onChange={action(' dropdown is clicked')} />

