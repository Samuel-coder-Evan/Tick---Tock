var hr, min,sec
var scAngle,minAngle,hrAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255); 
  hr = hour()
  min = minute()
  sec = second()

  scAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
  
 
  translate(300,200);
  rotate(180)
  //secs hand
  push()
  stroke("red")
  strokeWeight(5)
  rotate(scAngle)
  line(0,0,3,100)
  pop()

  //mins hand
  push()
  stroke("green")
  strokeWeight(5)
  rotate(minAngle)
  line(0,0,3,75)
  pop()

  
  //hours hand
  push()
  stroke("blue")
  strokeWeight(5)
  rotate(hrAngle)
  line(0,0,3,50)
  pop()
  noFill()
  strokeWeight(7)
  stroke("red")
  arc(0,0,250,250,90,scAngle + 90)

  strokeWeight(7)
  stroke("green")
  arc(0,0,230,230,90,minAngle + 90)


  strokeWeight(7)
  stroke("blue")
  arc(0,0,210,210,90,hrAngle + 90)



}