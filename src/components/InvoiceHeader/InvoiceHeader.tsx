import React from 'react';
import styled from 'styled-components';
import { FlexDiv, INVOICE_LOGO } from '../../utils/common';

const InvoiceHeader = () => {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image src={INVOICE_LOGO} />
			</ImageWrapper>
			<IssuerInfoWrapper>
				<CompanyName>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						PERA PERIĆ PR MY COMPANY BEOGRAD
					</EditableParagraph>
				</CompanyName>
				<InfoWrapper>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Adresa: Vidovdanska 58, Beograd
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Matični broj: 67508219
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						PIB: 115358721
					</EditableParagraph>
					<EditableParagraph
						contentEditable="true"
						suppressContentEditableWarning={true}
					></EditableParagraph>
					<EditableParagraph
						contentEditable="true"
						suppressContentEditableWarning={true}
					></EditableParagraph>
				</InfoWrapper>
			</IssuerInfoWrapper>
		</Wrapper>
	);
};

const Wrapper = styled(FlexDiv)`
	justify-content: space-between;
`;

const ImageWrapper = styled.div`
	width: 250px;
	height: 200px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
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
