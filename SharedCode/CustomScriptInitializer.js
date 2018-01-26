
var _customeScriptDictionaryForPageOperator;
var _customeScriptStoreForEditor

function initializeCustomeScripts(scripts)
{
    initializeCustomeScriptsForPageOperator(scripts);
    initializeCustomeScriptsForEditor(scripts);
}

function initializeCustomeScriptsForPageOperator(scripts)
{
	_customeScriptDictionaryForPageOperator = [];	
	scripts.forEach(element => {
		_customeScriptDictionaryForPageOperator[element.name] = element;
    });
    initializeCustomeScriptsForEditor
}

function initializeCustomeScriptsForEditor()
{
    _customeScriptStoreForEditor = [];
    for(var key in _customeScriptDictionaryForPageOperator)
    {
        var newCommand = key+"(";
        for(var i = 0; i < _customeScriptDictionaryForPageOperator[key].length; i++)
        {
            if(i != 0){newCommand += ","}
            newCommand += "%";
        }
        newCommand+=")";
        _customeScriptStoreForEditor.push(
            {   word:newCommand,
                funct:function(idName){
                    var elem = getElement(idName)
                    sendMessageToDispatcher({type:"preformAction",
                    							info:{tabId:elem.tabId,
                    								identity:elem.identity,
                                                    action:'RunFuntion',
                                                    value:{funct:key,params:arguments}}});                
                        console.log("custom function");
            }}
        );
    }
}

// function click(idName){
//     var elem = getElement(idName)

//     sendMessageToDispatcher({type:"preformAction",
// 							info:{tabId:elem.tabId,
// 								identity:elem.identity,
// 								action:'click'}});

//     console.log("click function");
// }