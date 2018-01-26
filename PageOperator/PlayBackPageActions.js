function handleRequest(request, sendResponse)
{
	console.log("in handleRequest");
	if(request.type == "preformAction")
	{
		doAction(getElementFromIdentity(request.info.identity),request.info.action, request.info.value, sendResponse);
		//prefromAction(request.info, sendResponse);
	}
}

function doAction(element, action, value, sendResponse)
{
	if(action.toUpperCase() == "Click".toUpperCase())
	{
		element.click();
	}
	else if(action.toUpperCase() == "SetTextOf".toUpperCase())
	{
		element.value = value;
	}
	else if(action.toUpperCase() == "contextMenu".toUpperCase())
	{
		element.dispatchEvent(new CustomEvent('contextmenu'));
	}
	else if(action.toUpperCase() == "Inspect".toUpperCase())
	{
		sendResponse(element.outerHTML)
	}
	else if(action.toUpperCase() == "RunFuntion".toUpperCase())
	{
		_customeScriptDictionaryForPageOperator[value.funct].apply(this, value.params);
	}
}