
var UI = {

	"dialogOpen": "none",
	"optionsOpen": {},

	showAlert: function(dialog) {
		var duration = 0;
		document.getElementsByClassName("dialog-"+dialog)[0].style.opacity = document.getElementById("modal").style.opacity = 0;
		document.getElementsByClassName("dialog-"+dialog)[0].style.display = document.getElementById("modal").style.display = "block";
		UI.dialogOpen = dialog;
		var animaton = setInterval(function() {
			duration += .1;
			document.getElementsByClassName("dialog-"+dialog)[0].style.opacity = duration;
			document.getElementById("modal").style.opacity = duration;
			if(duration>=1) {
				clearInterval(animaton);
			}
		}, 10);
	},
	
	hideAlert: function() {
		var duration = 10;
		var dialog = UI.dialogOpen;
		var animaton = setInterval(function() {
			duration--;
			document.getElementsByClassName("dialog-"+dialog)[0].style.opacity = duration/10;
			document.getElementById("modal").style.opacity = duration/10;
			if(duration<=0) {
				clearInterval(animaton);
				UI.dialogOpen = "none";
				document.getElementsByClassName("dialog-"+dialog)[0].style.display = document.getElementById("modal").style.display = "none";
			}
		}, 10);
	},
	
	hideAlertFast: function() {
		var dialog = UI.dialogOpen;
		document.getElementsByClassName("dialog-"+dialog)[0].style.display = document.getElementById("modal").style.display = "none";
		UI.dialogOpen = "none";
	},
	
	redEffect: function() {
		var duration = 0;
		document.getElementById("red-effect").style.opacity = 1;
		var animaton = setInterval(function() {
			duration += .1;
			document.getElementById("red-effect").style.opacity = 1-Math.abs(duration);
			if(duration>=1) {
				clearInterval(animaton);
			}
		}, 15);
	},
	
	toggleOption: function(option) {
		if(UI.optionsOpen[option]===undefined) {
			document.getElementById(option+"-options").style.display="block";
			UI.optionsOpen[option]=true;
		}
		else {
			document.getElementById(option+"-options").style.display="none";
			UI.optionsOpen[option] = undefined;
		}
	},
	
	getDialogOpen: function() {
		return UI.dialogOpen;
	},
	
	showDamage: function(x,y,div,text) {
	
		var a = document.createElement("div");
		a.innerHTML = text;
		a.style.position = "absolute";
		a.style.left = x+"px";
		a.style.opacity = 0;
		
		document.getElementById(div).appendChild(a);
		var b = 0;
		
		var c = setInterval(function() {
			b++;
			a.style.top = y-b+"px";
			a.style.opacity = 1-b/40;
			if(b>40) {
				clearInterval(c);
				document.getElementById(div).removeChild(a);
			}
		}, 20);
		
	},
	
	disable: function(id,time,text) {
	
		if(time<=0) {
			document.getElementById(id).disabled = false;
			document.getElementById(id).innerHTML = text;
		}
		else {
			if(Battle.ongoing!="none") {
				document.getElementById(id).disabled = true;
				document.getElementById(id).innerHTML = text+" ("+time+")";
				setTimeout(function(){UI.disable(id,time-1,text);},1000);
			}
			else {
				document.getElementById(id).disabled = false;
				document.getElementById(id).innerHTML = text;
			}
		}
		
	},
	
	update: function() {
	
		document.getElementById("game-seed").innerHTML = Game.save.seed;
		document.getElementById("game-x").innerHTML = Player.save.x;
		document.getElementById("game-y").innerHTML = Player.save.y;
		document.getElementById("game-rats").innerHTML = Game.getEntityCount("rat");
		document.getElementById("game-mice").innerHTML = Game.getEntityCount("mouse");
		document.getElementById("game-camel1").innerHTML = Game.getEntityCount("camel1");
		document.getElementById("game-camel2").innerHTML = Game.getEntityCount("camel2");
		document.getElementById("game-snakes").innerHTML = Game.getEntityCount("snake");
		document.getElementById("game-goats").innerHTML = Game.getEntityCount("goat");
		document.getElementById("game-dragons").innerHTML = Game.getEntityCount("dragon");
		document.getElementById("game-ghosts").innerHTML = Game.getEntityCount("ghost");
		document.getElementById("game-alien2").innerHTML = Game.getEntityCount("alien2");
		
		document.getElementById("player-hp-stats").innerHTML = Player.save.hp;
		document.getElementById("player-maxhp-stats").innerHTML = Player.save.maxhp;
		document.getElementById("player-gold").innerHTML = Player.save.gold;
		
		if(Battle.getWeaponInfo("fists").damage>=5)document.getElementById("need-more-power").style.display = "none", document.getElementById("forge-contents").style.display = "block";
		
		var selectedWeapon = Battle.getWeaponInfo(Player.save.weapon);
		document.getElementById("selected-weapon").innerHTML = tools.upperFirst(selectedWeapon.name)+" <i>&#x25BC;</i>";
		document.getElementById("selected-weapon-desc").innerHTML = selectedWeapon.description;
		document.getElementById("selected-weapon-damage").innerHTML = "<b>Damage:</b> "+selectedWeapon.damage;
		document.getElementById("selected-weapon-image").src = "images/"+selectedWeapon.image+".png";
		
		var selectedHead = Battle.getHeadInfo(Player.save.head);
		document.getElementById("selected-head").innerHTML = tools.upperFirst(selectedHead.name)+" <i>&#x25BC;</i>";
		document.getElementById("selected-head-desc").innerHTML = selectedHead.description;
		document.getElementById("selected-head-defense").innerHTML = "<b>Damage Reduction:</b> "+selectedHead.reduction+"%";
		document.getElementById("selected-head-image").src = "images/"+selectedHead.image+".png";
		
		var selectedBody = Battle.getBodyInfo(Player.save.body);
		document.getElementById("selected-body").innerHTML = tools.upperFirst(selectedBody.name)+" <i>&#x25BC;</i>";
		document.getElementById("selected-body-desc").innerHTML = selectedBody.description;
		document.getElementById("selected-body-defense").innerHTML = "<b>Damage Reduction:</b> "+selectedBody.reduction+"%";
		document.getElementById("selected-body-image").src = "images/"+selectedBody.image+".png";
		
		document.getElementById("weapon-options").innerHTML = "";
		document.getElementById("head-options").innerHTML = "";
		document.getElementById("body-options").innerHTML = "";
		
		if(Player.save.inventory.item.apple>0)document.getElementById("eat-apple").style.display = "block";
		else document.getElementById("eat-apple").style.display = "none";
		document.getElementById("apple-left").innerHTML = Player.save.inventory.item.apple+" left";
		
		if(tools.arrayContains(Player.save.inventory.weapon,"scissors"))document.getElementById("buy-scissors").style.display = "none";
		if(tools.arrayContains(Player.save.inventory.weapon,"knife"))document.getElementById("buy-knife").style.display = "none";
		if(tools.arrayContains(Player.save.inventory.head,"magic-hat"))document.getElementById("buy-magic-hat").style.display = "none";
		if(tools.arrayContains(Player.save.inventory.body,"heart-armor"))document.getElementById("buy-heart-armor").style.display = "none";
		if(Player.numThings("teleporter") >= 1) document.getElementById("buy-teleporter").style.display = "none";
		
		for(i=0;i<Player.getInventory().weapon.length;i++) {
			var item = Player.getInventory().weapon[i];
			document.getElementById("weapon-options").innerHTML += '<div class="option" onclick="Player.setWeapon(\''+item+'\')">'+tools.upperFirst(Battle.getWeaponInfo(item).name)+'</div>';
		}
		
		if(Player.getInventory().head.length>1)document.getElementById("head-section").style.display='block';
		for(i=0;i<Player.getInventory().head.length;i++) {
			var item = Player.getInventory().head[i];
			document.getElementById("head-options").innerHTML += '<div class="option" onclick="Player.setHead(\''+item+'\')">'+tools.upperFirst(Battle.getHeadInfo(item).name)+'</div>';
		}
		
		if(Player.getInventory().body.length>1)document.getElementById("body-section").style.display='block';
		for(i=0;i<Player.getInventory().body.length;i++) {
			var item = Player.getInventory().body[i];
			document.getElementById("body-options").innerHTML += '<div class="option" onclick="Player.setBody(\''+item+'\')">'+tools.upperFirst(Battle.getBodyInfo(item).name)+'</div>';
		}
		
		document.getElementById("inventory-items").innerHTML = "<h6>ITEMS</h6>";
		
		for(k in Player.getInventory().item) {
			var itemInfo = Player.getItemInfo(k);
			var amount="";
			if(Player.getInventory().item[k]>0) {
				if(Player.getInventory().item[k]>1)amount = " x"+Player.getInventory().item[k];
				document.getElementById("inventory-items").innerHTML += '<div class="mdl-card mdl-shadow--2dp item-card the-item-card">  <div class="mdl-card__title"><span class="item-name no-pointer">'+tools.upperFirst(itemInfo.name)+amount+'</span></div>  <div class="mdl-card__media mdl-card--expand"><img src="images/'+itemInfo.image+'.png"></div>  <div class="mdl-card__supporting-text">'+itemInfo.description+'</div></div>';
			}
		}
		
		if(!Player.save.devAway)document.getElementById("more-shortcuts").style.display = 'block';
		if(Player.numItems("gun") == 1) document.getElementById("shoot-button").style.display = 'block';
		else document.getElementById("shoot-button").style.display = 'none';
		
		if(Player.save.hasSmartphone)document.getElementById("tab-smartphone").style.display = 'block',document.getElementById("buy-smartphone").style.display = 'none';
		
	},
	
	chat: function(what,step) {
		
		var step = typeof step !== 'undefined' ? step : 0;
		var data = Game.chat[what];
		
		if(what == "penguin3" || what == "penguin4") {
			document.getElementById("chat-close").style.display = 'none';
		}
		else {
			document.getElementById("chat-close").style.display = 'block';
		}
		
		document.getElementById("chat-title").innerHTML = data.title;
		document.getElementById("chat-content").innerHTML = '<img src="images/'+data.img+'.png" style="float:left;margin:20px 20px 0 20px;"><div style="float:left;margin:20px 0 0 20px; max-width:300px;">"'+data.dialog[step]+'"</div><div style="clear:both;"></div>';
		
		if(data.dialog[step+1]===undefined)document.getElementById("dialog-next").style.display =' none', document.getElementById("chat-close").style.display = 'block';
		else {
			document.getElementById("dialog-next").style.display = 'block';
			document.getElementById("dialog-next").addEventListener("click", function(){UI.chat(what,step+1)});
		}
		
		if(step==0)UI.showAlert('chat');
		
	},
	
	toggleMapinfo: function() {
		if(document.getElementById("toggle-mapinfo").checked)document.getElementById("mini-mapinfo").style.display = "block";
		else document.getElementById("mini-mapinfo").style.display = "none";
	},
	
	addLog: function(message) {
		document.getElementById("game-log").innerHTML = message+"<br>"+document.getElementById("game-log").innerHTML;
	},
		
};
