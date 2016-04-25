
var Battle = {

	"enemies": {
	
		"rat": {
			"name": "rat",
			"article": "a",
			"ascii": "R",
			"emoji": "1f400",
			"type": "hostile",
			"maxhp": 5,
			"damage": [1,2],
			"gold": [1,3],
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
			"timeout": [2000,2500]
		},
		
		"camel1": {
			"name": "camel",
			"article": "a",
			"ascii": "CM1",
			"emoji": "1f42a",
			"type": "hostile",
			"maxhp": 10,
			"damage": [1,5],
			"gold": [5,10],
			"timeout": [2500,3000]
		},
		
		"camel2": {
			"name": "camel",
			"article": "a",
			"ascii": "CM2",
			"emoji": "1f42b",
			"type": "hostile",
			"maxhp": 13,
			"damage": [1,6],
			"gold": [7,17],
			"timeout": [2000,2500]
		},
		
		"alien": {
			"name": "space invaders alien thingy",
			"article": "a",
			"ascii": "A",
			"emoji": "1f47e",
			"type": "hostile",
			"maxhp": 15,
			"damage": [3,5],
			"gold": [40,50],
			"timeout": [1000,2000]
		},
		
		"snake": {
			"name": "snake",
			"article": "a",
			"ascii": "SN",
			"emoji": "1f40d",
			"type": "hostile",
			"maxhp": 350,
			"damage": [150,200],
			"gold": [200,400],
			"timeout": [1500,2000]
		},
		
		"goat": {
			"name": "goat",
			"article": "a",
			"ascii": "G",
			"emoji": "1f402",
			"type": "hostile",
			"maxhp": 1000,
			"damage": [400,500],
			"gold": [1000,1750],
			"timeout": [1000,2000]
		},
		
		"dragon": {
			"name": "dragon",
			"article": "a",
			"ascii": "D",
			"emoji": "1f409",
			"type": "hostile",
			"maxhp": 20000,
			"damage": [800,1200],
			"gold": [10000,20000],
			"timeout": [1500,2500]
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
			"timeout": [1,1]
		},
		
	},
	
	"weapons": {
	
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
			"damage": 2, //2
		},
		
		"knife": {
			"name": "knife",
			"image": "1f52a",
			"description": "A basic kitchen knife that has been specifically modified to suit all your killing needs.",
			"damage": 5, //5
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
		
		"magic-hat": {
			"name": "magic hat",
			"image": "magichat",
			"description": "This hat is mostly just for style, but at least it protects you a little bit.",
			"reduction": 10, //10
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
			"reduction": 15, //15
		},
		
		"dragon-armor": {
			"name": "dragon armor",
			"image": "1f455",
			"description": "This armor is disguised as a normal t-shirt, but don't be deceived by it's look.",
			"reduction": 50, //50
		}
		
	},
	
	"ongoing": "none",
	"playerisattacking": false,
	"enemyisattacking": false,
	"stunCountdown": "none",
	
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
			var enemyInfo = Battle.enemies[enemy.name];
			Game.resetEntityHp(x,y);
			Battle.ongoing = x+","+y;
			Player.isStunned = false;
			if(Battle.stunCountdown!="none")clearTimeout(Battle.stunCountdown);
			
			document.getElementById("attack-button").disabled = false;
			document.getElementById("eat-apple").disabled = false;
			
			document.getElementById("battle-title").innerHTML = tools.upperFirst(enemyInfo.article)+" "+tools.upperFirst(enemy.displayName)+"!";
			document.getElementById("enemy-img").src = "images/"+enemyInfo.emoji+".png";
			
			if(enemy.name=="ghost")document.getElementById("enemy-special").innerHTML = "<br>Absorbs 75% damage";
			else if(enemy.name=="snake")document.getElementById("enemy-special").innerHTML = "<br>Can stun it's enemy";
			else document.getElementById("enemy-special").innerHTML = "";
			
			document.getElementById("enemy-hp").innerHTML = enemy.hp;
			document.getElementById("enemy-maxhp").innerHTML = enemyInfo.maxhp;
			document.getElementById("enemy-damage").innerHTML = enemyInfo.damage[1];
			document.getElementById("enemy-bar").style.width = 72+"px";
			document.getElementById("enemy-bullet").style.display = "none";
			
			var selectedWeapon = Battle.getWeaponInfo(Player.getWeapon());
			document.getElementById("player-hp").innerHTML = Player.save.hp;
			document.getElementById("player-maxhp").innerHTML = Player.save.maxhp;
			document.getElementById("player-weapon").innerHTML = tools.upperFirst(selectedWeapon.name);
			document.getElementById("player-damage").innerHTML = selectedWeapon.damage;
			document.getElementById("player-bar").style.width = Player.save.hp/Player.save.maxhp*72+"px";
			document.getElementById("player-img").style.opacity = 1;
			document.getElementById("player-bar").style.opacity = 1;
			
			if(enemy.displayName=="ghost") {
				Player.heart = Math.round(Player.save.hp/20);
				if(Player.heart>7) Player.heart = 7;
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
				
					if(Math.random()<.1) {
						UI.showDamage(10,10,"player-anim","<span style='color:red;'>miss</span>");
					}
					else {
						if(enemy.name=="ghost") {
							var thedamage = Math.floor(Player.initialHp/7);
							Player.heart--;
							if(Player.heart==0)thedamage = Player.save.hp;
							Player.save.hp -= thedamage;
							document.getElementById("player-hp-heart").innerHTML = tools.playerHeart(Player.heart);
							UI.showDamage(10,10,"player-anim","<span style='color:red;'>-"+thedamage+"</span>");
						}
						else {
							if(enemy.name=="snake" && Math.random()<.5 && !Player.isStunned) {
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
								thedamage -= Math.round(reduction/100 * thedamage);
								Player.save.hp -= thedamage;
								UI.showDamage(10,10,"player-anim","<span style='color:red;'>-"+thedamage+"</span>");
							}
						}
					}
					
					document.getElementById("player-hp").innerHTML = document.getElementById("player-hp-stats").innerHTML = Player.save.hp;
					document.getElementById("player-bar").style.width = Player.save.hp/Player.save.maxhp*72+"px";
					if(Player.save.hp<=0) {
						Player.save.hp = 0;
						UI.addLog("You are killed by "+enemyInfo.article+" "+enemy.displayName+".");
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
				
					if(Math.random()<.1) {
						UI.showDamage(20,20,"enemy-anim","<span style='color:red;'>miss</span>");
					}
					else {
						var thedamage = Math.round(tools.getRandomInt(3/4 * selectedWeapon.damage,selectedWeapon.damage));
						if(enemy.displayName=="ghost")thedamage -= Math.round(3/4 * thedamage);
						enemy.hp -= thedamage;
						UI.showDamage(20,20,"enemy-anim","<span style='color:red;'>-"+thedamage+"</span>");
					}
					
					if(Player.save.body=="heart-armor") {
						if(Player.save.hp<Player.save.maxhp) {
							var healed = Math.round(Player.save.maxhp / 100);
							if(Player.save.hp+healed>Player.save.maxhp) {
								healed = Player.save.maxhp - Player.save.hp;
							}
							Player.save.hp += healed
							UI.showDamage(10,10,"player-anim","<span style='color:green;'>+"+healed+"</span>");
							document.getElementById("player-hp").innerHTML = document.getElementById("player-hp-stats").innerHTML = Player.save.hp;
							document.getElementById("player-bar").style.width = Player.save.hp/Player.save.maxhp*72+"px";
						}
					}
					
					document.getElementById("enemy-hp").innerHTML = enemy.hp;
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
					document.getElementById("player-hp").innerHTML = document.getElementById("player-hp-stats").innerHTML = Player.save.hp;
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
		
		if(enemy.name=="ghost") {
			UI.addLog("The "+enemy.displayName+" drops a shiny heart.");
			Game.removeEntity(x,y);
			Game.addEntity(x,y,"s_heart");
		}
		else if(enemy.name=="dragon") {
			var loot = tools.getRandomInt(enemyInfo.gold[0], enemyInfo.gold[1])
			Player.save.gold += loot;
			UI.addLog("You killed "+enemyInfo.article+" "+enemy.displayName+" for <b>"+loot+"</b> gold and got a dragon corpse.");
			Game.removeEntity(x,y);
			Player.addItem("dragon-corpse", 1);
		}
		else if(enemy.name=="boss") {
			var loot = tools.getRandomInt(enemyInfo.gold[0], enemyInfo.gold[1])
			Player.save.gold += loot;
			UI.addLog("You killed "+enemyInfo.article+" "+enemy.displayName+" for <b>"+loot+"</b> gold!");
			UI.addLog("Or not?");
			Game.removeEntity(x,y);
			Game.addEnemy(x,y,"boss2");
		}
		else if(enemy.name=="boss2") {
			Player.save.gold = Infinity;
			UI.addLog("You killed "+enemyInfo.article+" "+enemy.displayName+" for <b>Infinity</b> gold!");
			Game.removeEntity(x,y);
			Game.addEnemy(x,y,"boss3");
		}
		else if(enemy.name=="boss3") {
			UI.addLog("<b>And don't forget to visit this game's subreddit at <a href=\"https://www.reddit.com/r/materialwarrior\" target=\"_blank\">/r/materialwarrior</a>. Cheers!</b>");
			UI.addLog("<b>Thank you for playing the game! I hope you enjoyed it! :D</b>");
			UI.addLog("<b>You killed "+enemyInfo.article+" "+enemy.displayName+" for good!</b>");
			Game.removeEntity(x,y);
			Player.addItem("cookie", 1);
			ga('send', 'event', 'winGame', 'Yes');
		}
		else {
			var loot = tools.getRandomInt(enemyInfo.gold[0], enemyInfo.gold[1])
			Player.save.gold += loot;
			UI.addLog("You killed "+enemyInfo.article+" "+enemy.displayName+" for <b>"+loot+"</b> gold.");
			Game.removeEntity(x,y);
		}
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
				UI.hideAlertFast('battle');
				UI.chat('penguin3');
			}
			else if(enemy=="boss2") {
				UI.hideAlertFast('battle');
				UI.chat('penguin4');
			}
			else if(enemy=="boss3") {
				UI.hideAlertFast('battle');
				UI.chat('penguin5');
			}
			else {
				UI.hideAlert('battle');
			}
		}
	}
	
};
