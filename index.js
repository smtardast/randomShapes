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
//create enclosure loop
for (var i = 0; i < nr*3; i++) {
    
    var ax = stage.width() * Math.random();
    var ay = stage.height() * Math.random();
      
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
          numPoints: 10,
          innerRadius: 20,
          outerRadius: 25,
          draggable: true,
          name: 'star ' + i,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
        });
        layer.add(star);
      }


//making random amounts of circles

var star;
      for (var i = 0; i < nr/2; i++) {
        star = new Konva.Circle({
          x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
          fill: 'blue',
          radius: Math.random()*40,
          draggable: true,
          name: 'star ' + i,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
        });
        layer.add(star);
    }
    //Making bacteria
      var bacteria;
for (var i = 0; i < nr*5; i++) {
   
    bacteria = new Konva.Line({
    
        x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
        fill: couleurs[i],
        points: [Math.random()*20,Math.random()*20,Math.random()*40,Math.random()*20,Math.random()*40,Math.random()*40],       strokeWidth: 5,
        closed: true,
        tension: 1,
        draggable: true,
      });
    
      // add the shape to the layer
      layer.add(bacteria);

}
//        points: [Math.random()*20,Math.random()*20,Math.random()*40,Math.random()*20,Math.random()*40,Math.random()*40,Math.random()*20,Math.random()*40,],


//crate a plus
var plus = new Konva.Line({
    points: [0,50,50,50,50,0,75,0,75,50,125,50,125,75,75,75,75,125,50,125,50,75,0,75, ],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 5,
    closed: true,
    draggable: true,
  });

  // add the shape to the layer
  layer.add(plus);
var enclosure;
    // add the layer to the stage
    stage.add(layer);