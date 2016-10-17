var theSonnet = document.getElementById("sonnet").innerHTML; 
console.log("theSonnet", theSonnet); 
var orphansPosition = theSonnet.indexOf("orphans"); 
console.log("orphan's position", orphansPosition); 
var numberOfChar = theSonnet.length;
console.log("number of char", numberOfChar); 
var replaceWinter = theSonnet.replace("winter", "yuletide"); 
console.log("replaceWinter", replaceWinter); 
var replaceLarge = replaceWinter.replace(/the | The | The /g, " a large ");
console.log("replace large", replaceLarge); 
theSonnet.innerHTML = replaceLarge; 

var  whatever = document.getElementById("sonnet"); 
whatever.innerHTML = replaceLarge; 
