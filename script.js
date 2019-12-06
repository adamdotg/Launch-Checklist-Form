// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   document.querySelector("input[name=pilotName]").focus();
   form.addEventListener("submit", function(){
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
//prevent default needs to be moved. is not capturing invalid data from full fields.
      if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields required");
         if (!isNaN(pilot.value)){
            //console.log("pilot value", pilot.value, typeof(pilot.value));
            // console.log(isNaN(pilot.value));
             console.log(!isNaN(pilot.value));
            alert(`Pilot name "${pilot.value}" is invalid.`);
            document.querySelector("input[name=pilotName]").focus();
         }
         else if(!isNaN(coPilot.value)){
           console.log(!isNaN(coPilot.value));
           alert(`Copilot name "${coPilot.value}" is invalid.`);
           document.querySelector("input[name=copilotName]").focus();
         }         
         else if (isNaN(fuelLevel.value)){
            console.log(isNaN(fuelLevel.value));
            alert(`Fuel level "${fuelLevel.value}" is invalid. Please enter a number`);
            document.querySelector("input[name=fuelLevel]").focus();
         }
         else if (isNaN(cargoMass.value)){
            console.log(isNaN(fuelLevel.value));
            alert(`Cargo mass "${cargoMass.value}" is invalid. Please enter a number`);
            document.querySelector("input[name=cargoMass]").focus;
         }
 
         event.preventDefault();
      }
      // else if (typeof(pilot.value) == "string") {
      //    console.log("pilot value", pilot.value);
      //    console.log(typeof(pilot.value));
      //    alert(`${pilot.value} is invalid. Please enter a pilot name`);
      // }
      // else {
      //    console.log (pilot.value, typeof(pilot.value));
      //    //console.log (typeof(pilot.value));
      // }
      // else if (!String(coPilot.value)) {
      //    alert(`${coPilot.value} is invalid. Please enter a name`);
      //    console.log("copilot value", coPilot.vlue);
      // }
      // else if (!Number(fuelLevel.value)){
      //    alert(`Fuel level ${fuelLevel.value} is invalid. Please enter a number`);
      //    console.log("fuel level value", fuelLevel.value);
      // }
      // else (!Number(cargoMass.value)){
      //    alert(`Cargo mass ${cargoMass.value} is invalid. Please enter a number`);
      //    console.log("cargo mass value", cargoMass.value);
      // }
   
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