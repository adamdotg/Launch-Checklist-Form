// Write your JavaScript code here!
window.addEventListener("load", function(){
   document.querySelector("input[name=pilotName]").focus();
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(){
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let faultyItems = document.querySelector("#faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
       
      if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields required");
         event.preventDefault();
         }  

      if (!isNaN(pilot.value)){
         console.log(!isNaN(pilot.value));
         alert(`Pilot name "${pilot.value}" is invalid.`);
         document.querySelector("input[name=pilotName]").focus();
         return false;
         //event.preventDefault();
      }
      else if(!isNaN(coPilot.value)){
         console.log(!isNaN(coPilot.value));
         alert(`Copilot name "${coPilot.value}" is invalid.`);
         document.querySelector("input[name=copilotName]").focus();
         return false;
         //event.preventDefault();
      }         
      else if (isNaN(fuelLevel.value)){
         console.log(isNaN(fuelLevel.value));
         alert(`Fuel level "${fuelLevel.value}" is invalid. Please enter a number`);
         document.querySelector("input[name=fuelLevel]").focus();
         return false;
         //event.preventDefault();
      }
      else if (isNaN(cargoMass.value)){
         console.log(isNaN(fuelLevel.value));
         alert(`Cargo mass "${cargoMass.value}" is invalid. Please enter a number`);
         document.querySelector("input[name=cargoMass]").focus;
         return false;
         //event.preventDefault();
      }
      console.log("fuel", fuelLevel.value);

      if (fuelLevel.value < 10000){
         faultyItems.style.visibility = "visible";
         console.log("make visible", faultyItems.style);
         event.preventDefault();
      }

   });
   console.log("Loaded!");
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

//--old----------------------------
//       document.querySelector("input[name=fuelLevel]").focus();
//       console.log (pilot.value, typeof(pilot.value));
//         document.querySelector("input[name=fuelLevel]").focus();