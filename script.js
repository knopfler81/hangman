
// dessine le pendu
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

// clavier
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 function myKeys(){
	myKeys = document.getElementById("keys");
	lettersList = document.createElement("ul");

	for(var i = 0; i < alphabet.length; i++){
		lettersList.id = "alphabet";
		list = document.createElement("li");
		// list.id = "letter";
		list.innerHTML = alphabet[i];
		myKeys.appendChild(lettersList);
    lettersList.appendChild(list);
    }
	}

myKeys();


var words = ["breaking bad", "sons of annarchy", "la casa de papel", "stranger things", "better call saul", "thirteen reasons why", "narcos", "black mirror"]


var word = document.getElementById("word");

guessWord =  words[Math.floor(Math.random() * words.length)];

var hiddenWord = word.innerHTML  = guessWord.replace(/[a-z]/g, "_")

var mistakes = 0

// cherche si lettres dans le mot

function refresh(){
	location.reload()
}

var buttons = Array.from(document.getElementsByTagName('li'));

	buttons.forEach(function(button){
		button.addEventListener("click", checkButton)
		
		function checkButton(){
			button.style.backgroundColor = "green"
			setTimeout(function(){
				button.style.backgroundColor = "#fff"
			}, 1000)	

			if(guessWord.includes(button.innerHTML)){
					for(var i = 0; i < hiddenWord.length; i+= 1){
						if(guessWord.charAt(i) === button.innerHTML){
							var char  = guessWord.charAt(i)	
							var index = guessWord.indexOf(char)
							var _remplace = hiddenWord.charAt(index)
						}
					}
					 var indices = [];
					 for(var i=0 ; i < guessWord.length  ;i+= 1) {
					    if(guessWord[i] === char) indices.push(i);
					 }

					indices.forEach(function(indice){

						hiddenWord = hiddenWord.substr(0, indice) + char + hiddenWord.substr(indice + 1);
					})
					word.innerHTML = hiddenWord
				}
			else{
				button.style.backgroundColor = "red"
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
				}
			}
		}
	})



