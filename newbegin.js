
// var foot1 = document.getElementById("footerdiv1")
// var foot2 = document.getElementById("footerdiv2")
// var obs = document.getElementById("obsdiv")

// var x1=0
// var x2=-750
// var o1=-100

// var move  = function () {
//   foot1.style.right = `${x1}px`
//   foot2.style.right = `${x2}px`
//   obs.style.right = `${o1}px`

//   x1+=5
//   x2+=5
//   o1+=5
//   if(x1 === 750){x1=-750}
//   if(x2 === 750){x2=-750}
// }

// var Moving = setInterval(move,16)

// var moving=null
// var SetInterval = function () {
//   if (moving===null) {moving = setInterval(move,20)}}
// var RemoveInterval = function(){clearInterval(moving);moving=null}

// document.addEventListener("keydown", SetInterval)
// document.addEventListener("click", RemoveInterval)



/*




if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}


move_coin()
{
  
     //*************************
  var coinposition = 0;
 
  var id=setInterval(collision(),this.velocity)

  var main_width=document.getElementById("main").width ;

 function collision()
         {

          console.log(coinposition);
          if(this.Posistion.X === player.position.x)//  if(this.coinposition == innerWidth-playerposition-this.width ) -main_width -100-this.width
          {
            clearInterval(id)
            score++;
            coinposition++;
          id=setInterval(collision,this.velocity)
          }else 
            {
               coinposition++;
               this.Div.right = coinposition;
              }

          }
        
}
*/



var score=0;
document.getElementById('demo').innerHTML = score;
var container=document.getElementById('main')
 



class Pos {
  constructor(x1=0,y1=0){
    this.X = x1
    this.Y = y1
  }
}


class Div{
  constructor(width1, height1, bottom1, right1, id1, class1){
    this.Width = width1
    this.Height = height1
    this.Bottom = bottom1
    this.Right = right1
    this.Id = id1
    this.Class=class1
  }

  create(){
    let CreatedDiv = document.createElement('div')
    let MainDiv = document.getElementById("main")

    CreatedDiv.style.width = `${this.Width}px`
    CreatedDiv.style.height = `${this.Height}px`
    CreatedDiv.style.bottom = `${this.Bottom}px`
    CreatedDiv.style.right = `${this.Right}px`
    CreatedDiv.style.zIndex = this.ZIndex
    CreatedDiv.style.position = "absolute"

    CreatedDiv.id = this.Id
    CreatedDiv.className = this.Class

    MainDiv.appendChild(CreatedDiv)
  }

}

class Picture{
  constructor(div1, velocity1=0, ilink1=null){
    this.Posistion = new Pos(div1.Right,div1.Bottom)
    this.ImgLink = ilink1
    this.Velocity = velocity1
    this.Div = div1
  }

  init(){
    let CurrentDiv = document.getElementById(this.Div.Id)
    let CreatedImg = document.createElement('img')
    CreatedImg.src = this.ImgLink
    CreatedImg.className = "imgindiv"
    CurrentDiv.appendChild(CreatedImg)
  }

  move(){

    let CurrentDivMove = document.getElementById(this.Div.Id)
    CurrentDivMove.style.right = `${this.Posistion.X}px`
    this.Posistion.X += 5
    if(this.Posistion.X===CurrentDivMove.parentElement.offsetWidth){this.Posistion.X=-this.Div.Width}
  }
}


class Character extends Picture{
  constructor(div1, velocity1=0, ilink1=null){
    super(div1, velocity1, ilink1)
    this.IsTop=0
  }

  move(){

    let CurrentDivMove = document.getElementById(this.Div.Id)
    CurrentDivMove.style.bottom = `${this.Posistion.Y}px`
    if (this.Posistion.Y<200 && !this.IsTop) {
      this.Posistion.Y+=this.Velocity
      if(this.Posistion.Y==200){this.IsTop=1}
    }
    else if (this.Posistion.Y>20) {
      this.Posistion.Y -= this.Velocity
      if(this.Posistion.Y==20){this.IsTop=0;clearInterval(SetIntervalChar);SetIntervalChar=null}
    }

  }
}


class coin extends Picture{
  constructor(div,velocity=0,ilink=null){
      super(div,velocity,ilink)
  }

  
  //test
 move(player){  //move(xplayer,yplayer)

    let CurrentDivMove = document.getElementById(this.Div.Id)
    CurrentDivMove.style.right = `${this.Posistion.X}px`
    //this.Posistion.X += 5

   if(this.Posistion.X===player.Posistion.X && this.Posistion.Y === player.Posistion.Y )                 //if(this.Posistion.X===player.Posistion.X && this.Posistion.Y === player.Posistion.Y )
      {
        console.log(this.Posistion.Y,'coin y')
        console.log(this.Posistion.X,'x')
            //&& this.position.Y ===yplayer

           //console.log(this.position.Y)
        score++
        document.getElementById('demo').innerHTML = score;
       
        this.Posistion.X=-this.Div.Width
         //this.Posistion.Y =1000

      }else
       {

        if(this.Posistion.X===CurrentDivMove.parentElement.offsetWidth){this.Posistion.X=-this.Div.Width}
         this.Posistion.X += 5
        

      }



  }


}





var xx = new Div(100,100,35,-100,"obsdivvvv","obs")
var yy = new Picture(xx, 5, "imgs/obs.png")

var xxx = new Div(760,70,0,0,"footerdiv1","footer")
var yyy = new Picture(xxx, 5, "imgs/ground.png")

var xxxx = new Div(760,70,0,-760,"footerdiv2","footer")
var yyyy = new Picture(xxxx, 5, "imgs/ground.png")


var xxxxx = new Div(100,100,20,500,"characterdiv","character")
var yyyyy = new Character(xxxxx, 5, "imgs/penguin.png")


 



var playerposition_x=yyyyy.Posistion.X;
var playerposition_y=yyyyy.Posistion.Y;
//console.log(playerposition_y,'player y')
console.log(yyyyy.Div.Width )


var dcoin=new Div(70,70,20,-100,"coin","coindiv")
var coin1=new coin(dcoin,5,"imgs/co.png")
dcoin.create()
coin1.init()

var dcoin2=new Div(70,70,50,-100,"coin","coindiv")
var coin2=new coin(dcoin2,5,"imgs/co.png")
//dcoin2.create()
//coin2.init()


xx.create()
yy.init()
xxx.create()
yyy.init()
xxxx.create()
yyyy.init()
xxxxx.create()
yyyyy.init()




let SetInterval=null
let SetIntervalChar=null
document.addEventListener("keydown", function(e){
  
  if(SetIntervalChar===null){
    SetIntervalChar = setInterval(function(){
      if(e.keyCode==13){yyyyy.move()}
    },16)   
  }

  if(SetInterval===null){
    SetInterval = setInterval(function(){
      yy.move()
      yyy.move()
      yyyy.move()
      coin1.move(yyyyy)  // coin1.move(playerposition_x ,playerposition_y )
      //coin2.move(yyyyy)
    },16)



    //coin1.move_coin()
  }
}





)




