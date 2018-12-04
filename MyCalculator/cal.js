
function fun(){
var a = prompt("select one option from below\n"+"1.Add \n"+" 2.Subtract\n"+" 3.Multiply\n "+"4.Divide\n"+" 5.Exponent\n "+"6.Mean\n"+" 7.Quit");
if(a<8 && a>0)
{
    if(a==1)
    {
        var x = prompt("Enter first number");
        var y = prompt("Enter second number");
        var add =parseInt (x) +parseInt(y) ;
        document.getElementById("demo").value=add;
    }
    if(a==2)
    {
        var x = prompt("Enter first number");
        var y = prompt("Enter second number");
        var sub =parseInt (x) - parseInt(y) ;
        document.getElementById("demo").value=sub;
    }
    if(a==3)
    {
        var x = prompt("Enter first number");
        var y = prompt("Enter second number");
        var mul =parseInt (x) * parseInt(y) ;
        document.getElementById("demo").value=mul;
    }
    if(a==4)
    {
        var x = prompt("Enter first number");
        var y = prompt("Enter second number");
        var div =parseInt (x) / parseInt(y) ;
        document.getElementById("demo").value=div;
    }
    if(a==5)
    {
        var x = prompt("Enter first number");
        var y = prompt("Enter second number");
        var Exp = parseInt(Math.pow(x,y));
        document.getElementById("demo").value=Exp;
    }
    if(a==6)
    {
        var a=0;
        for(i=1;;i++){
        var x = prompt("Enter first number");
        if(!isNaN(x) && x!="*")
        {
            a = a + x;
            continue;
        }
        if(x =="***")
        {
            break;
        a = a/a.length; 
        }
    }
}
    if(a==7)
    {
        
    }
}
}