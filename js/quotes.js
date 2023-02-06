const quotes=[
{
    quote:"소프트웨어 설계를 구성하는 데에는 두 가지 방법이 있다. 한가지 방법은 아주 단순하게 만들어서 명백히 결함이 없는 것이다. 그리고 다른 방법은 명백한 결함이 없을 정도로 아주 복잡하게 만드는 것이다.",
    author:"찰스 앤터니 리처드 호어 / C.A.R. Hoare",
},
{
    quote:"결국 당신 코드를 유지보수하게 될 친구가 당신이 어디에 사는지 아는 광폭한 싸이코패스가 될 것이라고 여기고 코드를 작성하라.",
    author:"마틴 골딩 / Martin Golding",
},
{
    quote:"좋은 프로그래머 대부분은 돈이나 대중에게 받을 찬사를 기대하고 프로그래밍을 하지 않고 프로그래밍이 재미 있어서 한다.",
    author:"리누스 토르발스 / Linus Torvalds",
},
{
    quote:"[의회 의원에게] 두 번 이런 질문을 받았다. ‘배비지 선생님, 그 기계에 잘못된 수를 집어 넣어도 올바른 답이 나오는지 말씀해 주시겠습니까?’ 나는 어떤 유형의 개념적 혼란이 이런 질문을 유발하는지 바로 이해할 수 없다.",
    author:"찰스 배비지 / Charles Babbage",
},
{
    quote:"반복하는 인간, 재귀하는 신",
    author:"L. 피터 도이치 / L. Peter Deutsch",
},
{
    quote:"프로그래머가 격는 어려움은 프로그래머가 무엇을 하는지 너무 늦기 전에 말할 수 없다는 점이다.",
    author:"시모어 크레이 / Seymour Cray",
},
{
    quote:"오늘날 소프트웨어 대부분은 이집트 피라미드와 매우 비슷한데, 수많은 블럭을 차곡차곡 쌓은 이것은, 구조적 무결성은 없고, 그저 마구잡이로 노예 수천을 동원해 완성됐다.",
    author:"앨런 케이 / Alan Kay",
},
{
    quote:"당신 대부분은 프로그래머의 미덕과 친숙하다. 미덕은 세 가지인데, 당연히, 게으름, 성급함, 오만이다.",
    author:"래리 월 / Larry Wall",
},
{
    quote:"먼저 컴퓨터 과학과 모든 이론을 배워라. 다음엔 프로그래밍 방식을 개발하라. 그러고 나선 모두 잊고 그냥 해킹하라.",
    author:"조지 커렛 / George Carrette",
},
{
    quote:"사람들은 컴퓨터 과학이 천재들의 기예이라고 생각하지만 사실 현실은 반대로, 단지 많은 사람이, 작은 돌로 된 담처럼, 다른 사람의 작업 위에 쌓아 올릴 뿐이다.",
    author:"도날드 E 크누스 / Donald E. Knuth",
},
{
    quote:"애초에 디버깅은 코드를 작성하는 것 보다 배나 힘들다. 그러니, 코드를 최대한 꼼꼼하게 작성하는 사람은, 당연히, 디버그할 정도로 똑똑하지 않은 것이다.",
    author:"브라이언 커니핸 / Brian W. Kernighan",
},
{
    quote:"코드 줄 수로 프로그래밍 진척을 측정하는 것은 무게로 비행기 제작 진척도를 측정하는 것과 같다.",
    author:"빌 게이츠 / Bill Gates",
},
{
    quote:"월요일에 작성한 코드를 디버깅하느라 그 주의 나머지를 허비하느니 월요일에 침대 안에 머무는게 나을 때도 있다.",
    author:"크리스토퍼 톰프슨 / Christopher Thompson",
},
{
    quote:"난 이게 당신 기계에서 동작할지 관심 없소. 우리가 당신 기계까지 팔진 않았소.",
    author:"Vidiu Platon",
},
{
    quote:"컴퓨터 시스템 분석은 아이 양육과 같다. 견딜 수 없는 피해를 줄 순 있어도 성공을 보장할 순 없다.",
    author:"톰 드마르코 / Tom DeMarco",
},
{
    quote:"위 코드에서 버그를 조심하라. 동작한다고 증명은 했는데 실행해 보지는 않았다.",
    author:"도날드 E 크누스 / Donald E. Knuth",
},
{
    quote:"맥도날드가 소프트웨어 회사처럼 경영되었다면, 빅맥 100개 중 하나 꼴로 식중독이 걸리고도 “미안합니다. 두 개 증정 쿠폰을 받으세요”라는 대답을 들게 될 것이다.",
    author:"마크 미나시 / Mark Minasi",
},
{
    quote:"최고의 프로그래머란 좀 더 나은 사람을 넘어 엄청나게 나은 사람이다. 그들은 개념 창의성, 속도, 설계의 독창성, 문제 해결 능력 중 어떤 기준으로 측정하든 10배나 뛰어나다.",
    author:"랜달 E 스트로스 / Randall E. Stross",
},
{
    quote:"프로그래밍을 배우는 것과 인터렉티브 소프트웨어 설계는 타자를 배우는 것과 시를 쓰는 것의 관계 보다 더 상관 없는 일이다.",
    author:"테드 넬슨 / Ted Nelson",
},
{
    quote:"내가 ‘객체 지향’이란 용어를 고안했으니 말인데, C++는 거기에 포함하지 않았다고 말할 수 있다.",
    author:"앨런 케이 / Alan Kay",
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