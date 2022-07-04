let time =0;
let wave=[];

var w = window.innerWidth;
var h = window.innerHeight;  
let slider;
 function setup() {
createCanvas (w,h);
   slider = createSlider(1,100,1);
}
function draw() {
background (0) ;
translate (w/4, h/2) ;
//let radius = 100;



  let x=0;
  let y=0;
  
  for(let i =0; i<slider.value();i++){
    let prevx =x;
    let prevy =y;
    
    let n = i*2+1;
  let radius =75*(4/(n*PI));
  x+= radius *  cos (n*time) ;
  y+= radius *  sin (n*time) ;
  
  

  
stroke(255,100) ;
noFill();
ellipse(prevx, prevy, radius * 2);
  
//fill(255);
    stroke(255);
  line(prevx,prevy,x,y);
  //ellipse(x,y,8);
  
  

  
  
  
//translate(200,0);
//line(x - 200,y,0,wave[0]);
    
  }
   wave.unshift(y);
    translate(200,0);
line(x - 200,y,0,wave[0]);
  beginShape();
  noFill();
  for(let i =0; i<wave.length;i++){
    vertex(i,wave[i]);
  }
  endShape();
  

time+= 0.03;
  
  if (wave.length>w){
    wave.pop();
  }
  
}