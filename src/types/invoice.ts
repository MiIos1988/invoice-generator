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
