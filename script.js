 var output;

function clkbtn(vlu)
{
    document.getElementById("screen").value+=vlu;
    
}
function clr()
{
    document.getElementById("screen").value="";
}
function res()
{
    var text=document.getElementById("screen").value;
    var result=eval(text)
    document.getElementById("screen").value=result;
}

 