var flag;
var c=0;
var t;
function timedCount()
{
	document.getElementById("in").style.display = "none";
	document.getElementById('txt').value=c + "%";
	c=c+25;
	t=setTimeout("timedCount()",1000);
	if(c==150)
	{
		clearTimeout(t);
		document.getElementById("loading").style.display = "none";
		document.getElementById("body").style.display = "block";
	}
}
function fanye(){
	var element;
	element = document.getElementById("tupian");
	if(element.src.match("first"))
	{
		element.src="img/fanye.png";
		flag=1;
	}
	else if(element.src.match("fanye")&&flag==1)
	{
		element.src="img/sangongmen.png";
	}
	else if(element.src.match("sangongmen")&&flag==1)
	{
		element.src="img/fanye.png";
		flag=2;
	}
	else if(element.src.match("fanye")&&flag==2)
	{
		element.src=" img/huameitan.png";
	}
	else if(element.src.match("huameitan")&&flag==2)
	{
		element.src="img/fanye.png";
		flag=3;
	}
	else if(element.src.match("fanye")&&flag==3)
	{
		element.src="img/first.png";
	}
}
