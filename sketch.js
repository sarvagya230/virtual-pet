var dog,happydog,database,food_stalk,foods,dog_base//Create variables here

function preload()
{
  dog=loadImage("dog.png")
  happydog=loadImage("happy dog.png")//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog_base=createSprite(400,400,50,50)
  dog.resize(90,90)
  happydog.resize(90,90)
  
  dog_base.addImage(dog)
  food_stalk=database.ref('Food')
  food_stalk.on("value",readData);

  
  
}


function draw() { 
  background("green") 
  if (keyWentDown(UP_ARROW))
  {
    writeStroke(foods)
    dog_base.addImage(happydog)
  }
  

  drawSprites();
  text("food remaning"+foods,100,100)
  //add styles here

}
function readData(data)
{
  foods=data.val()
}
function writeStroke(x)
{
  if (foods<=0)
  {
    x=0
  }
  else 
  x=x-1
  

  database.ref('/').update(
    {
      Food:x

    }
  )
}



