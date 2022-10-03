const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "edd1a10e8a0a8868e8e277e468b68bd6";

function onGeoOk(position){
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // &units=metric 를 추가로 작성해줘야, 섭씨온도로 나타난다.(안할 시 화씨온도)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Can's find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
// 위치 좌표 값을 나타내어 준다.