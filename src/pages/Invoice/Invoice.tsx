import React from 'react';
import { createRoot } from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';
import InvoiceContent from '../../components/InvoiceContent/InvoiceContent';

const Invoice = () => {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<InvoiceContent />
			</Wrapper>
		</>
	);
};

const GlobalStyle = createGlobalStyle`
body{
	margin: 0;
	padding: 0;
	font-size: 1em;
	font-weight: 400;
	line-height: 1.3;
	font-family:
		BlinkMacSystemFont,
		-apple-system,
		'Segoe UI',
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		'Helvetica',
		'Arial',
		sans-serif;
		
}`;

const Wrapper = styled.div`
	margin: 0;
	padding-top: 10px;
`;

try {
	const element = document.createElement('div');
	document.body.appendChild(element);
	const root = createRoot(element);
	root.render(<Invoice />);
} catch (error) {
	console.log(error);
}
