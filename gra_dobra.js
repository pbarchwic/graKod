

function namep1()
{
    // przypisanie obiektu pola tekstowego do zmiennej
    var pole_imie = document.forms['player1'].p1;
    // odczyt imienia
    var p1 = pole_imie.value;
    // sprawdzenie czy imie jest wpisane
if (p1 != '')
	{
        document.getElementById('hellop1').innerHTML = "Witaj Agencie "+ p1+" oraz Agencie" ;
	}
    else
    {
        alert('Wpisz swoje imię!');
        pole_imie.focus();
    }
    return false;
}
function namep2()
{
    // przypisanie obiektu pola tekstowego do zmiennej
    var pole_imie = document.forms['player2'].p2;
    // odczyt imienia
    var p2 = pole_imie.value;
    // sprawdzenie czy imie jest wpisane
if (p2 != '')
	{
    
	document.getElementById('hellop2').innerHTML = "witaj "+ p2 ;
	}
    else
    {
        alert('Wpisz swoje imię!');
        pole_imie.focus();
    }
    return false;
}

	var los ;
	var ruchy = 0;
	var zgadnij;

	document.getElementById('graj').addEventListener('click', gra);
	
function gra() {
		zgadnij = document.getElementById('textbox').value;
    if (zgadnij == los) {
        document.getElementById('wynik').innerHTML = "GRATULACJE";
    } if (zgadnij < los) {
        document.getElementById('wynik').innerHTML = "Kod niepoprawny,za nisko. Niech teraz podejmie probę agent ";
        ruchy++;
    } if (zgadnij > los) {
        document.getElementById('wynik').innerHTML = "za wysoko";
        ruchy++;
    } else if (zgadnij==="")
	{
        document.getElementById('wynik').innerHTML = "Wpisz poprawny kod!";
    }
}


document.getElementById('losuj').addEventListener('click', losowanie);



 function losowanie() {
    los = Math.floor((Math.random() * 9000) + 1000);
	document.getElementById('wylosowane').innerHTML = los;
}	


