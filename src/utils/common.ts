import styled from 'styled-components';

export const INVOICE_LOGO = chrome.runtime.getURL('./logoInvoice.png');

export const FlexDiv = styled.div`
	display: flex;
`;

export const FlexDivColumn = styled(FlexDiv)`
	flex-direction: column;
`;
