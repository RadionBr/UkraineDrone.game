audioPlayer = document.querySelector("audio");

startButton = document.querySelector("#start button"); //кнопка старт
startBlock = document.querySelector("#start"); //наш стартовый блок который отображаеться
gameBlock = document.querySelector("#game"); //наш игровой блок где видно игроков
instrButton = document.querySelector("#btn");


gamerSkin = "skin_1";

countLifes = 3;

score = document.querySelector("#score span");


function pilotN() {
	let name = prompt('Як тебе звати?');
  alert(`Доброго дня пілот ${name} ! «Слава нації — смерть ворогам!»`);
}

instrButton.onclick = function() {
	alert("Бомби свиней, які вкрали речі з магазинів та роби з них шашлики");
	alert("w,a,s,d - керування дроном, spece, q,e - арсенал");
	alert("це інтерактивна гра дограй до кінця сюжету");
	function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Чи Вам зрозуміла ви інструкція ?",
  function() { alert("Тоді гоу до гри."); },
  function() { alert("Якщо Вам не зрозуміла концепція @radionbr - питайте в телеграмі."); }
);
}

startButton.onclick = function() {    //при событии нажатия на кнопку старт (создаем функцию)
	startGame();
}

sound = "off"; // "off" работаем с функцией audio к которой относиться идентификатор саунд

soundButton = document.querySelector("#sound img"); //назначаем кнопку переменной в картинку
soundButton.onclick = function() { //при событии клика на картинку задаем функцию
	if (sound == "on") { //если картинка включена, а мы на неё кликаем
		soundButton.src = "images/mute_sound.png"; //значит картинка при клике поменяеться на "звука нет"
		sound = "off"; //соответственно звук функционально выключаеться
		audioPlayer.pause(); //функция нашего аудио плеера становиться на паузу
	} else { //иначе
		soundButton.src = "images/sound_on.png"; //наша картинка при след клике
		sound = "on"; //поменеться на картинку "включено"
		audioPlayer.play(); //наш аудио плеер сново стартонёт и будет трек играть
	}
}

gamer = document.querySelector("#player"); //работаем с блоком нашего игрока

document.onkeydown = function(event) { //при событии нажатия на кнопку вниз
	console.dir(event) //обращаемся в консоль разработчика, смотрим древо что в елементе
			if(event.keyCode == 69) {
				createRaketa();
			}
	    if(event.keyCode == 32) {
    	createBullet();
    }
    	if(event.keyCode ==81) {
    	createMina();
    	}
    if(event.keyCode == 68) {
    	gamer.style.left = gamer.offsetLeft + 100 + "px";
    }
    if(gamer.offsetLeft >= 1130) {
    	gamer.style.left = 1130 + "px"
    } 
    if(event.keyCode == 65) {
    	gamer.style.left = gamer.offsetLeft - 100 + "px";
    }
    if(gamer.offsetLeft <= 60) {
    	gamer.style.left = 60 + "px";
    } if(event.keyCode == 68) {
    	gamer.style.left = gamer.offsetLeft + 100 + "px";
    		if(gamer.offsetLeft >= 1130) {
    	gamer.style.left = 1130 + "px"
    } 
    }
	if(event.keyCode == 87) { //событие при котором кликаем кнопку вверх, что есть 87й код данной кнопки или просто w
		gamer.style.top = gamer.offsetTop - 100 + "px"; //меняем стартовую позицию и ей добавляеться 10 пикселей по оси
	}
    if (gamer.offsetTop <= 30) {
    gamer.style.top = 30 + "px"; 
    } 
	if(event.keyCode == 83) { // событие при котором кнопка s у нас срабатывает
		gamer.style.top = gamer.offsetTop + 100 + "px";	//меняем стартовую позицию и отправляем координаты на 10 пикселей вниз
	}
    if(gamer.offsetTop >=  511) {
    	gamer.style.top = 511 + "px";
    } if(event.keyCode == 87) {
    	gamer.style.top = gamer.offsetTop - 100 + "px";
    	    if (gamer.offsetTop <=  30) {
    	gamer.style.top = 30 + "px"; 
    } 
    }
}

addEventListener("keydown", function(event) {

if (event.keyCode == 65) {
	if (gamerSkin == "skin_1")
{
	gamer.style.background  = "url(images/player_1left.png)"}
if (gamerSkin == "skin_2") {
	gamer.style.background  = "url(images/player_2left.png)"
	}
}
if  (event.keyCode == 68) {
 if (gamerSkin == "skin_1")
 {
 	gamer.style.background  = "url(images/player_1.png)" 
 }
	if (gamerSkin == "skin_2")
{ 
	gamer.style.background  = "url(images/player_2.png)"
 }
		}
			})


function startGame() { // функция при которой мы клиекнули на кнопку старт и отобразили основное поле
	startBlock.style.display = "none"; //скрываем наш первый блок
	gameBlock.style.display = "block"; //отображаем наш второй блок
	gamer.className = gamerSkin;
	soundButton.src = "images/sound_on.png";
	audioPlayer.play();
	pilotN();
	createEnemy(); //отображаем нашего врага в нашем стартовом блоке
	createEnemy2();
	createEnemy3();
	createLifes();
	createHimars();
	createInstr();
	msG();
}



/*создал хаймарс*/
function createHimars() {
	let himars = document.createElement("div");
		himars.className = "himars";
		himars.style.top = 550 + "px";
		himars.style.left = 80 + "px";

	gameBlock.appendChild(himars);
}	


function createInstr() {
	let instr = document.createElement("div");
		instr.className = "instr";
		instr.style.top = 70 + "px";
		instr.style.left = 70 + "px";

	gameBlock.appendChild(instr);
}	



/*
Работа с врагами
*/
function createEnemy() { // создаём функцию при которой создадим елемент без html 
	let enemy = document.createElement("div"); // задаём ращирение елемента которое хотим создать
		enemy.className = "enemy " + typeEnemy();

		enemy.style.top = 454 + "px";
	
	gameBlock.appendChild(enemy); // создаём наш елемент данной функцией

	moveEnemy(enemy); //функция движения нашего врага, прикрепили к нему же созданному 

}

function createEnemy2() { // создаём функцию при которой создадим елемент без html 
	let enemy = document.createElement("div"); // задаём ращирение елемента которое хотим создать
		enemy.className = "enemy " + typeEnemy2();

		enemy.style.top = 456 + "px";
	
	gameBlock.appendChild(enemy); // создаём наш елемент данной функцией

	moveEnemy2(enemy); //функция движения нашего врага, прикрепили к нему же созданному 

}

function createEnemy3() { // создаём функцию при которой создадим елемент без html 
	let enemy = document.createElement("div"); // задаём ращирение елемента которое хотим создать
		enemy.className = "enemy " + typeEnemy3();

		enemy.style.top = 456 + "px";
	
	gameBlock.appendChild(enemy); // создаём наш елемент данной функцией

	moveEnemy3(enemy); //функция движения нашего врага, прикрепили к нему же созданному 

}


function typeEnemy() {
	if(random(1, 2) == 1) {
		return "type-1";
	} else {
		return "type-2";
	}
}

function typeEnemy2() {
	if(random(3, 4) == 4) {
		return "type-3";
	} else {
		return "type-4";
	}
}

function typeEnemy3() {
	if(random(5, 6) == 5) {
		return "type-5";
	} else {
		return "type-6";
	}
}


function moveEnemy3(enemy) { //задаём функцию движения врага
	let timerID = setInterval(function() { // делаем усорвия для таймера в нашем интервале движения
		enemy.style.left = enemy.offsetLeft - 10 + "px"; //позиция по которой передвигаеться обьект в отступ 10 пикселей
		if(enemy.offsetLeft < -100) { // если наш отступ от краёв уже за -100
			enemy.remove(); //убираем обьект
			createEnemy(); // ещё создаём
			// остановить таймер
			clearInterval(timerID); //останавливаем таймер 
			die();
		}
	}, 100); // на 1 сек
}


function moveEnemy2(enemy) { //задаём функцию движения врага
	let timerID = setInterval(function() { // делаем усорвия для таймера в нашем интервале движения
		enemy.style.left = enemy.offsetLeft - 15 + "px"; //позиция по которой передвигаеться обьект в отступ 10 пикселей
		if(enemy.offsetLeft < -100) { // если наш отступ от краёв уже за -100
			enemy.remove(); //убираем обьект
			createEnemy(); // ещё создаём
			// остановить таймер
			clearInterval(timerID); //останавливаем таймер 
			die();
		}
	}, 100); // на 1 сек
}


function moveEnemy(enemy) { //задаём функцию движения врага
	let timerID = setInterval(function() { // делаем усорвия для таймера в нашем интервале движения
		enemy.style.left = enemy.offsetLeft - 20 + "px"; //позиция по которой передвигаеться обьект в отступ 10 пикселей
		if(enemy.offsetLeft < -100) { // если наш отступ от краёв уже за -100
			enemy.remove(); //убираем обьект
			createEnemy(); // ещё создаём
			// остановить таймер
			clearInterval(timerID); //останавливаем таймер 
			die();
		}
	}, 100); // на 1 сек
}


/* создать выстрелы */
function createBullet() {
	let bullet = document.createElement("div");
		bullet.className = "bullet";
		bullet.style.top = gamer.offsetTop + 120 + "px";
		bullet.style.left = gamer.offsetLeft + 70 + "px";

	gameBlock.appendChild(bullet);	
	moveBullet(bullet);
}

function moveBullet(bullet) {
	let timerID = setInterval(function() { // делаем усорвия для таймера в нашем интервале движения
		bullet.style.top = bullet.offsetTop + 15 + "px"; //позиция по которой передвигаеться обьект в отступ 10 пикселей
		if(bullet.offsetTop > document.querySelector("body").clientWidth) { // если наш отступ от краёв уже за -100
			bullet.remove(); //убираем обьект
			clearInterval(timerID); //останавливаем таймер 
		}

		isBoom(bullet);
	}, 10); // на 10 секундах
}

/*создаю мину*/

function createMina() {
	let mina = document.createElement("div");
		mina.className = "mina";
		mina.style.top = gamer.offsetTop + 120 + "px";
		mina.style.left = gamer.offsetLeft + 70 + "px";

	gameBlock.appendChild(mina);
	moveMina(mina);	
}

function moveMina(mina) {
	let timerID = setInterval(function() {
		mina.style.top = mina.offsetTop + 5 + "px";
		if(mina.offsetTop > document.querySelector("body").clientWidth) {
			mina.remove();
			clearInterval(timerID);
		}

		isBoom2(mina);
	}, 10);

}	

/*создаю ракету*/

function createRaketa() {
	let raketa = document.createElement("div");
	raketa.className = "raketa";
	raketa.style.top = gamer.offsetTop + 120 + "px";
	raketa.style.left = gamer.offsetLeft + 70 + "px";

	gameBlock.appendChild(raketa);
	moveRaketa(raketa);
}

function moveRaketa(raketa) {
	let timerID = setInterval(function() {
		raketa.style.top = raketa.offsetTop + 25 + "px";
		if(raketa.offsetTop > document.querySelector("body").clientWidth) {
			raketa.remove();
			clearInterval(timerID);
		}

		isBoom3(raketa);
	}, 10);

}

/*задаю параметры при контакте с противником*/
function isBoom3(raketa) {
	let enemy = document.querySelector(".enemy");
	if(raketa.offsetTop > enemy.offsetTop
	&& raketa.offsetTop < enemy.offsetTop + enemy.clientHeight
	&& raketa.offsetLeft > enemy.offsetLeft) {
	createBoom(raketa.offsetTop, raketa.offsetLeft);
	score.innerText = Number(score.innerText) + 50;
	raketa.remove();
	enemy.remove();
	createEnemy();

	}
}

function isBoom2(mina) {	
	let enemy = document.querySelector(".enemy");

	if(mina.offsetTop > enemy.offsetTop
		&& mina.offsetTop < enemy.offsetTop + enemy.clientHeight
		&& mina.offsetLeft > enemy.offsetLeft) {
		createBoom(mina.offsetTop, mina.offsetLeft);
		score.innerText = Number(score.innerText) + 3;
		mina.remove();
		enemy.remove();
		createEnemy();

	}
}

function isBoom(bullet) {
	let enemy = document.querySelector(".enemy");

	if(bullet.offsetTop > enemy.offsetTop 
		&& bullet.offsetTop < enemy.offsetTop + enemy.clientHeight
		&& bullet.offsetLeft > enemy.offsetLeft) {
		createBoom(bullet.offsetTop, bullet.offsetLeft);
		score.innerText = Number(score.innerText) + 1;
		bullet.remove();
		enemy.remove();
		createEnemy();

	}
}

function die() {
	countLifes = countLifes - 1;
	if( countLifes <= 0) {
		endGame();
	}

	createLifes();
}

function createLifes() {
	let lifesBlock = document.querySelector("#lifes");
		lifesBlock.innerHTML = "";
	let count = 0
	while(count < countLifes) {
		let span = document.createElement("span");
		lifesBlock.appendChild(span);

		count = count + 1;

	}
}


function createBoom(top, left) {
	let boom = document.createElement("div");
		boom.className = "boom";
		boom.style.top = top - 100 + "px";
		boom.style.left = left -100 + "px";

	gameBlock.appendChild(boom);
	setTimeout(function() {
		boom.remove();
	}, 1000);
}	

function endGame() {

	let scoreBlock = document.querySelector("#end h3 span");
	scoreBlock.innerText = score.innerText;

	gameBlock.innerHTML = "";
	let endBlock = document.querySelector("#end");
	endBlock.style.display = "block";

	let restartButton = document.querySelector("#end button");
	restartButton.onclick = restart;
}

function restart() {
	location.reload();
}


function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


selectSkin1 = document.querySelector("#skin_1");

selectSkin1.onclick = function() {
	selectSkin1.className = "selected";
	selectSkin2.className = "";
	gamerSkin = "skin_1";

}

selectSkin2 = document.querySelector("#skin_2");
selectSkin2.onclick = function() {
	selectSkin2.className = "selected";
	selectSkin1.className = "";
	gamerSkin = "skin_2";
}

function msG() {
	setTimeout("alert('Добре тримаешься давай ще')", 10000);
  setTimeout("alert('Ці покидьки зараз познають силу нашої розвідки')", 30000);
  setTimeout("alert('їх пре все більше і більше, чекаємо саппорт від привида')", 40000);
  setTimeout("alert('Ваш аккумулятор розряджаеться, потрібно летіти на базу')", 50000);
  setTimeout("alert('Придбай DLC помста привида Києва')", 55000);
  setTimeout("endGame()", 60000);
}