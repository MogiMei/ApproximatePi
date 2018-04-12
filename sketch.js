const r = 200;

const data = {
  total: 0,
  circle: 0,
  pi: 0,
  record_PI: 0
};

function setup() {
  createCanvas(402, 502);
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(0, 0, r * 2, r * 2);
  rectMode(CENTER);
  rect(0, 0, r * 2, r * 2);
  strokeWeight(0.1);
  textAlign(CENTER);
}

function draw() {
  translate(width / 2, height / 2);
  for(let i = 0; i < 10; i++) {
    let x = random(-r, r);
    let y = random(-r, r);
    data.total++;

    let d = x * x + y * y;

    if(d < r * r) {
      data.circle++;
      stroke(100, 255, 0);
    } else {
      stroke(0, 100, 255);
    }
    point(x, y);
    let pi = 4 * (data.circle / data.total);
    let recordDiff = Math.abs(Math.PI - data.record_PI);
    let diff = Math.abs(Math.PI - pi);
    if(diff < recordDiff) {
      data.record_PI = pi;
      fill(0);
      noStroke();
      rect(0, 252, 400, 100);
      stroke(255);
      fill(255);
      text(pi, 0, 225);
      text("Mogens Meissner", 0, 240);
    }
  }  
}