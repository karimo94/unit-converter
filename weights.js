// Weights...
var from_select;
var to_select;
var from_value;
var to_value;
function calcMass()
{
	from_select = document.getElementById("selectmenu3").value;
	to_select = document.getElementById("selectmenu4").value;
	from_value = Number(document.getElementById("textinput2").value);
	if(from_select == "kg")
	{
		if(to_select == "gr")
		{
			to_value = from_value * 1000;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mg")
		{
			to_value = from_value * 1000000;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "oz")
		{
			to_value = from_value * 35.274;
			$('#resultText2').val(to_value);
		}
		if(to_select == "lb")
		{
			to_value = from_value * 2.20462;
			$('#resultText2').val(to_value);
		}
		if(to_select == "ut")
		{
			to_value = from_value * 0.00110231;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mt")
		{
			to_value = from_value * 0.001;
			$('#resultText2').val(to_value);
		}
		if(to_select == "kg")
		{
			$('#resultText2').val(from_value);
		}
	}
	if(from_select == "gr")
	{
		if(to_select == "kg")
		{
			to_value = from_value / 1000;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mg")
		{
			to_value = from_value * 1000;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "oz")
		{
			to_value = from_value * 0.035274;
			$('#resultText2').val(to_value);
		}
		if(to_select == "lb")
		{
			to_value = from_value * 0.00220462;
			$('#resultText2').val(to_value);
		}
		if(to_select == "ut")
		{
			to_value = from_value * 1.1023113e-06;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mt")
		{
			to_value = from_value * 1e-6;
			$('#resultText2').val(to_value);
		}
		if(to_select == "gr")
		{
			$('#resultText2').val(from_value);
		}
	}
	if(from_select == "mg")
	{
		if(to_select == "mg")
		{
			$('#resultText2').val(from_value);
		}
		if(to_select == "kg")
		{
			to_value = from_value * 1e-6;
			$('#resultText2').val(to_value);
		}
		if(to_select == "gr")
		{
			to_value = from_value / 1000;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "oz")
		{
			to_value = from_value * 3.5274e-5;
			$('#resultText2').val(to_value);
		}
		if(to_select == "lb")
		{
			to_value = from_value * 2.20462e-6;
			$('#resultText2').val(to_value);
		}
		if(to_select == "ut")
		{
			to_value = from_value * 1.10231e-9;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mt")
		{
			to_value = from_value * 1e-9;
			$('#resultText2').val(to_value);
		}
	}
	if(from_select == "oz")
	{
		if(to_select == "mg")
		{
			to_value = from_value * 28349.5;
			$('#resultText2').val(to_value);
		}
		if(to_select == "kg")
		{
			to_value = from_value * 0.0283495;
			$('#resultText2').val(to_value);
		}
		if(to_select == "gr")
		{
			to_value = from_value * 28.3495;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "oz")
		{
			$('#resultText2').val(from_value);
		}
		if(to_select == "lb")
		{
			to_value = from_value / 16;
			$('#resultText2').val(to_value);
		}
		if(to_select == "ut")
		{
			to_value = from_value * 3.125e-5;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mt")
		{
			to_value = from_value * 2.83495e-5;
			$('#resultText2').val(to_value);
		}
	}
	if(from_select == "lb")
	{
		if(to_select == "mg")
		{
			to_value = from_value * 453592;
			$('#resultText2').val(to_value);
		}
		if(to_select == "kg")
		{
			to_value = from_value * 0.453592;
			$('#resultText2').val(to_value);
		}
		if(to_select == "gr")
		{
			to_value = from_value * 453.592;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "oz")
		{
			to_value = from_value * 16;
			$('#resultText2').val(to_value);
		}
		if(to_select == "lb")
		{
			$('#resultText2').val(from_value);
		}
		if(to_select == "ut")
		{
			to_value = from_value / 10000;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mt")
		{
			to_value = from_value * 0.000453592;
			$('#resultText2').val(to_value);
		}
	}
	if(from_select == "ut")
	{
		if(to_select == "mg")
		{
			to_value = from_value * 9.072e+8;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "kg")
		{
			to_value = from_value * 907.185;
			$('#resultText2').val(to_value);
		}
		if(to_select == "gr")
		{
			to_value = from_value * 907185;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "oz")
		{
			to_value = from_value * 32000;
			$('#resultText2').val(to_value);
		}
		if(to_select == "lb")
		{
			to_value = from_value * 2000;
			$('#resultText2').val(to_value);
		}
		if(to_select == "ut")
		{
			$('#resultText2').val(from_value);
		}
		if(to_select == "mt")
		{
			to_value = from_value * 0.907185;
			$('#resultText2').val(to_value);
		}
	}
	if(from_select == "mt")
	{
		if(to_select == "mg")
		{
			to_value = from_value * 1e+9;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "kg")
		{
			to_value = from_value * 1000;
			$('#resultText2').val(to_value);
		}
		if(to_select == "gr")
		{
			to_value = from_value * 1000000;
			$('#resultText2').val(to_value.toString());
		}
		if(to_select == "oz")
		{
			to_value = from_value * 32000;
			$('#resultText2').val(to_value);
		}
		if(to_select == "lb")
		{
			to_value = from_value * 2204.62;
			$('#resultText2').val(to_value);
		}
		if(to_select == "ut")
		{
			to_value = from_value * 1.10231;
			$('#resultText2').val(to_value);
		}
		if(to_select == "mt")
		{
			$('#resultText2').val(from_value);
		}
	}
}
function w_from_change()
{
	calcMass();
}
function w_to_change()
{
	calcMass();
}