const APP_ID = 'c4496c94fc5c354203bc02a86e6fbad5';

const weather = document.querySelector('.weater');

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            weather.innerText = `${data.main.temp}℃ ${data.name}`;
        });
}

function saveCoords(coords) {
    localStorage.setItem('coords', JSON.stringify(coords)); //문자열만 가능, 문자열로 변환
}

function geoSucces(position) {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const coords = {
        latitude: lat,
        longitude: lon,
    };
    saveCoords(coords);

    //날씨불러오기
    getWeather(lat, lon);
}

function geoError() {
    console.log('위치정보를 허용하지 않았습니다.');
}

function askCoords() {
    navigator.geolocation.getCurrentPosition(geoSucces, geoError);
}

function loadCoords() {
    const localCoords = localStorage.getItem('coords');

    if (localCoords === null) {
        askCoords();
    } else {
        const parsedCoords = JSON.parse(localCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
