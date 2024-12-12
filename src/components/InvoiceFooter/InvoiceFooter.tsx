import React from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../../utils/common';

const InvoiceFooter = () => {
	return (
		<Wrapper>
			<GiroAccount>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					OTP Bank a.d. Beograd
				</EditableParagraph>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					Tekući račun: 325-9500700212121-21
				</EditableParagraph>
			</GiroAccount>
			<NameWrapper>
				<EditableParagraph
					style={{ marginBottom: '15px' }}
					contentEditable="true"
					suppressContentEditableWarning={true}
				>
					Odgovorno lice za izdavanje računa
				</EditableParagraph>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					Pera Perić
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
