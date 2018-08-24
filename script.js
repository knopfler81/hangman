

	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
	      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	      't', 'u', 'v', 'w', 'x', 'y', 'z'];

	const words = ["chat", "chien", "maison", "table"]


	 function myKeys(){
		myKeys = document.getElementById("keys");
		lettersList = document.createElement("ul");

		for(var i = 0; i < alphabet.length; i++){
			lettersList.id = "alphabet";
			list = document.createElement("li");
			list.id = "letter";
			list.innerHTML = alphabet[i];
			myKeys.appendChild(lettersList);
	    lettersList.appendChild(list);
	    }
		}

myKeys();

	



	draw();

	function draw(){
		frameTop();
		frameLeft();
		frameBottom();
		frameRope();
		head();
		body();
		leftHarm();
		rightHarm();
		leftLeg();
		rightLeg();
	}

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
		ctx.fillRect( 150, 15, 5, 150)
	}

	function head(){
		ctx.fillStyle = "red";	
		ctx.beginPath();
		ctx.arc(150, 100, 25, 0, Math.PI * 2, false)
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
