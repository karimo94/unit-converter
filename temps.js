// Temps
var from_select;
var to_select;
var from_value;
var to_value;
function calcTemp()
{
	from_select = document.getElementById("selectmenu9").value;
	to_select = document.getElementById("selectmenu10").value;
	from_value = Number(document.getElementById("textinput5").value);
	if(from_select == "ce")
	{
		if(to_select == "ce")
		{
			$('#resultText5').val(from_value);
		}
		if(to_select == "fa")
		{
			to_value = (from_value * (9/5)) + 32;
			$('#resultText5').val(to_value);
		}
		if(to_select == "ke")
		{
			to_value = from_value + 273.15;
			$('#resultText5').val(to_value);
		}
	}
	if(from_select == "fa")
	{
		if(to_select == "ce")
		{
			to_value = (from_value - 32) * (5/9);
			$('#resultText5').val(to_value);
		}
		if(to_select == "fa")
		{
			$('#resultText5').val(from_value);
		}
		if(to_select == "ke")
		{
			to_value = (from_value + 459.67) * (5/9);
			$('#resultText5').val(to_value);
		}
	}
	if(from_select == "ke")
	{
		if(to_select == "ce")
		{
			to_value = from_value - 273.15;
			$('#resultText5').val(to_value);
		}
		if(to_select == "fa")
		{
			to_value = from_value * (9/5) - 459.67;
			$('#resultText5').val(to_value);
		}
		if(to_select == "ke")
		{
			$('#resultText5').val(from_value);
		}
	}
}
function temp_from_change()
{
	calcTemp();
}
function temp_to_change()
{
	calcTemp();
}