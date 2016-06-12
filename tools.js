
var tools = {

	upperFirst: function(text) {
		return text.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase(); });
	},
	
	arrayContains: function(a,text) {
		for(i=0;i<a.length;i++) {
			if(a[i]==text)return true;
		}
		return false;
	},
	
	arrayIndex: function(a,text) {
		for(i=0;i<a.length;i++) {
			if(a[i]==text)return i;
		}
		return 3.14;
	},
	
	getRandomInt: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	
	getSeededRandomInt: function(min, max) {
		return Math.floor(ROT.RNG.getUniform() * (max - min + 1)) + min;
	},
	
	scissorsSharpenPrice: function(damage) {
		if(damage<50)return 150;
		else return Math.round(Math.pow(damage/50+1,1.2)*75);
	},
	
	knifeSharpenPrice: function(damage) {
		if(damage<5000)return 18000;
		else return Math.round(Math.pow(damage/50+1,1.2)*75);
	},
	
	playerHeart: function(heart) {
		var output = "";
		for(i=0;i<heart;i++)output += "<img src=\"images/2764.png\" width=\"15\" height=\"15\"> ";
		return output;
	},
	
	throwGoldPrice: function(heart) {
		return Math.min(Math.floor(Player.save.gold / 10), 500000);
	},
	
	num: function(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	
	msToTime: function(duration) {
	
		var milliseconds = Math.floor(duration%1000),
			seconds = Math.floor((duration/1000)%60),
			minutes = Math.floor((duration/60000)%60),
			hours = Math.floor(duration/(1000*60*60));
		
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		if(milliseconds < 10) milliseconds = "00" + milliseconds;
		else if(milliseconds < 100) milliseconds = "0" + milliseconds;
		
		return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
		
	}
	
};
