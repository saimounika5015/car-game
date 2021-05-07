class Game {
  constructor() {
    

  }

  getState() {
   database.ref("gameState").on("value",function(data){
     gameState= data.val()
   })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
      car1 = createSprite(120, 100, 50, 70);
      car2 = createSprite(120, 100, 50, 70);
      car3 = createSprite(120, 100, 50, 70);
      car4 = createSprite(120, 100, 50, 70);
      cars = [car1, car2, car3, car4]
      car1.addImage(car1Img);
      car2.addImage(car2Img)
      car3.addImage(car3Img)
      car4.addImage(car4Img)
    }

  }
  play() {
    form.hide();
    background("brown");

    //text ("Game Start", 120,100);
    Player.getPlayerInfo();
    console.log(allPlayers);
    if (allPlayers !== undefined) {
     // image(bg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      var index = 0;
      var x = 180;
      var y ;
      for (var plr in allPlayers) {
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance -70;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if(index=== player.index){
          fill("red");
          text(allPlayers[plr].name,x-20,y+90);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          rectMode(CENTER)
          ellipse(x,y,70,70)
        }
        else
        { 
          fill("white");
          text(allPlayers[plr].name,x-20,y+90);
        }
      }

    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();

    }
    drawSprites();
  }
}
