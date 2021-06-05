var cat
var rat
var ground

function preload() {
    //load the images here
    groundImg=loadImage("images/garden.png")
    ratImg=loadAnimation("images/rat2.png","images/rat3.png")
    rat2Img=loadAnimation("images/rat4.png")
    cat1Img=loadAnimation("images/cat4.png")
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
        ground=createSprite(500,400,100,100)
        ground.addImage(groundImg)
      //  groundMode(CENTER)

      rat=createSprite(200,600,10.10)
      rat.addAnimation("runing",ratImg)
      rat.scale=0.2
     // rat.debug=true
      rat.setCollider("rectangle",100,100,910,500)

      cat=createSprite(600,600,100.100)
      cat.addAnimation("runing",cat2Img)
      cat.scale=0.2
     // cat.debug=true
      cat.setCollider("circle",10,10,10)
      cat.velocityX=-1

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(rat)){
    cat.addAnimation("runing",cat1Img)
    rat.addAnimation("runing",rat2Img)
  cat.velocityX=0
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
