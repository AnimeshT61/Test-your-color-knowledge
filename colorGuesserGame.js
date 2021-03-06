var colors=generateRandomColors(6);
var pickedColor=pickColor();
var numSquares=6;
var squares=document.querySelectorAll(".square");
var rightColor=document.querySelector("#rightcolor");
var messageDisp=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#ez");
var hardButton=document.querySelector("#hard");
rightColor.textContent=pickedColor;
easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	rightColor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});
hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	rightColor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		
			squares[i].style.backgroundColor=colors[i];
		
	
			squares[i].style.display="block";
	
	}
});
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	rightColor.textContent=pickedColor;
	messageDisp.textContent="";
	this.textContent="NEW COLORS";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.background="#232323";
});
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisp.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";

		}
		else{
			messageDisp.textContent="Try Again";
			this.style.backgroundColor="#232323";

		}
	});
}
function changeColors(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return ("rgb("+r+", "+g+", "+b+")");
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr[i]=randomColor();
	}
	return arr;
}