console.log("Page Operator Running");

var _currentTabId;
getTabId(function(tabId){_currentTabId = tabId;});

function startListeners(){
	console.log("in start listeners");
	startPageActionListeners();
	startListenerForThisTabsMessages(handleRequest);
	//sets and saves the _currentTab
	// chrome.tabs.getCurrent(function(tab){
	// 	//set tab id for the current tab.
	// 	_currentTabId = tab.id;
	// 	console.log("tabID:",tab.id);
	// 	//every time somehting is clicked on a page this executes
	// 	document.addEventListener('click',(event)=>{
	// 		handleClickEvent(event,sendMessageToDispatch);
	// 	});
	// 	document.addEventListener('contextmenu',(event)=>{
	// 		handleContextMenu(event,sendMessageToDispatch);
	// 	});

	// 	//every time you hit a key this executes
	// 	document.addEventListener('keydown',(event)=>{
	// 		handleKeyDownEvent(event,sendMessageToDispatch);
	// 	});

	// 	//this is the reciver for commands given by the editor through the dispatcher.
	// });
};
//startListener();
window.addEventListener('load', startListeners, false )

 //$(document).ready(startListener);
