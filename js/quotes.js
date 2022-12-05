const WhatIwantToSay = document.getElementById("saying");
let quotes = [
    "김준성, 시간이 아깝지도 않냐?" ,
    "김준성, 아직 안 늦었다." ,
    "김준성, 인간돼라." ,
    "김준성, 니 인생 아직 안 좆됐다. 아직 젊잖아." ,
    "김준성, 코딩해라" ,
    "김준성, 제발..." ,
    "김준성이 게임할 시간에 코딩을 했으면 세상을 바꿨다." ,
    "김준성, 규칙적으로 살아라." ,
    "김준성, 남들 게임한다고 같이 하지마라." ,
    "김준성, 그만 게을러져라." ,
    "김준성, 게임 대신 코딩 프로그램 키는 게 그렇게 어렵냐?" ,
    "김준성, 나도 하는데 니가 못하겠냐?"] 

let random = quotes[Math.floor(Math.random() * quotes.length)];
function hey() { 
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    WhatIwantToSay.innerText = random }
hey();
setInterval(hey,60000);

