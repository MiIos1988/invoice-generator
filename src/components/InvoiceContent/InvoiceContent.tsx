import React from 'react';
import { Container as MuiContainer, Paper as MuiPaper } from '@mui/material';
import styled from 'styled-components';
import InvoiceHeader from '../InvoiceHeader/InvoiceHeader';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';
import InvoiceTable from '../InvoiceTable/InvoiceTable';
import InvoiceTotal from '../InvoiceTotal/InvoiceTotal';
import InvoiceFooter from '../InvoiceFooter/InvoiceFooter';
import { InvoiceData } from '../../types/invoice';

interface InvoiceContentProps {
	invoiceData: InvoiceData;
	setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

const InvoiceContent: React.FC<InvoiceContentProps> = ({ invoiceData, setInvoiceData }) => {
	return (
		<StyledContainer maxWidth="md">
			<StyledPaper elevation={5}>
				<InvoiceHeader invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
				<InvoiceDetails invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
				<InvoiceTable invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
				<InvoiceTotal invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
				<InvoiceFooter invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
			</StyledPaper>
		</StyledContainer>
	);
};

const StyledContainer = styled(MuiContainer)`
	@media print {
		margin: 25px 0 !important;
		padding: 0;
		width: 100%;
	}
`;

const StyledPaper = styled(MuiPaper)`
	width: 100%;
	padding: 40px 20px;
	overflow-x: auto;
	min-height: 1400px;

	@media print {
		box-shadow: none !important;
		padding: 0;
		min-height: auto;
		overflow: visible;
	}
`;

export default InvoiceContent;
