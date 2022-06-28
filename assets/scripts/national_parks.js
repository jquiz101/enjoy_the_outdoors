// this file has locationsArray, nationalParksArray, and parkTypesArray
// available to it because we included load_national_parks_data.js before this file
// in the national_parks.html

// console.log(nationalParksArray);

// setTimeout(() => {
//     // console.log(nationalParksArray);
//     console.log("hi");
// }, 1000);

let theDemoButton = document.querySelector("#theDemoButton");
let theSampleUL = document.querySelector("#locations");
let parkTypesUL = document.querySelector("#parkTypes");
let nationalParksUL = document.querySelector("#nationalParks");

theDemoButton.addEventListener("click", function(event) {
    console.log(locationsArray);
    console.log(parkTypesArray);
    console.log(nationalParksArray);    
    
    locationsArray.forEach((location) => {
        // theSampleUL.innerHTML += `<li>${location}</li>`
    });

    parkTypesArray.forEach((parkType) => {
        parkTypesUL.innerHTML += `<li>${parkType}</li>`
    });

    nationalParksArray.forEach((park) => {
        nationalParksUL.innerHTML += `<li>${park.LocationName}</li>`
    });

    theSampleUL.classList.remove("d-none");
    parkTypesUL.classList.remove("d-none");
    nationalParksUL.classList.remove("d-none");
});




let searchByLocationRadio = document.querySelector("#searchByLocation");
let searchByParkTypeRadio = document.querySelector("#searchByParkType");
let searchDropdown = document.querySelector("#searchDropdown");
let searchDropdownByType = document.querySelector("#searchDropdownByType");

// console.log(searchByLocationRadio);
// console.log(searchByParkTypeRadio);

// load locations into dropdown
searchByLocationRadio.addEventListener("click", function(event) {
    console.log('location radio click');
    locationsArray.forEach((location) => {
        var opt = document.createElement('option');
        opt.value = location;
        opt.innerHTML = location;
        searchDropdown.appendChild(opt);

        // mainDropdown.innerHTML += `<option value="${location}">${location}</option>`
        // theSampleUL.innerHTML += `<li>  ${location}</li>`
        // theSampleUL.classList.remove("d-none");
    });
});

// load park types into dropdown
searchByParkTypeRadio.addEventListener("click", function(event) {
    console.log('type radio click');

    parkTypesArray.forEach((parkType) => {
        var opt = document.createElement('option');
        opt.value = parkType;
        opt.innerHTML = parkType;
        searchDropdownByType.appendChild(opt);
    });
});

// find parks based on location
searchDropdown.addEventListener("change", function(event) {
    console.log("find parks in: " + this.value);

    let filteredParks = nationalParksArray.filter((park) => {
        return park.State.toLowerCase() === this.value.toLowerCase();
    });

    console.log(filteredParks);

    const tableBody = document.querySelector("#parksTable tbody");

    tableBody.innerHTML = "";

    filteredParks.forEach(park => {
        console.log(park);
        const newRow = `<tr>
                            <td>${park.LocationName}</td>
                            <td>${park.Address}</td>
                            <td>${park.City}</td>
                            <td>${park.State}</td>
                            <td>${park.LocationID}</td>
                        </tr>`;
        tableBody.innerHTML += newRow;
    });
});