import React from 'react';
import { createRoot } from 'react-dom/client';

const Invoice = () => {
	return <div>Start</div>;
};

try {
	const element = document.createElement('div');
	document.body.appendChild(element);
	const root = createRoot(element);
	root.render(<Invoice />);
} catch (error) {}
