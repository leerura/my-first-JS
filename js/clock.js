const clock = document.getElementById("clock")

function currentTime() {
    const date = new Date(); 
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    const h = String(hour).padStart(2,"0");
    const m = String(minute).padStart(2,"0");
    const s = String(second).padStart(2,"0");
      
    const time = h + ":" + m + ":" + s
  
    clock.innerText = time; 
  }
  currentTime();
  setInterval(currentTime,1000);


