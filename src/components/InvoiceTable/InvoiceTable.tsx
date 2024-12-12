import React from 'react';
import styled from 'styled-components';

const InvoiceTable = () => {
	return (
		<Table>
			<Thead>
				<Tr>
					<FirstColumn contentEditable="true" suppressContentEditableWarning={true}>
						NAZIV
					</FirstColumn>
					<OtherColumn contentEditable="true" suppressContentEditableWarning={true}>
						JEDINIČNA MERA
					</OtherColumn>
					<OtherColumn contentEditable="true" suppressContentEditableWarning={true}>
						KOLIČINA
					</OtherColumn>
					<OtherColumn contentEditable="true" suppressContentEditableWarning={true}>
						CENA
					</OtherColumn>
					<OtherColumn contentEditable="true" suppressContentEditableWarning={true}>
						UKUPNO
					</OtherColumn>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td style={{ textAlign: 'left' }} contentEditable="true" suppressContentEditableWarning={true}>
						Usluge tehničke podrške za period Novembar
					</Td>
					<Td contentEditable="true" suppressContentEditableWarning={true}>
						kom.
					</Td>
					<Td contentEditable="true" suppressContentEditableWarning={true}>
						1
					</Td>
					<Td contentEditable="true" suppressContentEditableWarning={true}>
						162.600,00
					</Td>
					<Td contentEditable="true" suppressContentEditableWarning={true}>
						162.600,00
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	margin-top: 20px;
	font-weight: 500;
	color: #4a4a4a;
	margin-top: 40px;
	margin-bottom: 20px;
`;

const Thead = styled.thead`
	background-color: #f2f2f2;
	text-align: center;
`;

const Th = styled.th`
	border: 1px solid #ddd;
	padding: 8px;
`;

const Tbody = styled.tbody`
	text-align: center;
`;

const Tr = styled.tr`
	border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
	border: 1px solid #ddd;
	padding: 8px;
`;

const FirstColumn = styled(Th)`
	width: 44%;
`;

const OtherColumn = styled(Th)`
	width: 14%;
`;

export default InvoiceTable;
