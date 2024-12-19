import React from 'react';
import styled from 'styled-components';
import { InvoiceContentProps } from '../../types/invoice';
import { updateNestedField } from '../../utils/helpers';

const InvoiceTable: React.FC<InvoiceContentProps> = ({ invoiceData, setInvoiceData }) => {
	return (
		<Table>
			<Thead>
				<Tr>
					<FirstColumn
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'tableHeader',
								'name',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.tableHeader.name}
					</FirstColumn>
					<OtherColumn
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'tableHeader',
								'unit',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.tableHeader.unit}
					</OtherColumn>
					<OtherColumn
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'tableHeader',
								'quantity',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.tableHeader.quantity}
					</OtherColumn>
					<OtherColumn
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'tableHeader',
								'price',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.tableHeader.price}
					</OtherColumn>
					<OtherColumn
						onBlur={(e) =>
							updateNestedField(
								setInvoiceData,
								'tableHeader',
								'total',
								e.currentTarget.textContent || ''
							)
						}
						contentEditable="true"
						suppressContentEditableWarning={true}
					>
						{invoiceData.tableHeader.total}
					</OtherColumn>
				</Tr>
			</Thead>
			<Tbody>
				{invoiceData.invoiceTable.map((row, i) => (
					<Tr key={i}>
						<Td
							onBlur={(e) => {
								const updatedTable = [...invoiceData.invoiceTable];
								updatedTable[i].serviceName = e.currentTarget.textContent || '';
								setInvoiceData({ ...invoiceData, invoiceTable: updatedTable });
							}}
							style={{ textAlign: 'left' }}
							contentEditable="true"
							suppressContentEditableWarning={true}
						>
							{row.serviceName}
						</Td>
						<Td
							onBlur={(e) => {
								const updatedTable = [...invoiceData.invoiceTable];
								updatedTable[i].unit = e.currentTarget.textContent || '';
								setInvoiceData({ ...invoiceData, invoiceTable: updatedTable });
							}}
							contentEditable="true"
							suppressContentEditableWarning={true}
						>
							{row.unit}
						</Td>
						<Td
							onBlur={(e) => {
								const updatedTable = [...invoiceData.invoiceTable];
								updatedTable[i].quantity = Number(e.currentTarget.textContent) || 0;
								setInvoiceData({ ...invoiceData, invoiceTable: updatedTable });
							}}
							contentEditable="true"
							suppressContentEditableWarning={true}
						>
							{row.quantity}
						</Td>
						<Td
							onBlur={(e) => {
								const updatedTable = [...invoiceData.invoiceTable];
								updatedTable[i].price = e.currentTarget.textContent || '';
								setInvoiceData({ ...invoiceData, invoiceTable: updatedTable });
							}}
							contentEditable="true"
							suppressContentEditableWarning={true}
						>
							{row.price}
						</Td>
						<Td
							onBlur={(e) => {
								const updatedTable = [...invoiceData.invoiceTable];
								updatedTable[i].total = e.currentTarget.textContent || '';
								setInvoiceData({ ...invoiceData, invoiceTable: updatedTable });
							}}
							contentEditable="true"
							suppressContentEditableWarning={true}
						>
							{row.total}
						</Td>
					</Tr>
				))}
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
