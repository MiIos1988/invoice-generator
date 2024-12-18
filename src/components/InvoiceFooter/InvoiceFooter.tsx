import React from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../../utils/common';
import { InvoiceContentProps } from '../../types/invoice';
import { updateNestedField } from '../../utils/helpers';

const InvoiceFooter: React.FC<InvoiceContentProps> = ({ invoiceData, setInvoiceData }) => {
	return (
		<Wrapper>
			<GiroAccount>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceFooter',
							'nameBank',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceFooter.nameBank}
				</EditableParagraph>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceFooter',
							'giroAccount',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceFooter.giroAccount}
				</EditableParagraph>
			</GiroAccount>
			<NameWrapper>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceFooter',
							'responsiblePerson',
							e.currentTarget.textContent || ''
						)
					}
					style={{ marginBottom: '15px' }}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceFooter.responsiblePerson}
				</EditableParagraph>
				<EditableParagraph
					onBlur={(e) =>
						updateNestedField(
							setInvoiceData,
							'invoiceFooter',
							'responsiblePersonName',
							e.currentTarget.textContent || ''
						)
					}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					{invoiceData.invoiceFooter.responsiblePersonName}
				</EditableParagraph>
			</NameWrapper>
		</Wrapper>
	);
};

const Wrapper = styled(FlexDiv)`
	justify-content: space-between;
	font-weight: 500;
	color: #4a4a4a;
	margin-top: 15px;
`;

const NameWrapper = styled.div`
	text-align: center;
	margin-right: 20px;
`;
const GiroAccount = styled.div``;

const EditableParagraph = styled.p`
	margin: 0;
	padding: 0;
`;

export default InvoiceFooter;
