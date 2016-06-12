
var Battle = {

	"enemies": {
	
		"rat": {
			"name": "rat",
			"article": "a",
			"ascii": "R",
			"emoji": "1f400",
			"type": "hostile",
			"maxhp": 12,
			"damage": [1,3],
			"gold": [2,3],
			"xp": [1,2],
			"timeout": [2000,2000]
		},
		
		"mouse": {
			"name": "mouse",
			"article": "a",
			"ascii": "M",
			"emoji": "1f401",
			"type": "hostile",
			"maxhp": 3,
			"damage": [1,1],
			"gold": [1,1],
			"xp": [1,1],
			"timeout": [2000,2500]
		},
		
		"camel1": {
			"name": "camel",
			"article": "a",
			"ascii": "CM1",
			"emoji": "1f42a",
			"type": "hostile",
			"maxhp": 25,
			"damage": [2,4],
			"gold": [5,10],
			"xp": [3,5],
			"timeout": [2500,3000]
		},
		
		"camel2": {
			"name": "camel",
			"article": "a",
			"ascii": "CM2",
			"emoji": "1f42b",
			"type": "hostile",
			"maxhp": 30,
			"damage": [4,6],
			"gold": [7,17],
			"xp": [4,6],
			"timeout": [2000,2500]
		},
		
		"alien": {
			"name": "space invaders alien thingy",
			"article": "a",
			"ascii": "A",
			"emoji": "1f47e",
			"type": "hostile",
			"maxhp": 30,
			"damage": [2,3],
			"gold": [40,50],
			"xp": [3,5],
			"timeout": [1000,2000]
		},
		
		"snake": {
			"name": "snake",
			"article": "a",
			"ascii": "SN",
			"emoji": "1f40d",
			"type": "hostile",
			"maxhp": 400,
			"damage": [50,100],
			"gold": [200,400],
			"xp": [10,15],
			"timeout": [1500,2000]
		},
		
		"goat": {
			"name": "goat",
			"article": "a",
			"ascii": "G",
			"emoji": "1f402",
			"type": "hostile",
			"maxhp": 3000,
			"damage": [100,200],
			"gold": [1000,1750],
			"xp": [30,40],
			"timeout": [1000,2000]
		},
		
		"dragon": {
			"name": "dragon",
			"article": "a",
			"ascii": "D",
			"emoji": "1f409",
			"type": "hostile",
			"maxhp": 70000,
			"damage": [200,400],
			"gold": [10000,20000],
			"xp": [100,150],
			"timeout": [2000,3000]
		},
		
		"ghost": {
			"name": "ghost",
			"article": "a",
			"ascii": "GH",
			"emoji": "1f47b",
			"type": "hostile",
			"maxhp": 10000,
			"damage": [1,1],
			"gold": [0,0],
			"xp": [0,0],
			"timeout": [1500,2000]
		},
		
		"alien2": {
			"name": "space invaders alien thingy",
			"article": "a",
			"ascii": "A",
			"emoji": "1f47e",
			"type": "hostile",
			"maxhp": 500000,
			"damage": [20000,50000],
			"gold": [1000000,2000000],
			"xp": [400,500],
			"timeout": [1500,2000]
		},
		
		"alien3": {
			"name": "space invaders alien thingy",
			"article": "a",
			"ascii": "A",
			"emoji": "1f47e",
			"type": "hostile",
			"maxhp": 500000,
			"damage": [20000,50000],
			"gold": [1000000,2000000],
			"xp": [400,500],
			"timeout": [1500,2000]
		},
		
		"boss": {
			"name": "poop boss",
			"article": "the",
			"ascii": "PO",
			"emoji": "1f4a9",
			"type": "hostile",
			"maxhp": Infinity,
			"damage": [50000,100000],
			"gold": [100000000,100000000],
			"xp": [0,0],
			"timeout": [5000,10000]
		},
		
		"boss2": {
			"name": "poop boss",
			"article": "the",
			"ascii": "PO",
			"emoji": "1f4a9",
			"type": "hostile",
			"maxhp": 10000000,
			"damage": [500000,1000000],
			"gold": [0,0],
			"xp": [0,0],
			"timeout": [2000,3000]
		},
		
		"boss3": {
			"name": "poop boss",
			"article": "the",
			"ascii": "PO",
			"emoji": "1f4a9",
			"type": "hostile",
			"maxhp": 10000000000000,
			"damage": [5000000000,10000000000],
			"gold": [0,0],
			"xp": [0,0],
			"timeout": [2000,3000]
		},
		
		"4chan": {
			"name": "flying spaghetti monster",
			"article": "a",
			"ascii": "?",
			"emoji": "?",
			"type": "hostile",
			"maxhp": Infinity,
			"damage": [Infinity,Infinity],
			"gold": [0,0],
			"xp": [0,0],
			"timeout": [1,1]
		},
		
	},
	
	"weapons": {
	
		/* also change the minDamage array in game.js if the default damage is changed here */
	
		"fists": {
			"name": "fists",
			"image": "1f44a",
			"description": "If you can use them to punch trees (not in this game though), then why not use them to punch your enemies?",
			"damage": 1, //1
		},
		
		"scissors": {
			"name": "scissors",
			"image": "2702",
			"description": "Although it is weird to use scissors as a weapon, at least it works.",
			"damage": 5, //5
		},
		
		"knife": {
			"name": "knife",
			"image": "1f52a",
			"description": "A basic kitchen knife that has been specifically modified to suit all your killing needs.",
			"damage": 10, //10
		},
		
		"hammer": {
			"name": "hammer",
			"image": "1f528",
			"description": "An insanely strong hammer with a super damaging power.",
			"damage": 500000000000, //500000000000
		}
		
	},
	
	"head": {
		
		"none": {
			"name": "none",
			"image": "blank",
			"description": "Sometimes less is more.",
			"reduction": 0, //0
		},
		
		"headphones": {
			"name": "headphones",
			"image": "headphones",
			"description": "This pair of headphones can absorb much more damage against camels.",
			"reduction": 7, //7
		},
		
		"magic-hat": {
			"name": "magic hat",
			"image": "magichat",
			"description": "This hat is mostly just for style, but at least it protects you a little bit.",
			"reduction": 20, //20
		}
		
	},
	
	"body": {
		
		"none": {
			"name": "none",
			"image": "blank",
			"description": "Sometimes less is more.",
			"reduction": 0, //0
		},
		
		"heart-armor": {
			"name": "heart armor",
			"image": "heartarmor",
			"description": "This lovely piece of armor heals you each time you attack an enemy.",
			"reduction": 35, //35
		},
		
		"dragon-armor": {
			"name": "dragon armor",
			"image": "1f455",
			"description": "This armor is disguised as a normal t-shirt, but don't be deceived by it's look.",
			"reduction": 45, //45
		}
		
	},
	
	"ongoing": "none",
	"playerisattacking": false,
	"enemyisattacking": false,
	"stunCountdown": "none",
	"playerDodging": false,
	"dodgeCountdown": "none",
	
	getEnemyInfo: function(name) {
		return Battle.enemies[name];
	},
	
	getWeaponInfo: function(name) {
		return Battle.weapons[name];
	},
	
	getHeadInfo: function(name) {
		return Battle.head[name];
	},
	
	getBodyInfo: function(name) {
		return Battle.body[name];
	},
	
	setWeaponInfo: function(name,property,value) {
		Battle.weapons[name][property] = value;
	},
	
	engage: function(x,y) {
	
		if(Player.save.hp<=0) {
			UI.addLog("You don't seem to be healthy enough to engage a battle.");
		}
		else if(Battle.ongoing=="none") {
		
			var enemy = Game.getEntity(x,y);
			var enemyInfo = Battle.getEnemyInfo(enemy.name);
			Game.resetEntityHp(x,y);
			Battle.ongoing = x+","+y;
			Player.isStunned = false;
			if(Battle.stunCountdown!="none")clearTimeout(Battle.stunCountdown);
			if(Battle.dodgeCountdown!="none")clearTimeout(Battle.dodgeCountdown);
			
			document.getElementById("attack-button").disabled = false;
			document.getElementById("eat-apple").disabled = false;
			document.getElementById("throw-gold").disabled = false;
			document.getElementById("player-dodge").disabled = false;
			
			document.getElementById("battle-title").innerHTML = tools.upperFirst(enemyInfo.article)+" "+tools.upperFirst(enemyInfo.name)+"!";
			document.getElementById("enemy-img").src = "images/"+enemyInfo.emoji+".png";
			
			if(enemy.name=="ghost")document.getElementById("enemy-special").innerHTML = "<br>Absorbs 75% damage";
			else if(enemy.name=="snake")document.getElementById("enemy-special").innerHTML = "<br>Can stun it's enemy";
			else document.getElementById("enemy-special").innerHTML = "";
			
			document.getElementById("enemy-hp").innerHTML = tools.num(enemy.hp);
			document.getElementById("enemy-maxhp").innerHTML = tools.num(enemyInfo.maxhp);
			if(enemyInfo.maxhp >= 1000000000000 && enemyInfo.maxhp != Infinity) document.getElementById("enemy-maxhp").innerHTML = "a lot";
			document.getElementById("enemy-damage").innerHTML = tools.num(enemyInfo.damage[1]);
			document.getElementById("enemy-bar").style.width = 72+"px";
			document.getElementById("enemy-bullet").style.display = "none";
			
			var selectedWeapon = Battle.getWeaponInfo(Player.getWeapon());
			document.getElementById("player-hp").innerHTML = tools.num(Player.save.hp);
			document.getElementById("player-maxhp").innerHTML = tools.num(Player.save.maxhp);
			if(Player.save.maxhp >= 1000000000000) document.getElementById("player-maxhp").innerHTML = "a lot";
			document.getElementById("player-weapon").innerHTML = tools.upperFirst(selectedWeapon.name);
			document.getElementById("player-damage").innerHTML = tools.num(selectedWeapon.damage);
			document.getElementById("player-bar").style.width = Player.save.hp/Player.save.maxhp*72+"px";
			document.getElementById("player-img").style.opacity = 1;
			document.getElementById("player-bar").style.opacity = 1;
			
			document.getElementById("throw-price").innerHTML = tools.throwGoldPrice() + " gold";
			if(Player.getLevel() >= 4) document.getElementById("throw-gold-div").style.display = "inline-block";
			else document.getElementById("throw-gold-div").style.display = "none";
			if(Player.getLevel() >= 6) document.getElementById("run-away").style.display = "inline-block";
			else document.getElementById("run-away").style.display = "none";
			if(Player.getLevel() >= 7) document.getElementById("player-dodge").style.display = "inline-block";
			else document.getElementById("player-dodge").style.display = "none";
			
			Battle.playerDodging = false;
			document.getElementById("player-img").style.top = 0 + "px";
			document.getElementById("player-bar").style.top = 0 + "px";
			
			if(Player.save.killsToRun > 0) {
				document.getElementById("run-away").disabled = true;
				document.getElementById("run-away-count").innerHTML = Player.save.killsToRun + " kills left to run away again";
			}
			else {
				document.getElementById("run-away").disabled = false;
				document.getElementById("run-away-count").innerHTML = "You can run away now";
			}
			
			if(enemyInfo.name=="ghost") {
				Player.heart = Math.round(Player.save.hp/100);
				if(Player.heart>7) Player.heart = 7;
				else if(Player.heart<1) Player.heart = 1;
				Player.initialHp = Player.save.hp;
				document.getElementById("player-hp-text").style.display = "none";
				document.getElementById("player-hp-heart").style.display = "inline-block";
				document.getElementById("player-hp-heart").innerHTML = tools.playerHeart(Player.heart);
				document.getElementById("enemy-damage").innerHTML = "1 heart";
			}
			else {
				document.getElementById("player-hp-text").style.display = "inline-block";
				document.getElementById("player-hp-heart").style.display = "none";
			}
			
			var waitfor = tools.getRandomInt(enemyInfo.timeout[0],enemyInfo.timeout[1]);
			enemyAttackTimeout = setTimeout(Battle.enemyAttack,waitfor);
			UI.showAlert('battle');
			
		}
		
	},
	
	enemyAttack: function() {
		
		if(Battle.ongoing!="none") {
			var x = Battle.ongoing.split(",")[0];
			var y = Battle.ongoing.split(",")[1];
			var enemy = Game.getEntity(x,y);
			var enemyInfo = Battle.enemies[enemy.name];
		}
		
		if(!Battle.playerisattacking && Battle.ongoing!="none") {
	
			Battle.enemyisattacking = true;
			
			var duration = -20;
			var animation = setInterval(function() {
			
				duration++;
				
				if(enemy.name=="dragon") {
					if(duration<0) {
						document.getElementById("enemy-bullet").style.display = "block";
						document.getElementById("enemy-bullet").style.right = (21-Math.abs(duration))/20*325+60+"px";
					}
					else document.getElementById("enemy-bullet").style.display = "none";
				}
				else document.getElementById("enemy-anim").style.right = (21-Math.abs(duration))/20*350+"px";
				
				if(duration==0) {
					
					var missChance;
					if(Player.getLevel() >= 5) missChance = .15;
					else missChance = .1;
					
					if(Battle.playerDodging) {}
					else if(Math.random()<missChance) {
						UI.showDamage(10,10,"player-anim","<span style='color:red;'>miss</span>");
					}
					else {
						if(enemy.name=="ghost") {
							var thedamage = Math.floor(Player.initialHp/7);
							Player.heart--;
							if(Player.heart==0)thedamage = Player.save.hp;
							Player.save.hp -= thedamage;
							document.getElementById("player-hp-heart").innerHTML = tools.playerHeart(Player.heart);
							UI.showDamage(10,10,"player-anim","<span style='color:red;'>-"+tools.num(thedamage)+"</span>");
						}
						else {
							if(enemy.name=="snake" && Math.random()<.2 && !Player.isStunned) {
								Player.isStunned = true;
								document.getElementById("player-img").style.opacity = .5;
								document.getElementById("player-bar").style.opacity = .5;
								UI.showDamage(10,10,"player-anim","<span style='color:red;'>stunned</span>");
								Battle.stunCountdown = setTimeout(function () {
									Player.isStunned = false;
									document.getElementById("player-img").style.opacity = 1;
									document.getElementById("player-bar").style.opacity = 1;
								}, 5000);
							}
							else {
								var thedamage = tools.getRandomInt(enemyInfo.damage[0],enemyInfo.damage[1]);
								var reduction = Battle.getHeadInfo(Player.save.head).reduction + Battle.getBodyInfo(Player.save.body).reduction;
								if(reduction>100)reduction = 100;
								
								if(Player.save.head=="headphones" && (enemy.name=="camel1" || enemy.name=="camel2")) reduction = 50;
								
								thedamage -= Math.round(reduction/100 * thedamage);
								Player.save.hp -= thedamage;
								UI.showDamage(10,10,"player-anim","<span style='color:red;'>-"+tools.num(thedamage)+"</span>");
							}
						}
					}
					
					document.getElementById("player-hp").innerHTML = document.getElementById("player-hp-stats").innerHTML = tools.num(Player.save.hp);
					document.getElementById("player-bar").style.width = Player.save.hp/Player.save.maxhp*72+"px";
					if(Player.save.hp<=0) {
						Player.save.hp = 0;
						UI.addLog("You are killed by "+enemyInfo.article+" "+enemyInfo.name+".");
						document.getElementById("player-hp").innerHTML = document.getElementById("player-hp-stats").innerHTML = 0;
						Battle.run();
						Player.respawn();
					}
				}
				
				if(duration>20) {
					clearInterval(animation);
					Battle.enemyisattacking = false;
				}
				
			}, 10);
			
		}
		
		var waitfor = tools.getRandomInt(enemyInfo.timeout[0],enemyInfo.timeout[1]);
		enemyAttackTimeout = setTimeout(Battle.enemyAttack,waitfor);
		
	},
	
	attack: function() {
	
		if(Battle.ongoing!="none" && !Battle.playerisattacking && !Battle.enemyisattacking && !Player.isStunned) {
		
			var x = Battle.ongoing.split(",")[0];
			var y = Battle.ongoing.split(",")[1];
			var enemy = Game.getEntity(x,y);
			var enemyInfo = Battle.enemies[enemy.name];
			var selectedWeapon = Battle.getWeaponInfo(Player.getWeapon());
			
			Battle.playerisattacking = true;
			UI.disable("attack-button",2,"ATTACK!");
			
			var duration = -20;
			var animaton = setInterval(function() {
			
				duration++;
				document.getElementById("player-anim").style.left = (21-Math.abs(duration))/20*350+"px";
				
				if(duration==0) {
					
					var missChance;
					if(Player.getLevel() >= 3) missChance = .05;
					else missChance = .1;
					
					if(Math.random()<missChance) {
						UI.showDamage(20,20,"enemy-anim","<span style='color:red;'>miss</span>");
					}
					else {
						var zedamage = selectedWeapon.damage * (Player.numItems("cookie") + 1);
						var thedamage = Math.min(Math.round(tools.getRandomInt(3/4 * zedamage, zedamage)), zedamage);
						if(enemyInfo.name=="ghost")thedamage -= Math.round(3/4 * thedamage);
						enemy.hp -= thedamage;
						UI.showDamage(20,20,"enemy-anim","<span style='color:red;'>-"+tools.num(thedamage)+"</span>");
					}
					
					if(Player.save.body=="heart-armor") {
						if(Player.save.hp<Player.save.maxhp) {
							var healed = Math.round(Player.save.maxhp / 100);
							if(Player.save.hp+healed>Player.save.maxhp) {
								healed = Player.save.maxhp - Player.save.hp;
							}
							Player.save.hp += healed;
							UI.showDamage(10,10,"player-anim","<span style='color:green;'>+"+healed+"</span>");
							document.getElementById("player-hp").innerHTML = document.getElementById("player-hp-stats").innerHTML = tools.num(Player.save.hp);
							document.getElementById("player-bar").style.width = Player.save.hp/Player.save.maxhp*72+"px";
						}
					}
					
					document.getElementById("enemy-hp").innerHTML = tools.num(enemy.hp);
					document.getElementById("enemy-bar").style.width = enemy.hp/enemyInfo.maxhp*72+"px";
					if(enemy.hp<=0) { //WIN!
						enemy.hp = 0;
						document.getElementById("enemy-hp").innerHTML = 0;
						Battle.win();
					}
				}
				
				if(duration>20) {
					clearInterval(animaton);
					Battle.playerisattacking = false;
				}
				
			}, 10);
			
		}
		
	},
	
	eatApple: function() {
	
		if(Battle.ongoing!="none") {
			
			var x = Battle.ongoing.split(",")[0];
			var y = Battle.ongoing.split(",")[1];
			var enemy = Game.getEntity(x,y);
			
			if(enemy.name=="ghost") {
				alert("Can't eat apple when in a battle against a ghost.");
			}
			else {
				if(Player.save.inventory.item.apple>0 && Player.save.hp<Player.save.maxhp && !Battle.playerisattacking) {
					var healed = Math.round(1/4 * Player.save.maxhp);
					Player.save.inventory.item.apple--;
					Player.save.hp+=healed;
					if(Player.save.hp>Player.save.maxhp) {
						healed-=Player.save.hp-Player.save.maxhp;
						Player.save.hp=Player.save.maxhp;
					}
					UI.showDamage(30,30,"player-anim","<span style='color:green;'>+"+healed+"</span>");
					document.getElementById("player-hp").innerHTML = document.getElementById("player-hp-stats").innerHTML = tools.num(Player.save.hp);
					document.getElementById("player-bar").style.width = Player.save.hp/Player.save.maxhp*72+"px";
					UI.disable("eat-apple",5,"EAT APPLE");
					UI.update();
				}
			}
			
		}
		
	},
	
	shoot: function() {
	
		if(Battle.ongoing!="none" && Player.numItems("gun") == 1 && !Battle.playerisattacking && !Battle.enemyisattacking && !Player.isStunned) {
		
			var x = Battle.ongoing.split(",")[0];
			var y = Battle.ongoing.split(",")[1];
			var enemy = Game.getEntity(x,y);
			
			if(enemy.name == "boss2" || enemy.name == "boss3") {
				alert('You can\'t use the gun against the boss anymore!');
			}
			else if(enemy.name=="ghost") {
				alert("I doubt you can shoot ghosts..");
			}
			else {
				if(confirm('Are you sure to shoot using the infinity gun?')) {
					
					Player.removeItem("gun", 1);
					enemy.hp = 0;
					UI.showDamage(20,20,"enemy-anim","<span style='color:red;'>-Infinity</span>");
					document.getElementById("enemy-hp").innerHTML = "-Infinity";
					document.getElementById("enemy-bar").style.width = "0px";
					Battle.win();
					
				}
			}
			
		}
		
	},
	
	win: function() {
		
		var x = Battle.ongoing.split(",")[0];
		var y = Battle.ongoing.split(",")[1];
		var enemy = Game.getEntity(x,y);
		var enemyInfo = Battle.enemies[enemy.name];
		var oldLevel = Player.getLevel();
		
		if(Player.getLevel() >= 2) {
			if(Player.save.lastEnemy[0] === undefined || Player.save.lastEnemy[0] != enemy.name) {
				Player.save.lastEnemy = [enemy.name, 1];
			}
			else if(Player.save.lastEnemy[0] == enemy.name) {
				Player.save.lastEnemy[1]++;
			}
			var multiplier = Math.min(0.96 + Player.save.lastEnemy[1] / 25, 2);
		}
		else multiplier = 1;
		
		if(y != -206)Game.removeEntity(x,y);
		
		if(enemy.name=="ghost") {
			UI.addLog("The "+enemyInfo.name+" drops a shiny heart");
			if(y != -206)Game.addEntity(x,y,"s_heart");
		}
		else if(enemy.name=="dragon") {
			var loot = Math.round(tools.getRandomInt(enemyInfo.gold[0], enemyInfo.gold[1]) * multiplier);
			var xpGained = tools.getRandomInt(enemyInfo.xp[0], enemyInfo.xp[1]);
			Player.save.gold += loot;
			Player.save.xp += xpGained;
			UI.addLog("You killed "+enemyInfo.article+" "+enemyInfo.name+" for <b>"+tools.num(loot)+"</b> gold, <b>"+tools.num(xpGained)+"</b> xp and got a dragon corpse.");
			Player.addItem("dragon-corpse", 1);
		}
		else if(enemy.name=="boss") {
			var loot = tools.getRandomInt(enemyInfo.gold[0], enemyInfo.gold[1]);
			Player.save.gold += loot;
			UI.addLog("You killed "+enemyInfo.article+" "+enemyInfo.name+" for <b>"+tools.num(loot)+"</b> gold!");
			UI.addLog("Or not?");
			Game.addEnemy(x,y,"boss2");
		}
		else if(enemy.name=="boss2") {
			Player.save.gold = Infinity;
			UI.addLog("You killed "+enemyInfo.article+" "+enemyInfo.name+" for <b>Infinity</b> gold!");
			Game.addEnemy(x,y,"boss3");
		}
		else if(enemy.name=="boss3") {
		
			if(Game.speedrun) {
				Game.speedrun = false;
				if(Game.speedrunTime < Game.speedrunHigh[0] || Game.speedrunHigh[0] == 0) {
					Game.speedrunHigh[0] = Game.speedrunTime;
					Game.speedrunHigh[1] = Player.numItems("cookie");
					UI.addLog("<b>It's a new record!</b>");
				}
				UI.addLog("<b>Your speedrun time is: " + tools.msToTime(Game.speedrunTime) + "</b>");
				Game.saveGame(false, false);
			}
			else {
				UI.addLog("<b>And don't forget to visit this game's subreddit at <a href=\"https://www.reddit.com/r/materialwarrior\" target=\"_blank\">/r/materialwarrior</a>. Cheers!</b>");
				UI.addLog("<b>Thank you for playing the game! I hope you enjoyed it! :D</b>");
				UI.addLog("<b>You unlocked speedrun mode! Check the sidebar for more info.</b>");
				ga('send', 'event', 'winGame', 'Yes');
			}
			
			UI.addLog("<b>You killed "+enemyInfo.article+" "+enemyInfo.name+" for good!</b>");
			Player.addItem("cookie", 1);
			UI.speedrun();
			
		}
		else {
			var loot = Math.round(tools.getRandomInt(enemyInfo.gold[0], enemyInfo.gold[1]) * multiplier);
			var xpGained = tools.getRandomInt(enemyInfo.xp[0], enemyInfo.xp[1]);
			Player.save.gold += loot;
			Player.save.xp += xpGained;
			UI.addLog("You killed "+enemyInfo.article+" "+enemyInfo.name+" for <b>"+tools.num(loot)+"</b> gold and gained <b>"+tools.num(xpGained)+"</b> xp.");
		}
		
		if(Player.getLevel() > oldLevel) UI.addLog("Level up! Check the sidebar to see your new ability.");
		
		Player.save.killsToRun--;
		Game.drawTiles();
		UI.update();
		Battle.run(enemy.name);
		
	},
	
	run: function(enemy) {
		enemy = typeof enemy !== 'undefined' ? enemy : "whatever";
		if(Battle.ongoing!="none") {
			clearTimeout(enemyAttackTimeout);
			Battle.ongoing = "none";
			if(enemy=="boss") {
				UI.hideAlertFast();
				UI.chat('penguin3');
			}
			else if(enemy=="boss2") {
				UI.hideAlertFast();
				UI.chat('penguin4');
			}
			else if(enemy=="boss3") {
				UI.hideAlertFast();
				UI.chat('penguin5');
			}
			else {
				UI.hideAlert();
			}
		}
	},
	
	runAway: function() {
		if(Battle.ongoing!="none" && Player.getLevel() >= 6 && Player.save.killsToRun < 1) {
			var x = Battle.ongoing.split(",")[0];
			var y = Battle.ongoing.split(",")[1];
			var enemy = Game.getEntity(x,y);
			if(enemy.name=="ghost") {
				alert("You can't run from ghosts!");
			}
			else {
				Battle.run();
				Player.save.killsToRun = 10;
			}
		}
	},
	
	dodge: function() {
		if(Battle.ongoing!="none" && Player.getLevel() >= 7 && !Battle.playerDodging) {
			var x = Battle.ongoing.split(",")[0];
			var y = Battle.ongoing.split(",")[1];
			var enemy = Game.getEntity(x,y);
			if(enemy.name=="ghost") {
				alert("You can't hide from ghosts!");
			}
			else {
				Battle.playerDodging = true;
				document.getElementById("player-img").style.top = -1000 + "px";
				document.getElementById("player-bar").style.top = -1000 + "px";
				UI.disable("player-dodge",20,"DODGE");
				Battle.dodgeCountdown = setTimeout(function () {
					Battle.playerDodging = false;
					document.getElementById("player-img").style.top = 0 + "px";
					document.getElementById("player-bar").style.top = 0 + "px";
				}, 3000);
			}
		}
	},
	
	throwGold: function() {
		if(Battle.ongoing!="none" && Player.getLevel() >= 4) {
			var x = Battle.ongoing.split(",")[0];
			var y = Battle.ongoing.split(",")[1];
			var enemy = Game.getEntity(x,y);
			var enemyInfo = Battle.getEnemyInfo(enemy.name);
			if(enemy.name=="ghost") {
				alert("Throwing gold won't work against ghosts!");
			}
			else {
				var price = tools.throwGoldPrice();
				var thedamage = Math.floor(price / 10);
				Player.save.gold -= price;
				document.getElementById("throw-price").innerHTML = tools.throwGoldPrice() + " gold";
				
				enemy.hp -= thedamage;
				UI.showDamage(20,20,"enemy-anim","<span style='color:red;'>-"+tools.num(thedamage)+"</span>");

				document.getElementById("enemy-hp").innerHTML = tools.num(enemy.hp);
				document.getElementById("enemy-bar").style.width = enemy.hp/enemyInfo.maxhp*72+"px";
				if(enemy.hp<=0) { //WIN!
					enemy.hp = 0;
					document.getElementById("enemy-hp").innerHTML = 0;
					Battle.win();
				}
				
				UI.disable("throw-gold",20,"THROW GOLD");
				UI.update();
			}
		}
	}
	
};
