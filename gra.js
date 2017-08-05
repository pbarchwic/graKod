// Zmienne globalne
	var los ;
	var ruchy = 0;
	var zgadnij;
	var p1
	var p2

// Pobieranie imion graczy


function playersName()
{
    var fieldPlayer1 = document.forms['player1'].p1;
    p1 = fieldPlayer1.value;
	
    var fieldPlayer2 = document.forms['player2'].p2;
    p2 = fieldPlayer2.value;

if (p1 != '' && p2!='')
	{
        document.getElementById('hello').innerHTML = "Witaj Agencie "+ p1 +" oraz Agencie "+ p2 +". Czy jesteście gotowi uratowac świat?!";
	}
    else
    {
        alert('Podaj imiona dwóch agentów!');
    }
    return true;
}

	
	
// Wypisywanie odpowiedniego komunikatu
function gra() {
		zgadnij = document.getElementById('textbox').value;
    if (zgadnij == los) 
	{
        document.getElementById('wynik').innerHTML = "Świetny strzał, świat uratowany" ;
    } 
	if (zgadnij < los) 
	{
        document.getElementById('wynik').innerHTML = "Kod niepoprawny,za nisko!";
        ruchy++;
    }
	if (zgadnij > los) 
	{
        document.getElementById('wynik').innerHTML = "Kod niepoprawny, za wysoko!";
        ruchy++;
    } 
	else if (zgadnij ='' || zgadnij.length !=4)
	{
        document.getElementById('wynik').innerHTML = "Wpisz poprawny kod!";
    }
}

//losowanie ukrytej liczby

 function losowanie() {
    los = Math.floor((Math.random() * 9000) + 1000);
	document.getElementById('wylosoane').innerHTML = los;
}	


