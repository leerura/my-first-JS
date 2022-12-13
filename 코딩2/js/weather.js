function onSucess(position) {
    console.dir(position);
    const lati = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in " +lati, long)
}
function onFailed() {
    alert("We can't get to know where you are!!")
}

navigator.geolocation.getCurrentPosition(onSucess, onFailed)
