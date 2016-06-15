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
	if(from_select == "ls")
	{
		if(to_select == "ls")
		{
			$('#resultText4').val(from_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 0.001;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ci") 
		{
			to_value = from_value * 61.0237;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cf")
		{
			to_value = from_value * 0.0353147;
			$('#resultText4').val(to_value);
		}
		if(to_select == "pi")
		{
			to_value = from_value * 2.11338;
			$('#resultText4').val(to_value);
		}
		if(to_select == "qu")
		{
			to_value = from_value * 1.05669;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ga")
		{
			to_value = from_value * 0.264172;
			$('#resultText4').val(to_value);
		}
	}
	if(from_select == "cm")
	{
		if(to_select == "ls")
		{
			to_value = from_value * 1000;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cm")
		{
			$('#resultText4').val(from_value);
		}
		if(to_select == "ci") 
		{
			to_value = from_value * 61023.7;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cf")
		{
			to_value = from_value * 35.3147;
			$('#resultText4').val(to_value);
		}
		if(to_select == "pi")
		{
			to_value = from_value * 2113.38;
			$('#resultText4').val(to_value);
		}
		if(to_select == "qu")
		{
			to_value = from_value * 1056.69;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ga")
		{
			to_value = from_value * 264.172;
			$('#resultText4').val(to_value);
		}
	}
	if(from_select == "ci") 
	{
		if(to_select == "ls")
		{
			to_value = from_value * 0.0163871;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 1.63871e-5;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ci") 
		{
			$('#resultText4').val(from_value);
		}
		if(to_select == "cf")
		{
			to_value = from_value * 0.000578704;
			$('#resultText4').val(to_value);
		}
		if(to_select == "pi")
		{
			to_value = from_value * 0.034632;
			$('#resultText4').val(to_value);
		}
		if(to_select == "qu")
		{
			to_value = from_value * 0.017316;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ga")
		{
			to_value = from_value * 0.004329;
			$('#resultText4').val(to_value);
		}
	}
	if(from_select == "cf")
	{
		if(to_select == "ls")
		{
			to_value = from_value * 28.3168;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 0.0283168;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ci") 
		{
			to_value = from_value * 1728;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cf")
		{
			$('#resultText4').val(from_value);
		}
		if(to_select == "pi")
		{
			to_value = from_value * 59.8442;
			$('#resultText4').val(to_value);
		}
		if(to_select == "qu")
		{
			to_value = from_value * 29.9221;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ga")
		{
			to_value = from_value * 7.48052;
			$('#resultText4').val(to_value);
		}
	}
	if(from_select == "pi")
	{
		if(to_select == "ls")
		{
			to_value = from_value * 0.473176;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 0.000473176;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ci") 
		{
			to_value = from_value * 28.875;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cf")
		{
			to_value = from_value * 0.0167101;
			$('#resultText4').val(to_value);
		}
		if(to_select == "pi")
		{
			$('#resultText4').val(from_value);
		}
		if(to_select == "qu")
		{
			to_value = from_value / 2;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ga")
		{
			to_value = from_value / 8;
			$('#resultText4').val(to_value);
		}
	}
	if(from_select == "qu")
	{
		if(to_select == "ls")
		{
			to_value = from_value * 0.946353;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 0.000946353;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ci") 
		{
			to_value = from_value * 57.75;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cf")
		{
			to_value = from_value * 0.0334201;
			$('#resultText4').val(to_value);
		}
		if(to_select == "pi")
		{
			to_value = from_value * 2;
			$('#resultText4').val(to_value);
		}
		if(to_select == "qu")
		{
			$('#resultText4').val(from_value);
		}
		if(to_select == "ga")
		{
			to_value = from_value / 4;
			$('#resultText4').val(to_value);
		}
	}
	if(from_select == "ga")
	{
		if(to_select == "ls")
		{
			to_value = from_value * 3.78541;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cm")
		{
			to_value = from_value * 0.00378541;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ci") 
		{
			to_value = from_value * 231;
			$('#resultText4').val(to_value);
		}
		if(to_select == "cf")
		{
			to_value = from_value * 0.133681;
			$('#resultText4').val(to_value);
		}
		if(to_select == "pi")
		{
			to_value = from_value * 8;
			$('#resultText4').val(to_value);
		}
		if(to_select == "qu")
		{
			to_value = from_value * 4;
			$('#resultText4').val(to_value);
		}
		if(to_select == "ga")
		{
			$('#resultText4').val(from_value);
		}
	}
}
function v_from_change()
{
	calcVol();
}
function v_to_change()
{
	calcVol();
}
