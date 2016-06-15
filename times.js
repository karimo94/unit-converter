//Time...
var from_select;
var to_select;
var from_value;
var to_value;
function calcTime()
{
	from_select = document.getElementById("selectmenu5").value;
	to_select = document.getElementById("selectmenu6").value;
	from_value = Number(document.getElementById("textinput3").value);

	if(from_select == "mins")
	{
		if(to_select == "hrs")
		{
			to_value = from_value / 60;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			to_value = from_value * 60;
			$('#resultText3').val(to_value);
		}
		if(to_select == "ms")
		{
			to_value = from_value * 60000;
			$('#resultText3').val(to_value);
		}
		if(to_select == "ns")
		{
			to_value = from_value * 6e+10;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value * 0.000694444;
			$('#resultText3').val(to_value);
		}
		if(to_select == "wk")
		{
			to_value = from_value * 9.92063e-5;
			$('#resultText3').val(to_value);
		}
		if(to_select == "mo")
		{
			to_value = from_value * 2.2831e-5;
			$('#resultText3').val(to_value);
		}
		if(to_select == "yr")
		{
			to_value = from_value * 1.90259e-6;
			$('#resultText3').val(to_value);
		}
		if(to_select == "mins")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "hrs")
	{
		if(to_select == "secs")
		{
			to_value = from_value * 3600;
			$('#resultText3').val(to_value);
		}
		if(to_select == "ms")
		{
			to_value = from_value * 3.6e+6;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ns")
		{
			to_value = from_value * 3.6e+12;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value / 24;
			$('#resultText3').val(to_value);
		}
		if(to_select == "wk")
		{
			to_value = from_value / 168;
			$('#resultText3').val(to_value);
		}
		if(to_select == "mo")
		{
			to_value = from_value * 0.00136986;
			$('#resultText3').val(to_value);
		}
		if(to_select == "yr")
		{
			to_value = from_value * 0.000114155;
			$('#resultText3').val(to_value);
		}
		if(to_select == "mins")
		{
			to_value = from_value * 60;
			$('#resultText3').val(to_value);
		}
		if(to_select == "hrs")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "secs")
	{
		if(to_select == "hrs")
		{
			to_value = from_value / 3600;
			$('#resultText3').val(to_value);
		}
		if(to_select == "ms")
		{
			to_value = from_value * 1000;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ns")
		{
			to_value = from_value * 1e+9;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value * 1.15741e-5;
			$('#resultText3').val(to_value);
		}
		if(to_select == "wk")
		{
			to_value = from_value * 1.65344e-6;
			$('#resultText3').val(to_value);
		}
		if(to_select == "mo")
		{
			to_value = from_value * 3.80517e-7;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "yr")
		{
			to_value = from_value * 3.17098e-8;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mins")
		{
			to_value = from_value / 60;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "ms")
	{
		if(to_select == "hours")
		{
			to_value = from_value * 2.77778e-7;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			to_value = from_value / 1000;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ns")
		{
			to_value = from_value * 1000000;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value * 1.15741e-8;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "wk")
		{
			to_value = from_value * 1.65344e-9;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mo")
		{
			to_value = from_value * 3.80517e-10;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "yr")
		{
			to_value = from_value * 3.17098e-11;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mins")
		{
			to_value = from_value * 1.66667e-5;
			$('#resultText3').val(to_value);
		}
		if(to_select == "ms")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "ns")
	{
		if(to_select == "hours")
		{
			to_value = from_value * 2.77778e-13;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			to_value = from_value * 1e-9;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mins")
		{
			to_value = from_value * 1.66667e-11;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value * 1.15741e-14;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "wk")
		{
			to_value = from_value * 1.6534e-15;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mo")
		{
			to_value = from_value * 3.8052e-16;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "yr")
		{
			to_value = from_value * 3.171e-17;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ms")
		{
			to_value = from_value * 1e-6;
			$('#resultText3').val(to_value);
		}
		if(to_select == "ns")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "da")
	{
		if(to_select == "hours")
		{
			to_value = from_value * 24;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			to_value = from_value * 86400;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mins")
		{
			to_value = from_value * 1440;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ns")
		{
			to_value = from_value * 8.64e+13;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "wk")
		{
			to_value = from_value / 7;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mo")
		{
			to_value = from_value * 0.0328767;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "yr")
		{
			to_value = from_value / 365;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ms")
		{
			to_value = from_value * 8.64e+7;
			$('#resultText3').val(to_value);
		}
		if(to_select == "da")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "wk")
	{
		if(to_select == "hrs")
		{
			to_value = from_value * 168;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			to_value = from_value * 604800;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mins")
		{
			to_value = from_value * 10080;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ns")
		{
			to_value = from_value * 6.048e+14;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value / 7;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mo")
		{
			to_value = from_value * 0.230137;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "yr")
		{
			to_value = from_value / 52;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ms")
		{
			to_value = from_value * 6.048e+8;
			$('#resultText3').val(to_value);
		}
		if(to_select == "wk")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "mo")
	{
		if(to_select == "hrs")
		{
			to_value = from_value * 730.001;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			to_value = from_value * 2.628e+6;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mins")
		{
			to_value = from_value * 43800;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ns")
		{
			to_value = from_value * 2.628e+15;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value / 7;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "wk")
		{
			to_value = from_value * 4.34524;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "yr")
		{
			to_value = from_value / 12;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ms")
		{
			to_value = from_value * 2.628e+9;
			$('#resultText3').val(to_value);
		}
		if(to_select == "mo")
		{
			$('#resultText3').val(from_value);
		}
	}
	if(from_select == "yr")
	{
		if(to_select == "hrs")
		{
			to_value = from_value * 8760;
			$('#resultText3').val(to_value);
		}
		if(to_select == "secs")
		{
			to_value = from_value * 3.154e+7;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mins")
		{
			to_value = from_value * 525600;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ns")
		{
			to_value = from_value * 3.154e+16;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "da")
		{
			to_value = from_value * 365;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "wk")
		{
			to_value = from_value * 52.1429;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "mo")
		{
			to_value = from_value * 12;
			$('#resultText3').val(to_value.toString());
		}
		if(to_select == "ms")
		{
			to_value = from_value * 3.154e+10;
			$('#resultText3').val(to_value);
		}
		if(to_select == "yr")
		{
			$('#resultText3').val(from_value);
		}
	}
}
function t_from_change()
{
	calcTime();
}
function t_to_change()
{
	calcTime();
}