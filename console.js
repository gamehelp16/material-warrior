
var console2 = { //so it does not crash with the existing console command
	
	/*
	
		I started making this thing on Christmas 2015! (yep, heavily inspired by http://isitchristmas.com)
		Finished at the same day (with the top right bug)
		
		Some codes are also stolen from that site.
		Blog post mentioned: https://konklone.com/post/how-to-hack-the-developer-console-to-be-needlessly-interactive#suppressing-return-values
		
	*/
	
	start: function() {
		console.log("%cWelcome to the console!\nWhat's better than making the game playable in the developer console?\n\nThanks to %ckonklone %cfor the inspiration and blog post on making a dev console interactive.\n\nType w, a, s, or d to move (works on some browsers only).", "", "font-weight:bold;", "");
		console2.drawMap();
	},
	
	move: function(x,y) {
		if(UI.getDialogOpen()!="none") console.log("%cA dialog window is open!", styles.error);
		else {
			if(Game.getTile(x,y)===undefined && Game.getEntity(x,y)===undefined) {
				Player.move(x,y);
				console2.drawMap();
			}
			else console.log("%cYou can't interact with things in the dev console mode of the game!", styles.error);
		}
	},
	
	drawMap: function() {
		
		var h = Game.screenheight - 6;
		var w = Game.screenwidth - 12;
		
		var top = Player.save.y-h/2;
		var bottom = Player.save.y+h/2;
		var left = Player.save.x-w/2;
		var right = Player.save.x+w/2;
		
		var output = "";
		
		for(j=top;j<bottom;j++) {
			for(i=left;i<right;i++) {
				output = output + "%c  ";
			}
			output = output + "\n";
		}
		
		var style = [output];
		
		//var d = ["%ca %ca %ca %ca %ca ", "color:red", "", "color:red", "", "color:red"];
		//console.log.apply(console, d);
		
		var k = l = 0;
		for(j=top;j<bottom;j++) {
			k=0;
			for(i=left;i<right;i++) {
				
				var bgcolor;
				if(Game.gridColor[i+","+j] !== undefined) bgColor = Game.gridColor[i+","+j];
				else bgColor = Game.getTileColor(i,j);
				
				if(i==Player.save.x&&j==Player.save.y) style.push(styles.tile("@", bgColor));
				else if(Game.getEntity(i,j)!==undefined) style.push(styles.tile(Game.getEntityAscii(i,j), bgColor));
				else if(Game.getTile(i,j)!==undefined) {
					var tile = Game.getTile(i,j).c;
					if(tile=="TP") style.push(styles.tile(" ", Game.teleporterColor));
					else style.push(styles.tile(tile, bgColor));
				}
				else style.push(styles.tile(" ", bgColor));
				
				k++;
				
			}
			l++;
		}
		
		console.log.apply(console, style);
		
	}
		
};

var styles = {
	"error": "color:red;",
	"tile": function(ascii, bgColor) {
		var pos = Game.tileMap[ascii];
		return "background: url(\"http://gamehelp16.github.io/material-warrior/images/sprite.png\") -" + pos[0] + "px -" + pos[1] + "px " + bgColor + "; font-size: 23px;";
	},
	"console": "font-family:monospace;color:#0f0;background:black;",
}

var blank = function() {
	// IE doesn't like this method.
	if (window._ie) return undefined;
	
	var nothing = function() {};
	nothing.toString = function() {return " "};
	return nothing;
}

var w = function() {};
w.toString = function() {
	console2.move(Player.save.x, Player.save.y-1);
}

var a = function() {};
a.toString = function() {
	console2.move(Player.save.x-1, Player.save.y);
}

var s = function() {};
s.toString = function() {
	console2.move(Player.save.x, Player.save.y+1);
}

var d = function() {};
d.toString = function() {
	console2.move(Player.save.x+1, Player.save.y);
}

var developer = {

	shop: function() {
		if(Player.save.devAway) {
			console.log("%cIt looks like the dev is away, please try again later!", styles.error);
		}
		else {
			console.log("%cWell, hi there! It looks like you are interested to buy my stuff, I sell one item only, though!\n\nInfinity Gun (15,000,000 gold)\n\n(You can only have one infinity gun at a time and the gun will break after one usage)\n\nTo buy the gun, type this (remove all double quotes if there are any): %cdeveloper.buy('gun')", "", styles.console);
		}
	},
	
	buy: function(what) {
		if(Player.save.devAway) {
			console.log("%cIt looks like the dev is away, please try again later!", styles.error);
		}
		else {
			if(what=="gun") {
				if(Player.numItems("gun") < 1) {
					if(Player.save.gold >= 15000000) {
						Player.addItem("gun", 1);
						Player.save.gold -= 15000000;
						console.log("There you have it!");
						UI.addLog("You bought an infinity gun.");
					}
					else console.log("%cNot enough gold!", styles.error);
				}
				else console.log("%cYou already have an infinity gun!", styles.error);
			}
			else {
				console.log("%cThat item is not available for sale!", styles.error);
			}
		}
	},
	
	suicide: function() {
		Player.respawn();
		return "Ask and you shall receive.";
	},
	
	selfdestruct: function() {
		return "boom";
	}
	
}
