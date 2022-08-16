const d = new Date();
let minutes = d.getMinutes();

let weatherAppID = "f8bb3293d3e0c78998d7b539f896df63";
let searchMethod = 'zip';
let currentZip = '91007';

function searchWeather(searchTerm) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${currentZip},us&appid=${weatherAppID}&units=Imperial`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    console.log(resultFromServer)

    let tempElement = document.getElementById('temp');
    let hiLoElement = document.getElementById('hiLo');
    let humidElement = document.getElementById('humid');
 //    let uvElement = document.getElementById('uv');
    let windElement = document.getElementById('wind');
    let sunsetElement = document.getElementById('sunset');
 //    let moonElement = document.getElementById('moon');

    let sunsetUnix = convertUnix(resultFromServer.sys.sunset);

    tempElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
    hiLoElement.innerHTML = Math.floor(resultFromServer.main.temp_max) + ' / ' + Math.floor(resultFromServer.main.temp_min);
    humidElement.innerHTML = 'Humidity: ' + resultFromServer.main.humidity + '%'
 //    uvElement = Math.floor(resultFromServer)
    windElement.innerHTML = 'Wind: ' + Math.floor(resultFromServer.wind.speed) + 'm/s';
    sunsetElement.innerHTML = 'Sunset: ' + sunsetUnix;
 //    moonElement = 
}

function timeBackground() {
   switch (true) {
        case (minutes >= 0 && minutes <5):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage1.jpeg")'
            break; 
       case (minutes >= 5 && minutes <10):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage2.jpeg")'
            break; 
       case (minutes >= 10 && minutes <15):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage3.jpeg")' 
            break; 
       case (minutes >= 15 && minutes <20):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage4.jpeg")'
            break; 
       case (minutes >= 20 && minutes <25):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage5.jpeg")'
            break; 
       case (minutes >= 25 && minutes <30):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage6.jpeg")'
            break; 
       case (minutes >= 30 && minutes <35):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage7.jpeg")'
            break; 
       case (minutes >= 35 && minutes <40):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage8.jpeg")'
            break; 
       case (minutes >= 40 && minutes <45):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage9.jpeg")'
            break; 
       case (minutes >= 45 && minutes <50):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage10.jpeg")'
            break; 
       case (minutes >= 50 && minutes <55):
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage11.jpeg")'
            break; 
       default:
            document.body.style.backgroundImage = 'url("./backgroundImages/homeImage12.jpeg")'
            break; 
   }
}

function convertUnix(unix) {
    var date = new Date(unix * 1000);
    var hour = date.getHours();
    var min = date.getMinutes();
    if (hour > 12) {
        hour -= 12;
    }  
    var formatted = hour + ':' + min + " PM";
    return formatted;
}

function setTime() {
    let now = new Date();
    let date = now.toDateString();
    let hours = now.getHours();
    let minute = now.getMinutes();
    let timeOfDay = " AM"

    if (hours > 12) {
        hours -= 12;
        timeOfDay = " PM"
    }
    
    if (minute < 10){
        minute = "0" + minute;
    }
    
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = hours + ":" + minute + timeOfDay;

    console.log(minute);
}

window.onload = setTime();
searchWeather(currentZip);
timeBackground();
setInterval(setTime, 1000);

