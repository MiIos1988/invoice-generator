export type InvoiceData = {
	myCompany: {
		name: string;
		address: string;
		registrationNumber: string;
		taxID: string;
		optionalField1: string;
		optionalField2: string;
	};
	customer: {
		title: string;
		name: string;
		address: string;
		registrationNumber: string;
		taxID: string;
	};
	invoiceNumber: {
		invoiceNumberText: string;
		number: number;
	};
	invoiceDetails: {
		issueDate: string;
		transactionDate: string;
		currencyDate: string;
		issuePlace: string;
		paymentMethod: string;
		model: string;
	};
	tableHeader: {
		name: string;
		unit: string;
		quantity: string;
		price: string;
		total: string;
	};
	invoiceTable: InvoiceTableRow[];
	invoiceTotal: {
		firstTotal: string;
		additionalCosts: string;
		mainTotal: string;
		amountInWords: string;
		law1: string;
		law2: string;
	};
	invoiceFooter: {
		nameBank: string;
		giroAccount: string;
		responsiblePerson: string;
		responsiblePersonName: string;
	};
};

export type InvoiceContentProps = {
	invoiceData: InvoiceData;
	setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
};

type InvoiceTableRow = {
	serviceName: string;
	unit: string;
	quantity: number;
	price: string;
	total: string;
};
