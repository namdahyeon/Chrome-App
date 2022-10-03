// [Login]
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){ // event 라는 값에 정보기입되도록. 비워두면 아무현상 X. 다른이름도 사용 가능
    event.preventDefault(); //브라우저의 기본동작(이벤트)를 막아준다.(새로고침 현상 제거)
    console.log(loginInput.value);
}

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; // 위와 결과가 같음. string과 변수를 함께 쓸 수 있는 법.(최신방법). ``안에서 변수명 부분만 백틱"${}"으로 사용하면 된다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings();
}