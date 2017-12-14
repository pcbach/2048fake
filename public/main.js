var key = "block";
var score = 0;
updateScore();
for(var i = 1 ; i <= 4 ; i++ ){
	for(var j = 1;j <= 4; j++){
		var id = key + i + "-" + j; 
		//console.log(id);
		var blockRef = document.getElementById(id);
		blockRef.innerHTML = "<p></p>";
	}
}
var x = Math.floor((Math.random() * 4) + 1);
var y = Math.floor((Math.random() * 4) + 1);
var x_ = Math.floor((Math.random() * 4) + 1);
var y_ = Math.floor((Math.random() * 4) + 1);
var id = key + x + "-" + y; 
var blockRef = document.getElementById(id);
blockRef.innerHTML = "<p>2</p>";
blockRef.className = "n2";
while(x_===x && y_===y){
	x_ = Math.floor((Math.random() * 4) + 1);
	y_ = Math.floor((Math.random() * 4) + 1);
}
id = key + x_ + "-" + y_; 
blockRef = document.getElementById(id);
blockRef.innerHTML = "<p>2</p>";
blockRef.className = "n2";

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
    	console.log("up");
    	upMove();
    	updateScore();
        // up arrow
    }else if (e.keyCode == '40') {
    	console.log("down");
    	downMove();
    	updateScore();
        // down arrow
    }else if (e.keyCode == '37') {
    	console.log("left");
    	leftMove();
    	updateScore();
       // left arrow
    }else if (e.keyCode == '39') {
    	console.log("right");
    	rightMove();
    	updateScore();
       // right arrow
    }
}

function updateScore(){
	var scoreRef = document.getElementById("score");
	scoreRef.innerHTML = "<p>"+score+"</p>";
}
function gen(){
	var val = Math.floor((Math.random() * 3) + 1);
		x_ = Math.floor((Math.random() * 4) + 1);
		y_ = Math.floor((Math.random() * 4) + 1);
		id = key + x_ + "-" + y_; 
		blockRef = document.getElementById(id);
		while(blockRef.innerHTML!="<p></p>"){
			x_ = Math.floor((Math.random() * 4) + 1);
			y_ = Math.floor((Math.random() * 4) + 1);
			id = key + x_ + "-" + y_; 
			blockRef = document.getElementById(id);
		}
		if(val==1){
			blockRef.innerHTML = "<p>"+4+"</p>";
			blockRef.className = "n4";
		}
		else {
			blockRef.innerHTML = "<p>"+2+"</p>";
			blockRef.className = "n2";
		}
}

function processs(array){
	var resArray = [];
	for(var i = 0 ; i < array.length ; i++ ){
		if(array[i]==array[i+1]){resArray.push(array[i]*2);i++;score+=array[i]*2;}
		else resArray.push(array[i]);
	}
	return resArray;
}
function upMove(){
	var preProcessArray, processedArray, move=false;
	for(var j = 1 ; j <= 4 ; j++ ){
		preProcessArray = [];
		var move_=-1;
		for(var i = 1; i <= 4 ; i++ ){
			id = key + i + "-" + j; 
			blockRef = document.getElementById(id);
			var x = blockRef.innerHTML;
			x = x.slice(3);
			x = x.slice(0,x.length-4);
			//console.log(x);
			if(x!=""){
				preProcessArray.push(x);
				if(move_==0)move=true;
			}
			else{
				move_=0;
			}
		}
		processedArray = processs(preProcessArray);
		for(var i = 0; i < 4 ; i++ ){
			id = key + (i+1) + "-" + j; 
			blockRef = document.getElementById(id);
			if(i<processedArray.length){
				blockRef.innerHTML = "<p>" + processedArray[i] +"</p>"; 
				blockRef.className = "n" +  processedArray[i];
			}
			else{
				blockRef.innerHTML = "<p></p>"; 
				blockRef.className = "blank";
			}
		}
		preProcessArray=[];
		processedArray=[];
	}
	if(move){
		gen();
	}
}

function downMove(){
	var preProcessArray, processedArray, move=false;
	for(var j = 1 ; j <= 4 ; j++ ){
		preProcessArray = [];
		var move_=-1;
		for(var i = 4; i >=1 ; i-- ){
			id = key + i + "-" + j; 
			blockRef = document.getElementById(id);
			var x = blockRef.innerHTML;
			x = x.slice(3);
			x = x.slice(0,x.length-4);
			//console.log(x);
			if(x!=""){
				preProcessArray.push(x);
				if(move_==0)move=true;
			}
			else{
				move_=0;
			}
		}
		processedArray = processs(preProcessArray);
		for(var i = 0; i < 4 ; i++ ){
			id = key + (4-i) + "-" + j; 
			blockRef = document.getElementById(id);
			if(i<processedArray.length){
				blockRef.innerHTML = "<p>" + processedArray[i] +"</p>"; 
				blockRef.className = "n" +  processedArray[i];
			}
			else{
				blockRef.innerHTML = "<p></p>"; 
				blockRef.className = "blank";
			}
		}
		preProcessArray=[];
		processedArray=[];
	}
	if(move){
		gen();
	}
}

function rightMove(){
	var preProcessArray, processedArray, move=false;
	for(var i = 1 ; i <= 4 ; i++ ){
		preProcessArray = [];
		var move_=-1;
		for(var j = 4; j >=1 ; j-- ){
			id = key + i + "-" + j; 
			blockRef = document.getElementById(id);
			var x = blockRef.innerHTML;
			x = x.slice(3);
			x = x.slice(0,x.length-4);
			//console.log(x);
			if(x!=""){
				preProcessArray.push(x);
				if(move_==0)move=true;
			}
			else{
				move_=0;
			}
		}
		processedArray = processs(preProcessArray);
		for(var j = 0; j < 4 ; j++ ){
			id = key + i + "-" + (4-j); 
			blockRef = document.getElementById(id);
			if(j<processedArray.length){
				blockRef.innerHTML = "<p>" + processedArray[j] +"</p>";
				blockRef.className = "n" +  processedArray[j];
			}
			else{
				blockRef.innerHTML = "<p></p>"; 
				blockRef.className = "blank";
			}
		}
		preProcessArray=[];
		processedArray=[];
	}
	if(move){
		gen();
	}
}

function leftMove(){
	var preProcessArray, processedArray, move=false;
	for(var i = 1 ; i <= 4 ; i++ ){
		preProcessArray = [];
		var move_=-1;
		for(var j = 1; j <= 4 ; j++ ){
			id = key + i + "-" + j; 
			blockRef = document.getElementById(id);
			var x = blockRef.innerHTML;
			x = x.slice(3);
			x = x.slice(0,x.length-4);
			//console.log(x);
			if(x!=""){
				preProcessArray.push(x);
				if(move_==0)move=true;
			}
			else{
				move_=0;
			}
		}
		processedArray = processs(preProcessArray);
		for(var j = 0; j < 4 ; j++ ){
			id = key + i + "-" + (j+1); 
			blockRef = document.getElementById(id);
			if(j<processedArray.length){
				blockRef.innerHTML = "<p>" + processedArray[j] +"</p>"; 
				blockRef.className = "n" +  processedArray[j];
			}
			else{
				blockRef.innerHTML = "<p></p>"; 
				blockRef.className = "blank";
			}
		}
		preProcessArray=[];
		processedArray=[];
	}
	if(move){
		gen();
	}
}

