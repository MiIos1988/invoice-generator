import { createNewInvoicePage } from '../../utils/backgroundHelpers';
import { setupContextMenu } from '../../utils/contextMenu';

chrome.runtime.onInstalled.addListener(function (data) {
	if (data.reason == 'install') {
		createNewInvoicePage();
		setupContextMenu();
	}
});

chrome.action.onClicked.addListener(function () {
	createNewInvoicePage();
});
