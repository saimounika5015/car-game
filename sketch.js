var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var cars;
var car1;
var car2;
var car3;
var car4;
var car1Img,car2Img,car3Img,car4Img,bg
function preload(){
  car1Img= loadImage("images/car1.png");
  car2Img= loadImage("images/car2.png");
  car3Img= loadImage("images/car3.png");
  car4Img= loadImage("images/car4.png");
  bg= loadImage("images/track.jpg")
}


function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 4) {
    game.update(1);

  }
  if (gameState === 1) {
    game.play();
  }
}
