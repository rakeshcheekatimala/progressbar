import React from 'react';
import Bar from '../components/Bar';

export default {
	title: 'Bar Component',
};


export const Normalbar = () => <Bar value={100} formatSymbol={"%"} limitExceedColor="red" maxLimitValue={100} />

export const Redbar = () => <Bar value={110} formatSymbol={"%"} limitExceedColor="red" maxLimitValue={100} />

