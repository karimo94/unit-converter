// Volumes
var from_select;
var to_select;
var from_value;
var to_value;

function calcVol()
{
	//call this also when a from text is changed
	from_select = document.getElementById("selectmenu7").value;
	to_select = document.getElementById("selectmenu8").value;
	from_value = Number(document.getElementById("textinput4").value);
	if(from_select == "in")
	{
	}
	if(from_select == "ft")
	{
		
	}
	if(from_select == "yd") 
	{
		
	}
	if(from_select == "mi")
	{
		
	}
	if(from_select == "mm")
	{
		
	}
	if(from_select == "cm")
	{
		
	}
	if(from_select == "m")
	{
		
	}
}
function v_from_change()
{
	//after a change, call calcLen()
	calcLen();
}
function v_to_change()
{
	//after a change, call calcLen()
	calcLen();
}
