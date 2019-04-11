/////////////////////////////////////////////////////////////////////////////////////
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
///// STACK 'how do i replace a character at a particular index in JavaScript?' /////

//var key = "IDZIE GRZEŚ PRZEZ WIEŚ";
var key = "";
var keyRand=Math.ceil(Math.random()*(keyArray.length-1));
	key = keyArray[keyRand];

//var keyDLWS = "19";  // <--- Declared Length Without Spaces // Ilość znaków bez spacji //
var keyDLWS = 0;

key = key.toUpperCase();

var keyLength = key.length;

var keyTemp = "";

var lettArr = new Array(32);

var counter = 0;

var fail = 0;

var lettFindIndex = 0;

var progr = 0;

for (i=0; i<keyLength; i++)
{
	if (key.charAt(i) == " ")
	{
		keyTemp = keyTemp + " ";	
	} else {
		keyTemp = keyTemp + "-";
		keyDLWS++;
	}
}


function showKey() {
	
	document.getElementById("key").innerHTML = keyTemp;
	
	alphabet();
}

window.onload = showKey;

function clickMe(letter) {

	for (i=0; i<keyLength; i++) {
		if (key.charAt(i) == letter) {
			counter++;
			progr++;
			lettFindIndex = lettArr.indexOf(letter);
			var letterid = "lett" + lettFindIndex;
			keyTemp = setCharAt(keyTemp,i,letter);
			document.getElementById("key").innerHTML = keyTemp;
			document.getElementById(letterid).onclick = " ";
			document.getElementById(letterid).style = "border-color: #14EC14; cursor: default; pointer-events: none;";
		}
	}
		if (counter <= 0) {
			counter = 0;
			fail++;
			lettFindIndex = lettArr.indexOf(letter);
			var letterid = "lett" + lettFindIndex;
			document.getElementById("progress").innerHTML = "<img src='img/" + fail + ".png' alt='LEVEL " + fail + "'>";
			document.getElementById(letterid).onclick = " ";
			document.getElementById(letterid).style = "border-color: #ff0000; cursor: default; pointer-events: none;";
		} else {
			counter = 0;
		}
		
		if (fail >= 8)
		{
		document.getElementById("letters").style = "margin: 0 auto; padding: 0;";
		document.getElementById("letters").innerHTML = "<div align='center' class='end' ><h1 style='color: red;'>GAME OVER</h1><button class='button' onClick='window.location.reload()'>&raquo; Jeszcze raz! &laquo;</button></div>";
		document.getElementById("key").innerHTML = key;
		}
		
		if (progr >= keyDLWS) { 
		document.getElementById("letters").style = "margin: 0 auto; padding: 0;";
		document.getElementById("letters").innerHTML = "<div align='center'><h1 class='end' style='color: green;'>ZWYCIĘSTWO</h1><button class='button' onClick='window.location.reload()'>&raquo; Jeszcze raz! &laquo;</button></div>";		
		}
}

function alphabet() {
	var htmlAlphabetPart1 = "<div class=letter id=lett";
	var htmlAlphabetPart2 = " onclick=clickMe('";
	var htmlAlphabetPart3 = "')> ";
	var htmlAlphabetPart4 = " </div>";
	var abcd = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";
	var abcdLength = abcd.length;
	var ALPHA = "";
	
	for (i=0; i<abcdLength; i++)
	{
		var htmlAlphabet = htmlAlphabetPart1 + i + htmlAlphabetPart2 + abcd.charAt(i) + htmlAlphabetPart3 + abcd.charAt(i) + htmlAlphabetPart4;
		ALPHA = ALPHA + htmlAlphabet;
		document.getElementById("letters").innerHTML = ALPHA;
		lettArr[i] = abcd.charAt(i);
	}
}
