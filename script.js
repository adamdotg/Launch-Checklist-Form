// Write your JavaScript code here!
window.addEventListener("load", function(){
   document.querySelector("input[name=pilotName]").focus();
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(){
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      const statusCheck = document.getElementById("launchStatusCheck");
      let faultyItems = document.querySelector("#faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      const fuel = document.getElementById("fuelStatus");
      //let pilotStatus = document.getElementById("pilotStatus");
      let test = document.getElementById("test");
      event.preventDefault();
      
      if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields required");
         }

      if (!isNaN(pilot.value)){
         console.log(!isNaN(pilot.value));
         alert(`Pilot name "${pilot.value}" is invalid.`);
         document.querySelector("input[name=pilotName]").focus();
         return false;
      }
      else if(!isNaN(coPilot.value)){
         console.log(!isNaN(coPilot.value));
         alert(`Copilot name "${coPilot.value}" is invalid.`);
         document.querySelector("input[name=copilotName]").focus();
         return false;
      }         
      else if (isNaN(fuelLevel.value)){
         console.log(isNaN(fuelLevel.value));
         alert(`Fuel level "${fuelLevel.value}" is invalid. Please enter a number`);
         document.querySelector("input[name=fuelLevel]").focus();
         return false;
      }
      else if (isNaN(cargoMass.value)){
         console.log(isNaN(fuelLevel.value));
         alert(`Cargo mass "${cargoMass.value}" is invalid. Please enter a number`);
         document.querySelector("input[name=cargoMass]").focus;
         return false;
      }
      // function visible(){
      //       statusCheck.innerHTML = `
      //       <h2 id="launchStatus">Awaiting Information Before Launch</h2>
      //       <div id="faultyItems" style="visibility: visible;">
      //           <ol>
      //               <li id="pilotStatus">${pilot.value}</li>
      //               <li id="copilotStatus">${coPilot.value}</li>
      //               <li id="fuelStatus">Fuel level high enough for launch</li>
      //               <li id="cargoStatus">Cargo mass low enough for launch</li>
      //           </ol>
      //       </div>
      //       `;
      // }
      // visible();
      if (fuelLevel.value < 10000 && cargoMass.value > 10000){
         statusCheck.innerHTML =`
         <h2 id="launchStatus" style="color: red;">Shuttle not ready for launch</h2>
         <div id="faultyItems" style="visibility: visible;">
               <ol>
                  <li id="pilotStatus">${pilot.value} is ready for launch</li>
                  <li id="copilotStatus">${coPilot.value} is ready for launch</li>
                  <li id="fuelStatus">Fuel level is too low for launch</li>   
                  <li id="cargoStatus">Cargo mass is too high for launch</li>
               </ol>
         </div>
         `;
      }
      else if (fuelLevel.value < 10000){
            statusCheck.innerHTML = `
            <h2 id="launchStatus" style="color: red;">Shuttle not ready for launch</h2>
            <div id="faultyItems" style="visibility: visible;">
                  <ol>
                     <li id="pilotStatus">${pilot.value} is ready for launch</li>
                     <li id="copilotStatus">${coPilot.value} is ready for launch</li>
                     <li id="fuelStatus">Fuel level is too low for launch</li>
                     <li id="cargoStatus">Cargo mass low enough for launch</li>
                  </ol>
            </div>
         `;
      }
      else if (cargoMass.value > 10000){
         statusCheck.innerHTML = `
         <h2 id="launchStatus" style="color: red;">Shuttle not ready for launch</h2>
         <div id="faultyItems" style="visibility: visible;">
               <ol>
                  <li id="pilotStatus">${pilot.value} is ready for launch</li>
                  <li id="copilotStatus">${coPilot.value} is ready for launch</li>
                  <li id="fuelStatus">Fuel level is high enough for launch</li>   
                  <li id="cargoStatus">Cargo mass is too high for launch</li>
               </ol>
         </div>
         `;
      } 
      else {
         statusCheck.innerHTML =`
         <h2 id="launchStatus" style="color: green;">Shuttle ready for launch</h2>
         `
      }

   });
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