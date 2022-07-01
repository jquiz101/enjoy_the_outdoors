console.log("--mountains.js--")

let mountainsDropdown = document.querySelector("#mountainsDropdown");
let mtnName = document.querySelector("#name");
let mtnDesc = document.querySelector("#desc");
let mtnElevation = document.querySelector("#elevation");
let mtnEffort = document.querySelector("#effort");
let mtnSunrise = document.querySelector("#sunrise");
let mtnSunset = document.querySelector("#sunset");
let mtnImage = document.querySelector("#image");
let mtnInfo = document.querySelector("#info");

let btnLucky = document.querySelector("#random");

setTimeout(() => {
    // console.log("hi");
    // console.log(mountainsArray);

    mountainsArray.forEach((mountain) => {
        mountainsDropdown.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
    });
}, 100);

// load single mountain info based on dropdown selection
mountainsDropdown.addEventListener("change", function(event) {
    // console.log(event.target.value);

    const foundMtn = mountainsArray.find(mountain => mountain.name === event.target.value);

    // console.log(foundMtn);

    displayMountain(foundMtn);
});

btnLucky.addEventListener("click", function(event) {
    // console.log("-lucky-");
    // console.log(mountainsArray.length);
    
    let idx = Math.floor(Math.random() * mountainsArray.length);
    // console.log(idx);

    const randomMtn = mountainsArray[idx];
    // console.log(randomMtn);

    mountainsDropdown.value = randomMtn.name;

    displayMountain(randomMtn);
});

function displayMountain(foundMtn) {
    mtnName.innerHTML = foundMtn.name;
    mtnDesc.innerHTML = foundMtn.desc;
    mtnElevation.innerHTML = foundMtn.elevation;
    mtnEffort.innerHTML = foundMtn.effort;

    mtnImage.innerHTML = `<img src="assets/images/mountains/${foundMtn.img}">`;

    getSunsetForMountain(foundMtn.coords.lat, foundMtn.coords.lng).then(sunsetData => {
        // console.log(sunsetData.results)
        mtnSunrise.innerHTML = sunsetData.results.sunrise;
        mtnSunset.innerHTML = sunsetData.results.sunset;
    });

    mtnInfo.classList.remove("d-none");
}


//function that can "fetch" the sunset/sunrise times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
    let data = await response.json()
    return data
}

//Using the function to fetch the sunset/sunrise times for a specific mountain 
// getSunsetForMountain("44.320686", "-71.291742").then(sunsetData => {
//     console.log(sunsetData.results)
// });