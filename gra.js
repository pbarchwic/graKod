// Zmienne globalne
	var los ;
	var zgadnij;
	var p1='';
	var p2='';
	
// Pobieranie imion graczy

zatwierdz.addEventListener("click", playersName);

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

zagraj.addEventListener("click", gra);

function gra() {
	var playerTurn 
	zgadnij = document.getElementById('textbox').value;
    if (zgadnij == los) 
	{
		document.getElementById('wynik').style.color = "#5EDD44";
        document.getElementById('wynik').innerHTML = "Świetny strzał, świat uratowany" ;
    } 
	if (zgadnij < los) 
	{
		document.getElementById('wynik').style.color = "#DD4444";
        document.getElementById('wynik').innerHTML = "Kod niepoprawny,za nisko!"
    }
	if (zgadnij > los) 
	{
		document.getElementById('wynik').style.color = "#DD4444";
        document.getElementById('wynik').innerHTML = "Kod niepoprawny, za wysoko!";
    } 
	else if (zgadnij ='' || zgadnij.length !=4)
	{
		document.getElementById('wynik').style.color = "#DD4444";
		document.getElementById('wynik').innerHTML = "Wpisz poprawny kod!";
    }
}

//losowanie ukrytej liczby

losuj.addEventListener("click", losowanie);

 function losowanie() {
	 
	 if ( p1 !='' && p2!='')
	 {
		los = Math.floor((Math.random() * 9000) + 1000);
		document.getElementById('wylosowane').innerHTML = los;
		losuj.removeEventListener('click', losowanie);
	 }
	 else
	 {
		alert('Podaj imiona dwóch agentów!');
	 }

}	
// nowa gra

	reset.addEventListener("click", resetuj);
	
	function resetuj ()
	{
		location.reload()
	}
	

