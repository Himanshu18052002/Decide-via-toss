var rand1 = Math.floor((Math.random() * 6)+1);
var rand2 = Math.floor((Math.random() * 6)+1);
var randomImg1 = "images/dice" + rand1 + ".png";
var randomImg2 = "images/dice" + rand2 + ".png";
var imgg1 = document.querySelectorAll("img")[0];
var imgg2 = document.querySelectorAll("img")[1];
imgg1.setAttribute("src" , randomImg1);
imgg2.setAttribute("src" , randomImg2);
var h = document.querySelector("h1");
if(rand1 > rand2)
{
  h.innerHTML = "Player 1 Wins 🚩";
}
else if(rand2 > rand1)
{
  h.innerHTML = "Player 2 Wins 🚩";
}
else{
  h.innerHTML = "Tie Play again ⭐";
}
