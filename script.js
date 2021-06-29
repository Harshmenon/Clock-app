function updatemyclock() {
    var currenttime = new Date()

var hours=currenttime.getHours()
var minutes=currenttime.getMinutes()
var seconds=currenttime.getSeconds()

if(seconds < 10){
    seconds ="0" + seconds
}

if(minutes < 10){
    minutes ="0" + minutes
}

if(hours < 10){
    hours ="0" + hours
}

document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds  


}

setInterval(updatemyclock,1000)