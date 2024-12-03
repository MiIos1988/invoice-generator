export const createNewInvoicePage = () => {
	chrome.tabs.create({
		url: 'chrome-extension://' + chrome.runtime.id + '/invoice.html',
	});
};
