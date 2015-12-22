var spheres = [];
var sphereAmount = 4;
var sphere_1, shpere_2;
var plane_1, plane_2;
var box1;

//video
var hereYouGo;
var jsVideo;
var p5js;
var watching;

//img
var hereImg;
var img;
var clouds;
var greenImg;

var visibleA = false; var visibleS = false;
var visibleD = false; var visibleQ = false;
var visibleF = false; var visibleW = false;
var visibleG = false;
var visibleH = false;
var visibleJ = false; var visibleZ = false;

//video play stuff
var lastTime;
var videoPlaying = false;

var resetRotation;

function setup() {
  //create a canvas width and height of the screen
  createCanvas(windowWidth,windowHeight,WEBGL);

  colorMode(HSB, 255);
  perspective(60 / 180 * PI, width/height, 0.1, 100);

  //--------------

  hereYouGo = createVideo(["hereYouGo.mp4"]);
  hereYouGo.hide();

  hereYouGo.onended(function() {
    visibleH = false;
    videoPlaying = false;
  });

  jsVideo = createVideo(["js.mp4"]);
  jsVideo.hide();

  jsVideo.onended(function() {
    visibleZ = false;
    videoPlaying = false;
  });

  p5js = createVideo(["p5js.mp4"]);
  p5js.hide();

  p5js.onended(function() {
    visibleQ = false;
    videoPlaying = false;
  });

  watching = createVideo(["watchingVideo.mp4"]);
  watching.hide();

  watching.onended(function() {
    visibleW = false;
    videoPlaying = false;
  });

  //--------------

  img = loadImage("1.png");
  greenImg = loadImage("green.png");
  clouds = loadImage("Clouds.jpg");

  box1 = new Box();

  sphere_1 = new Sphere();
  sphere_2 = new Sphere();

  plane_1 = new Plane();
  plane_2 = new Plane();

  for(var i = 0; i < sphereAmount; i++){

    spheres[i] = new Sphere();

  }

}

function reset() {

  // for(var i = 0; i < sphereAmount; i++){
  //   spheres[i] = new Sphere();
  // }

  sphere_1 = new Sphere();
  sphere_2 = new Sphere();

  box1 = new Box();
  box2 = new Box();
  box3 = new Box();

  plane_1 = new Plane();
  plane_2 = new Plane();

  sphere_3 = new Sphere();
  sphere_4 = new Sphere();
  sphere_5 = new Sphere();
  sphere_6 = new Sphere();

  plane1 = new smallPlane();
  plane2 = new smallPlane();
  plane3 = new smallPlane();
  plane4 = new smallPlane();

  cylinder1 = new Cylinder();
  cylinder2 = new Cylinder();
  cylinder3 = new Cylinder();
  cylinder4 = new Cylinder();


}

function keyPressed() {
  if (key == " "){
    reset();
  }
  if (key == 'w' || key == 'W' ){
    reset()
    visibleW = true;
    resetRotation = 0;
    if (videoPlaying) {
      watching.stop();
      //textue(hereImg);
      watching.play();
    } else {
      watching.play();
      videoPlaying = true;
    }
  }
  if (key == 'q' || key == 'Q' ){
    reset()
    visibleQ = true;
    resetRotation = 0;
    if (videoPlaying) {
      p5js.stop();
      //textue(hereImg);
      p5js.play();
    } else {
      p5js.play();
      videoPlaying = true;
    }
  }
  if (key == 'z' || key == 'Z' ){
    reset()
    visibleZ = true;
    resetRotation = 0;
    if (videoPlaying) {
      jsVideo.stop();
      //textue(hereImg);
      jsVideo.play();
    } else {
      jsVideo.play();
      videoPlaying = true;
    }
  }
  if (key == 'a' || key == 'A' ){
    reset()
    visibleA = true;
    lastTime = millis();
  }
  if (key == 's' || key == 'S' ){
    reset()
    visibleS = true;
    lastTime = millis();
    resetRotation = 0;
  }
  if (key == 'd' || key == 'D' ){
    visibleD = true;
    lastTime = millis();
  }
  if (key == 'f' || key == 'F' ){
    visibleF = true;
    lastTime = millis();
  }
  if (key == 'g' || key == 'G' ){
    visibleG = true;
    lastTime = millis();
  }
  if (key == 'h' || key == 'H' ){
    reset();
    visibleH = true;
    resetRotation = 0;
    if (videoPlaying) {
      hereYouGo.stop();
      //textue(hereImg);
      hereYouGo.play();
    } else {
      hereYouGo.play();
      videoPlaying = true;
    }
  }
  if (key == 'j' || key == 'J' ){
    visibleJ = true;
    lastTime = millis();
  }

}


function draw() {
  //background(((frameCount+50)/2)%255, 100, 200, 10);
  push();
  fill( ((frameCount+50)/2)%255, 100, 200);
  translate(-width * 2 , - height * 2 ,-300);
  //rect(0, 0, width, height);
  quad(
    0, 0, 0,
    width * 5, 0, 0,
    0, height * 5, 0,
    width * 5, height * 5, 0
    );
  pop();

  // for(var i = 0; i < 500; i+=100){
  // push();
  // fill(i * 0.1, 100, 100);
  //
  // //line
  // translate(0, 100, 0);
  // line(sin( i + frameCount * 0.1) * 10, 0, i,
  //      sin( i + frameCount * 0.1) * 10 + 500, 0, i);
  //
  // //triangles
  // translate(0, -300, 0);
  // triangle(
  //   0, sin( i + frameCount * 0.1) * 10, i,
  //   60, 60, i,
  //   -60, 60, i);
  //
  // pop();
  // }



  push();
  translate(300,100,-100);
  rotate(radians(frameCount), [1,0,0]);
  rotate(radians(frameCount), [0,1,0]);
  texture(clouds);
  //box(150);
  pop();

  if(visibleW){
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,1,0]);

    texture(watching);
    plane1.display();
    plane2.display();
    plane3.display();
    plane4.display();
    pop();
  }

  if(visibleQ){
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(p5js);
    sphere_3.display();

    pop();


    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(p5js);
    sphere_4.display();
    pop();

    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(p5js);
    sphere_5.display();
    sphere_6.display();
    pop();
  }

  if (visibleH){

    // push();
    // translate(-700,400,-100);
    // // rotate(radians(frameCount * -1), [1,0,0]);
    // // rotate(radians(frameCount), [0,1,0]);
    // rotate(radians(frameCount * -.5), [1,0,0]);
    //
    // texture(hereYouGo);
    // cylinder(200, 5);
    // pop();

    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(hereYouGo);
    cylinder1.display();
    pop();
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(hereYouGo);
    cylinder2.display();
    pop();
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(hereYouGo);
    cylinder3.display();
    pop();
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(hereYouGo);
    cylinder4.display();
    pop();

  }

  if(visibleZ){
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(jsVideo);
    box1.display();
    pop();
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(jsVideo);
    box2.display();
    pop();
    push();
    translate(0,0,0);
    // rotate(radians(frameCount * -1), [1,0,0]);
    // rotate(radians(frameCount), [0,1,0]);
    rotate(radians(frameCount * -.5), [1,0,0]);

    texture(jsVideo);
    box3.display();
    pop();


  }

    if (visibleA){
      push();
      if (millis() - lastTime > 1500 ) {

        println("1.5 s passed");
        //lastTime = millis();
        lastTime = 0;
        visibleA = false;
      }

      sphere_1.display();
      pop();
      push();
      if (millis() - lastTime > 1500 ) {

        println("1.5 s passed");
        //lastTime = millis();
        lastTime = 0;
        visibleA = false;
      }
      sphere_2.display();
      pop();

      //println("A is pressed");
    }
    if (visibleS){
      push();
      translate(-500,-100,0);
      rotate(radians(frameCount), [1,0,0]);
      rotate(radians(frameCount), [0,1,0]);

      if (millis() - lastTime > 3100 ) {

        println("3 s passed");
        //lastTime = millis();
        lastTime = 0;
        visibleS = false;
      }

      plane_1.display();
      pop();
      push();
      plane_2.display();
      pop();

      //println("S is pressed");
    }
    if (visibleD){
      push();
      translate(0,0,0);
      rotate(radians(frameCount * -1), [1,0,0]);
      rotate(radians(frameCount), [0,1,0]);
      if (millis() - lastTime > 1500 ) {

        println("1.5 s passed");
        //lastTime = millis();
        lastTime = 0;
        visibleD = false;
      }
      torus(200, 60);
      pop();
      //println("D is pressed");
    }
    if (visibleF){
      push();
      translate(700,-200,-100);
      // rotate(radians(frameCount * -1), [1,0,0]);
      // rotate(radians(frameCount), [0,1,0]);
      rotate(radians(frameCount * 20), [0,0,1]);
      if (millis() - lastTime > 1500 ) {

        println("3 s passed");
        //lastTime = millis();
        lastTime = 0;
        visibleF = false;
      }
      cone(100, 10);
      pop();
      //println("F is pressed");
    }
    if (visibleG){
      push();
      translate(700,-200,-100);
      // rotate(radians(frameCount * -1), [1,0,0]);
      // rotate(radians(frameCount), [0,1,0]);
      rotate(radians(frameCount * -.1), [0,0,1]);
      if (millis() - lastTime > 1500 ) {

        println("3 s passed");
        //lastTime = millis();
        lastTime = 0;
        visibleG = false;
      }
      cone(25, 800);
      pop();

      //println("G is pressed");
    }



}

function gotFile(file) {
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    dropImg = createImg(file.data).hide();
    // Draw the image onto the canvas

  } else {
    println('Not an image file!');
  }
}

function mousePressed() {
  removeElements(); // this will remove the div and p, not canvas
}

function Sphere() {

  this.x = random(-width/2,width/2);
  this.y = random(-height/2,height/2);
  this.size = random(10,250);

  this.display = function() {
    translate(this.x,this.y,-100);
    rotate(radians((frameCount * this.x)/100), [1,0,0]);
    rotate(radians((frameCount * this.y)/100), [0,1,0]);
    sphere(this.size);
  }
}

function Box() {

  this.x = random(-width,width);
  this.y = random(-height,height);
  this.size = random(10,500);
  this.z = random(-100,300);

  this.display = function() {
    translate(this.x,this.y,this.z);
    rotate(radians((frameCount * this.x)/100), [1,0,0]);
    rotate(radians((frameCount * this.y)/100), [0,1,0]);
    box(this.size);
  }
}

function Plane() {

  this.x = random(-width,width);
  this.y = random(-height,height);
  this.w = random(400,600);
  this.h = random(200,450);

  this.display = function() {
    translate(this.x,this.y,-100);
    rotate(radians((frameCount * this.x)/100), [1,0,0]);
    rotate(radians((frameCount * this.y)/100), [0,1,0]);
    plane(this.w, this.h);
  }
}

function smallPlane() {

  this.x = random(-width/2,width/2);
  this.y = random(-height/2,height/2);
  this.w = random(200,300);
  this.h = random(100,150);

  this.display = function() {
    translate(this.x,this.y,-100);
    rotate(radians((frameCount * this.x)/100), [1,0,0]);
    rotate(radians((frameCount * this.y)/100), [0,1,0]);
    plane(this.w, this.h);
  }
}

function Cylinder() {

  this.x = random(-width,width);
  this.y = random(-height,height);
  this.w = random(10,500);
  this.h = random(5,10);
  this.z = random(-100,300);

  this.display = function() {
    translate(this.x,this.y,this.z);
    rotate(radians((frameCount * this.x)/100), [1,0,0]);
    rotate(radians((frameCount * this.y)/100), [0,1,0]);
    box(this.size);
    cylinder(this.w, this.h);
  }
}

//---------------------------------------------------------------

var lowPass = new Tone.Filter({
    "frequency": 14000,
}).toMaster();
//we can make our own hi hats with
//the noise synth and a sharp filter envelope
var openHiHat = new Tone.NoiseSynth({
  "volume" : -10,
    "filter": {
        "Q": 1
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.3
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.03,
        "min": 4000,
        "max": 700,
        "exponent": 4,
    }
}).connect(lowPass);


var closedHiHat = new Tone.NoiseSynth({
  "volume" : -10,
    "filter": {
        "Q": 1
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.15
    },
    "filterEnvelope": {
        "attack": 0.01,
        "decay": 0.03,
        "min": 4000,
        "max": 700,
        "exponent": 4,
    }
}).connect(lowPass);


//BASS
var bassEnvelope = new Tone.AmplitudeEnvelope({
    "attack": 0.01,
    "decay": 0.2,
    "sustain": 0,
    "release": 0,
}).toMaster();
var bassFilter = new Tone.Filter({
    "frequency": 600,
    "Q": 8
});
var bass = new Tone.PulseOscillator("A2", 0.4).chain(bassFilter, bassEnvelope);
var bassZ = new Tone.PulseOscillator("A6", 0.4).chain(bassFilter, bassEnvelope);

bass.start();
bassZ.start();


//BLEEP
var bleepEnvelope = new Tone.AmplitudeEnvelope({
    "attack": 0.01,
    "decay": 0.4,
    "sustain": 0,
    "release": 0,
}).toMaster();
var bleep = new Tone.Oscillator("A4").connect(bleepEnvelope);
bleep.start();


//KICK
var kickEnvelope = new Tone.AmplitudeEnvelope({
    "attack": 0.01,
    "decay": 0.2,
    "sustain": 0,
    "release": 0
}).toMaster();
var kick = new Tone.Oscillator("A2").connect(kickEnvelope);
kick.start();



kickSnapEnv = new Tone.ScaledEnvelope({
    "attack": 0.005,
    "decay": 0.01,
    "sustain": 0,
    "release": 0,
    "min": "110",
    "max": 700
}).connect(kick.frequency);


var score = {
    "kick": ["0", "0:0:3", "0:2:0", "0:3:1"],
    "closedHiHat": ["0*8n", "1*16n", "1*8n", "3*8n", "4*8n", "5*8n", "7*8n", "8*8n"],
    "openHiHat": ["2*8n", "6*8n"],
    "bass": [
        ["0:0", "A1", "8n"],
        ["0:2", "G1", "8n"],
        ["0:2:2", "C2", "8n"],
        ["0:3:2", "A1", "8n"]
    ]
};
Tone.Note.parseScore(score);


Tone.Note.route("kick", function(time) {

    $(window).keydown(function(event) {

      console.log("KEYON:"+event.keyCode);


    if(event.keyCode == 70){  //F
      kickEnvelope.triggerAttack();
    }

  });



      // kickEnvelope.triggerAttack(time);

  $(window).keydown(function(event) {

    if(event.keyCode == 83){  //S
      kickEnvelope.triggerAttack();
      kickSnapEnv.triggerAttack();
    }

    if(event.keyCode == 81){  //Q
      kickEnvelope.triggerAttack();
      kickSnapEnv.triggerAttack();
    }

  });
    //kickEnvelope.triggerAttack(time);
    //kickSnapEnv.triggerAttack(time);
});




Tone.Note.route("closedHiHat", function(time) {
  //console.log("KEYON:"+event.keyCode);

  $(window).keydown(function(event) {

    if(event.keyCode == 68){ //D
      closedHiHat.triggerAttack();
    }

  });
    //closedHiHat.triggerAttack(time);
});






Tone.Note.route("openHiHat", function(time) {
  $(window).keydown(function(event) {

    //console.log("KEYON:"+event.timeStamp);

    if(event.keyCode == 65){  //A
      openHiHat.triggerAttack();
    }

    if(event.keyCode == 87){  //W
      openHiHat.triggerAttack();
    }
  });
  // openHiHat.triggerAttack(time);
});


Tone.Note.route("bass", function(time, note) {

  $(window).keydown(function(event) {
    if(event.keyCode == 71){ //G
     bass.frequency.value = bass.frequency.toFrequency(note);
     bassEnvelope.triggerAttack();
    }
    if(event.keyCode == 90){ //Z
     bassZ.frequency.value = bassZ.frequency.toFrequency(note);
     bassEnvelope.triggerAttack();
    }
});

});
$(window).keyup(function(event) {
if(event.keyCode == 71){ //G

Tone.Note.route("bass", function(time, note) {


     //bass.frequency.value = bass.frequency.toFrequency(note);

     bassEnvelope.triggerRelease(time);
     //Tone.Transport.stop();


    // bassEnvelope.triggerAttack(time);
});
}
});

//LOOP THE TRANSPORT
Tone.Transport.setInterval(function(time) {

  $(window).keydown(function(event) {

    if(event.keyCode == 72){  //H
      bleepEnvelope.triggerAttack();
    }

  });
    //bleepEnvelope.triggerAttack(time);
}, "2n");


Tone.Transport.start();
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = "1:0";
Tone.Transport.loop = false;
