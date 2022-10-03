const quotes=[
{
    quote:"No wise man ever wished to be younger.",
    author:"Jonathan Swift",
},
{
    quote:"Wit is educated insolence.",
    author:"Aristotle",
},
{
    quote:"Guard your honor. Let your reputation fall where it will. And outlive the bastards.",
    author:"Lois McMaster Bujold",
},
{
    quote:"Do not hire a man who does your work for money, but him who does it for love of it.",
    author:"Henry David Thoreau",
},
{
    quote:"Dying is a very dull, dreary affair. And my advice to you is to have nothing whatever to do with it.",
    author:"William Somerset Maugham",
},
{
    quote:"People demand freedom of speech as a compensation for the freedom of thought which they seldom use.",
    author:"Soren Kierkegaard",
},
{
    quote:"The superior man acts before he speaks, and afterwards speaks according to his action.",
    author:"Confucius",
},
{
    quote:"Baseball is Heaven's gift to mortals.",
    author:"George F. Will",
},
{
    quote:"For me, words are a form of action, capable of influencing change.",
    author:"Ingrid Bengis",
},
{
    quote:"Again, men in general desire the good, and not merely what their fathers had.",
    author:"Aristotle",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.round(); // 1.0~1.4는 1, 1.4~1.9는 2. /반올림 
// Math.ceil(); // 1.0은 1로 치환 1.1부터는 2로 치환.(소수점 있을 시 올림) /올림
// Math.floor(); // 1.0는 1, 1.999까지도 1로 취급.(소수점만 무조건 삭제) /내림.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;