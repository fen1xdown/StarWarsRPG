$(document).ready(function() {

	var players = 	[Bastila = {
						name: "Bastila Shan",
						healthPoints: 200,
						initialAttackPower: 9,
						attackPower: 9,
						counterAttackPower: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
					}, 
					Malak = {
						name: "Darth Malak",
						healthPoints: 120,
						initialAttackPower: 15,
						attackPower: 15,
						counterAttackPower: 20,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					Jolee = {
						name: "Jolee",
						healthPoints: 180,
						initialAttackPower: 10,	
						attackPower: 10,
						counterAttackPower: 10,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					Juhani = {
						name: "Juhani",
						healthPoints: 140,
						initialAttackPower: 13,
						attackPower: 13,
						counterAttackPower: 2,
						isPlayerOne: false,
						isPlayerTwo: false,
					}]				
	var player;
	var opponent;
	playerOneSelected = false;
	playerTwoSelected = false;
	gameStart = false;
	var enemiesRemaining = players.length -1;

	playerSelect();
	startBattle();

	function playerSelect(){
		$("#Bastila").on("click", function() {
			if (playerOneSelected === false){
					console.log("Bastila is first player");
				$("#Bastila").appendTo("#player-fight-area");
				$("#player-name").text(Bastila.name);
				$("#player-hp").text("player health");
				$("#player-total-hp").text(Bastila.healthPoints);
				playerOneSelected = true;
				Bastila.isPlayerOne = true;
				player = Bastila;			
				$("#Bastila").addClass('flipped');
				setTimeout(enemySelect, 1000 *2);
					console.log("player one is " + playerOneSelected);
				}
		});	
	
		$("#Malak").on("click", function() {
			if (playerOneSelected === false){
					console.log("Malak is first player");
				$("#Malak").appendTo("#player-fight-area");
				$("#player-name").text(Malak.name);
				$("#player-hp").text("player health");
				$("#player-total-hp").text(Malak.healthPoints);
				playerOneSelected = true;
				Malak.isPlayerOne = true;
				player = Malak;
				$("#Malak").addClass('flipped');
					console.log("player one is " + playerOneSelected);
				setTimeout(enemySelect, 1000 *2);
			}
		});	
	
		$("#Jolee").on("click", function() {
			if (playerOneSelected === false){
					console.log("Jolee is first player");
				$("#Jolee").appendTo("#player-fight-area");
				$("#player-name").text(Jolee.name);
				$("#player-hp").text("player health");
				$("#player-total-hp").text(Jolee.healthPoints);
				$("#player-total-hp").text(Jolee.healthPoints);
				playerOneSelected = true;
				Jolee.isPlayerOne = true;
				player = Jolee;
					console.log("player one is " + playerOneSelected);
				setTimeout(enemySelect, 1000 *2);
			}
		});	
	
		$("#Juhani").on("click", function() {
			if (playerOneSelected === false){
					console.log("Juhani is first player");
				$("#Juhani").appendTo("#player-fight-area");
				$("Juhani").addClass('flipped');
				$("#player-name").text(Juhani.name);
				$("#player-hp").text("player health");
				$("#player-total-hp").text(Juhani.healthPoints);
				playerOneSelected = true;
				Juhani.isPlayerOne = true;
				player = Juhani;
				$("#Juhani").addClass('flipped');
					console.log("player one is " + playerOneSelected);
				setTimeout(enemySelect, 1000 *2);
			}
		});	
	}

	function enemySelect(){
		$("#select-text").text("Select your Opponent");
		$("#Bastila").on("click", function() {
			if (playerTwoSelected === false && Bastila.isPlayerOne === false){
				console.log("Bastila is second player");
			$("#Bastila").appendTo("#opponent-fight-area");
			$("#opponent-name").text(Bastila.name);
			$("#opponent-hp").text("player health");
			$("#opponent-total-hp").text(Bastila.healthPoints);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			opponent = Bastila;
			$("#select-text").text("");
				console.log("player two is " + playerTwoSelected);
			}
		});	
	
		$("#Malak").on("click", function() {
			if (playerTwoSelected === false && Malak.isPlayerOne === false){
					console.log("Malak is second player");
				$("#Malak").appendTo("#opponent-fight-area");
				$("#opponent-name").text(Malak.name);
				$("#opponent-hp").text("player health");
				$("#opponent-total-hp").text(Malak.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				opponent = Malak;
				$("#select-text").text("");
					console.log("gamestart is " + gameStart);
					console.log("player two is " + playerTwoSelected);
			}
		});	
	
		$("#Jolee").on("click", function() {
			if (playerTwoSelected === false && Jolee.isPlayerOne === false){
					console.log("Jolee is second player");
				$("#Jolee").appendTo("#opponent-fight-area");
				$("#opponent-name").text(Jolee.name);
				$("#opponent-hp").text("player health");
				$("#opponent-total-hp").text(Jolee.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				opponent = Jolee;
				$("#Jolee").addClass('flipped');
				$("#select-text").text("");
					console.log("player two is " + playerTwoSelected);
			}
		});	
	
		$("#Juhani").on("click", function() {
			if (playerTwoSelected === false && Juhani.isPlayerOne === false){
					console.log("Juhani is second player");
				$("#Juhani").appendTo("#opponent-fight-area");
				$("#opponent-name").text(Juhani.name);
				$("#opponent-hp").text("player health");
				$("#opponent-total-hp").text(Juhani.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				opponent = Juhani;
				$("#select-text").text("");
					console.log("player two is " + playerTwoSelected);
			}
		});	
	}
	function checkProgress(){
			if (enemiesRemaining === 0){
			gameWin();
		}
		else {	
			gameStart = false;
				if (enemiesRemaining === 2){
				}
				else if (enemiesRemaining === 1){
		}
			$("#opponent-fight-area").empty();
			$("#opponent-name").text("");
			$("#opponent-total-hp").text("");
			setTimeout(function(){playerTwoSelected = false}, 1000 * 2.8);
			setTimeout(function(){$("#select-text").text("Select your Opponent")}, 1000 *2.8);
				console.log("player two selected is " + playerTwoSelected);
		}	
	}

	function attack(){
		opponent.healthPoints = opponent.healthPoints - player.attackPower;
		$("#opponent-total-hp").text(opponent.healthPoints);
			console.log("opponent HP is " + opponent.healthPoints);
	}

	function counterAttack(){
		player.healthPoints = player.healthPoints - opponent.counterAttackPower;
		$("#player-total-hp").text(player.healthPoints);
			console.log("player HP is " + player.healthPoints);
			console.log("opponent counter attack power is " + opponent.counterAttackPower)
		if (player.healthPoints <= 0){
			gameLose();	
		}
	}

	function increaseAttackPower(){
		player.attackPower = player.attackPower + player.initialAttackPower;
			console.log("player attack power is " + player.attackPower);
	}	
	function gameReset(){
					[Bastila = {
						name: "Bastila Shan",
						healthPoints: 120,
						initialAttackPower: 8,
						attackPower: 8,
						counterAttackPower: 2,
						isPlayerOne: false,
						isPlayerTwo: false,
					}, 
					Malak = {
						name: "Darth Malak",
						healthPoints: 100,
						initialAttackPower: 9,
						attackPower: 9,
						counterAttackPower: 5,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					Jolee = {
						name: "Jolee",
						healthPoints: 150,
						initialAttackPower: 2,	
						attackPower: 2,
						counterAttackPower: 20,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					Juhani = {
						name: "Juhani",
						healthPoints: 180,
						initialAttackPower: 1,
						attackPower: 1,
						counterAttackPower: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
					}]				
			playerOneSelected = false;
			playerTwoSelected = false;
			enemiesRemaining = players.length - 1;
			$("#select-text").text("Select your Character")
			$("#game-end-container",).html("");
			$("#game-end-text-container").html("");
			$("#opponent-name").text("");
			$("#opponent-hp").text("");
			$("#player-name").text("");
			$("#player-hp").text("");
			$("#player-total-hp").text("");
			$("#opponent-total-hp").text("");
			$("#player-fight-area").html("");
			$("#opponent-fight-area").html("");
			$(".character-selection-section").html("");
			$("<img class ='character' id='Jolee' src = 'assets/images/Jolee.jpg'/>").appendTo(".character-selection-section");
			$("<img class ='character' id='Malak' src = 'assets/images/Darth_Malak.png'/>").appendTo(".character-selection-section");
			$("<img class ='character' id='Bastila' src = 'assets/images/Bastila_shan.png'/>").appendTo(".character-selection-section");
			$("<img class ='character' id='Juhani' src = 'assets/images/Juhani.jpg' />").appendTo(".character-selection-section");
			console.log("game has reset");
			playerSelect();
	}

	function gameWin() {
		$("#opponent-total-hp").text(0);
		console.log("you win")	
		gameStart = false;
		$("#game-end-text-container").html("You are the last Jedi standing!");
		$("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
			"position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
			"text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
		setTimeout(gameReset, 1000 * 8);
	}

	function gameLose() {
		$("#player-total-hp").text(0);
		gameStart = false;
		console.log("you lose");
		$("#game-end-text-container").html("Game Over");
		$("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
			"position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
			"text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
		setTimeout(gameReset, 1000 * 8);	
	}
	//this is the main battle code, once players have been selected. use the attack button to
	//initiate attacks. 
	function startBattle(){
		$("#attack-button").on("click", function() {
			console.log("button pressed");
			if (gameStart === true){   	
				attack();
				increaseAttackPower();
				if (opponent.healthPoints <= 0){
				enemiesRemaining--;
				console.log("enemies remaining is " + enemiesRemaining);
				checkProgress();
				}
				else {
				counterAttack();
				}
			}		
		});		
	}	
});