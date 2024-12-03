import { createNewInvoicePage } from './backgroundHelpers';

export const setupContextMenu = async () => {
	try {
		chrome.contextMenus.create(
			{
				contexts: ['page'],
				title: 'Create invoice',
				id: 'createInvoice',
			},
			() => {
				if (chrome.runtime.lastError) {
					console.error(chrome.runtime.lastError.message);
				} else {
					console.log('Context menu created successfully');
					attachContextMenuListeners();
				}
			}
		);
	} catch (e) {
		console.error(e);
		return;
	}
};

export const attachContextMenuListeners = () => {
	chrome?.contextMenus?.onClicked?.addListener(async (info, tab) => {
		console.log('Context menu clicked', info, tab);
		createNewInvoicePage();
	});
};
