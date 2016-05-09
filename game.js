
var Game = {
	
	"save": {
		"entities": {},
		"seed": Math.round(Math.random()*1000000000000),
		"pathActivated": false,
		"happyPizzaCustomers": [],
		"bookmarks": ["http://www.twitter.com"], //only "http://www.twitter.com"
	},
	
	"mapwidth": 100,
	"mapheight": 350,
	"screenwidth": 28,
	"screenheight": 14,
	"grid": {},
	"display": "",
	"noise": "",
	"autosave": 30,
	
	"pizzaCustomers": [],
	"potentialPizzaCustomers": [],
	
	"entityCount": {
		"rat": 0,
		"mouse": 0,
		"camel1": 0,
		"camel2": 0,
		"alien": 0,
		"snake": 0,
		"goat": 0,
		"dragon": 0,
		"ghost": 0,
		"alien2": 0,
	},
	
	"grassColor": "#90CA6E", //rgb 144, 202, 110
	"darkGrassColor": "#D08D32",
	"sandColor": "#FDD888",
	"waterColor": "#358CCE",
	"bridgeColor": "#993322",
	"lavaColor": "#FF6200",
	"brownStoneColor": "#882211", //rgb 136, 34, 17
	"stoneColor": "#B0B0B0",
	"teleporterColor": "#CC00EE",
	"roadColor": "#000000",
	"redColor": "#DB0000",
	
	"snake": [],
	"snakeActivated": false,
	"snakeStartx": 0,
	
	"chat": {
	
		"penguin": {
			"title": "Penguin",
			"img": "1f427",
			"dialog": ["Hi there! You seem to be new here.", "Don't ask me how I can live in this climate, but maybe I can help you a little bit.", "The further you go from here the enemies get harder, but they give you more gold.", "Good Luck!"],
		},
		
		"turtle": {
			"title": "Turtle",
			"img": "1f422",
			"dialog": ["Son, well, nope, I'm not your dad, ummm... forget it.", "Anyway, did you remember what the Penguin said? The further you go the enemies get harder, and it is true.", "The enemies across this river is insanely hard, and therefore you must qualify to cross the bridge.", "This bridge is guarded by some alien robots created by me (don't underestimate me), if you can kill at least 2 of them then you can cross the bridge.", "Good Luck!"],
		},
		
		"penguin2": {
			"title": "Penguin",
			"img": "1f427",
			"dialog": ["Hi again! Glad to see that you made it this far.", "By the way, I left a package near the lava river some time ago, and I hope you found it. The package could be useful for you.", "Let's talk about this town, if you try to visit the houses here you might find them locked and the owners seemed to be away.", "Well, right now is a vacation season for the people here and most of the people are away indeed.", "The rest are probably still in their houses doing their own thing, but are too lazy to open the door.", "I could help you to interact with these people if you wanted to.", "Maybe you want to be a pizza deliverer? The package you see near me contains 10 pizzas and coordinates of the customers.", "They surely will open the door if you are a pizza deliverer no matter how lazy they are, trust me.","So, if you want to help me deliver the pizzas then you might have a chance to interact with them.", "As a gratitude you can take all the money they pay to you.", "Good Luck!"],
		},
		
		"penguin3": {
			"title": "Penguin",
			"img": "1f427",
			"dialog": ["Hi there! I have an important message for you!", "Apparently the boss you have \"killed\" has 3 lives! Yes, three, you read it right.", "Right now it has two lives left, and it won't have Infinity HP anymore. But you won't be able to use the Infinity Gun against it anymore too, you will need real skills!", "I hope you can use the gold dropped wisely.", "Good Luck!"],
		},
		
		"penguin4": {
			"title": "Penguin",
			"img": "1f427",
			"dialog": ["Great! The boss has one life left now!", "The boss drops infinite gold, anyway, so I hope you can use them to kill the boss for good!", "Good Luck!"],
		},
		
		"penguin5": {
			"title": "Penguin",
			"img": "1f427",
			"dialog": ["ggwp!"],
		},
		
	},
	
	"entity": {
		"package": { "ascii": "PA" },
		"s_heart": { "ascii": "SH" },
	},
	
	"tileMap": {
				
		"@": [0, 0], //player
		"T1": [27, 0], //tree type 1
		"T2": [27*2, 0], //tree type 2
		"F": [27*3, 0], //forge
		"B1": [27*3, 0], //looks like a forge, but it isn't
		"S": [27*4, 0], //shop
		"R": [27*5, 0], //rat
		"B": [27*6, 0], //barrier
		"P": [27*7, 0], //the penguin
		"C": [27*8, 0], //cactus
		"PT": [27*9, 0], //palm tree
		
		"M": [0, 27], //mouse
		"CM1": [27, 27], //camel type 1
		"CM2": [27*2, 27], //camel type 2
		"A": [27*3, 27], //space invader alien thingy
		"T": [27*4, 27], //turtle
		"TC": [27*5, 27], //training center
		"B2": [27*5, 27], //looks like a training center, but it isn't 
		"SN": [27*6, 27], //snake
		"PA": [27*7, 27], //package
		"G": [27*8, 27], //goat
		"FI": [27*9, 27], //fire
		
		"PR": [0, 54], //pressure plate
		"D": [27, 54], //dragon
		"MS": [27*2, 54], //the glorious ms paint shop
		"SH": [27*3, 54], //shiny heart
		"GH": [27*4, 54], //2spooky4me
		"B3": [27*5, 54], //museum
		"B4": [27*6, 54], //store
		"B5": [27*7, 54], //temple
		"PO": [27*8, 54], //poop
		"B6": [27*9, 54], //bank
		
		" ": [270, 0], //empty
		"W": [270, 0], //water (empty image with blue bg)
		"BR": [270, 0], //bridge (empty image with brown bg)
		"SA": [270, 0], //sand (empty image with yellow bg)
		"L": [270, 0], //lava (empty image with orange bg)
		"BS": [270, 0], //brown stone (empty image with brown bg)
		//"RO": [270, 0], //road (empty image with black bg)
		"ST": [270, 0], //stone (empty image with gray bg)
		"TP": [0, 54], //teleporter (pressure plate with purple bg)
		
	},
	
	init: function() {
		
		ROT.RNG.setSeed(Game.save.seed);
		Game.snakeStartx = tools.getSeededRandomInt(40,60);
		
		var tileSet = document.createElement("img");
		tileSet.src = "images/sprite.png";
		Game.display = new ROT.Display({
			layout: "tile",
			bg: "#fff",
			width: Game.screenwidth,
			height: Game.screenheight,
			tileWidth: 27,
			tileHeight: 27,
			tileSet: tileSet,
			tileColorize: true,
			tileMap: Game.tileMap,
		});
		
		tileSet.onload = function() {
			
			document.getElementById("game-ascii").appendChild(Game.display.getContainer());
			document.addEventListener("keydown",function(e){keyboard.keydown(e);});
			Game.noise = new ROT.Noise.Simplex();
			Game.generate();
			Game.drawTiles();
			UI.update();
			UI.toggleMapinfo();
			UI.addLog("Use WASD / arrow keys to move, bump objects to interact.");
			UI.addLog("You spawned in this world.");
			Player.regen();
			console2.start();
			browser.load();
			
			setInterval(function() {
				if(Game.autosave >= 0) {
					if(Game.autosave > 0) Game.autosave--;
					else {
						Game.autosave = 30;
						Game.saveGame(false, false);
					}
					document.getElementById("autosave-time").innerHTML = "Game autosaves in "+Game.autosave+" seconds.";
				}
				else document.getElementById("autosave-time").innerHTML = "Autosave is off.";
			}, 1000);
			
		}
		
	},
	
	saveGame: function(asText, alertConfirm) {
	
		var stringtosave = {
			"version": "1.1",
			"game": JSON.stringify(Game.save),
			"player": JSON.stringify(Player.save, function(key, value) { return value == Infinity ? "Infinity" : value; }),
			"damage": [Battle.getWeaponInfo("fists").damage, Battle.getWeaponInfo("scissors").damage, Battle.getWeaponInfo("knife").damage, Battle.getWeaponInfo("hammer").damage]
		};
		
		if(!asText) {
			localStorage.materialwarriorsave = btoa(JSON.stringify(stringtosave));
			if(alertConfirm) alert('Game saved!');
		}
		else {
			//prompt("Save the code somewhere safe!", btoa(JSON.stringify(stringtosave)));
			UI.hideAlertFast();
			UI.showAlert("save-code");
			document.getElementById("save-code-textarea").innerHTML = btoa(JSON.stringify(stringtosave));
		}
		
	},
	
	loadGame: function(fromText) {
		
		savedstring = "";
		if(fromText) {
			if(!confirm("Importing game from text will override your current save, continue?")) return;
			savedstring = JSON.parse(atob(prompt("Enter save code")));
			if(savedstring != "") {
				Game.applySave(savedstring);
				Game.saveGame(false, false);
				window.location.reload();
			}
		}
		else {
			if(localStorage.materialwarriorsave !== undefined && localStorage.materialwarriorsave != "") {
				savedstring = JSON.parse(atob(localStorage.materialwarriorsave));
				Game.applySave(savedstring);
			}
			Game.init();
		}
		
	},
	
	applySave: function(savedstring) {
		
		Game.save = JSON.parse(savedstring['game']);
		Player.save = JSON.parse(savedstring['player'], function (key, value) { return value === "Infinity" ? Infinity : value; });
		weaponDamage = savedstring['damage'];
		
		for(i in Game.save.entities) {
			entityName = Game.save.entities[i].name;
			if(Game.entityCount[entityName]!==undefined)Game.entityCount[entityName]++;
			
			if(Game.save.entities[i].type !== undefined) {
				delete Game.save.entities[i].type;
				delete Game.save.entities[i].ascii;
				delete Game.save.entities[i].displayName;
			}
		}
		
		var minDamage = [Battle.getWeaponInfo("fists").damage, Battle.getWeaponInfo("scissors").damage, Battle.getWeaponInfo("knife").damage, Battle.getWeaponInfo("hammer").damage];
		
		Battle.setWeaponInfo("fists", "damage", Math.max(weaponDamage[0], minDamage[0]));
		Battle.setWeaponInfo("scissors", "damage", Math.max(weaponDamage[1], minDamage[1]));
		Battle.setWeaponInfo("knife", "damage", Math.max(weaponDamage[2], minDamage[2]));
		Battle.setWeaponInfo("hammer", "damage", Math.max(weaponDamage[3], minDamage[3]));
		
	},
	
	toggleAutosave: function() {
		if(Game.autosave >= 0) {
			Game.autosave = -1;
			document.getElementById("autosave-time").innerHTML = "Autosave is off.";
		}
		else {
			Game.autosave = 30;
			document.getElementById("autosave-time").innerHTML = "Game autosaves in 30 seconds.";
		}
	},
	
	reset: function() {
		if(confirm("Are you sure to reset your game? This action can't be undone!")) {
			if(prompt("Type \"RESET\" to reset your game") == "RESET") {
				localStorage.removeItem("materialwarriorsave");
				alert('Game has been reset!');
				window.location.reload();
			}
		}
	},
	
	addTile: function(x,y,w,c) {
		//bg = typeof type !== 'undefined' ? bg : "transparent";
		Game.grid[x+","+y] = {"walkable":w, "c":c}; //c = ascii
	},
	
	addBlank: function(x,y) {
		Game.grid[x+","+y] = undefined;
	},
	
	addEntity: function(x,y,name) {
		var entityInfo = Game.getEntityInfo(name);
		Game.save.entities[x+","+y] = {"name":name, "ascii":entityInfo.ascii};
		UI.update();
	},
	
	addEnemy: function(x,y,name) {
		var enemyInfo = Battle.getEnemyInfo(name);
		Game.save.entities[x+","+y] = {"name":name, "hp":enemyInfo.maxhp};
		if(Game.entityCount[name]!=='undefined')Game.entityCount[name]++;
		UI.update();
	},
	
	/*	
	
		 ______
		/______\
		\/\/\/\/    "Hey guys! I found this little gem!"
		 \____/
			 
			 
	*/
	
	generate: function() {
	
		//generate city
		
		//var cityy=280;
		
		/*for(j=cityy;j<305;j++) {
			for(i=-14;i<=Game.mapwidth+14;i++) {
				Game.addTile(i,j,false,"BR");
			}
		}*/
		
		/*var ax = [];
		var ay = [];
		var bx = Math.floor(ROT.RNG.getUniform() * 3) + 1;
		var by = Math.floor(ROT.RNG.getUniform() * 3) + 1;
		var rand = Math.round(ROT.RNG.getUniform()*10);
		var rand2 = Math.round(ROT.RNG.getUniform()*10);
		
		for(i=0;i<=Game.mapwidth;i++) {
		
			//Game.addTile(i,cityy-3,true,"ST");
			//Game.addTile(i,cityy-2,true,"RO");
			//Game.addTile(i,cityy-1,true,"RO");
			//Game.addTile(i,cityy,true,"ST");
			
			//Game.addTile(i,cityy+50,true,"ST");
			//Game.addTile(i,cityy+51,true,"RO");
			//Game.addTile(i,cityy+52,true,"RO");
			//Game.addTile(i,cityy+53,true,"ST");
			
			if((bx>5 && ROT.RNG.getUniform()<.3) || bx>7)ax[i] = 0, bx = 0;
			bx++;
		}
		
		for(j=0;j<50;j++) {
			if((by>5 && ROT.RNG.getUniform()<.3) || by>7)ay[j] = 0, by = 0;
			by++;
		}
		
		var state = ROT.RNG.getState();
		
		for(j=0;j<50;j++) {
			for(i=-14;i<=Game.mapwidth+14;i++) {
				if(ax[i]==0)rand = Math.round(ROT.RNG.getUniform()*10);
				if(ay[j]==0)rand2 = Math.round(ROT.RNG.getUniform()*10);
				if(ax[i]==0) {
					Game.addTile(i-2,j+cityy,true,"ST");
					Game.addTile(i+1,j+cityy,true,"ST");
				}
				else if(ay[j]==0) {
					Game.addTile(i,j+rand+cityy-2,true,"ST");
					Game.addTile(i,j+rand+cityy+1,true,"ST");
				}
			}
		}
		
		ROT.RNG.setState(state);
		
		for(j=0;j<50;j++) {
			for(i=-14;i<=Game.mapwidth+14;i++) {
				if(ax[i]==0)rand = Math.round(ROT.RNG.getUniform()*10);
				if(ay[j]==0)rand2 = Math.round(ROT.RNG.getUniform()*10);
				if(ax[i]==0) {
					Game.addTile(i-1,j+cityy,true,"RO");
					Game.addTile(i,j+cityy,true,"RO");
				}
				else if(ay[j]==0) {
					Game.addTile(i,j+rand+cityy-1,true,"RO");
					Game.addTile(i,j+rand+cityy,true,"RO");
				}
			}
		}*/
		
		/*for(j=0;j<51;j++) {
		
			Game.addTile(0,j+cityy,true,"ST");
			Game.addTile(1,j+cityy,true,"RO");
			Game.addTile(2,j+cityy,true,"RO");
			Game.addTile(3,j+cityy,true,"ST");
			
			Game.addTile(Game.mapwidth,j+cityy,true,"ST");
			Game.addTile(Game.mapwidth-1,j+cityy,true,"RO");
			Game.addTile(Game.mapwidth-2,j+cityy,true,"RO");
			Game.addTile(Game.mapwidth-3,j+cityy,true,"ST");
			
		}*/
		
		for(i=-1;i<=Game.mapwidth+1;i++) { //generate barriers
			Game.addTile(i,-1,false,"B");
			Game.addTile(i,Game.mapheight+1,false,"B");
		}
		
		for(j=-1;j<=Game.mapheight+1;j++) { //generate barriers
			Game.addTile(-1,j,false,"B");
			Game.addTile(Game.mapwidth+1,j,false,"B");
		}
		
		for(j=-7;j<=Game.mapheight+7;j++) {
			for(i=-14;i<=Game.mapwidth+14;i++) {
				if(!(i==Player.save.x && j==Player.save.y)) {
					
					if((j<59 || j>91) && j<97) {
						var tree = ROT.RNG.getUniform()<.5?"T1":"T2";
						if(Game.noise.get(i/20,j/10) > .3)Game.addTile(i,j,false,tree);
					}
					else if(j>=63 && j<=87) {
						if(ROT.RNG.getUniform()<.05)Game.addTile(i,j,false,"C");
						
						//Oases
						if(Game.noise.get(i/10,j/10) > .35 && j>=70 && j<=80)Game.addTile(i,j,false,"PT");
						if(Game.noise.get(i/10,j/10) > .6 && j>=70 && j<=80)Game.addTile(i,j,false,"W");
					}
					if(j>=100 && j<=110) { //generate the river and the bridge
						if(i>=48 && i<=52)Game.addTile(i,j,true,"BR");
						else Game.addTile(i,j,false,"W");
					}
					else if(j>=114 && j<=150) {
						if(ROT.RNG.getUniform()<.05 && Game.noise.get(i/30,j/30) < .5) {
							var tree = ROT.RNG.getUniform()<.5?"T1":"T2";
							Game.addTile(i,j,false,tree);
						}
					}
					else if(j>150 && j<=160) {
						if(ROT.RNG.getUniform()<.05 && Game.noise.get(i/20,j/10) > .01) {
							var tree = ROT.RNG.getUniform()<.5?"T1":"T2";
							Game.addTile(i,j,false,tree);
						}
					}
					else if(j>161 && j<=167) {
						if(ROT.RNG.getUniform()<.05)Game.addTile(i,j,true,"FI");
					}
					else if(j>=170 && j<=185) {
						Game.addTile(i,j,false,"L"); //generate lava river
					}
					else if(j>190 && j<=250) {
						if(Game.noise.get(i/20,j/10) > .3)Game.addTile(i,j,false,"L"); //Lava lakes
						if(ROT.RNG.getUniform()<.05 && Game.noise.get(i/20,j/10) < .3 && i>=0 && i<=Game.mapwidth)Game.addTile(i,j,true,"FI");
					}
					else if(j>255 && j<=270) {
						if(ROT.RNG.getUniform()<.05 && Game.noise.get(i/20,j/10) > .01) {
							var tree = ROT.RNG.getUniform()<.5?"T1":"T2";
							Game.addTile(i,j,false,tree);
						}
					}
					else if(j>270) {
						if(Game.noise.get(i/15,j/5) > .5 && Game.noise.get(i/30,j/30) < .6) {
							var tree = ROT.RNG.getUniform()<.5?"T1":"T2";
							Game.addTile(i,j,false,tree);
						}
						if(Game.noise.get(i/15,j/5) < -.8 && Game.noise.get(i/30,j/30) < .6) { //buildings
						
							var random = tools.getSeededRandomInt(1,7);
							if(random<7)Game.addTile(i,j,false,"B"+random);
							else Game.addTile(i,j,false,"S");
							
							if(random<3 && Game.pizzaCustomers.length<10 && i>15 && i<Game.mapwidth-15 && j<350) {
								
								if(Game.getTile(i-1,j)===undefined || Game.getTile(i,j-1)===undefined) {
									if(ROT.RNG.getUniform()<.3) Game.pizzaCustomers.push(i+","+j);
									else if(Game.potentialPizzaCustomers.length<10) Game.potentialPizzaCustomers.push(i+","+j);
								}
								
							}
							
						}
						if(Game.noise.get(i/30,j/30) > .7)Game.addTile(i,j,false,"W"); //lakes
					}
					
					/*if(i>25 && j>123 && j<145) {
							if(ROT.RNG.getUniform()<.005) {
								console.log(i+" "+(j-1));
								Game.addTile(i-1,j-1,false,"T1");
								Game.addTile(i-1,j,false,"T2");
								Game.addTile(i-1,j+1,false,"T1");
								Game.addTile(i,j+1,false,"T2");
								Game.addTile(i+1,j-1,false,"T2");
								Game.addTile(i+1,j,false,"T1");
								Game.addTile(i+1,j+1,false,"T2")
								
								Game.addBlank(i,j-2);
								Game.addBlank(i,j);
								Game.addBlank(i,j-1);
								
								Game.addEnemy(i,j-1,"alien");
								
								Game.addEntity(i,j,"package");
								
							}
						}*/
					
					if(j>=12 && j<=18 && i>=50 && i<=55)Game.addBlank(i,j); //generate blank space
					if(j>=39 && j<=45 && i>=22 && i<=28)Game.addBlank(i,j); //generate blank space
					if(j>=39 && j<=45 && i>=22 && i<=28)Game.addBlank(i,j); //generate blank space
					if(j>=42 && j<=47 && i>=75 && i<=80)Game.addBlank(i,j); //generate blank space
					if(j>=95 && j<=99 && i>=40 && i<=60)Game.addBlank(i,j); //generate blank space
					if(j>=111 && j<=113 && i>=40 && i<=60)Game.addBlank(i,j); //generate blank space
					if(j>=114 && j<=119 && i>=47 && i<=53)Game.addBlank(i,j); //generate blank space
					if(j>=259 && j<=264 && i>=48 && i<=55)Game.addBlank(i,j); //generate blank space
					
				}
			}
		}
		
		if(Game.pizzaCustomers.length<10) {
			var j = 0;
			for(i=Game.pizzaCustomers.length-1;i<9;i++) {
				Game.pizzaCustomers.push(Game.potentialPizzaCustomers[j]);
				j++;
			}
		}
		
		var dijkstra = new ROT.Path.Dijkstra(50, 120, function(x,y) { //generate path to maze
			return Game.getTile(x,y)===undefined;
		});
		
		dijkstra.compute(20, 147, function(x, y) {
			for(i=-1;i<2;i++) {
				if(ROT.RNG.getUniform()<.4)Game.addTile(x+i,y,true,"SA");
			}
		});
		
		var startx = Game.snakeStartx;
		var starty = 169;
		var dirleft = ROT.RNG.getUniform()<.5;
		
		Game.addTile(startx,169,true,"PR");
		while(starty<185) { //generate the lava "snake" thingy
			if(starty>=180) {
				for(i=starty;i<185;i++) {
					starty++;
					//Game.addBlank(startx,starty);
					Game.snake.push({"x": startx, "y": starty});
				}
			}
			else {
				for(i=0;i<tools.getSeededRandomInt(2,5);i++) {
					starty++;
					//Game.addBlank(startx,starty);
					Game.snake.push({"x": startx, "y": starty});
				}
			}
			if(starty<185) {
				for(i=0;i<tools.getSeededRandomInt(5,10);i++) {
					if(dirleft)startx--;
					else if(!dirleft)startx++;
					//Game.addBlank(startx,starty);
					Game.snake.push({"x": startx, "y": starty});
				}
			}
			if(dirleft)dirleft=false;
			else if(!dirleft)dirleft=true;
		}
		Game.addTile(startx+13,186,true,"PR");
		
		if(Game.save.pathActivated) {
			for(j=170;j<=185;j++) {
				Game.addBlank(startx+12,j);
				Game.addBlank(startx+13,j);
				Game.addBlank(startx+14,j);
			}
		}
		
		var maze = new ROT.Map.EllerMaze(20, 35); //generate maze
		maze.create(function(x,y,what) {
			if(what==1) {
				var tree = ROT.RNG.getUniform()<.5?"T1":"T2";
				Game.addTile(x-1,y+115,false,tree);
			}
			else {
				Game.addBlank(x-1,y+115);
			}
		});
		
		/*for(j=150;j<=180;j++) { //testing custom colored tiles
			for(i=0;i<=Game.mapwidth;i++) {
				k = j-150;
				var red = (144-k<=136)?144-k:136;
				var green = (202-k*5>=34)?202-k*5:34;
				var blue = (110-k>=17)?110-k:17;
				Game.addTile(i,j,true,"rgb|"+red+","+green+","+blue);
			}
		}*/
		
		/*var watery = 100;
		for(i=-14;i<=Game.mapwidth+14;i++) { //generate water
		
			if(Math.abs(i)%3==0) {
				if(ROT.RNG.getUniform()<.3 && watery>98)watery--;
				else if(ROT.RNG.getUniform()<.7 && watery<102)watery++;
			}
			
			if(i>=46 && i<=54)watery = 100;
			
			if(i!=-1 && i!=Game.mapwidth+1) {
				Game.addTile(i,watery-1,true,"SA");
				Game.addTile(i,watery-2,true,"SA");
				Game.addTile(i,watery-3,true,"SA");
				Game.addTile(i,watery+13,true,"SA");
				Game.addTile(i,watery+14,true,"SA");
				Game.addTile(i,watery+15,true,"SA");
			}
			
			for(j=watery;j<=watery+12;j++) {
				Game.addTile(i,j,false,"W");
			}
			
		}*/
		
		Game.addBlank(17,148);
		Game.addBlank(18,148);
		Game.addBlank(19,148);
		Game.addBlank(20,148); //just in case
		
		Game.addTile(24,41,false,"T2");
		Game.addTile(25,41,false,"T1");
		Game.addTile(26,41,false,"T1");
		Game.addTile(24,42,false,"T2");
		Game.addTile(24,43,false,"T1");
		Game.addTile(25,43,false,"T2");
		Game.addTile(26,43,false,"T2");
		
		Game.addTile(50,12,false,"S");
		Game.addTile(50,13,false,"P");
		Game.addTile(50,97,false,"T");
		
		Game.addTile(49,116,false,"F");
		Game.addTile(51,116,false,"TC");
		Game.addTile(50,118,false,"MS");
		
		Game.addTile(78,45,false,"MS");
		
		Game.addTile(48,260,false,"P");
		Game.addTile(52,259,false,"B");
		Game.addTile(52,261,false,"B");
		Game.addTile(53,260,false,"B");
		
		Game.addTile(55,261,false,"F");
		Game.addTile(53,264,false,"TC");
		
		//the negative zone
		for(i=-204;i<=-196;i++){
			Game.addTile(i,-204,false,"B");
		}
		
		k = -204;
		l = -196;
		m = 0;
		for(i=-203;i<=-196;i++) {
			Game.addTile(k,i,false,"B");
			Game.addTile(l,i,false,"B");
			m++;
			if(m%2==0)k++,l--;
		}
		
		/*
		
		
			I have a feeling that this part of the code will appear on a particular subreddit about bad codes and stuff
			Before taking a screenshot, please listen to me first
			Somehow the addEnemy function can't work inside loop and I don't know why, so this is what I do
			Rather than posting the image, why not tell me what to do so the addEnemy function works inside a loop?
			Thank you in advance
			
			                                                                                                 Sincerely,
			
			
			                                                                                              The Developer
																										  
			PS: I have another feeling that this comment will appear on /r/ProgrammerHumor instead
			
			
		*/
		
		if(Object.keys(Game.save.entities).length === 0 && JSON.stringify(Game.save.entities) === JSON.stringify({})) Game.generateACrapTonOfEntities(startx);
		
		Game.addTile(-202,-201,true,"SA");
		Game.addTile(-202,-200,true,"SA");
		Game.addTile(-201,-200,true,"SA");
		Game.addTile(-199,-200,true,"SA");
		Game.addTile(-198,-200,true,"SA");
		
		Game.addTile(-202,-190,true,"SA");
		Game.addTile(-201,-190,true,"SA");
		Game.addTile(-200,-190,true,"SA");
		Game.addTile(-199,-190,true,"SA");
		Game.addTile(-198,-190,true,"SA");
		
		Game.addTile(-199,-191,true,"SA");
		Game.addTile(-202,-191,true,"SA");
		Game.addTile(-201,-191,true,"SA");
		Game.addTile(-201,-192,true,"SA");
		
		Game.addTile(-202,-171,false,"L");
		Game.addTile(-201,-171,false,"L");
		Game.addTile(-200,-171,false,"L");
		Game.addTile(-199,-171,false,"L");
		Game.addTile(-198,-171,false,"L");
		
		for(i=-201;i<=-199;i++) {
			Game.addTile(i,-199,true,"SA");
			Game.addTile(i,-198,true,"SA");
		}
		
		for(j=-197;j<=-190;j++) Game.addTile(-200,j,true,"SA");
		
		for(i=-235;i<=-164;i++) {
			Game.addTile(i,-242,false,"B");
			Game.addTile(i,-157,false,"B");
		}
		
		for(j=-242;j<=-157;j++) {
			Game.addTile(-235,j,false,"B");
			Game.addTile(-164,j,false,"B");
		}
		
		//Game.addTile(-200,-201,true,"TP");
		//Game.addTile(-200,-187,true,"PR");
		//Game.addTile(-200,-186,true,"PR");
		//Game.addTile(-200,-185,true,"PR");
		//Game.addTile(-200,-184,true,"PR");
		
		if(Player.save.inventory.thing.teleporter) {
			Game.addTile(50,115,true,"TP");
			Game.addTile(50,263,true,"TP");
		}
		
	},
	
	generateACrapTonOfEntities: function(startx) {
		
		Game.addEntity(0,116,"package");
		
		Game.addEnemy(48,99,"alien");
		Game.addEnemy(49,99,"alien");
		Game.addEnemy(50,99,"alien");
		Game.addEnemy(51,99,"alien");
		Game.addEnemy(52,99,"alien");
		
		Game.addEnemy(48,111,"alien");
		Game.addEnemy(49,111,"alien");
		Game.addEnemy(50,111,"alien");
		Game.addEnemy(51,111,"alien");
		Game.addEnemy(52,111,"alien");
		
		Game.addEntity(25,42,"package");
		Game.addEnemy(26,42,"goat");
		
		Game.addEnemy(51,260,"dragon");
		Game.addEntity(52,260,"package");
		
		Game.addEntity(startx+20,188,"package");
		
		Game.addEnemy(-198,-195,"alien3");
		Game.addEnemy(-202,-195,"alien3");
		Game.addEnemy(-198,-194,"alien3");
		Game.addEnemy(-202,-194,"alien3");
		Game.addEnemy(-197,-193,"alien3");
		Game.addEnemy(-203,-193,"alien3");
		Game.addEnemy(-197,-192,"alien3");
		Game.addEnemy(-203,-192,"alien3");
		Game.addEnemy(-196,-191,"alien3");
		Game.addEnemy(-204,-191,"alien3");
		Game.addEnemy(-196,-190,"alien3");
		Game.addEnemy(-204,-190,"alien3");
		
		Game.addEnemy(-204,-189,"alien3");
		Game.addEnemy(-203,-189,"alien3");
		Game.addEnemy(-202,-189,"alien3");
		Game.addEnemy(-201,-189,"alien3");
		Game.addEnemy(-200,-189,"alien3");
		Game.addEnemy(-199,-189,"alien3");
		Game.addEnemy(-198,-189,"alien3");
		Game.addEnemy(-197,-189,"alien3");
		Game.addEnemy(-196,-189,"alien3");
		
		Game.addEnemy(-202,-187,"alien3");
		Game.addEnemy(-198,-187,"alien3");
		Game.addEnemy(-202,-185,"alien3");
		Game.addEnemy(-198,-185,"alien3");
		Game.addEnemy(-202,-183,"alien3");
		Game.addEnemy(-198,-183,"alien3");
		Game.addEnemy(-202,-181,"alien3");
		Game.addEnemy(-198,-181,"alien3");
		Game.addEnemy(-202,-179,"alien3");
		Game.addEnemy(-198,-179,"alien3");
		Game.addEnemy(-202,-177,"alien3");
		Game.addEnemy(-198,-177,"alien3");
		Game.addEnemy(-202,-175,"alien3");
		Game.addEnemy(-198,-175,"alien3");
		Game.addEnemy(-202,-173,"alien3");
		Game.addEnemy(-198,-173,"alien3");
		
		Game.addEnemy(-200,-173,"alien3");
		
		Game.addEnemy(-200,-175,"boss"); // a poop emoji is mandatory, right?
		
	},
	
	drawTiles: function() {
		var top = Player.save.y-Game.screenheight/2;
		var bottom = Player.save.y+Game.screenheight/2;
		var left = Player.save.x-Game.screenwidth/2;
		var right = Player.save.x+Game.screenwidth/2;
		
		var k = l = 0;
		for(j=top;j<=bottom;j++) {
			k=0;
			for(i=left;i<=right;i++) {
				
				var bgColor = Game.grassColor;
				
				//tile background color shenanigans
				if(j>-250 && j<-150 && i>-250 && i<-150) {
					if(i>=-201 && i<=-199 && j>=-187 && j<=-174) bgColor = Game.redColor;
					else bgColor = Game.stoneColor;
				}
				else if((j>50&&j<60) || (j>90&&j<97)) {
					if(Game.noise.get(i/20,j/10) > .01)bgColor = Game.grassColor;
					else bgColor = Game.sandColor;
				}
				else if(j>59&&j<=90)bgColor = Game.sandColor;
				else if((j>=97 && j<100) || (j>110 && j<=113)) {
					bgColor = Game.sandColor;
				}
				else if(j>=114&&j<=150) {
					if(i>=-1 && i<=19 && j>=116 && j<=150)bgColor = Game.grassColor;
					else if(j>=114 && j<=119 && i>=47 && i<=53)bgColor = Game.grassColor;
					else if(Game.noise.get(i/30,j/30) > .6)bgColor = Game.sandColor;
				}
				else if(j>150&j<=160) {
					if(Game.noise.get(i/20,j/10) > .01)bgColor = Game.grassColor;
					else bgColor = Game.brownStoneColor;
				}
				else if(j>160 && j<=255) {
					bgColor = Game.brownStoneColor;
				}
				else if(j>255&j<=265) {
					if(Game.noise.get(i/20,j/10) > .01)bgColor = Game.grassColor;
					else bgColor = Game.brownStoneColor;
				}
				else if(j>265) {
					bgColor = Game.grassColor;
					if(Game.noise.get(i/30,j/30) > .6)bgColor = Game.sandColor;
				}
				
				if(Game.noise.get(i/10,j/10) > .2 && j>=70 && j<=80)bgColor = Game.grassColor;
			
				if(Game.getTile(i,j)!==undefined) {
					var tile = Game.getTile(i,j).c;
					if(tile=="W") bgColor = Game.waterColor;
					else if(tile=="C") bgColor = Game.sandColor;
					else if(tile=="BR") bgColor = Game.bridgeColor;
					else if(tile=="SA") bgColor = Game.sandColor;
					else if(tile=="L") bgColor = Game.lavaColor;
					else if(tile=="BS") bgColor = Game.brownStoneColor;
					//else if(tile=="RO") bgColor = Game.roadColor;
					else if(tile=="ST") bgColor = Game.stoneColor;
					else if(tile.substr(0,4)=="rgb|") bgColor = "rgb("+tile.substr(4).split(",")+")", tile=" ";
					
					if(tile=="TP") Game.display.draw(k, l, tile, Game.teleporterColor, bgColor);
					else Game.display.draw(k, l, tile, "transparent", bgColor);
				}
				else Game.display.draw(k, l, " ", "transparent", bgColor);
				
				if(Game.getEntity(i,j)!==undefined) Game.display.draw(k, l, Game.getEntityAscii(i,j), "transparent", bgColor);
				
				if(i==Player.save.x&&j==Player.save.y) Game.display.draw(k, l, "@", "transparent", bgColor);
				
				k++;
				
			}
			l++;
		}
	},
	
	getTile: function(x,y) {
		return Game.grid[x+","+y];
	},
	
	getEntity: function(x,y) {
		return Game.save.entities[x+","+y];
	},
	
	getEntityAscii: function(x,y) {
		if(Battle.getEnemyInfo(Game.save.entities[x+","+y].name) !== undefined) {
			return Battle.getEnemyInfo(Game.save.entities[x+","+y].name).ascii;
		}
		else return Game.save.entities[x+","+y].ascii;
	},
	
	getEntityInfo: function(name) {
		return Game.entity[name];
	},
	
	getEntityCount: function(name) {
		return Game.entityCount[name];
	},
	
	resetEntityHp: function(x,y) {
		var enemyInfo = Battle.getEnemyInfo(Game.save.entities[x+","+y].name);
		Game.save.entities[x+","+y].hp = enemyInfo.maxhp;
	},
	
	removeEntity: function(x,y) {
		var name = Game.save.entities[x+","+y].name;
		if(Game.entityCount[name]!=='undefined')Game.entityCount[name]--;
		Game.save.entities[x+","+y] = undefined;
		Game.drawTiles();
		UI.update();
	},
	
	moveEnemy: function(x,y,x2,y2) {
		//console.log(x,y,x2,y2);
		var enemyName = Game.save.entities[x+","+y].name;
		Game.removeEntity(x,y);
		Game.addEnemy(x2,y2,enemyName);
		Game.drawTiles();
		UI.update();
	}
	
};
