const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// padStart: 글자수를 맞춰준다. 해당 갯수만큼 자릿수가 되지 않을 시 공백을 오른쪽 글자로 채운다.

getClock();
setInterval(getClock, 1000);