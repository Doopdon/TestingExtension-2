
function startListeners()
{
	var button = document.getElementById('button');
	button.addEventListener('click', () => {
	  playBack();
	});

	startListenerForThisTabsMessages(
		function(message){
			if(message.type == "action"){
				populateEditor(message);
			}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	setEditor();
	initializeTree();
	console.log("Tree:",_commandTree)
  startListeners();
});