
var keyboard = {

	keydown: function(e) {
		var code = e.keyCode;
		var vk = "?"
		for (var name in ROT) {
			if (ROT[name] == code && name.indexOf("VK_") == 0) { vk = name; }
		}
		
		var movetox = Player.save.x;
		var movetoy = Player.save.y;
		var playerMoved = false;
		
		if(vk=="VK_LEFT" || vk=="VK_A") {
			movetox--;
			playerMoved = true;
		}
		else if(vk=="VK_RIGHT" || vk=="VK_D") {
			movetox++;
			playerMoved = true;
		}
		else if(vk=="VK_UP" || vk=="VK_W") {
			movetoy--;
			playerMoved = true;
		}
		else if(vk=="VK_DOWN" || vk=="VK_S") {
			movetoy++;
			playerMoved = true;
		}
		else if(vk=="VK_ESCAPE") {
			if(Battle.ongoing=="none" && !Player.meditating) UI.hideAlert();
		}
		else if(vk=="VK_Z") {
			if(Battle.ongoing!="none")document.getElementById("attack-button").click();
		}
		else if(vk=="VK_X") {
			if(Battle.ongoing!="none")document.getElementById("run-away").click();
		}
		else if(vk=="VK_C") {
			if(Battle.ongoing!="none")document.getElementById("eat-apple").click();
		}
		else if(vk=="VK_V") {
			if(Battle.ongoing!="none")document.getElementById("shoot-button").click();
		}
		
		//if(movetoy>=0 && movetoy<=Game.mapheight && movetox>=0 && movetox<=Game.mapwidth && UI.getDialogOpen()=="none" && playerMoved) {
		if(UI.getDialogOpen()=="none" && playerMoved) {
			if((Game.getTile(movetox,movetoy)===undefined || Game.getTile(movetox,movetoy).walkable) && Game.getEntity(movetox,movetoy)===undefined)Player.move(movetox,movetoy);
			if(Game.getTile(movetox,movetoy)!==undefined)Player.interact(movetox,movetoy);
			if(Game.getEntity(movetox,movetoy)!==undefined)Player.interact(movetox,movetoy,"e");
		}
	}
	
};