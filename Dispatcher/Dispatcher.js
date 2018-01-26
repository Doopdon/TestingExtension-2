console.log("Background application is running...");

var editorId;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("request",request);

    //asks for the tab id and it is returned
    if (request === 'getTabId') {
      sendResponse(sender.tab.id);
    }
    //tells the dispatch what tab the editor is on
    //TODO make sure this handles multiple editor openings.
    else if(request === 'setEditorId'){
      editorId = sender.tab.id;
      console.log("set the editor to:",editorId);
    }
    //asks for the editor id so it can send a message to it.
    else if(request === 'getEditorId')
    {
      sendResponse(editorId);
    }
});