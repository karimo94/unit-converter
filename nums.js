// Number systems
var from_select;
var to_select;
var from_value;

function calcNum()
{
	from_select = document.getElementById("selectmenu11").value;
	to_select = document.getElementById("selectmenu12").value;
	from_value = document.getElementById("textinput6").value;
	if(from_select == "dec")
	{
		//first check if its a valid decimal...
		if(isDec(from_value))
		{
			if(to_select == "bin")
			{
				$('#resultText6').val(decToBin(from_value));
			}
			if(to_select == "hex")
			{
				$('#resultText6').val(decToHex(from_value));
			}
			if(to_select == "oct")
			{
				$('#resultText6').val(decToOct(from_value));
			}
			if(to_select == "dec")
			{
				$('#resultText6').val(from_value);
			}
		}
		//if its not...
		else
		{
			$('#resultText6').val("Not a valid decimal number!");
		}
	}
	if(from_select == "bin")
	{
		//first check if its a valid binary number...
		if(isBin(from_value))
		{
			if(to_select == "dec")
			{
				$('#resultText6').val(binToDec(from_value));
			}
			if(to_select == "hex")
			{
				$('#resultText6').val(binToHex(from_value));
			}
			if(to_select == "oct")
			{
				$('#resultText6').val(binToOct(from_value));
			}
			if(to_select == "bin")
			{
				$('#resultText6').val(from_value);
			}
		}
		//if its not...
		else
		{
			$('#resultText6').val("Not a valid binary number!");
		}
	}
	if(from_select == "hex")
	{
		//first check if its a valid hex number...
		if(isHex(from_value))
		{
			if(to_select == "dec")
			{
				$('#resultText6').val(hexToDec(from_value));
			}
			if(to_select == "bin")
			{
				$('#resultText6').val(hexToBin(from_value));
			}
			if(to_select == "oct")
			{
				$('#resultText6').val(hexToOct(from_value));
			}
			if(to_select == "hex")
			{
				$('#resultText6').val(from_value);
			}
		}
		//if its not...
		else
		{
			$('#resultText6').val("Not a valid hexadecimal number!");
		}
	}
	if(from_select == "oct")
	{
		//first check if its a valid binary number...
		if(isOct(from_value))
		{
			if(to_select == "dec")
			{
				$('#resultText6').val(octToDec(from_value));
			}
			if(to_select == "hex")
			{
				$('#resultText6').val(octToHex(from_value));
			}
			if(to_select == "bin")
			{
				$('#resultText6').val(octToBin(from_value));
			}
			if(to_select == "oct")
			{
				$('#resultText6').val(from_value);
			}
		}
		//if its not...
		else
		{
			$('#resultText6').val("Not a valid octal number!");
		}
	}
}
//to hex
function decToHex(num)
{
	return parseInt(num, 10).toString(16).toUpperCase();
}
function octToHex(num)
{
	return parseInt(num, 8).toString(16).toUpperCase();
}
function binToHex(num)
{
	return parseInt(num, 2).toString(16).toUpperCase();
}
//to decimal
function hexToDec(num)
{
	return parseInt(num, 16).toString(10);
}
function binToDec(num)
{
	return parseInt(num, 2).toString(10);
}
function octToDec(num)
{
	return parseInt(num, 8).toString(10);
}
//to octal
function hexToOct(num)
{
	return parseInt(num, 16).toString(8);
}
function decToOct(num)
{
	return parseInt(num, 10).toString(8);
}
function binToOct(num)
{
	return parseInt(num, 2).toString(8);
}
//to binary
function hexToBin(num)
{
	return parseInt(num, 16).toString(2);
}
function decToBin(num)
{
	return parseInt(num, 10).toString(2);
}
function octToBin(num)
{
	return parseInt(num, 8).toString(2);
}
//checks for valid number formats
function isHex(num)
{
	return /^[0-9a-fA-f]+$/.test(num);
}
function isDec(num)
{
	return /^[0-9]+$/.test(num);
}
function isOct(num)
{
	return /^[0-8]+$/.test(num);
}
function isBin(num)
{
	return /^[0-1]+$/.test(num);
}
function n_from_change()
{
	calcNum();
}
function n_to_change()
{
	calcNum();
}