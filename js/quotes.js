const WhatIwantToSay = document.getElementById("saying");
let quotes = [
    "포기할 땐 포기해라. -하지후-" ,
    "난 해사간다. -김태완-" ,
    "집가고 싶다. -이석원-" ,
    "쳐맞기 전까지 누구나 다 계획은 있다. -김동욱-" ,
    "우월한 유전자를 물려줘야 된다. -심재윤-" ,
    "총 맞아 죽는 것이 명예다. -김동욱-" ,
    "용기있는 자가 미인을 얻는다. -하지후-" ,
    "성공하는 것이 최고의 복수다. -김동욱-" ,
    "김병진 뒤져라. -김병진-" ,
    "최민재 퐁퐁남 아니다. -최민재-",
    "최민재는 거짓말쟁이다. -김병진-",
    ".-김동희-"] 

function hey() { 
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    WhatIwantToSay.innerText = random }
hey();
setInterval(hey,60000);

