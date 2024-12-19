import React from 'react';
import styled from 'styled-components';
import { InvoiceContentProps } from '../../types/invoice';
import { updateNestedField } from '../../utils/helpers';

const InvoiceTotal: React.FC<InvoiceContentProps> = ({ invoiceData, setInvoiceData }) => {
	return (
		<>
			<Wrapper>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceTotal',
							'firstTotal',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceTotal.firstTotal}
				</EditableParagraph>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceTotal',
							'additionalCosts',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceTotal.additionalCosts}
				</EditableParagraph>
				<SumWrapper>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'invoiceTotal',
								'mainTotal',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.invoiceTotal.mainTotal}
					</EditableParagraph>
				</SumWrapper>
			</Wrapper>
			<LettersWrapper>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceTotal',
							'amountInWords',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceTotal.amountInWords}
				</EditableParagraph>
			</LettersWrapper>
			<ArticleLawWrapper>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceTotal',
							'law1',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceTotal.law1}
				</EditableParagraph>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceTotal',
							'law2',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceTotal.law2}
				</EditableParagraph>
			</ArticleLawWrapper>
		</>
	);
};

const EditableParagraph = styled.p`
	margin: 0;
	padding: 0;
`;

const Wrapper = styled.div`
	text-align: right;
	margin-right: 20px;
	font-weight: 500;
	color: #4a4a4a;
`;

const SumWrapper = styled.div`
	color: black;
	font-weight: 700;
	margin-top: 10px;
	margin-bottom: 20px;
`;

const LettersWrapper = styled.div`
	text-align: center;
	font-weight: 500;
	color: #4a4a4a;
	margin-bottom: 10px;
`;

const ArticleLawWrapper = styled.div`
	font-weight: 500;
	color: #4a4a4a;
	border-bottom: 1px solid #cfcfcf;
`;

export default InvoiceTotal;
