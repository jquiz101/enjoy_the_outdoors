// this file has locationsArray, nationalParksArray, and parkTypesArray
// available to it because we included load_national_parks_data.js before this file
// in the national_parks.html

// console.log(nationalParksArray);

// setTimeout(() => {
//     // console.log(nationalParksArray);
//     console.log("hi");
// }, 1000);

// let theDemoButton = document.querySelector("#theDemoButton");
// let theSampleUL = document.querySelector("#locations");
// let parkTypesUL = document.querySelector("#parkTypes");
// let nationalParksUL = document.querySelector("#nationalParks");

// theDemoButton.addEventListener("click", function(event) {
//     console.log(locationsArray);
//     console.log(parkTypesArray);
//     console.log(nationalParksArray);    
    
//     locationsArray.forEach((location) => {
//         // theSampleUL.innerHTML += `<li>${location}</li>`
//     });

//     parkTypesArray.forEach((parkType) => {
//         parkTypesUL.innerHTML += `<li>${parkType}</li>`
//     });

//     nationalParksArray.forEach((park) => {
//         nationalParksUL.innerHTML += `<li>${park.LocationName}</li>`
//     });

//     theSampleUL.classList.remove("d-none");
//     parkTypesUL.classList.remove("d-none");
//     nationalParksUL.classList.remove("d-none");
// });



//-------------------------------------------------------------------------------------

let searchByLocationRadio = document.querySelector("#searchByLocation");
let searchByParkTypeRadio = document.querySelector("#searchByParkType");
let viewAllParksRadio = document.querySelector("#viewAllParks");
let searchDropdownByLocation = document.querySelector("#searchDropdownByLocation");
let searchDropdownByType = document.querySelector("#searchDropdownByType");
const parksTable = document.querySelector("#parksTable");
const parksTableBody = document.querySelector("#parksTable tbody");

let numText = document.querySelector("#numText");
let numMatch = document.querySelector("#numMatch");

// console.log(searchByLocationRadio);
// console.log(searchByParkTypeRadio);

// load locations into dropdown
searchByLocationRadio.addEventListener("click", function(event) {
    console.log('location radio click');

    numText.classList.add("d-none");
    parksTable.classList.add("d-none");
    searchDropdownByLocation.value = "";

    console.log("length: " + searchDropdownByLocation.options.length);

    if (searchDropdownByLocation.options.length <= 1) {
        locationsArray.forEach((location) => {
            var opt = document.createElement('option');
            opt.value = location;
            opt.innerHTML = location;
            searchDropdownByLocation.appendChild(opt);

            // searchDropdownByLocation.innerHTML += `<option value="${location}">${location}</option>`
        });
    }
    
    searchDropdownByLocation.classList.remove("d-none");
    searchDropdownByType.classList.add("d-none");
});

// load park types into dropdown
searchByParkTypeRadio.addEventListener("click", function(event) {
    console.log('type radio click');

    numText.classList.add("d-none");
    parksTable.classList.add("d-none");
    searchDropdownByType.value = "";

    if (searchDropdownByType.options.length <= 1) {
        parkTypesArray.forEach((parkType) => {
            var opt = document.createElement('option');
            opt.value = parkType;
            opt.innerHTML = parkType;
            searchDropdownByType.appendChild(opt);
        });
    }    

    searchDropdownByLocation.classList.add("d-none");
    searchDropdownByType.classList.remove("d-none");
});


// load all parks
viewAllParksRadio.addEventListener("click", function(event) {
    console.log("view all clicked");

    numText.classList.add("d-none");
    searchDropdownByLocation.classList.add("d-none");
    searchDropdownByType.classList.add("d-none");

    generateParksDisplay(nationalParksArray);
});

// find parks based on location
searchDropdownByLocation.addEventListener("change", function(event) {
    console.log("find parks in: " + this.value);
    console.log("find parks in: " + event.target);  // the thing that the event happened on
    console.log("find parks in: " + event.target.value);  // this is better; scalable, testable
    console.log("find parks in: " + searchDropdownByLocation.value);

    let filteredParks = nationalParksArray.filter((park) => {
        return park.State.toLowerCase() === event.target.value.toLowerCase();
    });

    generateParksDisplay(filteredParks);
});

// find parks based on type
searchDropdownByType.addEventListener("change", function(event) {
    console.log("find parks of type: " + this.value);

    let filteredParksByType = nationalParksArray.filter((park) => {
        return park.LocationName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
    });

    generateParksDisplay(filteredParksByType);
});


function generateParksDisplay(sourceArray) {
    numMatch.innerHTML = sourceArray.length;
    numText.classList.remove("d-none");


    parksTableBody.innerHTML = "";

    sourceArray.forEach(park => {
        // console.log(park);

        let nameRow = `<td>${park.LocationName}</td>`;
        if (park.Visit) {
            nameRow = `<td><a href="${park.Visit}" target="_blank">${park.LocationName}</a></td>`;
        }
        const newRow = `<tr>
                            ${nameRow}
                            <td>${park.Address}</td>
                            <td>${park.City}</td>
                            <td>${park.State}</td>
                            <td>${park.LocationID}</td>
                        </tr>`;
        parksTableBody.innerHTML += newRow;
    });

    parksTable.classList.remove("d-none");
}