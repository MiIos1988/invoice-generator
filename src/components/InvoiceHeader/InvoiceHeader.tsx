import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../../utils/common';
import { Logo } from '../Logo/Logo';
import { updateNestedField } from '../../utils/helpers';
import { InvoiceContentProps } from '../../types/invoice';

const InvoiceHeader: React.FC<InvoiceContentProps> = ({ invoiceData, setInvoiceData }) => {
	return (
		<Wrapper>
			<Logo />
			<IssuerInfoWrapper>
				<CompanyName>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'myCompany',
								'name',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.myCompany.name}
					</EditableParagraph>
				</CompanyName>
				<InfoWrapper>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'myCompany',
								'address',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.myCompany.address}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'myCompany',
								'registrationNumber',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.myCompany.registrationNumber}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'myCompany',
								'taxID',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.myCompany.taxID}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'myCompany',
								'optionalField1',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.myCompany.optionalField1}
					</EditableParagraph>
					<EditableParagraph
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'myCompany',
								'optionalField2',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.myCompany.optionalField2}
					</EditableParagraph>
				</InfoWrapper>
			</IssuerInfoWrapper>
		</Wrapper>
	);
};

const Wrapper = styled(FlexDiv)`
	justify-content: space-between;
`;

const EditableParagraph = styled.p`
	margin: 0;
	padding: 0;
`;

const CompanyName = styled.div`
	text-transform: uppercase;
	font-weight: 700;
	color: #4a4a4a;
`;

const InfoWrapper = styled.div`
	font-weight: 500;
	color: #4a4a4a;
`;

const IssuerInfoWrapper = styled.div`
	margin-top: 40px;
	width: 350px;
`;

export default InvoiceHeader;
