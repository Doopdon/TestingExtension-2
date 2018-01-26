var time;
var tempId;


function startPageActionListeners(){
	console.log("in startPageActionListeners");
	//every time somehting is clicked on a page this executes
	document.addEventListener('click',(event)=>{
		console.log("in click event");
		handleClickEvent(event);
	});
	document.addEventListener('contextmenu',(event)=>{
		handleContextMenu(event,sendMessageToDispatch);
	});

	//every time you hit a key this executes
	document.addEventListener('keydown',(event)=>{
		handleKeyDownEvent(event,sendMessageToDispatch);
	});
}




function handleKeyDownEvent(event,callback)
{ 
	var timeOffset = 1000
	time = Date.now()
	setTimeout(function(){
		if(Date.now()-time>timeOffset-5)
		{
			var tId = etIdentityFromElement(event.target);
			var t = {type:"action",info:{identity:tId,tabId:_currentTabId,action:event.type,text:event.srcElement.value}};
			callback(t);
		}
	},timeOffset+5);
}

function handleContextMenu(event, callback)
{
	console.log("in handleContextMenu");
	getEditorId(function(editorId){
		var t = {type:"action",destination:editorId,
		info:{identity:getIdentityFromElement(event.target),tabId:_currentTabId,action:event.type}};
		chrome.extension.sendMessage(t);
	});
}

function handleClickEvent(event, callback)
{
	console.log("in handleClickEvent");
	getEditorId(function(editorId){
		var t = {type:"action",destination:editorId,
		info:{identity:getIdentityFromElement(event.target),tabId:_currentTabId,action:event.type}};
		chrome.extension.sendMessage(t);
	});
}

// function handleClickEvent(event,callback)
// {
// 	console.log("in handleClickEvent, callback:",callback);
// 	var t = {type:"action",
// 	info:{identity:getIdentityFromElement(event.target),tabId:_currentTabId,action:event.type}};
// 	callback(t);
// }

//todo get this and the otherone in a shared file
function sendMessageToDispatch(object){
	console.log("in send Message to dispatcher, info:",object);
	chrome.extension.sendMessage(object);
}




