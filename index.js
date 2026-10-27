/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// Get all the HTML elements
const inputEl = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")

let feet = 0
let meter = 0
let liter = 0
let gallon = 0
let kilogram = 0
let pound = 0

// listen for a button click 
convertBtn.addEventListener('click', function(){
    reloadConversionOutput()
})

// convert units
function convertUnits(){
    feet = Number(inputEl.value) * 3.281
    meter = Number(inputEl.value) / 3.281
    
    gallon = Number(inputEl.value) * 0.264
    liter = Number(inputEl.value) / 0.264
    
    kilogram = Number(inputEl.value) / 2.204
    pound = Number(inputEl.value) * 2.204
}

function reloadConversionOutput(){
    convertUnits()
    
    lengthText.textContent = `${inputEl.value} meters = ${feet.toFixed(3)} feet | 
              ${inputEl.value} feet = ${meter.toFixed(3)} meters`
              
    volumeText.textContent = `${inputEl.value} liters = ${gallon.toFixed(3)} gallons | 
              ${inputEl.value} gallons = ${liter.toFixed(3)} liters`
              
    massText.textContent = `${inputEl.value} kilos = ${pound.toFixed(3)} pounds | 
              ${inputEl.value} pounds = ${kilogram.toFixed(3)} kilos`                   
}
