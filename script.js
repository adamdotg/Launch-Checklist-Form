// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(){
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if(Number(pilot.value)){
         alert(`${pilot.value} is invalid. Please enter a name`);
         console.log("pilot value", pilot.value);
      }
      else if (!Number(cargoMass.value)){
         alert(`${cargoMass.value} is not a number`);
         console.log("isNan test", cargoMass.value);
      } else {
         alert(`${cargoMass.value} is definitely a number`);
      }
      if(pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields required");
         event.preventDefault();
      }
   });
   //console.log("Loaded!");
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
