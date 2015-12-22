var spheres = [];
var sphereAmount = 4;
var sphere_1, shpere_2;

var hereYouGo;
var img;

var visible = false;

function setup() {
  //create a canvas width and height of the screen
  createCanvas(windowWidth,windowHeight,WEBGL);
  colorMode(HSB, 255);
  perspective(60 / 180 * PI, width/height, 0.1, 100);

  hereYouGo = createVideo(["hereYouGo.mp4"]);
  //hereYouGo.loop();
  hereYouGo.hide();

  img = loadImage("1.png");

  sphere_1 = new Sphere();
  sphere_2 = new Sphere();

  for(var i = 0; i < sphereAmount; i++){

    spheres[i] = new Sphere();

  }

}

function reset() {

  sphere_1 = new Sphere();
  sphere_2 = new Sphere();

  for(var i = 0; i < sphereAmount; i++){

    spheres[i] = new Sphere();

  }
}

function keyPressed() {
  if (key == " "){
    reset();
  }
  // if (key == 'a' || key == 'A'){
  //   visible
  // }

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

  for(var i = 0; i < 500; i+=100){
  push();
  fill(i * 0.1, 100, 100);

  //line
  translate(0, 100, 0);
  line(sin( i + frameCount * 0.1) * 10, 0, i,
       sin( i + frameCount * 0.1) * 10 + 500, 0, i);

  //triangles
  translate(0, -300, 0);
  triangle(
    0, sin( i + frameCount * 0.1) * 10, i,
    60, 60, i,
    -60, 60, i);

  pop();
}



  push();
  translate(300,100,-100);
  rotate(radians(frameCount), [1,0,0]);
  rotate(radians(frameCount), [0,1,0]);
  texture(img);
  box(150);
  pop();

  if (keyIsPressed === true) {
    if (key == 'a' || key == 'A'){
      push();

      sphere_1.display();
      pop();
      push();
      sphere_2.display();
      pop();

      println("A is pressed");
    }
    else if (key == 's' || key == "S"){
      push();
      translate(-500,-100,0);
      rotate(radians(frameCount), [1,0,0]);
      rotate(radians(frameCount), [0,1,0]);
      plane(500, 200);
      pop();
      println("S is pressed");
    }
    else if (key == 'd' || key == "D"){
      push();
      translate(0,0,0);
      rotate(radians(frameCount * -1), [1,0,0]);
      rotate(radians(frameCount), [0,1,0]);
      torus(200, 60);
      pop();
      println("D is pressed");
    }
    else if (key == 'f' || key == "F"){
      push();
      translate(700,-200,-100);
      // rotate(radians(frameCount * -1), [1,0,0]);
      // rotate(radians(frameCount), [0,1,0]);
      rotate(radians(frameCount * 20), [0,0,1]);
      cone(100, 10);
      pop();
      println("F is pressed");
    }
    else if (key == 'g' || key == "G"){
      push();
      translate(700,-200,-100);
      // rotate(radians(frameCount * -1), [1,0,0]);
      // rotate(radians(frameCount), [0,1,0]);
      rotate(radians(frameCount * -.1), [0,0,1]);
      cone(25, 800);
      pop();

      println("G is pressed");
    }
    else if (key == 'h' || key == "H"){
      push();
      translate(-700,400,-100);
      // rotate(radians(frameCount * -1), [1,0,0]);
      // rotate(radians(frameCount), [0,1,0]);
      rotate(radians(frameCount * -.5), [1,0,0]);
      texture(hereYouGo);
      hereYouGo.play();
      cylinder(200, 5);
      pop();
      println("H is pressed");
    }

  }
}


function Sphere() {

this.x = random(-width,width);
this.y = random(-height,height);
this.size = random(10,250);



this.display = function() {
  translate(this.x,this.y,-100);
  rotate(radians((frameCount * this.x)/100), [1,0,0]);
  rotate(radians((frameCount * this.y)/100), [0,1,0]);
  sphere(this.size);
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

bass.start();


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
  });
  // openHiHat.triggerAttack(time);
});


Tone.Note.route("bass", function(time, note) {

  $(window).keydown(function(event) {
    if(event.keyCode == 71){ //G

    //Tone.Transport.start();
     bass.frequency.value = bass.frequency.toFrequency(note);

     bassEnvelope.triggerAttack();


    // bassEnvelope.triggerAttack(time);
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
