let pi;
let digits = [];
let sdigits = [];
// let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let index = 0;
let currentDigit;
let digit;
let nextDigit;


function preload() {
  pi = loadStrings("pi_mil.txt");
}

function setup() {

  createCanvas(600, 600);
  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke(255, 50);
  ellipse(0, 0, 400);

  sdigits = pi[0].split("");
  digits = int(sdigits);

}

function draw() {
  translate(width / 2, height / 2);
  let c = color(random(255), random(255), random(255));
  stroke(c);

  digit = digits[index];
  nextDigit = digits[index + 1];
  index++;

  let diff = TWO_PI / 10;

  let a1 = map(digit, 0, 10, 0, TWO_PI) + random(-diff, diff);
  let a2 = map(nextDigit, 0, 10, 0, TWO_PI) + random(-diff, diff);

  let x1 = 200 * cos(a1);
  let y1 = 200 * sin(a1);

  let x2 = 200 * cos(a2);
  let y2 = 200 * sin(a2);


  line(x1, y1, x2, y2);

}

/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365

Visualizing PI

About
Doing a challenge, coding three sixty five
There I hop on the train of Mr. Shiffman
And code along rainbow colored railway
One video each day, keeps the gray away

Coding Train
Daniel Shiffman
https://www.youtube.com/user/shiffman/
https://www.patreon.com/codingtrain

Framework
p5js - A beautiful Javascript library
https://p5js.org/

this.video
Coding Challenge #96: Visualizing the Digits of Pi
https://youtu.be/WEd_UIKG-uc
*/
