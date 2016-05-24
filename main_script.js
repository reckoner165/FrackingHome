var w, columns, rows, string, string2, randCount, text1;
var clickFlag = 1;
var s = '-';

// function preload() {

//   text = loadJSON('textfile.json');
// }
function setup() {

  createCanvas(500, 200);
  w = 30;
  // Calculate columns and rows
  columns = floor(width/w);
  rows = floor(height/w);

  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  } 
// text1 = loadJSON('textfile.json');
// console.log(text1);

string = "Click.        Click."
string.split('');
string2 = reshape(string);
// console.log(string2);

 randCount = new Array(columns);
  for (var i = 0; i < columns; i++) {
    randCount[i] = new Array(rows);
  }

setArray(randCount,0);

}

function draw() {

  background(255);
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

      stroke(0);
      // console.log(s);
      fill(0);
      rect(i*w, j*w, w-1, w-1);
      fill(10,200,0);
      textFont("Courier");
      textSize(14);
      text(s,i*w+8, j*w+8, w-1, w-1);
      // console.log(string[i]);

    }
  }
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
