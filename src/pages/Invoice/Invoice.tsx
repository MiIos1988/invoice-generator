import React from 'react';
import { createRoot } from 'react-dom/client';

const Invoice = () => {
	return <div></div>;
};

try {
	const element = document.createElement('div');
	document.body.appendChild(element);
	const root = createRoot(element);
	root.render(<Invoice />);
} catch (error) {}
