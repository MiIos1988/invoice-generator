import React from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../../utils/common';
import { updateNestedField } from '../../utils/helpers';
import { InvoiceContentProps } from '../../types/invoice';

const InvoiceDetails: React.FC<InvoiceContentProps> = ({ invoiceData, setInvoiceData }) => {
	return (
		<>
			<InvoiceNumber>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceNumber',
							'invoiceNumberText',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceNumber.invoiceNumberText}
				</EditableParagraph>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceNumber',
							'number',
							Number(e.currentTarget.textContent)
						)
					}
					style={{ paddingLeft: '5px' }}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceNumber.number}
				</EditableParagraph>
			</InvoiceNumber>
			<Wrapper>
				<InfoWrapper>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'customer',
								'title',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.customer.title}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'customer',
								'name',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						Naziv: <Span>{invoiceData.customer.name}</Span>
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'customer',
								'address',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						Adresa: <Span>{invoiceData.customer.address}</Span>
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'customer',
								'registrationNumber',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						Matični broj: <Span>{invoiceData.customer.registrationNumber}</Span>
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'customer',
								'taxID',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						PIB: <Span>{invoiceData.customer.taxID}</Span>
					</EditableParagraph>
				</InfoWrapper>
				<DateWrapper>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'invoiceDetails',
								'issueDate',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.invoiceDetails.issueDate}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'invoiceDetails',
								'transactionDate',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.invoiceDetails.transactionDate}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'invoiceDetails',
								'currencyDate',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						<Span> {invoiceData.invoiceDetails.currencyDate}</Span>
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'invoiceDetails',
								'issuePlace',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.invoiceDetails.issueDate}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'invoiceDetails',
								'paymentMethod',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.invoiceDetails.paymentMethod}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'invoiceDetails',
								'model',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.invoiceDetails.model}
					</EditableParagraph>
				</DateWrapper>
			</Wrapper>
		</>
	);
};

const Wrapper = styled(FlexDiv)`
	justify-content: space-between;
	font-weight: 500;
	color: #4a4a4a;
`;

const InvoiceNumber = styled(FlexDiv)`
	font-size: 24px;
	font-weight: 700;
	color: #4a4a4a;
	margin-top: 30px;
`;

const InfoWrapper = styled.div`
	width: 450px;
	padding-right: 10px;
	padding-top: 10px;
`;

const DateWrapper = styled.div`
	width: 350px;
`;

const Span = styled.span`
	color: black;
	font-weight: 700;
`;

const EditableParagraph = styled.p`
	margin: 0;
	padding: 0;
`;

export default InvoiceDetails;
