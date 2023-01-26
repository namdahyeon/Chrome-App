const images=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//createElement: 해당 태그(Element)를 생성.
bgImage.src= `img/${chosenImage}`;

document.body.appendChild(bgImage);
// appendChild: html body에 반영하는 것. (여기서는 위에서 js로 만든 img 태그를 반영)
// .appendChild: 가장 뒤에 오도록 함.
// .prepend: 가장 위에 오도록 함.