import React from 'react';
import { action } from '@storybook/addon-actions';
import NumberButton from '../components/NumberButton';

export default {
	title: 'Numbered Button',
};

export const Positive = () => <NumberButton value={50} onClick={action(' positive button clicked')} />

export const Negative = () => <NumberButton value={-150} onClick={action('negative button clicked')} />
