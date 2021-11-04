//SEGUNDA

//VAR IMÁGENES con su SONIDO
var din0;

var din1;
var din1SON;

var din2;
var din2SON;
var din2SON2;
var din2SON3;

var din3;
var din3SON;

var din4;
var din4SON;

var cancionTXT;

var btnDINO;

var mari;

var szIm; //var tamaño de imagen

var mano; //dib del mouseX, mouseY

//var de
var x;
var y;
var sz;

//var de pelota que controlo
var xMo;
var yMo;

//var de BOTONES
var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var btnSZ;

var totalBTN = 5;

//VAR PARA CANCION
var cancion;
var analisis;

var x0 = [];
var y0 = [];
var col = [];

var botonTest = 0;

function preload() {
  cancion = loadSound("Jurassic.mp3");
}

function setup() {
  createCanvas(1200, 600);
  background(220);

  analisis = new p5.Amplitude();
  analisis.setInput(cancion);

  //INICIANDO var de imágenes
  din0 = loadImage("din0.png");
  mari = loadImage("marip.gif");

  din1 = loadImage("din1.png");
  din1SON = loadSound("Bonk.mp3");

  din2 = loadImage("din2.png");
  din2SON = loadSound("MUNCH.mp3");
  din2SON2 = loadSound("YUMMY.mp3");
  din2SON3 = loadSound("minecraftEat.mp3");

  din3 = loadImage("din3.png");
  din3SON = loadSound("oh din3.mp3");

  din4 = loadImage("din4.png");
  din4SON = loadSound("Growl.mp3");

  btnDINO = loadImage("boton.png");


  cancionTXT = loadImage("canTXT.png");
  dinDANCE = loadImage("dinoDANCE.gif");

  szIm = 600;

  mano = loadImage("mano.png"); //mouseX mouseY

  //INICIANDO otros var
  xport = width - width;
  yport = height - height;
  sz = 50;

  //BOTONES
  btn1 = color(255, 0, 0, 255);
  btn2 = color(0, 25, 255);
  btn3 = color(0, 255, 255);
  btn4 = color(0, 255, 0);
  btn5 = color(0, 255, 0);
  btnSZ = 40;

  col = append(col, color(255, 0, 0)); //rojo
  col = append(col, color(255, 0, 255)); //morado
  col = append(col, color(0, 255, 255)); //azul
  col = append(col, color(255, 255, 0)); //amarillo
  col = append(col, color(0, 255, 0)); //verde

  x0 = append(x0, width / 2 - 80); //rojo
  x0 = append(x0, width / 4 - 30); //morado
  x0 = append(x0, width - 350); //verde
  x0 = append(x0, width / 3 + 20); //amarillo
  x0 = append(x0, width / 3 + 60); //azul

  y0 = append(y0, 60); //rojo
  y0 = append(y0, height / 3); //morado
  y0 = append(y0, height / 2 + 70); //verde
  y0 = append(y0, height / 2 + 120); //amarillo
  y0 = append(y0, height / 2 + 10); //azul
}

function draw() {
  background(255);

  //IMAGEN PORTADA
  imageMode(CORNER);
  image(din0, xport, yport, szIm + 600, szIm + 10);
  image(mari, 150, height / 2 + 100, 60, 60);
  image(mari, width - 180, height / 2, 60, 60);

  //BOTONES
  for (var i = 0; i < x0.length; i++) {
    image(btnDINO, x0[i] - 530, y0[i] - 70, szIm + 570, szIm + 10);

    var d = dist(mouseX, mouseY, x0[i], y0[i]);

    if (d <= btnSZ) {
      fill(255, 0, 0);
    } else {
      fill(col[i]);
    }

    //ellipse(x0[i], y0[i], btnSZ, btnSZ);

    if (botonTest == 1) {
      image(din1, xport, yport, szIm + 600, szIm + 10);
      if (din1SON.isPlaying()) {
      } else {
        din1SON.play();
      }
    }

    if (botonTest == 0) {   //PARAR SONIDOS
      if (cancion.isPlaying()) {
        cancion.stop();
      } else {
      }

      if (din1SON.isPlaying()) {
        din1SON.stop();
      } else {
      }

      if (din2SON.isPlaying()) {
        din2SON.stop();
      } else {
      }
      if (din2SON2.isPlaying()) {
        din2SON2.stop();
      } else {
      }
      if (din2SON3.isPlaying()) {
        din2SON3.stop();
      } else {
      }

      if (din3SON.isPlaying()) {
        din3SON.stop();
      } else {
      }

      if (din4SON.isPlaying()) {
        din4SON.stop();
      } else {
      }
    }

    if (botonTest == 2) {
      image(din2, xport, yport, szIm + 600, szIm + 10);
      if (din2SON.isPlaying()) {
      } else {
        din2SON.play();
      }
      if (din2SON2.isPlaying()) {
      } else {
        din2SON2.play();
      }
    }

    if (botonTest == 3) {
      image(din3, xport, yport, szIm + 600, szIm + 10);
      if (din3SON.isPlaying()) {
      } else {
        din3SON.play();
      }
    }
    
    if (botonTest == 4) {
      image(din4, xport, yport, szIm + 600, szIm + 10);
      if (din4SON.isPlaying()) {
      } else {
        din4SON.play();
      }
    }
    
    
    if (botonTest == 5) {
      background(255);
      //FIGURAS bailando CANCION
            var valor = analisis.getLevel();

            strokeWeight(valor * 6000);
            stroke(0);
            line(0, 0, width, height);
      
            strokeWeight(valor * 1000);
            stroke(55,0,200);
            line(width-width, height, width, height-height);


            strokeWeight(valor * 50);
            stroke(0);
            fill(valor * 2500);
            ellipse(width / 2, height / 2, valor * 2000, valor * 2000);
            
            image(cancionTXT, xport, yport, szIm+600, szIm+10);

            push();
            translate(width / 2, valor * 2000);
            fill(valor * 2500, valor * 2500, 0);
            rotate(valor * 20);
            rectMode(CENTER);
            rect(0, 0, 100, 100);
            pop();
      
            push();
            translate(width / 2+160, valor * 3000);
            fill(valor * 6500, valor * 500, 0);
            rotate(valor * 10);
            rectMode(CENTER);
            triangle(100, 0, 0, 200, 150, 100);
            pop();
      
      image(dinDANCE, 70, height-550, szIm-320, szIm-320);

            if (cancion.isPlaying()) {
            } else {
              cancion.play();
            } 
    }
    
  
  }

  //CIRC controlado
  xMo = mouseX;
  yMo = mouseY;
  imageMode(CENTER);
  image(mano, xMo + 57, yMo + 230, szIm + 600, szIm + 10);
  //fill(0, 0, 255);
  //ellipse(xMo, yMo, btnSZ, btnSZ);
}

function mouseClicked() {
  //BOTONES
  for (var i = 0; i < x0.length; i++) {
    var d = dist(mouseX, mouseY, x0[i], y0[i]);

    if (d <= 50) {
      if (x0[i] == x0[0]) {
        if (botonTest == 1) {
          botonTest = 0;
        } else {
          botonTest = 1;
        }
      } else {
      }

      if (x0[i] == x0[1]) {
        if (botonTest == 2) {
          botonTest = 0;
        } else {
          botonTest = 2;
        }
      } else {
      }

    if (x0[i] == x0[2]) {
      if (botonTest == 3) {
        botonTest = 0;
      } else {
        botonTest = 3;
      }
    } else {
    }
      
      if (x0[i] == x0[3]) {
      if (botonTest == 4) {
        botonTest = 0;
      } else {
        botonTest = 4;
      }
    } else {
    }
      
      if (x0[i] == x0[4]) {
      if (botonTest == 5) {
        botonTest = 0;
      } else {
        botonTest = 5;
      }
    } else {
    }
  
    
    }
       
}
}