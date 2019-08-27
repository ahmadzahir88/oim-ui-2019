var endDate = new Date("Aug 31, 2019 07:00:00").getTime();
var timer = setInterval(function(){
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("day-digit1").innerHTML = Math.floor(days/10);
    document.getElementById("day-digit0").innerHTML = days%10;
    document.getElementById("hour-digit1").innerHTML = Math.floor(hours/10);
    document.getElementById("hour-digit0").innerHTML = hours%10;
    document.getElementById("minute-digit1").innerHTML = Math.floor(mins/10);
    document.getElementById("minute-digit0").innerHTML = mins%10;
    document.getElementById("second-digit1").innerHTML = Math.floor(secs/10);
    document.getElementById("second-digit0").innerHTML = secs%10;
  }
}, 1000);
