import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';
import InvoiceContent from '../../components/InvoiceContent/InvoiceContent';

const Invoice = () => {
	const [invoiceData, setInvoiceData] = useState({
		myCompany: {
			name: 'PERA PERIĆ PR MY COMPANY BEOGRAD',
			address: 'Adresa: Vidovdanska 58, Beograd',
			registrationNumber: 'Matični broj: 67508219',
			taxID: 'PIB: 115358721',
			optionalField1: '',
			optionalField2: '',
		},
		customer: {
			title: 'KUPAC:',
			name: 'Your Company d.o.o.',
			address: 'Dvadesetdevetog novembra 5b, 11000 Beograd',
			registrationNumber: '29964551',
			taxID: '111365888',
		},
		invoiceNumber: {
			invoiceNumberText: 'Račun usluga br.',
			number: 1,
		},
		invoiceDetails: {
			issueDate: 'Datum izdavanja: 30.11.2024.',
			transactionDate: 'Datum prometa usluga: 30.11.2024.',
			currencyDate: 'Datum valute: 30.11.2024.',
			issuePlace: 'Mesto izdavanja: Beograd',
			paymentMethod: 'Način plaćanja: virmanski',
			model: 'Model / Poziv na broj: 1/2024',
		},
		tableHeader: {
			name: 'NAZIV',
			unit: 'JEDINIČNA MERA',
			quantity: 'KOLIČINA',
			price: 'CENA',
			total: 'UKUPNO',
		},
		invoiceTable: [
			{
				serviceName: 'Usluge tehničke podrške za period Novembar',
				unit: 'kom.',
				quantity: 1,
				price: '162.600,00',
				total: '162.600,00',
			},
		],
		invoiceTotal: {
			firstTotal: 'UKUPNO 162.600,00 rsd',
			additionalCosts: '',
			mainTotal: 'UKUPNO 162.600,00 rsd',
			amountInWords: 'Slovima: stošezdesetidvehiljadeišeststotinadinara',
			law1: '**izdavalac računa nije obveznik pdv-a po članu 33. Zakona o pdv',
			law2: '**ovaj račun je uradjen na računaru i punovažan je bez pečata i potpisa',
		},
		invoiceFooter: {
			nameBank: 'OTP Bank a.d. Beograd',
			giroAccount: 'Tekući račun: 325-9500700212121-21',
			responsiblePerson: 'Odgovorno lice za izdavanje računa',
			responsiblePersonName: 'Pera Perić',
		},
	});

	useEffect(() => {
		chrome.storage.local.get(['invoiceData', 'lastInvoiceNumber'], (result) => {
			const newInvoiceData = result.invoiceData || invoiceData;
			const lastInvoiceNumber = result.lastInvoiceNumber || 0;

			newInvoiceData.invoiceNumber.number = lastInvoiceNumber + 1;

			setInvoiceData(newInvoiceData);
		});
	}, []);

	useEffect(() => {
		setInvoiceData((prev) => ({
			...prev,
			invoiceDetails: {
				...prev.invoiceDetails,
				model: `Model / Poziv na broj: ${prev.invoiceNumber.number}/2024`,
			},
		}));
	}, [invoiceData.invoiceNumber.number]);

	const handleClick = () => {
		chrome.storage.local.set({ invoiceData, lastInvoiceNumber: invoiceData.invoiceNumber.number });
		window.print();
	};

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<InvoiceContent invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
				<PrintButton onClick={handleClick}>Save & Print Invoice</PrintButton>
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
	position: relative;
`;

const PrintButton = styled.button`
	color: white;
	background: #1b76d3;
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	position: absolute;
	top: 30px;
	right: 30px;
	border: none;
	position: fixed;

	&:hover {
		background: #0f72d4;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
	}

	@media print {
		display: none;
	}
`;

try {
	const element = document.createElement('div');
	document.body.appendChild(element);
	const root = createRoot(element);
	root.render(<Invoice />);
} catch (error) {
	console.log(error);
}
