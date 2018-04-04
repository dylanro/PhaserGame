class Example1 extends Phaser.Scene {
  constructor() {
    super({key:"Example1"});
  }

  preload() {
    this.load.image('background', 'assets/images/background.jpg');
  }

  create() {
    this.image = this.add.image(400,300,'background');

    //input handlers
    this.input.keyboard.on('keyup_D', function(event){
      this.image.x += 10;
    }, this);//when in a callback and your getting errors, try passing this as an extra parameter

    this.input.on('pointerdown', function(event){//when you click, relocate the image to wherever is clicked
      this.image.x = event.x;
      this.image.y = event.y;
    }, this);

    this.input.keyboard.on('keyup_P', function(event){
      var physicsImage = this.physics.add.image(this.image.x,this.image.y, "background");
      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300);
    }, this);

  }

  update() {

  }
}
