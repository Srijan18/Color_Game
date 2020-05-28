var colors = ColorArray(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var ColorDisplay = document.getElementById("ColorDisplay");
ColorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var counter = 0;
var CheckScore = document.querySelector("#score");
var d = 0;


resetButton.addEventListener("click", function() {
    //generate all new colors
    if(d==1)
    var c = 3;
    else c = 6;
	colors = ColorArray(c);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
    ColorDisplay.textContent = pickedColor;
    message.textContent = "";
    counter = 0;
    d = 0;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

for(var i = 0; i < squares.length; i++)
{
    squares[i].style.background = colors[i];

    //Add Event Listners

    squares[i].addEventListener("click", function()
    {
        if(this.style.background == pickedColor)
        {
            //alert("Hurray Well Done");
            message.textContent = "Correct";
            ChangeColors(pickedColor);
            h1.style.background = pickedColor;
            resetButton.textContent = "Play Again";
        }
        else
        {
            this.style.background = "#232323";
            message.textContent = "Wrong";
            counter++;
        }
    })
}

function ChangeColors(color)
{
    for(var i = 0 ; i < squares.length; i++)
{
    squares[i].style.background = color; 
}
}

function pickColor()
{
    return colors[Math.floor(Math.random() * colors.length )];
}

function ColorArray(num)
{
    var arr = [];
    for (var i = 0; i < num ; i++)
    {
        arr.push(RandomColors())
    }
    return arr;
}

function RandomColors()
{
    var r = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + b + ", " + g + ")";
}

easy.addEventListener("click",function()
{
    d = 1;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = ColorArray(3);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for(var i = 0; i <squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

});

hard.addEventListener("click",function()
{
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = ColorArray(6);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for(var i = 0; i <squares.length; i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});