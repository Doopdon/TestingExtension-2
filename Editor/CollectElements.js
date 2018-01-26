var _elements = [];
//stand in unique name for elements
var _name = 1;
function getStoredElement(info)
{
	identity = info.identity
	var storageElem = document.getElementById("elements");	
	try{
		_elements = JSON.parse(storageElem.value);
	}
	catch(e)
	{
		_elements = [];
	}
	
	for(var i = 0; i < _elements.length; i++)
	{
		if(compareIdentities(_elements[i].identity,identity))
		{
			return _elements[i];
		}
	}
	
	var newElem = {name:(_name++).toString(),tabId:info.tabId,identity:identity};
	console.log("newElem",newElem);
	_elements.push(newElem);
	storageElem.textContent = JSON.stringify(_elements);

	return newElem;
}

