function check ()
{
    var g = ""
    var time = new Date().getHours();
    if (time < 12)
    {
        g = "Good Morning"
    }
    else if (time < 20)
    {
        g = "Good Day"
    }
    else
    {
        g = "Good Evening"
    }
    document.getElementById('hour').innerHTML = "Current time is : " + time;
    document.getElementById('greet').innerHTML = "The message is "   + g;
}