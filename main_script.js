var w, h, columns, rows, string, string2, randCount, text1;
var clickFlag = 1;
var s = '-';
var song;

function preload() {

song = loadSound('assets/soundcheck7.mp3');
}

function setup() {

  
  var can = createCanvas(500, 300);
  can.parent("box");
  w = 30; 
  h = 45;
  // Calculate columns and rows
  columns = floor(width/w);
  rows = floor(height/h);

  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  } 
// text1 = loadJSON('textfile.json');
// console.log(text1);

string = "Click.    Click."
string.split('');
string2 = reshape(string);
// console.log(string2);

 randCount = new Array(columns);
  for (var i = 0; i < columns; i++) {
    randCount[i] = new Array(rows);
  }

setArray(randCount,0);

song.loop();
}

function draw() {

  background(0,0,0,0);
  clear();
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      // s = string2[i][j];
      if (s != string2[i][j] && randCount[i][j] <= 15){

        s = makeid();
        // console.log(randCount[5][5]);
        randCount[i][j] = randCount[i][j] + 1;
        // continue;
      }
      else{
        
        s = string2[i][j];
      }

      noStroke();
      // console.log(s);
      noFill();
      rect(i*w, j*w, w-1, w-1);
      fill(160,50,50);
      textFont("Courier");
      textSize(14);
      text(s,i*w+8, j*h+8, w-1, h-1);
      // console.log(string[i]);

    }
  }
  // clear();
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

    for( var i=0; i < 1; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function reshape(m) {

  var n = new Array(columns);
    for (var i = 0; i < columns; i++) {
      n[i] = new Array(rows);
    } 

  setArray(n,'-');
  
  var count;
  for (var j = 0; j < rows; j++) {
    count = j*columns;
    for (var i = 0; i< columns; i++) {
      if (count+i < m.length) {
        n[i][j] = m[count+i];
      }
      else {
        break;
      }

    }
  }

  return n;

}

function setArray(array,value) {

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i< columns; i++) {
      array[i][j] = value;
    }
  } 
}

function mouseReleased() {

  string = loadMessage();;
  string.split('');
  string2 = reshape(string);

  setArray(randCount,0);
  
}

function loadMessage() {

  // console.log(list);
  var line = list[Math.floor(Math.random() * list.length)];
  // console.log(line);
  return line;
}
