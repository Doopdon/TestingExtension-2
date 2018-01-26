console.log("getTabIdLogic is started...")
tabId = false;

function getTabId(callback){
    chrome.runtime.sendMessage('getTabId', function(response) {
    tabId = response;
    callback(tabId);
    });
};

function startListenerForThisTabsMessages(callback)
{
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            //we dont want to check the if the tab id matches us
            // if the message is 'getTabId' this will start an infinite loop.
            if(request != 'getTabId'){
              getTabId(function(tabId){
                  console.log('request',request,"id",tabId);
                  if(tabId ==  request.destination){
                callback(request,sendResponse)}
              })  
            }
    });
}

function getEditorId(callback){
    chrome.runtime.sendMessage('getEditorId', function(response) {
    tabId = response;
    callback(response);
    });
}

function setEditor(){
    chrome.runtime.sendMessage('setEditorId');
}