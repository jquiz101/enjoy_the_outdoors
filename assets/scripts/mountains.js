console.log("--mountains.js--")

let mountainsDropdown = document.querySelector("#mountainsDropdown");
let mtnName = document.querySelector("#name");
let mtnDesc = document.querySelector("#desc");
let mtnElevation = document.querySelector("#elevation");
let mtnEffort = document.querySelector("#effort");
let mtnImage = document.querySelector("#image");
let mtnInfo = document.querySelector("#info");

setTimeout(() => {
    // console.log("hi");
    // console.log(mountainsArray);

    mountainsArray.forEach((mountain) => {
        mountainsDropdown.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
    });
}, 100);

// load single mountain info based on dropdown selection
mountainsDropdown.addEventListener("change", function(event) {
    console.log(event.target.value);

    const foundMtn = mountainsArray.find(mountain => mountain.name === event.target.value);

    console.log(foundMtn);

    mtnName.innerHTML = foundMtn.name;
    mtnDesc.innerHTML = foundMtn.desc;
    mtnElevation.innerHTML = foundMtn.elevation;
    mtnEffort.innerHTML = foundMtn.effort;

    mtnImage.innerHTML = `<img src="assets/images/mountains/${foundMtn.img}">`;

    mtnInfo.classList.remove("d-none");
});