function drawRect(){
    var stage = new Konva.Stage({
        container: 'rectcontainer',
        width: 250,
        height: 250,
    });
    
    var layer = new Konva.Layer();
 
    stage.add(layer);
    var Rect= new Konva.Rect({
        fill:'black',
        width: 250,
        height: 250,
    });

    layer.add(Rect);
    stage.add(layer);

};

//draw a circle


    var stage = new Konva.Stage({
        container: 'circlecontainer',
        width: width,
        height: height,
    });
    
    var layer = new Konva.Layer();
    
    stage.add(layer);
    var Circle= new Konva.Circle({
        fill:'red',
        radius: 100,
    });
    
    layer.add(Circle);
    stage.add(layer);  
