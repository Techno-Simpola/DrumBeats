function handClick(){
alert("it is clicked");
}

var noOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<noOfButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handClick);

//be patient and think
}

