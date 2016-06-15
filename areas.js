// Areas
var from_select;
var to_select;
var from_value;
var to_value;
function calcArea()
{
	from_select = document.getElementById("selectmenu15").value;
	to_select = document.getElementById("selectmenu16").value;
	from_value = document.getElementById("textinput8").value;
	if(from_select == "sqm")  //square meter
	{
		if(to_select == "sqm")  //square meter
		{
			$('#resultText8').val(from_value);
		}
		if(to_select == "mh") //metric hectare
		{
			to_value = from_value * 1e-4;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sk") //sq km
		{
			to_value = from_value * 1e-6;
			$('#resultText8').val(to_value);
		}
		if(to_select == "si") //sq inch
		{
			to_value = from_value * 1550;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sf") //sq ft
		{
			to_value = from_value * 10.7639;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sm") //sq miles
		{
			to_value = from_value * 3.861e-7;
			$('#resultText8').val(to_value);
		}
		if(to_select == "ac") //acres
		{
			to_value = from_value * 0.000247105;
			$('#resultText8').val(to_value);
		}
	}
	if(from_select == "mh") //metric hectare
	{
		if(to_select == "sqm")  //square meter
		{
			to_value = from_value * 10000;
			$('#resultText8').val(to_value);
		}
		if(to_select == "mh") //metric hectare
		{
			$('#resultText8').val(from_value);
		}
		if(to_select == "sk") //sq km
		{
			to_value = from_value * 0.01;
			$('#resultText8').val(to_value);
		}
		if(to_select == "si") //sq inch
		{
			to_value = from_value *1.55e+7 ;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sf") //sq ft
		{
			to_value = from_value * 107639;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sm") //sq miles
		{
			to_value = from_value * 0.00386102;
			$('#resultText8').val(to_value);
		}
		if(to_select == "ac") //acres
		{
			to_value = from_value * 2.47105;
			$('#resultText8').val(to_value);
		}
	}
	if(from_select == "sk") //sq km
	{
		if(to_select == "sqm")  //square meter
		{
			to_value = from_value * 1e+6;
			$('#resultText8').val(to_value);
		}
		if(to_select == "mh") //metric hectare
		{
			to_value = from_value * 100;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sk") //sq km
		{
			$('#resultText8').val(from_value);
		}
		if(to_select == "si") //sq inch
		{
			to_value = from_value * 1.55e+9;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sf") //sq ft
		{
			to_value = from_value * 1.076e+7;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sm") //sq miles
		{
			to_value = from_value * 0.386102;
			$('#resultText8').val(to_value);
		}
		if(to_select == "ac") //acres
		{
			to_value = from_value * 247.105;
			$('#resultText8').val(to_value);
		}
	}
	if(from_select == "si") //sq inch
	{
		if(to_select == "sqm")  //square meter
		{
			to_value = from_value * 0.00064516;
			$('#resultText8').val(to_value);
		}
		if(to_select == "mh") //metric hectare
		{
			to_value = from_value * 6.4516e-8;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sk") //sq km
		{
			to_value = from_value * 6.4516e-10;
			$('#resultText8').val(to_value);
		}
		if(to_select == "si") //sq inch
		{
			$('#resultText8').val(from_value);
		}
		if(to_select == "sf") //sq ft
		{
			to_value = from_value * 0.00694444;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sm") //sq miles
		{
			to_value = from_value * 2.491e-10;
			$('#resultText8').val(to_value);
		}
		if(to_select == "ac") //acres
		{
			to_value = from_value * 1.5942e-7;
			$('#resultText8').val(to_value);
		}
	}
	if(from_select == "sf") //sq ft
	{
		if(to_select == "sqm")  //square meter
		{
			to_value = from_value * 0.092903;
			$('#resultText8').val(to_value);
		}
		if(to_select == "mh") //metric hectare
		{
			to_value = from_value * 9.2903e-6;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sk") //sq km
		{
			to_value = from_value * 9.2903e-8;
			$('#resultText8').val(to_value);
		}
		if(to_select == "si") //sq inch
		{
			to_value = from_value * 144;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sf") //sq ft
		{
			$('#resultText8').val(from_value);
		}
		if(to_select == "sm") //sq miles
		{
			to_value = from_value * 3.587e-8;
			$('#resultText8').val(to_value);
		}
		if(to_select == "ac") //acres
		{
			to_value = from_value * 2.2957e-5;
			$('#resultText8').val(to_value);
		}
	}
	if(from_select == "sm") //sq miles
	{
		if(to_select == "sqm")  //square meter
		{
			to_value = from_value * 2.59e+6;
			$('#resultText8').val(to_value);
		}
		if(to_select == "mh") //metric hectare
		{
			to_value = from_value * 258.999;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sk") //sq km
		{
			to_value = from_value * 2.58999;
			$('#resultText8').val(to_value);
		}
		if(to_select == "si") //sq inch
		{
			to_value = from_value * 4.014e+9;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sf") //sq ft
		{
			to_value = from_value * 2.788e+7;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sm") //sq miles
		{
			$('#resultText8').val(from_value);
			
		}
		if(to_select == "ac") //acres
		{
			to_value = from_value * 640;
			$('#resultText8').val(to_value);
		}
	}
	if(from_select == "ac") //acres
	{
		if(to_select == "sqm")  //square meter
		{
			to_value = from_value * 4046.86;
			$('#resultText8').val(to_value);
		}
		if(to_select == "mh") //metric hectare
		{
			to_value = from_value * 0.404686;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sk") //sq km
		{
			to_value = from_value * 0.00404686;
			$('#resultText8').val(to_value);
		}
		if(to_select == "si") //sq inch
		{
			to_value = from_value * 6.273e+6;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sf") //sq ft
		{
			to_value = from_value * 43560;
			$('#resultText8').val(to_value);
		}
		if(to_select == "sm") //sq miles
		{
			to_value = from_value * 0.0015625;
			$('#resultText8').val(to_value);
		}
		if(to_select == "ac") //acres
		{
			$('#resultText8').val(from_value);
			
		}
	}
}
function a_from_change()
{
	calcArea();
}
function a_to_change()
{
	calcArea();
}