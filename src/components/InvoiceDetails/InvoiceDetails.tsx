import React from 'react';
import styled from 'styled-components';
import { FlexDiv } from '../../utils/common';

const InvoiceDetails = () => {
	return (
		<>
			<InvoiceNumber>
				<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
					Račun usluga br. 1
				</EditableParagraph>
			</InvoiceNumber>
			<Wrapper>
				<InfoWrapper>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						KUPAC:
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Naziv: <Span>Your Company d.o.o.</Span>
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Adresa: <Span>Dvadesetdevetog novembra 5b, 11000 Beograd</Span>
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Matični broj: <Span>29964551</Span>
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						PIB: <Span>111365888</Span>
					</EditableParagraph>
				</InfoWrapper>
				<DateWrapper>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Datum izdavanja: 30.11.2024.
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Datum prometa usluga: 30.11.2024.
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						<Span> Datum valute: 30.11.2024.</Span>
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Mesto izdavanja: Beograd
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Način plaćanja: virmanski
					</EditableParagraph>
					<EditableParagraph contentEditable="true" suppressContentEditableWarning={true}>
						Model / Poziv na broj: 1/2024
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

const InvoiceNumber = styled.div`
	font-size: 24px;
	font-weight: 700;
	color: #4a4a4a;
	margin-top: 40px;
	margin-bottom: 20px;
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
