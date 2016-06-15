// Memory
var from_select;
var to_select;
var from_value;
var to_value;
function calcMem()
{
	from_select = document.getElementById("selectmenu13").value;
	to_select = document.getElementById("selectmenu14").value;
	from_value = document.getElementById("textinput7").value;
	
	if(from_select == "mb")
	{
		if(to_select == "mb")
		{
			$('#resultText7').val(from_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 1048576;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 0.0009765625;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value * 9.5367431640625e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 9.313225746154785e-10;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 8;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 8000;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 8388608;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 0.008;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "kb")
	{
		if(to_select == "mb")
		{
			to_value = from_value / 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			$('#resultText7').val(from_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 9.5367431640625e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value * 9.313225746154785e-10;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 9.094947017729282e-13;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 0.008;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 8;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 8192;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 8e-6;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "by")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 9.5367431640625e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 0.0009765625;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			$('#resultText7').val(from_value);
			
		}
		if(to_select == "gb")
		{
			to_value = from_value * 9.313225746154785e-10;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value * 9.094947017729282e-13;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 8.881784197001252e-16;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 8e-6;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 0.008;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 8;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 8e-9;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "gb")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 1048576;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 1073741824;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			$('#resultText7').val(from_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value / 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 9.5367431640625e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 8000;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 8e+6;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 8e+9;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 8;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "tb")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 1048576;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 1073741824;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 1099511627776;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			$('#resultText7').val(from_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value / 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 8e+6;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 8e+9;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 8e+12;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 8000;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "pb")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 1e+9;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 1e+12;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 1e+15;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 1048576;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value / 1024;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			$('#resultText7').val(from_value);
			
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 8e+9;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 8e+12;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 8e+15;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 8e+6;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "mbi")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 0.125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 125000;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 0.000125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value * 1.25e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 1.25e-10;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			$('#resultText7').val(from_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 1000;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 1e+6;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 0.001;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "kbi")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 0.000125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 0.125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 1.25e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value * 1.25e-10;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 1.25e-13;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 0.001;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			$('#resultText7').val(from_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value * 1000;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 1e-6;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "bit")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 1.25e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 0.000125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 0.125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 1.25e-10;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value * 1.25e-13;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 1.25e-16;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 1e-6;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 0.001;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			$('#resultText7').val(from_value);
		}
		if(to_select == "gbi")
		{
			to_value = from_value * 1e-9;
			$('#resultText7').val(to_value);
		}
	}
	if(from_select == "gbi")
	{
		if(to_select == "mb")
		{
			to_value = from_value * 125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kb")
		{
			to_value = from_value * 125000;
			$('#resultText7').val(to_value);
		}
		if(to_select == "by")
		{
			to_value = from_value * 1.25e+8;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gb")
		{
			to_value = from_value * 0.125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "tb")
		{
			to_value = from_value * 0.000125;
			$('#resultText7').val(to_value);
		}
		if(to_select == "pb")
		{
			to_value = from_value * 1.25e-7;
			$('#resultText7').val(to_value);
		}
		if(to_select == "mbi")
		{
			to_value = from_value * 1000;
			$('#resultText7').val(to_value);
		}
		if(to_select == "kbi")
		{
			to_value = from_value * 1e+6;
			$('#resultText7').val(to_value);
		}
		if(to_select == "bit")
		{
			to_value = from_value *1e+9 ;
			$('#resultText7').val(to_value);
		}
		if(to_select == "gbi")
		{
			$('#resultText7').val(from_value);
		}
	}
}
function m_from_change()
{
	calcMem();
}
function m_to_change()
{
	calcMem();
}