//add custome script to the array. It can then be called from the editor. It will run on the tested page.
initializeCustomeScripts([

    function exampleFunction(parameter1,parameter2){
        //this function can be called from the editor with exampleFunction("test");
        console.log("This is an example function, parameters:",parameter1,parameter2);
    }

]);
