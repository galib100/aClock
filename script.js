// clock start 
setInterval(setClock,1000);

const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');


function setClock(){
    currentDate = new Date();
    secondRatio = currentDate.getSeconds()/60;
    minuteRatio =  (secondRatio+ currentDate.getMinutes())/60;
    hourRatio = (minuteRatio+ currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
} 
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360);

}
setClock();
// clock ended 

// date_Started
 const d = new Date();
 var today  = d.getDate();
var toMonth = d.getMonth() + 1 ;
var toYear = d.getFullYear();
 var showDay = document.getElementById('date');
 showDay.innerHTML=today+"-"+toMonth+"-"+toYear;

 console.log(today);
