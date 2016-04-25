
var tileSet = document.createElement("img");
tileSet.src = "images/sprite.png";

var options = {
	layout: "tile",
	bg: "transparent",
	tileWidth: 16,
	tileHeight: 16,
	tileSet: tileSet,
	tileMap: {
		"@": [80, 0],
		"\u2663": [64, 0]
	},
	width: 5,
	height: 1
}