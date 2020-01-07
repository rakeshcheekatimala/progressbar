import React from 'react';
import App from '../App';

export default {
	title: 'Application',
};

export const toStorybook = () => <App />;

toStorybook.story = {
	name: 'Progress Bar',
};
