var text = "";
var i = 0;
while (i < 20)
{
    text += "<br> The Number is " + i;
    i++;
}
document.getElementById("number").innerHTML = text;    