// affiche le clavier
    /* 
    On récupère l'élément qui a l'id keys
    On créé une liste non ordonnées ul 
    Dans la boucle for, à partir du tableau alphabet on créé des li pour chaque lettre
    Puis on ajoute ces lettres li à la liste ul
		*/
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 function myKeys(){
	myKeys = document.getElementById("keys");
	lettersList = document.createElement("ul");

	for(var i = 0; i < alphabet.length; i++){
		lettersList.id = "alphabet";
		list = document.createElement("li");
		list.innerHTML = alphabet[i];
		myKeys.appendChild(lettersList);
    lettersList.appendChild(list);
    }
	}

myKeys();

// créé les mots
/*
On prend un mot random dans le tableau words
Pour cacher les lettres, on remplace tous les caractères alphabetique par un underscore "_"
*/
var words = ["breaking bad", "sons of annarchy", "la casa de papel", "stranger things", "better call saul", "thirteen reasons why", "narcos", "black mirror", " the innocents", "the mist"]
var word = document.getElementById("guessWord");
var guessWord =  words[Math.floor(Math.random() * words.length)];
var hiddenWord = word.innerHTML  = guessWord.replace(/[a-z]/g, "_")

// cherche si les lettres sont dans le mot
/*
On récupère chaque élément de type li
Comme ceux ci sont renvoyés sous forme de collection HTML on les convertis en tableau JS avec Array.from()
On créé une boucle forEach() qui va placer un event listener sur chaque key
A chaque clique on vérifie si le mot à devinner inclut le caractère cliqué
Dans le cas où le caractère est inclut: 
On récupère la position de ce dit caractère  dans une variable char avec .charAt()
Ensuite on cherche la position de ce caractère que l'on stock dans une variable index
On récupère le mot caché hiddenWord "_ _ _" 
Grace à la position que nous renvoie la variable index on va pouvoir modifier le "_" en la lettre retournée

Il arrivera qu'on ait la même lettre plusieurs fois dans le mots:
On créé un tableau vide indices
Dans la boucle for on va parcourrir le mot
A chaque fois qu'une lettre similaire sera trouvée, ses index seront pushés dans le tableau indices
Enfin on crée une nouvelle boucle forEach et pour chaque lettre identique retrouvée, on va remplacer les "_" aux indices retrouvés

Lorsque le mot est complètement retrouvé un message de victoire s'affiche, et le pendu est décroché 


Dans le cas où le caractère n'est pas inclut: 
On incrémente la variable mistake de + 1
A chaque erreur on affiche un morceau du pendu
Au bout de 9 erreurs la partie se termine, le pendu est mort
*/
var mistakes = 0

var keys = Array.from(document.getElementsByTagName('li'));
var message = document.getElementById("message")


	keys.forEach(function(key){
		key.addEventListener("click", checkKey)
		
		function checkKey(){
			key.style.backgroundColor = "green"
			setTimeout(function(){
				key.style.backgroundColor = "#fff"
			}, 1000)	

			if(guessWord.includes(key.innerHTML)){
					for(var i = 0; i < hiddenWord.length; i+= 1){
						if(guessWord.charAt(i) === key.innerHTML){
							var char  = guessWord.charAt(i)	
							var index = guessWord.indexOf(char)
							var _remplace = hiddenWord.charAt(index)
						}
					}
					 var indices = [];
					 for(var i=0 ; i < guessWord.length  ;i+= 1) {
					    if(guessWord[i] === char) indices.push(i); // on peut écrire un if sur une ligne sans les accolades
					 }

					indices.forEach(function(indice){

						hiddenWord = hiddenWord.substr(0, indice) + char + hiddenWord.substr(indice + 1);
					})

					word.innerHTML = hiddenWord;
					if(!hiddenWord.includes("_")){
						myKeys.innerHTML = "";
						word.style.color = "green";
						word.innerHTML = hiddenWord.toUpperCase();
						word.style.letterSpacing = "0px";
						winner();
					}
				}
			else{
				key.style.backgroundColor = "red"
				mistakes += 1
				if(mistakes === 1){
					frameBottom();
				}
				else if(mistakes === 2){
					frameLeft();
				}
				else if(mistakes === 3){
					frameTop();
				}
				else if(mistakes === 4){
					frameRope();
				}
				else if(mistakes === 5){
					head();
				}
				else if(mistakes === 6){
					body();
				}
				else if(mistakes === 7){
					leftHarm();
				}
				else if(mistakes === 8){
					rightHarm();
				}
				else if(mistakes === 9){
					leftLeg();
				}
				else if(mistakes === 10){
					rightLeg();
					myKeys.innerHTML  = ""
					word.innerHTML = guessWord
					word.style.color = "red"
				}
			}
		}
	})

	// Raffraichit la page
function refresh(){
	location.reload()
}

// Dessine le pendu
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function frameTop(){
	ctx.fillStyle = "#fff"
	ctx.fillRect( 10, 10, 300, 5)
}

function frameLeft(){
	ctx.fillStyle = "#fff"
	ctx.fillRect( 10, 10, 5, 350)
}

function frameBottom(){
	ctx.fillStyle = "#fff"
	ctx.fillRect( 10, 360, 300, 5)
}

function frameRope(){
	ctx.fillStyle = "#fff"
	ctx.fillRect( 150, 15, 5, 55)
}

function head(){
	ctx.fillStyle = "red";	
	ctx.beginPath();
	ctx.arc(150, 95, 25, 0, Math.PI * 2, false)
	ctx.fill();
};

function body(){
	ctx.fillStyle = "#fff"
	ctx.fillRect( 150, 125, 5, 100)
};

function leftHarm(){
	ctx.fillStyle = "#fff"
	ctx.fillRect( 70, 150, 80, 5)
};

function rightHarm(){
	ctx.fillStyle = "#fff"
	ctx.fillRect( 150, 150, 80, 5)
};

function rightLeg() {
 ctx.fillStyle = "#fff";
 ctx.fillRect(155, 220, 5, 100);
};

function leftLeg() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(145, 220, 5, 100);
};


// Victoire, le pendu est décroché
function winner(){

	//nettoie le canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// affiche le message de victoire
	ctx.font = "50px Arial";
	ctx.fillStyle = "#fff"
	ctx.fillText("You won!",50,100);

	//head
	ctx.fillStyle = "green";	
	ctx.beginPath();
	ctx.arc(150, 175, 25, 0, Math.PI * 2, false)
	ctx.fill();

	//body
	ctx.fillStyle = "#fff"
	ctx.fillRect( 150, 200, 5, 100)

	//leftHarm
	ctx.fillStyle = "#fff"
	ctx.fillRect( 70, 250, 80, 5)

	//rightHarm
	ctx.fillStyle = "#fff"
	ctx.fillRect( 150,250, 80, 5)

	//rightLeg
	ctx.fillStyle = "#fff";
	ctx.fillRect(155, 300, 5, 100);


	//leftLeg
	ctx.fillStyle = "#fff";
	ctx.fillRect(145, 300, 5, 100);
}


