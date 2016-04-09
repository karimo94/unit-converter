// Lengths...
//detect which option is selected
//then do appropriate calculation
//grab the input text
//print to result text
var from_select;
var to_select;
var from_value;
var to_value;

function calcLen()
{
	//call this also when a from text is changed
	from_select = document.getElementById("selectmenu").value;
	to_select = document.getElementById("selectmenu2").value;
	from_value = Number(document.getElementById("textinput").value);
	if(from_select == "in")
	{
		if(to_select == "ft")
		{
			to_value = from_value / 12;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			to_value = from_value / 36;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			to_value = from_value / 63360;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			to_value = from_value * 25.4;
			$('#resultText').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 2.54;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			to_value = from_value / 39.370;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			to_value = from_value / 39370.07;
			$('#resultText').val(to_value);
		}
		if(to_select == "in")
		{
			$('#resultText').val(from_value);
		}
	}
	if(from_select == "ft")
	{
		if(to_select == "in")
		{
			to_value = from_value * 12;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			to_value = from_value / 3;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			to_value = from_value / 5280;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			to_value = from_value * 304.8;
			$('#resultText').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 30.48;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			to_value = from_value / 3.2808;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			to_value = from_value /  3,280.84;
			$('#resultText').val(to_value);
		}
		if(to_select == "ft")
		{
			$('#resultText').val(from_value);
		}
	}
	if(from_select == "yd") 
	{
		if(to_select == "in")
		{
			to_value = from_value * 36;
			$('#resultText').val(to_value);
		}
		if(to_select == "ft")
		{
			to_value = from_value * 3;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			to_value = from_value / 1760;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			to_value = from_value * 914.4;
			$('#resultText').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 91.44;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			to_value = from_value / 1.0936;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			to_value = from_value /  1093.6;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			$('#resultText').val(from_value);
		}
	}
	if(from_select == "mi")
	{
		if(to_select == "in")
		{
			to_value = from_value * 63360;
			$('#resultText').val(to_value);
		}
		if(to_select == "ft")
		{
			to_value = from_value * 5280;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			to_value = from_value * 1760;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			to_value = from_value * 1609344;
			$('#resultText').val(to_value.toString());
		}
		if(to_select == "cm")
		{
			to_value = from_value * 160934;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			to_value = from_value * 1609.34;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			to_value = from_value *  1.60934;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			$('#resultText').val(from_value);	
		}
	}
	if(from_select == "mm")
	{
		if(to_select == "in")
		{
			to_value = from_value * 0.039370;
			$('#resultText').val(to_value);
		}
		if(to_select == "ft")
		{
			to_value = from_value * 0.00328084;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			to_value = from_value * 0.00109361;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			to_value = from_value * 0.00000062;
			$('#resultText').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 0.1;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			to_value = from_value * 0.001;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			to_value = from_value / 1000000;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			$('#resultText').val(from_value);	
		}
	}
	if(from_select == "cm")
	{
		if(to_select == "in")
		{
			to_value = from_value * 0.39370;
			$('#resultText').val(to_value);
		}
		if(to_select == "ft")
		{
			to_value = from_value * 0.0328084;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			to_value = from_value * 0.0109361;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			to_value = from_value * 0.0000062137;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			to_value = from_value * 10;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			to_value = from_value * 0.01;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			to_value = from_value / 100000;
			$('#resultText').val(to_value);
		}
		if(to_select == "cm")
		{
			$('#resultText').val(from_value);	
		}
	}
	if(from_select == "m")
	{
		if(to_select == "in")
		{
			to_value = from_value * 39.3701;
			$('#resultText').val(to_value);
		}
		if(to_select == "ft")
		{
			to_value = from_value * 3.28084;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			to_value = from_value * 1.09361;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			to_value = from_value * 0.000621371;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			to_value = from_value * 1000;
			$('#resultText').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 100;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			to_value = from_value / 0.001;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			$('#resultText').val(from_value);	
		}
	}
	if(from_select == "km")
	{
		if(to_select == "in")
		{
			to_value = from_value * 39370.1;
			$('#resultText').val(to_value);
		}
		if(to_select == "ft")
		{
			to_value = from_value * 3280.84;
			$('#resultText').val(to_value);
		}
		if(to_select == "yd")
		{
			to_value = from_value * 1093.61;
			$('#resultText').val(to_value);
		}
		if(to_select == "mi")
		{
			to_value = from_value * 0.621371;
			$('#resultText').val(to_value);
		}
		if(to_select == "mm")
		{
			to_value = from_value * 1000000;
			$('#resultText').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 100000;
			$('#resultText').val(to_value);
		}
		if(to_select == "m")
		{
			to_value = from_value * 1000;
			$('#resultText').val(to_value);
		}
		if(to_select == "km")
		{
			$('#resultText').val(from_value);	
		}
	}
}
function l_from_change()
{
	//after a change, call calcLen()
	calcLen();
}
function l_to_change()
{
	//after a change, call calcLen()
	calcLen();
}
