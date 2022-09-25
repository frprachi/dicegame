
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomdicename ="images/dice"+ randomNumber1+".png";
var iamge1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdicename );

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomdicename2 ="images/dice"+ randomNumber2+".png";
var iamge2 = document.querySelectorAll("img")[1].setAttribute("src",randomdicename2 );

if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="player 1 winsssss yayayyayy";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="player 2 winsssss oyyYYyaya";
}
else
{
  document.querySelector("h1").innerHTML="drawww sad";
}
