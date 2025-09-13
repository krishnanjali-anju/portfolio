function dist() {
  let speed = 30;
  let maxSpeed = 120;
  let time = 96;
  let distance = 0;
  while (time > 0) {
    let minutes = time;
    if (minutes > 10) {
      minutes = 10;
    }
    distance = distance + speed * minutes / 60;
    speed = speed * 2;
    if (speed > maxSpeed) {
      speed = maxSpeed;
    }
    time = time - minutes;
  }
 return distance.toFixed(2);
}
console.log(dist()); 






let speed = 30;
let distance = 0;
for(i=10;i<=90;i+=10) {
    distance = distance+speed/6;
    if(speed<120) {
        speed = speed*2;
    }
}
distance = distance+speed/10;
console.log(distance);