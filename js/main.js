// our game's configuration
let config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 640, // game width
  height: 360, // game height
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 200}
    }
  },
  scene: [ Example1 ]
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);
