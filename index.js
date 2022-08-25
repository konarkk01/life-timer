let isDOBOpen = false;
let dateofBirth;
const settingcogEl = document.getElementById("settingicon");
const settingcontentEl = document.getElementById("settingcontent");
const initialtextEl = document.getElementById("initialtext");
const afterDOBtntxtEl = document.getElementById("afterDOBtntxt");
const dobbuttonEl = document.getElementById("dobbutton");
const dobinputEl = document.getElementById("dobinput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {

    return number > 9 ? number : '0${number}'

} 


const toggleDateofBirthSelector = () => {
    if(isDOBOpen){
        settingcontentEl.classList.add("hide");

    } else{
        
        settingcontentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;

    console.log('Toggle', isDOBOpen);
};


const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateofBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24; 
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;
 
     yearEl.innerHTML = makeTwoDigitNumber(year);
     monthEl.innerHTML = makeTwoDigitNumber(month);
     dayEl.innerHTML = makeTwoDigitNumber(day);
     hourEl.innerHTML = makeTwoDigitNumber(hour);
     minuteEl.innerHTML = makeTwoDigitNumber(minute);
     secondEl.innerHTML = makeTwoDigitNumber(second);
     
 
 
 }
 
 

const setDOBHandler = () => {

    const dateString = dobinputEl.value;

    dateofBirth =  dateString ? new Date(dateString) : null ;

if(dateofBirth){
    localStorage.setItem('year', dateofBirth.getFullYear());
    localStorage.setItem('month', dateofBirth.getMonth());
    localStorage.setItem('day', dateofBirth.getDay());
    localStorage.setItem('hour', dateofBirth.getHours());
    localStorage.setItem('minute', dateofBirth.getMinutes());
    localStorage.setItem('second', dateofBirth.getSeconds());
    initialtextEl.classList.add("hide"); 
    afterDOBtntxtEl.classList.remove("hide");

    setInterval(() => updateAge(), 1000); 

  } else{
     afterDOBtntxtEl.classList.add("hide"); 
     initialtextEl.classList.remove("hide");
  }

};

setDOBHandler();




settingcogEl.addEventListener("click", toggleDateofBirthSelector);
dobbuttonEl.addEventListener("click", toggleDateofBirthSelector);
