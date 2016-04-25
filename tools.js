
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
		if(damage<100)return 150;
		else return Math.round(Math.pow(damage/100+1,1.2)*75);
	},
	
	knifeSharpenPrice: function(damage) {
		if(damage<10000)return 18000;
		else return Math.round(Math.pow(damage/100+1,1.2)*75);
	},
	
	playerHeart: function(heart) {
		var output = "";
		for(i=0;i<heart;i++)output += "<img src=\"images/2764.png\" width=\"15\" height=\"15\"> ";
		return output;
	},
		
};
