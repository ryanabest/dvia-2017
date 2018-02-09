// proportional districts

var proDists = function( sketch ) {
  sketch.setup = function() {
    let boxRows = 4;
    let boxCols = 10;

    let lngthBorder = 0.9;
    let hghtBorder = 0.6

    let canvasLngth = lngth + (lngth/boxCols*(1-lngthBorder));
    let canvasHght = hght + (hght/boxRows*(1-hghtBorder));
    var cnv = sketch.createCanvas(canvasLngth, canvasHght);
    cnv.id('pro-dists-sketch');
    sketch.background(255);

    let x = (lngth/boxCols);
    let y = (hght/boxRows);

    let linex = x*(1-lngthBorder)/2;
    let liney = y*(1-hghtBorder)/2;

    sketch.strokeWeight(linex);
    sketch.stroke(100);
    sketch.line((x*6)+linex,liney,(x*6)+linex,canvasHght-liney);

    //dashes
    for (let i=0;i<50;i++) {
      let a = ((canvasHght-liney) - liney)/50;
      if (i%2 === 0) {
        sketch.stroke(255);
        sketch.line((x*6)+linex,liney+(a*i),(x*6)+linex,liney+(a*i));
      }
    }

    for (let i=0;i<boxCols;i++) {
      for (let j=0;j<boxRows;j++) {
        var c = sketch.color(34,106,177); //blue
        if (j>=boxRows/2) {
          c = sketch.color(236,20,14); //red
        }
        sketch.fill(c);
        sketch.noStroke();
        sketch.rect((x*i)+(x*(1-lngthBorder)),(y*j)+(y*(1-hghtBorder)),(canvasLngth/boxCols)*lngthBorder,(hght/boxRows)*hghtBorder);
      }
    }
  }
}

var myp5 = new p5(proDists,'pro-dists');

// gerrymandered districts

var gerryDists = function( sketch ) {
  sketch.setup = function() {
    let boxRows = 4;
    let boxCols = 10;

    let lngthBorder = 0.9;
    let hghtBorder = 0.6

    let canvasLngth = lngth + (lngth/boxCols*(1-lngthBorder));
    let canvasHght = hght + (hght/boxRows*(1-hghtBorder));
    var cnv = sketch.createCanvas(canvasLngth, canvasHght);
    cnv.id('gerry-dists-sketch');
    sketch.background(255);

    let x = (lngth/boxCols);
    let y = (hght/boxRows);

    let linex = x*(1-lngthBorder)/2;
    let liney = y*(1-hghtBorder)/2;

    sketch.strokeWeight(linex);
    sketch.stroke(100);
    sketch.line((x*6)+linex,liney,(x*6)+linex,canvasHght-liney);

    //dashes
    for (let i=0;i<50;i++) {
      let a = ((canvasHght-liney) - liney)/50;
      if (i%2 === 0) {
        sketch.stroke(255);
        sketch.line((x*6)+linex,liney+(a*i),(x*6)+linex,liney+(a*i));
      }
    }

    for (let i=0;i<boxCols;i++) {
      for (let j=0;j<boxRows;j++) {
        var c = sketch.color(34,106,177); //blue
        if (j<boxRows/2) {
          if (i>6) {
            c = sketch.color(236,20,14); //red
          }
        } else if (j<3*boxRows/4) {
          if (i>5) {
            c = sketch.color(236,20,14); //red
          }
        } else {
          c = sketch.color(236,20,14); //red
        }
        sketch.fill(c);
        sketch.noStroke();
        sketch.rect((x*i)+(x*(1-lngthBorder)),(y*j)+(y*(1-hghtBorder)),(canvasLngth/boxCols)*lngthBorder,(hght/boxRows)*hghtBorder);
      }
    }
  }
}

var myp5 = new p5(gerryDists,'gerry-dists');


// gerrymandered districts w eff gap description

var gerryEffDists = function( sketch ) {
  sketch.setup = function() {
    let boxRows = 4;
    let boxCols = 10;

    let lngthBorder = 0.9;
    let hghtBorder = 0.6

    let canvasLngth = lngth + (lngth/boxCols*(1-lngthBorder));
    let canvasHght = hght + (hght/boxRows*(1-hghtBorder));
    var cnv = sketch.createCanvas(canvasLngth, canvasHght);
    cnv.id('gerry-eff-dists-sketch');
    sketch.background(255);

    let x = (lngth/boxCols);
    let y = (hght/boxRows);

    let linex = x*(1-lngthBorder)/2;
    let liney = y*(1-hghtBorder)/2;

    sketch.strokeWeight(linex);
    sketch.stroke(100);
    sketch.line((x*6)+linex,(1.5*liney),(x*6)+linex,canvasHght-(1.5*liney));

    //dashes
    for (let i=0;i<100;i++) {
      let a = ((canvasHght-liney) - liney)/50;
      if (i%2 === 0) {
        sketch.stroke(255);
        sketch.line((x*6)+linex,liney+(a*i),(x*6)+linex,liney+(a*i));
      }
    }

    for (let i=0;i<boxCols;i++) {
      for (let j=0;j<boxRows;j++) {
        var c = sketch.color(236,20,14); //red
        if (j<3*boxRows/4) {
          if (i<6) {
            c = sketch.color(34,106,177,255*0.5); //50% opacity blue
          }
          if (j<boxRows/2 && i===6) {
            c = sketch.color(34,106,177); //blue
          }
        } else if (i<6) {
          c = sketch.color(236,20,14,255*0.5) //50% opactiy red
        }
        sketch.fill(c);
        sketch.noStroke();
        sketch.rect((x*i)+(x*(1-lngthBorder)),(y*j)+(y*(1-hghtBorder)),(canvasLngth/boxCols)*lngthBorder,(hght/boxRows)*hghtBorder);
      }
    }
    sketch.fill(100);
    sketch.textSize(10);
    sketch.textFont("Georgia");
    sketch.text("Line shows the 6 vote mark needed to win each district",0,10);
    sketch.text("Everything right of this line is a 'wasted' vote",0,hght+14);
  }
}

var myp5 = new p5(gerryEffDists,'gerry-eff-dists');

var gerryEffDemDists = function( sketch ) {
  sketch.setup = function() {
    let boxRows = 4;
    let boxCols = 10;

    let lngthBorder = 0.9;
    let hghtBorder = 0.6

    let canvasLngth = lngth + (lngth/boxCols*(1-lngthBorder));
    let canvasHght = hght + (hght/boxRows*(1-hghtBorder));
    var cnv = sketch.createCanvas(canvasLngth, canvasHght);
    cnv.id('gerry-eff-dem-dists-sketch');
    sketch.background(255);

    let x = (lngth/boxCols);
    let y = (hght/boxRows);

    let linex = x*(1-lngthBorder)/2;
    let liney = y*(1-hghtBorder)/2;

    for (let i=0;i<boxCols;i++) {
      for (let j=0;j<boxRows;j++) {
        var c = sketch.color(34,106,177);
        if (j<3*boxRows/4) {
          if (j<boxRows/2 && i===6) {
            sketch.fill(c);
            sketch.noStroke();
            sketch.rect((x*i)+(x*(1-lngthBorder)),(y*j)+(y*(1-hghtBorder)),(canvasLngth/boxCols)*lngthBorder,(hght/boxRows)*hghtBorder);
          }
        }
      }
    }
  }
}

var myp5 = new p5(gerryEffDemDists,'gerry-eff-dem-dists');

var gerryEffRepDists = function( sketch ) {
  sketch.setup = function() {
    let boxRows = 4;
    let boxCols = 10;

    let lngthBorder = 0.9;
    let hghtBorder = 0.6

    let canvasLngth = lngth + (lngth/boxCols*(1-lngthBorder));
    let canvasHght = hght + (hght/boxRows*(1-hghtBorder));
    var cnv = sketch.createCanvas(canvasLngth, canvasHght);
    cnv.id('gerry-eff-dem-dists-sketch');
    sketch.background(255);

    let x = (lngth/boxCols);
    let y = (hght/boxRows);

    let linex = x*(1-lngthBorder)/2;
    let liney = y*(1-hghtBorder)/2;

    for (let i=0;i<boxCols;i++) {
      for (let j=0;j<boxRows;j++) {
        var c = sketch.color(236,20,14);
        if (j<2*boxRows/4) {
          if (j<boxRows/2 && i>6) {
            sketch.fill(c);
            sketch.noStroke();
            sketch.rect((x*i)+(x*(1-lngthBorder)),(y*j)+(y*(1-hghtBorder)),(canvasLngth/boxCols)*lngthBorder,(hght/boxRows)*hghtBorder);
          }
        } else if (i>5) {
          sketch.fill(c);
          sketch.noStroke();
          sketch.rect((x*i)+(x*(1-lngthBorder)),(y*j)+(y*(1-hghtBorder)),(canvasLngth/boxCols)*lngthBorder,(hght/boxRows)*hghtBorder);
        }
      }
    }
  }
}

var myp5 = new p5(gerryEffRepDists,'gerry-eff-rep-dists');
