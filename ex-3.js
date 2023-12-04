//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let lightBulb;
//Start coding here

/* if(lightBulbStatus === "On") {
    console.log("Light bulb is On.");
} else {
    console.log("Light bulb is Off.");
} */

lightBulbStatus === "Off" ? lightBulb = "Light bulb is Off." : lightBulb = `Please choose the correct input (On/Off)`;
console.log(lightBulb); 