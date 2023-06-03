//setting up the basics

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});

var layer = new Konva.Layer();

stage.add(layer);

//variables
var nr = Math.random()*10;
var ax = stage.width() * Math.random();
var ay = stage.height() * Math.random();
var wide = stage.width() ;
  // making a variable so all bacteria are the same color but the color changes every refresh, making an integer small enough for array
  var col1 = Math.trunc(10*Math.random());

//console.log("ax"+ax+"  ay"+ay);
var couleurs = ["red","blue","yellow","green", "purple", "pink", "black", "yellowgreen", "grey", "lightblue", "magenta"];
var couleur = 0;

//create enclosure loop
var enclosure;

for (var i = 0; i < ax/200; i++) {
    //different place and shape every time
      var bihx = stage.width() * Math.random();
      var bihy = stage.width() * Math.random();
    
    
      enclosure = new Konva.Line({
    
      x: bihx,
      y: bihy,
      stroke: 'black',
      strokeWidth: 10,
      points: [bihx, bihy, bihx*4, bihy*2, bihx*4, bihy*6, ],
      closed: true,
      tension: 1,
      draggable: true,
    });
    
    //    points: [Math.random()*200,Math.random()*200,Math.random()*400,Math.random()*200,Math.random()*400,Math.random()*400],       strokeWidth: 5,
    
    // add the shape to the layer
    layer.add(enclosure);
    
    
  };
  
  // making random amount of stars
  
 
/* var star;
      for (var i = 0; i < nr; i++) {
        star = new Konva.Star({
          x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
          fill: 'blue',
          numPoints: 4,
          innerRadius: 10,
          outerRadius: 25,
          draggable: true,
          name: 'star ' + i,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          shadowColor: 'yellow',
          shadowBlur: 0.5,
        });
        layer.add(star);
      } */


//making random amounts of circles

var circle;
      for (var i = 0; i < stage.width() * Math.random()/300; i++) {
        
        couleur ++;
        console.log(couleur);
        if (couleur == 10){
           couleur = 0;
         }
        
        circle = new Konva.Circle({
          x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
          fill: couleurs[couleur],
          radius: (stage.width() * Math.random())/10,
          draggable: true,
          name: 'circle ' + i,
          opacity: Math.random(),

        });
        layer.add(circle);
    }
//colours change on click in a loop 
circle.on('click' , function(){
  a++;
  if (a == 11){
    a = 0
  }
  var fill = this.fill() == couleurs[a] ? couleurs[a+1] : couleurs[a];
  this.fill(fill);
});


    // making randow amounts of rings

    var ring;
    for (var i = 0; i < stage.width() * Math.random()/300; i++) {
      var ringRad = (stage.width() * Math.random());

      ring = new Konva.Ring({
        x: stage.width() * Math.random(),
        y: stage.height() * Math.random(),
        fill: couleurs[i],
        innerRadius:  ringRad/18,
        outerRadius: ringRad/10,
        draggable: true,
        name: 'ring ' + i,
        opacity: Math.random(),
       
      });
      layer.add(ring);


      //colours change on click in a loop 
      ring.on('click', function(){
        a++;
        if (a == 11){
          a = 0
        }
        var fill = this.fill() == couleurs[a] ? couleurs[a+1] : couleurs[a];
        this.fill(fill);
      })
  }
  
  
  //function on btn click to populate
  function bacteriaTakeover() {
    
      setInterval(function(){
        makeBacteria();
      }, 250);
  };
  
   
  function populate(){

    //Making bacteria


    for (var i = 0; i < ax/60; i++) {
     
        makeBacteria();
    
  };
  
  };
  //var bacterias =new Konva.Group();
  function makeBacteria(){
    
    var bacteria;
    var rand = Math.random();
    //prompt('okay');
  bacteria = new Konva.Line({
        x: stage.width() * Math.random(),
        y: stage.height() * Math.random(),
        fill: couleurs[col1],
        points: [rand, rand*15, rand*9, rand*5, rand*20, rand, rand*40, rand*5, rand*50, rand*20,rand*40, rand*30, rand*22, rand*24,rand*10, rand*26],       
        rotation: Math.random()*360,
        strokeWidth: 5,
        closed: true,
        tension: 0.5,
        draggable: true,
        opacity: Math.random(),
        id: 'bacteria',
        //bezier: true,
      });
      
      var a = 0;
      //colours change on click in a loop 
      bacteria.on('click tap', function(){
        a++;
        if (a == 11){
          a = 0
        }
        var fill = this.fill() == couleurs[a] ? couleurs[a+1] : couleurs[a];
        this.fill(fill);
      })
      //bacterias.add(bacteria);
   
        // add the shape to the layer
        layer.add(bacteria);
        stage.add(layer);
        
};

    //        points: [Math.random()*20,Math.random()*20,Math.random()*40,Math.random()*20,Math.random()*40,Math.random()*40,Math.random()*20,Math.random()*40,],
    
  
    
//create a plus
 var plus;
 var acolor = Math.trunc(Math.random()*10);
 
for(var i = 0; i < stage.width() * Math.random()/700; i++){
  couleur ++;
  if (couleur == 10){
     couleur = 0;
   }
 plus = new Konva.Line({
  //0,9 so never outside frame
  x: stage.width() * Math.random()*0.9,
          y: stage.height() * Math.random()*0.8,
    points: [0,50,50,50,50,0,75,0,75,50,125,50,125,75,75,75,75,125,50,125,50,75,0,75, ],
    fill: couleurs[acolor],
    closed: true,
    draggable: true,
  });

  // add the shape to the layer
  layer.add(plus);
  //colours change on click in a loop 
  var a =0;
  plus.on('click', function(){
    a++;
    if (a == 11){
      a = 0
    }
    var fill = this.fill() == couleurs[a] ? couleurs[a+1] : couleurs[a];
    this.fill(fill);
  })
}; 

//create a wiggle
var  wiggle;
for(var i = 0; i < stage.width() * Math.random()/700; i++){
  couleur ++;
  if (couleur == 10){
     couleur = 0;
   }
   var r = Math.random()*100;

wiggle = new Konva.Line({
  //0,9 so never outside frame
  x: stage.width() * Math.random()*0.9,
          y: stage.height() * Math.random()*0.8,
    points:  [r, r, r*2,  r*2, r, r*3,r*2, r*4, r,  r*5, r*2, r*6,],
    stroke: couleurs[couleur],
    strokeWidth: Math.random()*30,
    draggable: true,
    bezier: false,
    tension: 0.45,
    opacity: Math.random(),
  });

  // add the shape to the layer
  layer.add( wiggle);
  //colours change on click in a loop 
  var a =0;
  wiggle.on('click', function(){
    a++;
    if (a == 11){
      a = 0
    }
    var fill = this.fill() == couleurs[a] ? couleurs[a+1] : couleurs[a];
    this.fill(fill);
  })
}; 

//create star on click

function starClicker(){
  stage.on('click', function (){
    couleur ++;
    if (couleur == 10){
       couleur = 0;
     }
      
     var pos = layer.getRelativePointerPosition();
   var rnd = Math.random();
     var star = new Konva.Star({
      x: pos.x,
      y: pos.y,
      fill: 'yellow',
      numPoints: 4,   
      innerRadius: 10*rnd,
      outerRadius: 10+28*rnd,
      draggable: true,
      name: 'star ' + i,
      
      shadowColor: 'white',
      shadowBlur: 10,
    });
    layer.add(star);
  }); 
  




  
      // add the layer to the stage
      stage.add(layer);

};

