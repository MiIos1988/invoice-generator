import React from 'react';
import styled from 'styled-components';
import { InvoiceContentProps } from '../../types/invoice';

const InvoiceTotal: React.FC<InvoiceContentProps> = ({ invoiceData, setInvoiceData }) => {
	return (
		<>
			<Wrapper>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					UKUPNO 162.600,00 rsd
				</EditableParagraph>
				<SumWrapper>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						UKUPNO 162.600,00 rsd
					</EditableParagraph>
				</SumWrapper>
			</Wrapper>
			<LettersWrapper>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					Slovima: stošezdesetidvehiljadeišeststotinadinara
				</EditableParagraph>
			</LettersWrapper>
			<ArticleLawWrapper>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					**izdavalac računa nije obveznik pdv-a po članu 33. Zakona o pdv
				</EditableParagraph>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					**ovaj račun je uradjen na računaru i punovažan je bez pečata i potpisa
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
	margin-top: 40px;
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
