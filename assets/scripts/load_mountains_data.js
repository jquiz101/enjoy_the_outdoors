"use strict"

let mountainsArray = []

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;

        // put code here that depends on the mountainsArray being populated
        // generateMountainsDDL(mountainsArray);
    })

}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

// hoisting - functions are accessible even if they're defined after where they're called/used
function generateMountainsDDL(arrayOfData) {
    console.log("generateMountainsDDL()");
    console.log(arrayOfData);

    // possibly create mountains dropdown options here
}