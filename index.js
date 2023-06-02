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
var nr = Math.random()*10;
var ax = stage.width() * Math.random();
var ay = stage.height() * Math.random();
var wide = stage.width() ;
//create enclosure loop
for (var i = 0; i < nr*3; i++) {
    
      
    enclosure = new Konva.Line({
    
    x: ax,
      y: ay,
    stroke: 'black',
    strokeWidth: 10,
    points: [ax*i, ay*i, ax*4*i, ay*2*i, ax*4*i, ay*6*i, ],
    closed: true,
    tension: 1,
    draggable: true,
  });

  //    points: [Math.random()*200,Math.random()*200,Math.random()*400,Math.random()*200,Math.random()*400,Math.random()*400],       strokeWidth: 5,

  // add the shape to the layer
  layer.add(enclosure);



};

// making random amount of stars

var couleurs = ["red","blue","yellow","green", "purple", "pink", "black", "yellowgreen", "grey", "lightblue", "magenta"];
var star;
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
      }


//making random amounts of circles

var circle;
      for (var i = 0; i < stage.width() * Math.random()/300; i++) {
        circle = new Konva.Circle({
          x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
          fill: couleurs[i],
          radius: (stage.width() * Math.random())/10,
          draggable: true,
          name: 'circle ' + i,
          opacity: Math.random(),

        });
        layer.add(circle);
    }

    // making randow amounts of rings

    var ring;
    for (var i = 0; i < stage.width() * Math.random()/300; i++) {
      var ringRad = (stage.width() * Math.random());

      star = new Konva.Ring({
        x: stage.width() * Math.random(),
        y: stage.height() * Math.random(),
        fill: couleurs[i],
        innerRadius:  ringRad/18,
        outerRadius: ringRad/10,
        draggable: true,
        name: 'ring ' + i,
        opacity: Math.random(),
       
      });
      layer.add(star);
  }
    //Making bacteria
      var bacteria;
      console.log(stage.width() * Math.random());
      console.log(stage.width());
      console.log(ax);
  
      var couleur = 0;
      console.log('hi'+Math.trunc(10*Math.random()))
      
      // making a variable so all bacteria are the same color but the color changes every refresh, making an integer small enough for array
      var col1 = Math.trunc(10*Math.random());
for (var i = 0; i < ax/10; i++) {
//making sure colours loop so can see more than only array length n bacteria if want bacteria of all colours
  console.log(couleur);
 couleur ++;
 console.log(couleur);
 if (couleur == 10){
    couleur = 0;
  }
  var rand1 = Math.random();
  var rand2 = Math.random();
  var rand3 = Math.random();
  var rand = Math.random();
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
        //bezier: true,
      });
    
      var a = 0;
      // add the shape to the layer
      layer.add(bacteria);

      //colours change on click in a loop 
      bacteria.on('click', function(){
        a++;
        if (a == 10){
          a = 0
        }
        var fill = this.fill() == couleurs[couleur] ? couleurs[a] : couleurs[couleur];
        this.fill(fill);
      })

}
//        points: [Math.random()*20,Math.random()*20,Math.random()*40,Math.random()*20,Math.random()*40,Math.random()*40,Math.random()*20,Math.random()*40,],

//trying to make them follow mouse


//crate a plus
var plus = new Konva.Line({
    points: [0,50,50,50,50,0,75,0,75,50,125,50,125,75,75,75,75,125,50,125,50,75,0,75, ],
    fill: '#00D2FF',
    closed: true,
    draggable: true,
  });

  // add the shape to the layer
  layer.add(plus);
var enclosure;
    // add the layer to the stage
    stage.add(layer);