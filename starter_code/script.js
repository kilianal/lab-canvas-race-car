

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    let background= new DriverGame(600, 1000);
    
  }
};


class DriverGame {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    document.getElementById("game-board").appendChild(this.canvas);
    this.canvas.width = width;
    this.canvas.height = height;
    this.frames=0;
    this.ctx = this.canvas.getContext("2d");
  // //grüner Rasen
  // this.ctx.fillStyle="green";
  // this.ctx.fillRect(0,0, width,height);
  // //graue Farbahn
  // this.ctx.fillStyle="grey";
  // this.ctx.fillRect(50,0, 500, height);
  // //weiße Linien links und rechts
  //   this.ctx.fillStyle="white";
  //   this.ctx.fillRect(60,0,20, height);
  //   this.ctx.fillStyle="white";
  //   this.ctx.fillRect(520,0,20, height);

  // //gestrichelte Linie
  // this.ctx.beginPath();
  // this.ctx.moveTo(width/2, 0);
  // this.ctx.lineTo(width/2, height);
  // this.ctx.strokeStyle="white";
  // this.ctx.closePath();
  // this.ctx.setLineDash([14,30]);
  // this.ctx.lineWidth="8"
  // this.ctx.stroke();
    
   
   
  //creation Player
  //this.gamesObjects = [];
  //this.player = new RacingCar(this.ctx);
  //this.gamesObjects.push(this.player);
  //this.player.createObject();
 let
 
}


  draw(){
    this.ctx.fillStyle="green";
    this.fillRect(10,150, 20,20)

  }
}



