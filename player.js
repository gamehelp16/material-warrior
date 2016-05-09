
var Player = {

	"save": {
		
		"x": 55, //55
		"y": 15, //15
		"hp": 10, //10
		"maxhp": 10, //10
		"gold": 0, //0
		"regenTimeout": 3000, //3000
		"regenHp": 1, //1
		
		"punchesLeft": 10, //10
		"meditateHpLeft": 500, //500
		"hasReadLiterature3": false, //false
		"tookPizzas": false, //false
		"hasLoan": false, //false
		"devAway": true, //true
		"hasSmartphone": false, //false
		
		"weapon": "fists", //fists
		"head": "none", //none
		"body": "none", //none
		
		"inventory": {
			"weapon": ["fists"], //["fists"]
			"head": ["none"], //["none"]
			"body": ["none"], //["none"]
			"item": {
				"apple": 0, //0
				"heart": 0, //0
				"s_heart": 0, //0
				"pizza": 0, //0
				"dragon-corpse": 0, //0
				"gun": 0, //0
				"cookie": 0, //0
			},
			"thing": {
				"teleporter": false //false
			}
		},
		
	},
	
	"heart": 7, //7
	"initialHp": 0, //0
	"isStunned": false, //false
	"meditating": false, //false
	
	"items": {
		
		"apple": {
			"name": "apple",
			"image": "1f34e",
			"description": "Eating an apple heals you during a battle. Can't eat them while attacking though.",
		},
		
		"heart": {
			"name": "blue heart",
			"image": "1f499",
			"description": "This heart increases your max hp by 400 and changes your respawn point. Your max hp won't decrease if you don't have the heart anymore.",
		},
		
		"s_heart": {
			"name": "shiny heart",
			"image": "1f496",
			"description": "This shiny heart makes you heal faster when you are not in a battle. The effect of this heart persists even after you don't have it anymore.",
			//originally these hearts are dropped by dragons, but I changed it so the ghosts drop them instead
		},
		
		"pizza": {
			"name": "pizza",
			"image": "1f355",
			"description": "These pizzas look and smell delicious, unfortunately you can't enjoy their gloriousness.",
		},
		
		"dragon-corpse": {
			"name": "dragon corpse",
			"image": "1f409",
			"description": "Dragon skins are too precious to throw, maybe you will find them useful later.",
		},
		
		"gun": {
			"name": "infinity gun",
			"image": "1f52b",
			"description": "This gun deals infinite damage, but you can only have one of them at a time and the gun will break after one usage.",
		},
		
		"cookie": {
			"name": "Cookie",
			"image": "1f36a",
			"description": "Congratulations for finishing the game! Here's a cookie for ya.",
		}
		
	},
	
	move: function(x,y,param) {
	
		if(UI.getDialogOpen()=="none" || param!=='undefined') {
		
			Game.display.draw(Player.save.x, Player.save.y, " ");
			Player.save.x = x;
			Player.save.y = y;
			
			var top = Player.save.y-Game.screenheight/2;
			var bottom = Player.save.y+Game.screenheight/2;
			var left = Player.save.x-Game.screenwidth/2;
			var right = Player.save.x+Game.screenwidth/2;
			
			if(Math.random()<.5) {
				var spawnx = Math.round(Math.random()*(right-left))+left;
				var spawny = Math.random()<.5?top-1:bottom+1;
			}
			else {
				var spawnx = Math.random()<.5?left-1:right+1;
				var spawny = Math.round(Math.random()*(bottom-top))+top;
			}
			
			var spawnChance = .05;
			
			if(Game.getEntityCount("rat")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>0 && spawny<60 && spawnx>0 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"rat");
			}
			
			if(Game.getEntityCount("mouse")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>0 && spawny<60 && spawnx>0 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"mouse");	
			}
			
			if(Game.getEntityCount("camel1")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>60 && spawny<90 && spawnx>0 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"camel1");	
			}
			
			if(Game.getEntityCount("camel2")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>60 && spawny<90 && spawnx>0 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"camel2");
			}
			
			if(Game.getEntityCount("snake")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>113 && spawny<150 && spawnx>20 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"snake");
			}
			
			if(Game.getEntityCount("goat")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>113 && spawny<150 && spawnx>20 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"goat");
			}
			
			if(Game.getEntityCount("dragon")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>191 && spawny<250 && spawnx>0 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"dragon");
			}
			
			if(Game.getEntityCount("ghost")<10 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>191 && spawny<250 && spawnx>0 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"ghost");
			}
			
			if(Game.getEntityCount("alien2")<20 && Math.random()<spawnChance) {
				if(Game.getTile(spawnx,spawny)===undefined && Game.getEntity(spawnx,spawny)===undefined && spawny>270 && spawny<350 && spawnx>0 && spawnx<Game.mapwidth)Game.addEnemy(spawnx,spawny,"alien2");
			}
			
			/*var dijkstra = new ROT.Path.Dijkstra(Player.save.x, Player.save.y, function(x,y) {
				console.log("Game.getEntity("+x+","+y+")");
				//if(Game.getEntity(x,y)!==undefined) return false;
				if(Game.getTile(x,y)===undefined)return true;
				else if(Game.getTile(x,y).walkable)return true;
				else return false;
			});*/
			
			// TODO (maybe): makes the enemies move towards the player (causes lag and is kind of weird)
			
			/*var moves = [];
			
			for(i=Player.save.x-5;i<=Player.save.x+5;i++) {
				for(j=Player.save.y-5;j<=Player.save.y+5;j++) {
				
					if(Game.getEntity(i,j)!==undefined) {
						/*var dijkstra = new ROT.Path.Dijkstra(i, j, function(x,y) { 
							if(Game.getEntity(x,y)===undefined) {
								if(Game.getTile(x,y)===undefined)return true;
								else if(Game.getTile(x,y).walkable)return true;
								else return false;
							}
							else return false;
						}); *=/
						//console.log(i,j);
						var test = 0;
						dijkstra.compute(i, j, function(x,y) {
							if(Game.getEntity(i,j)!==undefined && test==1) {
								//moves[i+","+j] = x+","+y;
								if(Game.getEntity(x,y)===undefined && Player.save.x!=x && Player.save.y!=y)Game.moveEnemy(i,j,x,y);
								else test--;
							}
							test++;
						});
						/*for(key in moves) {
							var origin = key.split(",");
							var x = origin[0];
							var y = origin[1];
							var newlocation = moves[key].split(",");
							var x2 = newlocation[0];
							var y2 = newlocation[1];
							if(Game.getEntity(x2,y2)===undefined && Player.save.x!=x2 && Player.save.y!=y2)Game.moveEnemy(x,y,x2,y2);
						}*=/
					}
					
				}
			}*/
			
			Game.drawTiles();
			UI.update();
			
		}
		
	},
	
	interact: function(x,y,type) {
		if(UI.getDialogOpen()=="none") {
			type = typeof type !== 'undefined' ? type : "t";
			if(type=="t") {
				var tile = Game.getTile(x,y).c;
				if(tile=="S") {
					UI.showAlert('shop');
				}
				else if(tile=="P") {
					if(x==50 && y==13)UI.chat('penguin');
					else if(x==48 && y==260)UI.chat('penguin2');
				}
				else if(tile=="C") {
					if(Player.save.hp>0) {
						Player.save.hp--;
						if(Player.save.hp==0) {
							UI.addLog("You are killed by a cactus.");
							Player.respawn();
						}
						else {
							UI.addLog("Ouch! Cactus hurts!");
							UI.update();
						}
						UI.redEffect();
					}
					else {
						Player.respawn();
					}
				}
				else if(tile=="T") {
					UI.chat("turtle");
				}
				else if(tile=="F") {
					document.getElementById("sharpen-scissors-gold").innerHTML = tools.scissorsSharpenPrice(Battle.getWeaponInfo("scissors").damage);
					document.getElementById("sharpen-knife-gold").innerHTML = tools.knifeSharpenPrice(Battle.getWeaponInfo("knife").damage);
					UI.showAlert('forge');
				}
				else if(tile=="TC") {
					UI.showAlert('training');
				}
				else if(tile=="L") {
					UI.addLog("You died swimming in lava.");
					UI.redEffect();
					Player.respawn();
				}
				else if(tile=="FI") {
					if(Player.save.hp>0) {
						Player.save.hp-=10;
						if(Player.save.hp==0) {
							UI.addLog("You died burning.");
							Player.respawn();
						}
						else {
							UI.addLog("Fire is hot!");
							UI.update();
						}
						UI.redEffect();
					}
					else {
						Player.respawn();
					}
				}
				else if(tile=="PR") {
					if(!Game.snakeActivated && y==169){
						UI.addLog("You activated a pressure plate.");
						Game.snakeActivated = true;
						var i = 0;
						var interval = setInterval(function() {
							if(i>=5) {
								var x = Game.snake[i-5].x;
								var y = Game.snake[i-5].y;
								Game.addTile(x,y,false,"L");
								if(Player.save.x==x && Player.save.y==y) Player.interact(x,y);
							}
							if(i<Game.snake.length)Game.addBlank(Game.snake[i].x,Game.snake[i].y);
							Game.drawTiles();
							i++;
							if(i-5==Game.snake.length)clearInterval(interval), Game.snakeActivated = false;
						}, 220);
					}
					else if(y==186 && !Game.save.pathActivated){
						UI.addLog("You activated another pressure plate.");
						for(j=170;j<=185;j++) {
							Game.addBlank(x-1,j);
							Game.addBlank(x,j);
							Game.addBlank(x+1,j);
						}
						Game.drawTiles();
						Game.save.pathActivated = true;
					}
					/*else if(x==-200){
						if(y==-187)UI.addLog("Do you want to play with me?");
						else if(y==-186)UI.addLog("But time is running out..");
						else if(y==-185)UI.addLog("Don't worry, you are already trapped here.");
						else if(y==-184)UI.addLog("Trying to escape is useless.");
					}*/
				}
				else if(tile=="MS") {
					UI.showAlert('ms-shop');
				}
				else if(tile=="B1" || tile=="B2") {
					document.getElementById("give-pizza").style.display = "none";
					document.getElementById("enter-portal").style.display = "none";
					if(!Player.save.hasLoan) {
						if(tools.arrayContains(Game.save.happyPizzaCustomers,tools.arrayIndex(Game.pizzaCustomers,x+","+y))) {
							document.getElementById("house-content").innerHTML = "Thanks for the pizza!";
						}
						else if(tools.arrayContains(Game.pizzaCustomers,x+","+y) && Player.numItems("pizza")>0) {
							if(tools.arrayIndex(Game.pizzaCustomers,x+","+y)==9) {
								if(Game.save.happyPizzaCustomers.length<9) {
									document.getElementById("house-content").innerHTML = "In front of the house there's a message:<br><span style=\"font-family:monospace;\">If you are the pizza deliverer, please send everyone else's pizzas first then send me the last one.</span>";
								}
								else {
									document.getElementById("house-content").innerHTML = "You knocked the door without receiving any replies. You tried to open the door and shockingly the door is not locked. Nobody is inside, but you found a portal with a sign that says: \"To the Negative Zone\".";
									document.getElementById("enter-portal").style.display = "block";
								}
							}
							else {
								document.getElementById("house-content").innerHTML = "Hey! Pizzas! I have been waiting for you!";
								document.getElementById("give-pizza").addEventListener("click", function(){Player.givePizza(x,y)});
								document.getElementById("give-pizza").style.display = "block";
							}
						}
						else {
							document.getElementById("house-content").innerHTML = "It looks like this house is locked. You knock the door but there are no replies. Probably the owner is away.";
						}
					}
					else {
						document.getElementById("house-content").innerHTML = "It looks like you have an unpaid loan, you can't visit houses until you pay your loan.";
					}
					UI.showAlert('locked-house');
				}
				else if(tile=="B4") {
					UI.showAlert('store');
				}
				else if(tile=="TP") {
					if(x==50 && y==115) Player.move(50,262);
					else if(x==-200 && y==-201) Player.move(50,262);
					else if(x==50 && y==263) Player.move(50,116);
				}
				else if(tile=="B3") {
					UI.showAlert('museum');
				}
				else if(tile=="B5") {
					if(Player.save.hasReadLiterature3) {
						document.getElementById("no-knowledge").style.display = "none";
						document.getElementById("has-knowledge").style.display = "block";
					}
					UI.showAlert('temple');
				}
				else if(tile=="B6") {
					if(Player.save.hasLoan) {
						document.getElementById("available-loans").style.display = "none";
						document.getElementById("pay-loan").style.display = "block";
					}
					else {
						document.getElementById("available-loans").style.display = "block";
						document.getElementById("pay-loan").style.display = "none";
					}
					UI.showAlert('bank');
				}
			}
			else if(type=="e") {
				if(Battle.getEnemyInfo(Game.getEntity(x,y).name) !== undefined) {
					Battle.engage(x,y);
				}
				else if(Game.getEntityAscii(x,y)=="PA") {
					Player.takePackage(x,y);
				}
				else if(Game.getEntityAscii(x,y)=="SH") {
					Player.takeItem("s_heart",x,y);
				}
			}
		}
	},
	
	getInventory: function() {
		return Player.save.inventory;
	},
	
	getWeapon: function() {
		return Player.save.weapon;
	},
	
	getItemInfo: function(name) {
		return Player.items[name];
	},
	
	setWeapon: function(name) {
		Player.save.weapon = name;
		UI.toggleOption('weapon');
		UI.update();
	},
	
	setHead: function(name) {
		Player.save.head = name;
		UI.toggleOption('head');
		UI.update();
	},
	
	setBody: function(name) {
		Player.save.body = name;
		UI.toggleOption('body');
		UI.update();
	},
	
	buy: function(item) {
		if(item=="scissors" && !tools.arrayContains(Player.save.inventory.weapon,"scissors")) {
			if(Player.save.gold>=5) {
				Player.save.gold -= 5;
				Player.save.inventory.weapon.push("scissors");
				UI.addLog("You bought scissors for <b>5</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="knife") {
			if(Player.save.gold>=17) {
				Player.save.gold -= 17;
				Player.save.inventory.weapon.push("knife");
				UI.addLog("You bought a knife for <b>17</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="apple") {
			if(Player.save.gold>=50) {
				Player.save.gold -= 50;
				Player.save.inventory.item.apple++;
				UI.addLog("You bought an apple for <b>50</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="apple-10") {
			if(Player.save.gold>=475) {
				Player.save.gold -= 475;
				Player.save.inventory.item.apple+=10;
				UI.addLog("You bought 10 apples for <b>475</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="headphones") {
			if(Player.save.gold>=50) {
				Player.save.gold -= 50;
				Player.save.inventory.head.push("headphones");
				UI.addLog("You bought a pair of headphones for <b>50</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="magic-hat") {
			if(Player.save.gold>=750) {
				Player.save.gold -= 750;
				Player.save.inventory.head.push("magic-hat");
				UI.addLog("You bought a magic hat for <b>750</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="heart-armor") {
			if(Player.save.gold>=100000) {
				Player.save.gold -= 100000;
				Player.save.inventory.body.push("heart-armor");
				UI.addLog("You bought a heart armor for <b>100000</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="teleporter" && !Player.save.inventory.thing.teleporter) {
			if(Player.save.gold>=50000) {
				Player.save.gold -= 50000;
				Player.save.inventory.thing.teleporter = true;
				UI.addLog("You bought teleport machine for <b>50000</b> gold.");
				Game.addTile(50,115,true,"TP");
				Game.addTile(50,263,true,"TP");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="blue-heart") {
			if(Player.save.gold>=100000) {
				Player.save.gold -= 100000;
				Player.addItem("heart",1);
				Player.save.hp += 400;
				Player.save.maxhp += 400;
				UI.addLog("Your bought a blue heart for <b>100000</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		else if(item=="smartphone") {
			if(Player.save.gold>=10000000) {
				Player.save.gold -= 10000000;
				Player.save.hasSmartphone = true;
				UI.addLog("You bought a smartphone for <b>10000000</b> gold.");
			}
			else { alert('Not enough gold!'); }
		}
		UI.update();
	},
	
	addItem: function(name,num) {
		Player.save.inventory.item[name] += num;
		UI.update();
	},
	
	addThing: function(name,num) {
		Player.save.inventory.thing[name] += num;
		UI.update();
	},
	
	numItems: function(name) {
		return Player.save.inventory.item[name];
	},
	
	numThings: function(name) {
		return Player.save.inventory.thing[name];
	},
	
	removeItem: function(name,num) {
		Player.save.inventory.item[name] -= num;
		UI.update();
	},
	
	regen: function() {
		if(Battle.ongoing=="none" && Player.save.hp<Player.save.maxhp) {
			Player.save.hp += Player.save.regenHp;
			if(Player.save.hp>Player.save.maxhp)Player.save.hp = Player.save.maxhp;
			UI.update();
		}
		setTimeout("Player.regen()",Player.save.regenTimeout)
	},
	
	respawn: function() {
		Player.save.hp = Player.save.maxhp;
		if(Player.save.inventory.item.heart>=1) {
			Player.save.x = 50;
			Player.save.y = 117;
		}
		else {
			Player.save.x = 55;
			Player.save.y = 15;
		}
		Game.drawTiles();
		UI.update();
	},
	
	training: function(what) {
		if(what=="punch") {
			Player.save.punchesLeft--;
			if(Player.save.punchesLeft<=0) {
				var damage = Battle.getWeaponInfo("fists").damage;
				Battle.setWeaponInfo("fists","damage",damage+1);
				UI.addLog("Now your fists deal <b>"+(damage+1)+"</b> damage.");
				UI.update();
				Player.save.punchesLeft = (damage+2)*5;
			}
			document.getElementById("punches-left").innerHTML = Player.save.punchesLeft+" punches left to increase damage";
		}
		else if(what=="start-meditate") {
			UI.hideAlertFast();
			UI.showAlert("meditate");
			Player.meditating = true;
			Player.meditate(4);
		}
		else if(what=="stop-meditate") {
			UI.hideAlert();
			Player.meditating = false;
		}
	},
	
	meditate: function(timeLeft) {
		if(Player.meditating) {
			if(Player.save.meditateHpLeft>0) {
				timeLeft--;
				if(timeLeft<=0) {
					Player.save.maxhp++;
					Player.save.meditateHpLeft--;
					UI.addLog("Now you have <b>"+Player.save.maxhp+"</b> max hp.");
					UI.update();
					timeLeft = 3;
				}
				document.getElementById("meditate-content").innerHTML = timeLeft+" seconds left to increase max hp.";
				setTimeout(function(){Player.meditate(timeLeft);}, 1000);
			}
			else {
				document.getElementById("meditate-content").innerHTML = "It seems that you have meditated too much, you can't increase max hp by meditating anymore.";
			}
		}
	},
	
	forge: function(what) {
		if(what=="scissors") {
			var damage = Battle.getWeaponInfo("scissors").damage;
			if(Player.save.gold>=tools.scissorsSharpenPrice(damage)) {
				Player.save.gold-=tools.scissorsSharpenPrice(damage);
				var totalDmg = 0;
				if(damage<50)totalDmg = 50;
				else totalDmg = damage+50;
				Battle.setWeaponInfo("scissors","damage",totalDmg);
				document.getElementById("sharpen-scissors-gold").innerHTML = tools.scissorsSharpenPrice(totalDmg);
				UI.addLog("Your scissors now deal <b>"+totalDmg+"</b> damage.");
				UI.update();
			}
			else { alert('Not enough gold!'); }
		}
		else if(what=="knife") {
			var damage = Battle.getWeaponInfo("knife").damage;
			if(Player.save.gold>=tools.knifeSharpenPrice(damage)) {
				Player.save.gold-=tools.knifeSharpenPrice(damage);
				var totalDmg = 0;
				if(damage<10000)totalDmg = 5000;
				else totalDmg = damage+5000;
				Battle.setWeaponInfo("knife","damage",totalDmg);
				document.getElementById("sharpen-knife-gold").innerHTML = tools.knifeSharpenPrice(totalDmg);
				UI.addLog("Your knife now deals <b>"+totalDmg+"</b> damage.");
				UI.update();
			}
			else { alert('Not enough gold!'); }
		}
	},
	
	takePackage: function(x,y) {
	
		var html="";
		document.getElementById("package-take").style.display = "block";
		document.getElementById("package-take").innerHTML = "TAKE ITEM";
		
		if(x==0 && y==116) {
			html = "This package contains a blue heart!";
			document.getElementById("package-take").addEventListener("click", function(){Player.takeItem("heart",x,y)});
		}
		else if(x==25 && y==42) {
			html = "This package contains a blue heart!";
			document.getElementById("package-take").addEventListener("click", function(){Player.takeItem("heart",x,y)});
		}
		else if(y==188) {
			html = "This package contains a mysterious message:<br><br><div style='font-family:monospace;padding-left:30px;'>(25, 42) a gift awaits.<br><div style='text-align:right;padding-right:30px;'>Sincerely, (48, 260)</div></div>";
			document.getElementById("package-take").style.display = "none";
		}
		else if(x==52 && y==260) {
			var customers = [];
			for(i=0;i<Game.pizzaCustomers.length;i+=2) {
				var customer = Game.pizzaCustomers[i].split(",");
				var customer2 = Game.pizzaCustomers[i+1].split(",");
				//var numspaces = 16 - (customer[0]+", "+customer[1]).length;
				var spaces = Array(10).join("&nbsp;");
				customers.push(customer[0]+", "+customer[1]+spaces+customer2[0]+", "+customer2[1]);
			}
			var message = "<div style='font-family:monospace;padding:30px;'>List of customers:<br>"+customers.join("<br>")+"</div>";
			if(!Player.save.tookPizzas) {
				html = "This package contains 10 pizzas and a message:"+message;
				document.getElementById("package-take").innerHTML = "TAKE PIZZAS";
				document.getElementById("package-take").addEventListener("click", function(){Player.takeItem("pizzas",x,y)});
			}
			else {
				html = "This package contains a message:"+message;
				document.getElementById("package-take").style.display = "none";
			}
		}
		else {
			html = "This package contains nothing :(";
			document.getElementById("package-take").innerHTML = "REMOVE PACKAGE";
			document.getElementById("package-take").addEventListener("click", function(){Player.takeItem("none",x,y)});
		}
		
		document.getElementById("package-content").innerHTML = html;
		UI.showAlert('package');
		
	},
	
	takeItem: function(what,x,y) {
	
		document.getElementById("package-take").style.display = "none";
	
		if(what=="heart") {
			Game.removeEntity(x,y);
			Player.addItem("heart", 1);
			Player.save.hp += 400;
			Player.save.maxhp += 400;
			UI.addLog("Your took a blue heart.");
			UI.hideAlert();
		}
		else if(what=="s_heart") {
			Game.removeEntity(x,y);
			Player.addItem("s_heart", 1);
			if(Player.save.regenTimeout>0)Player.save.regenTimeout -= 100;
			else Player.save.regenHp++;
			UI.addLog("Your took a shiny heart.");
			Player.move(x,y);
		}
		else if(what=="pizzas") {
			if(!Player.save.tookPizzas) {
				Player.addItem("pizza", 10);
				UI.addLog("Your took 10 pizzas.");
				Player.save.tookPizzas = true;
				UI.hideAlert();
			}
		}
		else if(what=="none") {
			Game.removeEntity(x,y);
			UI.hideAlert();
		}
		
		UI.update();
		
	},
	
	givePizza: function(x,y) {
		var index = tools.arrayIndex(Game.pizzaCustomers,x+","+y);
		if(index != 3.14 && !tools.arrayContains(Game.save.happyPizzaCustomers,index) && Player.save.inventory.item.pizza > 0 && Game.save.happyPizzaCustomers.length<9) {
			var goldget = tools.getRandomInt(20000,30000);
			Player.save.gold += goldget;
			Game.save.happyPizzaCustomers.push(index);
			Player.removeItem("pizza",1);
			UI.addLog("You have delivered <b>"+Game.save.happyPizzaCustomers.length+"</b> pizzas and received <b>"+goldget+"</b> gold.");
			UI.update();
			UI.hideAlert();
		}
		//else console.log(index, tools.arrayContains(Game.save.happyPizzaCustomers,index), Player.save.inventory.item.pizza);
	},
	
	negativeZone: function() {
		UI.hideAlert();
		Player.move(-200,-200, "negative");
		UI.addLog("You entered the portal.");
	},
	
	read: function(num) {
	
		var scroll = "";
		
		if(num==1) {
scroll='   _________________________\n\
 =(__    ___     __  ___   _)=\n\
   |                       |\n\
   |   Roses are red       |\n\
   |   Violets are blue    |\n\
   |   All my base         |\n\
   |   Are belong to you   |\n\
   |__    ___   __    ___  |\n\
 =(_________________________)=\n\
';
		}
		else if(num==2) {
scroll='  _____________________________________________\n\
 =(__    ___      __    _____   ___      ____   _)=\n\
   |                                            |\n\
   |   Ho, mia kor\', ne batu maltrankvile,      |\n\
   |   El mia brusto nun ne saltu for!          |\n\
   |   Jam teni min ne povas mi facile,         |\n\
   |   Ho, mia kor\'!                            |\n\
   |                                            |\n\
   |   Ho, mia kor\'! Post longa laborado        |\n\
   |   &#264u mi ne venkos en decida hor\'?          |\n\
   |   Sufi&#265e! trankvili&#285u de l\' batado,        |\n\
   |   Ho, mia kor\'!                            |\n\
   |__    ___   __    ___  _________        _   |\n\
 =(______________________________________________)=\n\
';			
		}
		else if(num==3) {
scroll='   _____________________________________________\n\
 =(__    ___      __    _____   ___      ____   _)=\n\
   |                                            |\n\
   |   Legends say that in a mysterious place   |\n\
   |   called "the negative zone" there\'s a     |\n\
   |   creature which has infinite health and   |\n\
   |   high damage. One who can defeat it       |\n\
   |   will have their own adventure of a       |\n\
   |   lifetime and gain a lot of fame.         |\n\
   |__    ___   __    ___  _________        _   |\n\
 =(______________________________________________)=\n\
';			
			Player.save.hasReadLiterature3 = true;
		}
		else if(num==4) {
scroll='   _____________________________________________\n\
 =(__    ___      __    _____   ___      ____   _)=\n\
   |                                            |\n\
   |   Here\'s the thing. You said a "jackdaw    |\n\
   |   is a crow."                              |\n\
   |                                            |\n\
   |   Is it in the same family? Yes. No        |\n\
   |   one\'s arguing that.                      |\n\
   |                                            |\n\
   |   As someone who is a scientist who        |\n\
   |   studies crows, I am telling you,         |\n\
   |   specifically, in science, no one calls   |\n\
   |   jackdaws crows. If you want to be        |\n\
   |   "specific" like you said, then you       |\n\
   |   shouldn\'t either. They\'re not the same   |\n\
   |   thing.                                   |\n\
   |                                            |\n\
   |   If you\'re saying "crow family" you\'re    |\n\
   |   referring to the taxonomic grouping of   |\n\
   |   Corvidae, which includes things from     |\n\
   |   nutcrackers to blue jays to ravens.      |\n\
   |                                            |\n\
   |   So your reasoning for calling a          |\n\
   |   jackdaw a crow is because random         |\n\
   |   people "call the black ones crows?"      |\n\
   |   Let\'s get grackles and blackbirds in     |\n\
   |   there, then, too.                        |\n\
   |                                            |\n\
   |   Also, calling someone a human or an      |\n\
   |   ape? It\'s not one or the other, that\'s   |\n\
   |   not how taxonomy works. They\'re both.    |\n\
   |   A jackdaw is a jackdaw and a member of   |\n\
   |   the crow family. But that\'s not what     |\n\
   |   you said. You said a jackdaw is a        |\n\
   |   crow, which is not true unless you\'re    |\n\
   |   okay with calling all members of the     |\n\
   |   crow family crows, which means you\'d     |\n\
   |   call blue jays, ravens, and other        |\n\
   |   birds crows, too. Which you said you     |\n\
   |   don\'t.                                   |\n\
   |                                            |\n\
   |   It\'s okay to just admit you\'re           |\n\
   |   wrong, you know?                         |\n\
   |__    ___   __    ___  _________        _   |\n\
 =(______________________________________________)=\n\
';			
		}
		
		document.getElementById("scroll-text").innerHTML = scroll;
		UI.hideAlertFast();
		UI.showAlert("script");
		
	},
	
	loan: function(action) {
		if(action=="small") {
			if(!Player.save.hasLoan) {
				Player.save.hasLoan = true;
				Player.save.gold += 1000000;
				UI.addLog("You took a small loan of a million gold.");
				UI.hideAlert();
			}
		}
		else if(action=="pay") {
			if(Player.save.hasLoan) {
				if(Player.save.gold >= 1000000) {
					Player.save.hasLoan = false;
					Player.save.gold -= 1000000;
					UI.addLog("You paid your loan.");
					UI.hideAlert();
				}
				else { alert('Not enough gold!'); }
			}
		}
		UI.update();
	},
	
	temple: function(action) {
	
		document.getElementById("temple-gun").style.display = "none";
		document.getElementById("temple-potion").style.display = "none";
		document.getElementById("temple-armor").style.display = "none";
		document.getElementById("craft-armor").style.display = "none";
		document.getElementById("craft-potion").style.display = "none";
		
		if(action=="armor") {
			document.getElementById("temple-title").innerHTML = "Dragon Armor";
			document.getElementById("temple-armor").style.display = "block";
			document.getElementById("craft-armor").style.display = "block";
		}
		else if(action=="gun") {
			Player.save.devAway = false;
			document.getElementById("temple-title").innerHTML = "Infinity Gun";
			document.getElementById("temple-gun").style.display = "block";
		}
		else if(action=="potion") {
			document.getElementById("temple-title").innerHTML = "Blue Heart Potion";
			document.getElementById("temple-potion").style.display = "block";
			document.getElementById("craft-potion").style.display = "block";
		}
		
		UI.hideAlertFast();
		UI.showAlert("temple2");
		
	},
	
	craft: function(what) {
		if(what=="armor") {
			if(!tools.arrayContains(Player.save.inventory.body, "dragon-armor")) {
				if(Battle.getWeaponInfo("knife").damage >= 50000) {
					if(Player.numItems("dragon-corpse") >= 20) {
						Player.removeItem("dragon-corpse", 20);
						Player.save.inventory.body.push("dragon-armor");
						UI.hideAlert();
						UI.addLog("You crafted a dragon armor, don't forget to use it!");
					}
					else { alert('You don\'t have enough dragon corpse to craft the armor yet!'); }
				}
				else { alert('Your knife needs to have at least 50000 damage to craft the armor!'); }
			}
			else { alert('You already have the armor!'); }
		}
		else if(what=="potion") {
			if(tools.arrayContains(Player.save.inventory.body, "dragon-armor")) {
				var numpotions = prompt("How many blue heart potions do you want to craft?", "1");
				numpotions = parseInt(Math.abs(Math.round(numpotions)));
				if(isNaN(numpotions) || numpotions<1) numpotions = 1;
				if(confirm("Are you sure to craft "+numpotions+" blue heart potion(s)?")) {
					if(Player.numItems("heart") >= numpotions) {
						if(Player.numItems("s_heart") >= numpotions) {
							Player.removeItem("heart", numpotions);
							Player.removeItem("s_heart", numpotions);
							Player.save.hp += 500000 * numpotions;
							Player.save.maxhp += 500000 * numpotions;
							UI.addLog("You drank <b>"+numpotions+"</b> blue heart potion(s) and now you have <b>"+Player.save.maxhp+"</b> max HP!");
						}
						else { alert('You don\'t have enough sparkling heart!'); }
					}
					else { alert('You don\'t have enough blue heart!'); }
				}
			}
			else { alert('You don\'t have a dragon armor!'); }
		}
		UI.update();
	}
	
};
