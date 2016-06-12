
var browser = {
	
	"website": ["google", "reddit", "twitter", "ebay", "amazon", "i.imgur", "youtube"],
	"subreddits": ["aww", "OutOfTheLoop", "pics", "test", "LifeProTips", "circlejerk", "InternetIsBeautiful", "me_irl", "technology", "videos","EarthPorn","materialwarrior"],
	
	"subredditlist": ["announcements","Art","AskReddit","askscience","aww","blog","books","creepy","dataisbeautiful","DIY","Documentaries","EarthPorn","explainlikeimfive","Fitness","food","funny","Futurology","gadgets","gaming","GetMotivated","gifs","history","IAmA","InternetIsBeautiful","Jokes","LifeProTips","listentothis","mildlyinteresting","movies","Music","news","nosleep","nottheonion","OldSchoolCool","personalfinance","philosophy","photoshopbattles","pics","science","Showerthoughts","space","sports","television","tifu","todayilearned","TwoXChromosomes","UpliftingNews","videos","worldnews","WritingPrompts"],
	
	"feed": {
		"twitter": [],
		"reddit": [],
		"ebay": [],
		"amazon": [],
		"google": [],
		"i.imgur": [],
		"youtube": [],
	},
	
	"features": {
		"twitter": "<br><small class=\"grey actions\"><a href=\"#\">Reply</a> - <a href=\"#\">Retweet</a> - <a href=\"#\">Favorite</a></small>",
		"reddit": "",
		"ebay": "",
		"amazon": "",
		"google": "<div class=\"google\"><div><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><br><input type=\"text\" onkeyup=\"if(event.keyCode==13)window.open('http://lmgtfy.com/?q='+this.value)\"></div>",
		"i.imgur": "",
		"youtube": ""
	},
	
	load: function() {
	
		browser.open("about:bookmarks");
		browser.generate();
		
	},
	
	generate: function() {
		
		browser.feed = {
			"twitter": [],
			"reddit": [],
			"ebay": [],
			"amazon": [],
			"google": [""],
			"i.imgur": [],
			"youtube": [],
		};
		
		for(i=0;i<tools.getRandomInt(10,20);i++) {
			if(Math.random()<.8)browser.addFeed("twitter", "<div class=\"twusername\"><b>"+chance.name()+"</b> <span class=\"grey\">"+chance.twitter()+"</span></div>"+chance.sentence());
			else {
			
				include="";
				if(Math.random()<.5)site="Amazon";
				else site="eBay";
				seed = site+chance.integer({min: 1000000, max: 1900000});
				seeded = new Chance(seed);
				item = seeded.integer({min: 1, max: 5})
				
				if(item<3)image="1f499",name="Blue Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 110000, max: 130000})*pack;
				else if(item<5) image="1f496",name="Shiny Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 80000, max: 100000})*pack;
				else image="1f528",name="Hammer",pack=0,price=seeded.integer({min: 50000000000000, max: 150000000000000});
				
				if(seeded.integer({min: 1, max: 2})==1 && pack>0)include=" (contains "+tools.num(pack)+" hearts)";
				
				browser.addFeed("twitter", "<div class=\"twusername\"><b>"+chance.name()+"</b> <span class=\"grey\">"+chance.twitter()+"</span></div>\""+name+include+"\" is sold on "+site+" only for "+tools.num(price)+" gold! <a href=\"#\" onclick=\"browser.open('http://www."+site.toLowerCase()+".com/item/"+seed.replace(site,"")+"')\" class=\"tw-link\">http://www."+site.toLowerCase()+".com/item/"+seed.replace(site,"")+"</a>");
				
			}
		}
		
		for(i=0;i<14;i++) {
		
			include="";
			if(i%2==0)site="Amazon";
			else site="eBay";
			seed = site+chance.integer({min: 1000000, max: 1900000});
			seeded = new Chance(seed);
			item = seeded.integer({min: 1, max: 5})
			
			if(item<3)image="1f499",name="Blue Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 110000, max: 130000})*pack;
			else if(item<5) image="1f496",name="Shiny Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 80000, max: 100000})*pack;
			else image="1f528",name="Hammer",pack=0,price=seeded.integer({min: 50000000000000, max: 150000000000000});
			
			if(seeded.integer({min: 1, max: 2})==1 && pack>0)include=" (contains "+tools.num(pack)+" hearts)";
			
			browser.addFeed(site.toLowerCase(), "<img src=\"images/"+image+".png\" class=\"shop-img\"><div class=\"shop-item\">"+name+include+"<br><span class=\"grey\">"+tools.num(price)+" gold</span><br><a href=\"#\" onclick=\"browser.open('http://www."+site.toLowerCase()+".com/item/"+seed.replace(site,"")+"')\" class=\"shop-link\">Buy &raquo;</a></div><div style=\"clear:both\"></div>");
			
		}
		
		browser.addFeed("reddit", "Bug: Right now you can only open links posted in /r/aww, /r/videos and /r/materialwarrior <small class=\"grey\">(self.announcements)</small><br><small class=\"grey actions\">"+tools.getRandomInt(2500,6000)+" points by <a href=\"#\" style=\"color:#e00;font-weight:bold;\">reddit [A]</a> in <a href=\"#\">/r/announcements</a> - <a href=\"#\">"+tools.getRandomInt(300,600)+" comments</a></small>");
		
		for(i=0;i<tools.getRandomInt(10,20);i++) {
		
			subreddit = chance.pick(browser.subreddits);
			title = "ayy lmao";
			url = "self."+subreddit;
			
			if(subreddit=="LifeProTips" || subreddit=="InternetIsBeautiful")skills = chance.pick(["eat","drink","sleep","browse reddit","finish homeworks","finish work","work","breathe","speak","socialize","talk","learn","study","read","write","memorize things","make websites"])+chance.pick([" better"," more efficiently"," faster",""]);
			
			if(subreddit=="technology") {
				website=chance.pick(["YouTube","Twitter","Instagram"]);
				followers="followers";
				if(website=="YouTube")followers="subscribers";
			}
			
			if(subreddit=="aww") {
				
				imgid = chance.string({length: 7, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
				aww = new Chance(imgid);
				animal = aww.pick(["kitten","cat","dog","puppy"]);
				
				title="<a href=\"#\" onclick=\"browser.open('i.imgur.com/"+imgid+chance.pick([".png",".jpg"])+"')\" class=\"web-link\">"+chance.weighted([tools.upperFirst(animal)+"!", "A " + chance.pick(["cute ","cute little ","little ",""]) + animal + " " + chance.pick(["I","my boyfriend","my girlfriend","my SO","my friend"]) + " found " + chance.pick(["yesterday","today","this morning","this afternoon","a few "+chance.pick(["days","months","weeks"])+" ago", ""])], [1,5])+"</a>";
				url="i.imgur.com";
			}
			
			else if(subreddit=="OutOfTheLoop")title=chance.pick(["What is ","What's "]) + chance.pick(["up with ","going on in ","happening in "]) + "/r/"+chance.pick(browser.subredditlist)+"?";
			
			else if(subreddit=="pics") {
				kid=chance.age({type: 'child'}) + " year old " + chance.pick(["son","daughter","child"]);
				title=chance.weighted([chance.pick(["Today is","Yesterday was","Tomorrow is"])+" my "+kid+"'s birthday", "My "+kid, "test post please ignore"], [20,20,1]);
				url=chance.pick(["i.imgur.com","imgur.com"]);
			}
			
			else if(subreddit=="test")title=chance.sentence();
			
			else if(subreddit=="LifeProTips")title=chance.pick(["LPT","LPT Request"])+": How to "+skills;
			
			else if(subreddit=="circlejerk")title="Upvote "+chance.pick(["this ","this post ",""])+"so people will see this image when they search for '"+chance.pick(["hitler","nazi","dictator","peanut butter","nutella","north korea","illuminati","reddit"])+"'", url=chance.pick(["i.imgur.com","imgur.com"]);
			
			else if(subreddit=="InternetIsBeautiful")title="This website "+chance.pick(["simulates "+chance.pick(["gravity","sea waves","your life","animal sounds","flying an airplane","car accident"]),"shows you "+chance.pick(["how to relax","your age","your ip address","your location are right now","list of trending songs","popular songs from different eras", "how to "+skills])]), url=chance.url().replace("http://","").split("/")[0];
			
			else if(subreddit=="me_irl")title=chance.pick(["me irl","me_irl"]), url=chance.pick(["i.imgur.com","imgur.com"]);
			
			else if(subreddit=="technology")title=website+" bans "+chance.pick(["an ",""])+"account with "+chance.pick(["more than",""])+" "+chance.weighted([tools.getRandomInt(100,900)+chance.pick(["k"," thousand","000",",000"]),tools.getRandomInt(1,10)+" million"], [5,1])+" "+followers, url=chance.url().replace("http://","").split("/")[0];
			
			else if(subreddit=="videos") {
				youtubeid = chance.string({length: 10, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
				gradeaundera = new Chance("g"+youtubeid);
				title="<a href=\"#\" onclick=\"browser.open('youtube.com/watch?v=g"+youtubeid+"')\" class=\"web-link\">"+gradeaundera.pick(["GradeAUnderA - ","GradeAUnderA on ",""])+"\""+gradeaundera.pick([gradeaundera.integer({min: 4, max: 10})  +" Reasons ",""])+"Why I Hate "+gradeaundera.pick(["Going To The Barber Shop","Nutella","Prank Channels","Myself","YOU","This Game","Buzzfeed","Clickbait Articles","Donald Trump","Public Toilets","Reddit","Reaction Channels","YouTube","TheFineBros"])+"\"</a>";
				url="youtube.com";
			}
			
			else if(subreddit=="EarthPorn")title=chance.pick(["Summer","Spring","Winter","Autumn","Snow","Trees","Mountains","Hills","Sky","Milky Way","Snow","Sea","Waterfall"])+" in "+chance.country({full: true})+chance.pick([""," [OC]"])+chance.pick([""," ["+chance.integer({min: 1000, max: 5000})+"x"+chance.integer({min: 1000, max: 5000})+"]"]), url=chance.pick(["i.imgur.com","imgur.com","flickr.com","500px.org"]);
			
			else if(subreddit=="materialwarrior") {
			
				include="";
				if(Math.random()<.5)site="Amazon";
				else site="eBay";
				seed = site+chance.integer({min: 1000000, max: 1900000});
				seeded = new Chance(seed);
				item = seeded.integer({min: 1, max: 5})
				
				if(item<3)image="1f499",name="Blue Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 110000, max: 130000})*pack;
				else if(item<5) image="1f496",name="Shiny Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 80000, max: 100000})*pack;
				else image="1f528",name="Hammer",pack=0,price=seeded.integer({min: 50000000000000, max: 150000000000000});
				
				if(seeded.integer({min: 1, max: 2})==1 && pack>0)include=" (contains "+tools.num(pack)+" hearts)";
				
				title="<a href=\"#\" onclick=\"browser.open('http://www."+site.toLowerCase()+".com/item/"+seed.replace(site,"")+"')\" class=\"web-link\">\""+name+include+"\" is sold on "+site+" only for "+tools.num(price)+" gold!</a>";
				url=site.toLowerCase()+".com";
				
			}
			
			browser.addFeed("reddit", title+" <small class=\"grey\">("+url+")</small><br><small class=\"grey actions\">"+tools.getRandomInt(2500,6000)+" points by <a href=\"#\">"+chance.twitter().replace("@","")+"</a> in <a href=\"#\">/r/"+subreddit+"</a> - <a href=\"#\">"+tools.getRandomInt(300,600)+" comments</a></small>");
			
		}
		
		for(i=0;i<5;i++) {
			youtubeid = chance.string({length: 10, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
			prank = new Chance("p"+youtubeid);
			pranker = prank.weighted(["Prankster"+prank.integer({min: 10000, max: 100000}),"PrankTV","PrankerDude","PrankMaster","JustAPrankBro","PrankTUBE",prank.name()],[5,1,1,1,1,1,10])+" - "+prank.weighted([prank.integer({min: 500, max: 900})+"K",prank.integer({min: 1, max: 2})+"M"], [3,1]);
			duration = prank.integer({min: 2, max: 5})+":"+prank.pad(prank.integer({min: 0, max: 59}),2);
			pranktitle = prank.pick(["IT'S JUST A PRANK BRO","SUICIDE PRANK","KISSING PRANK","KILLING PEOPLE PRANK", 
			"MOCKING POLICE PRANK!!","WHAT HAPPENS IF YOU PUNCH A POLICEMAN IN THE FACE?","KIDNAPPING KIDS PRANK","HOMELESS MAN PRANK","STEALING PEOPLE'S MONEY","SOCIETY HONESTY EXPERIMENT","POLICEMAN PRANK","WHAT HAPPENS IF YOU PUNCH STRANGERS IN THE FACE?","FIGHTING PEOPLE PRANK","RACISM PRANK"])+prank.pick([" [PRANK]"," [SOCIAL EXPERIMENT]"," [Social Experiment]",""])+prank.pick([" (with Hot Girls)"," [HOT GIRLS]",""])+prank.pick([" [GONE WRONG]",""])+prank.pick([" [GONE SEXUAL]",""])+prank.pick([" 2015"," 2016",""]);
			browser.addFeed("youtube", "<div onclick=\"browser.open('http://youtube.com/watch?v=p"+youtubeid+"')\"><div class=\"thumbnail\"><div>"+duration+"</div></div><div class=\"video-details\">"+pranktitle+"<br><small class=\"grey\">"+pranker+" views</small></div><div style=\"clear:both\"></div></div>"); 
		}
		
	},
	
	open: function(url) {
		
		var notfound = false;
		if(url!="about:bookmarks")ga('send', 'event', 'useBrowser', url, {'nonInteraction': true});
		
		if(url!="about:bookmarks" && url.indexOf("gamehelp16.github.io")<0) {
		
			if(url.indexOf(".")>0 && url.indexOf(".")<url.length-1) {
				var http = url.indexOf("http://");
				if(http<0) {
					url = "http://" + url;
					browser.open(url);
					return false;
				}
				else {
					var websiteName = url.replace("http://www.", "").replace("http://", "").replace(".com", "").split("/")[0];
					if(!tools.arrayContains(browser.website,websiteName))notfound = true;
				}
			}
			else notfound = true;
			
		}
		
		document.getElementById("url-box").value = url;
		if(notfound) {
			document.getElementById("webpage-contents").innerHTML = "<div id=\"webpage-not-found\"><b>Webpage not found</b><br>Sorry, the webpage you are looking for could not be found.</div>";
		}
		else {
			
			if(url!="about:bookmarks" && url.indexOf("gamehelp16.github.io")<0) var siteHeader = "<div id=\"website-header\" class=\"website-"+websiteName+"\"><i class=\"material-icons\" style=\"vertical-align:middle;margin-right:10px\">menu</i> <span style=\"position:relative;top:1px;cursor:pointer;\" onclick=\"browser.open('http://www."+websiteName+".com')\">"+tools.upperFirst(websiteName)+"</span></div>";
			
			if(url=="about:bookmarks") {
				document.getElementById("webpage-contents").innerHTML = "<b id=\"bookmarks\">Bookmarks:</b>";
				for(i=0;i<Game.save.bookmarks.length;i++) {
					document.getElementById("webpage-contents").innerHTML += "<div class=\"bookmark-link\" onclick=\"browser.open('"+Game.save.bookmarks[i]+"')\"><span>"+Game.save.bookmarks[i]+"</span></div>";
				}
				document.getElementById("webpage-contents").innerHTML += "<a href=\"#\" onclick=\"browser.addBookmark()\" id=\"add-bookmark\">+ Add a Bookmark</a><div style=\"margin:15px;\"><small>(This game is not affiliated with any of the websites you can \"open\" in this game)</small></div>";
			}
			else if(url.indexOf("gamehelp16.github.io")>=0) {
				document.getElementById("webpage-contents").innerHTML = "<div style=\"margin:15px;cursor:pointer;\" onclick=\"browser.generate()\">Ssh bby is ok ;)</div>";
			}
			else if(url.indexOf("youtube.com/watch?v=")>=0) {
				videoid = url.split("youtube.com/watch?v=")[1];
				document.getElementById("webpage-contents").innerHTML = siteHeader;
				document.getElementById("webpage-contents").innerHTML += "<div class=\"video\">This video has been copyright claimed.<br> <small>We are sorry about that.</small><div class=\"emoticon\">:\\</div></div>";
				if(videoid[0]=="p") {
					prank = new Chance(videoid);
					pranker = prank.weighted(["Prankster"+prank.integer({min: 10000, max: 100000}),"PrankTV","PrankerDude","PrankMaster","JustAPrankBro","PrankTUBE",prank.name()],[5,1,1,1,1,1,10])+" - "+prank.weighted([prank.integer({min: 500, max: 900})+"K",prank.integer({min: 1, max: 2})+"M"], [3,1]);
					duration = prank.integer({min: 2, max: 5})+":"+prank.pad(prank.integer({min: 0, max: 59}),2);
					pranktitle = prank.pick(["IT'S JUST A PRANK BRO","SUICIDE PRANK","KISSING PRANK","KILLING PEOPLE PRANK", 
					"MOCKING POLICE PRANK!!","WHAT HAPPENS IF YOU PUNCH A POLICEMAN IN THE FACE?","KIDNAPPING KIDS PRANK","HOMELESS MAN PRANK","STEALING PEOPLE'S MONEY","SOCIETY HONESTY EXPERIMENT","POLICEMAN PRANK","WHAT HAPPENS IF YOU PUNCH STRANGERS IN THE FACE?","FIGHTING PEOPLE PRANK","RACISM PRANK"])+prank.pick([" [PRANK]"," [SOCIAL EXPERIMENT]"," [Social Experiment]",""])+prank.pick([" (with Hot Girls)"," [HOT GIRLS]",""])+prank.pick([" [GONE WRONG]",""])+prank.pick([" [GONE SEXUAL]",""])+prank.pick([" 2015"," 2016",""]);
					document.getElementById("webpage-contents").innerHTML += "<div class=\"yt-title\">"+pranktitle+"<br><small class=\"grey\">"+pranker+" views</small></div>";
				}
				else if(videoid[0]=="g") { 
					gradeaundera = new Chance(videoid);
					dummy=gradeaundera.pick(["GradeAUnderA - ","GradeAUnderA on ",""]);
					title=gradeaundera.pick([gradeaundera.integer({min: 4, max: 10})  +" Reasons ",""])+"Why I Hate "+gradeaundera.pick(["Going To The Barber Shop","Nutella","Prank Channels","Myself","YOU","This Game","Buzzfeed","Clickbait Articles","Donald Trump","Public Toilets","Reddit","Reaction Channels","YouTube","TheFineBros"]);
					duration = gradeaundera.integer({min: 2, max: 5})+":"+gradeaundera.pad(gradeaundera.integer({min: 0, max: 59}),2);
					views = gradeaundera.weighted([gradeaundera.integer({min: 500, max: 900})+"K","1M"], [5,1]);
					document.getElementById("webpage-contents").innerHTML += "<div class=\"yt-title\">"+title+"<br><small class=\"grey\">GradeAUnderA - "+views+" views</small></div>";
				}
			}
			else if(url.indexOf("ebay.com/item/")>=0 || url.indexOf("amazon.com/item/")>=0) {
				
				itemid = url.split("/item/")[1];
				document.getElementById("webpage-contents").innerHTML = siteHeader;
				
				include=include2="";
				if(websiteName=="amazon")site="Amazon";
				else site="eBay";
				seed = site+itemid;
				seeded = new Chance(seed);
				item = seeded.integer({min: 1, max: 5})
				
				if(item<3)image="1f499",name="Blue Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 110000, max: 130000})*pack;
				else if(item<5) image="1f496",name="Shiny Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 80000, max: 100000})*pack;
				else image="1f528",name="Hammer",pack=0,price=seeded.integer({min: 50000000000000, max: 150000000000000});
				
				if(seeded.integer({min: 1, max: 2})==1 && pack>0)include=" (contains "+tools.num(pack)+" hearts)";
				if(pack>0)include2="<br>Pack contains "+tools.num(pack)+" hearts.<br>";
				
				document.getElementById("webpage-contents").innerHTML += "<div style=\"padding:15px;\"><img src=\"images/"+image+".png\" class=\"shop-img\"><div class=\"shop-item\">"+name+include+"<br><span class=\"grey\">"+tools.num(price)+" gold</span><br>"+include2+"<a href=\"#\" onclick=\"browser.buy('"+seed+"')\" class=\"shop-link\">Buy Item</a><br><br>You could bookmark this page if you liked the deal and sure that it is not a scam.</div><div style=\"clear:both\"></div></div>";
				
			}
			else if(url.indexOf("i.imgur.com/")>=0) {
				
				imgid = url.split("i.imgur.com/")[1].split(".")[0];
				aww = new Chance(imgid);
				animal = aww.pick(["kitten","cat","dog","puppy"]);
				imgwidth = aww.integer({min: 50, max: 300});
				imgheight = aww.integer({min: 100, max: 300});
				if(aww.random()<.5) bw = "g/";
				else bw = "";
				
				if(animal == "kitten" || animal == "cat")document.getElementById("webpage-contents").innerHTML = "<img src=\"http://placekitten.com/" + bw + imgwidth + "/" + imgheight +"\">";
				else document.getElementById("webpage-contents").innerHTML = "<img src=\"http://i.imgur.com/removed.png\">"; // Dog placeholder image sites seem to be down :(
				
			}
			else {
				document.getElementById("webpage-contents").innerHTML = siteHeader;
				if(websiteName=="youtube")document.getElementById("webpage-contents").innerHTML += "<b style=\"margin:20px 0 10px 15px;display:block;\">Trending Videos</b>";
				if(websiteName=="amazon" || websiteName=="ebay")document.getElementById("webpage-contents").innerHTML += "<b style=\"margin:20px 0 10px 15px;display:block;\">Featured Items</b>";
				for(i=0;i<browser.feed[websiteName].length;i++) {
					document.getElementById("webpage-contents").innerHTML += "<div class=\"website-post post-"+websiteName+"\">"+browser.feed[websiteName][i]+browser.features[websiteName]+"</div>";
				}
			}
		}
		
	},
	
	addBookmark: function() {
		var link = prompt("Enter URL to bookmark:","");
		if(link!==null && link!="") {
			Game.save.bookmarks.push(link);
			browser.open("about:bookmarks");
		}
	},
	
	bookmarkPage: function() {
		var page = document.getElementById("url-box").value;
		if(confirm("Are you sure to bookmark "+page+"?")) {
			Game.save.bookmarks.push(page);
			alert("The page has been added to bookmarks.");
		}
	},
	
	addFeed: function(website, content) {
		browser.feed[website].push(content);
	},
	
	buy: function(seed) {
	
		seeded = new Chance(seed);
		item = seeded.integer({min: 1, max: 5})
		if(item<3)image="1f499",name="Blue Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 110000, max: 130000})*pack;
		else if(item<5) image="1f496",name="Shiny Heart Pack",pack=seeded.integer({min: 20, max: 1000000}),price=seeded.integer({min: 80000, max: 100000})*pack;
		else image="1f528",name="Hammer",pack=0,price=seeded.integer({min: 50000000000000, max: 150000000000000});
		
		if(tools.arrayContains(Player.save.inventory.weapon,"hammer") && name=="Hammer") {
			alert('You already have a hammer!');
			return false;
		}
		
		if(Player.save.gold>=price) {
			if(confirm('Are you sure to buy this item for '+tools.num(price)+' gold? This might be a scam!')) {
				Player.save.gold-=price;
				if(seeded.integer({min: 1, max: 5})==1) {
					alert('It\'s a scam! :(');
				}
				else {
					if(image=="1f499") {
						Player.addItem("heart",pack);
						Player.save.hp += 400*pack;
						Player.save.maxhp += 400*pack;
						alert('Item successfully purchased!');
						UI.addLog("You bought <b>"+tools.num(pack)+"</b> blue hearts for <b>"+tools.num(price)+"</b> gold.");
						Player.save.spawn2 = true;
					}
					else if(image=="1f496") {
						Player.addItem("s_heart",pack);
						Player.save.regenHp+=pack;
						alert('Item successfully purchased!');
						UI.addLog("You bought <b>"+tools.num(pack)+"</b> shiny hearts for <b>"+tools.num(price)+"</b> gold.");
						
						var heartstoapply = pack;
						
						if(Player.save.regenTimeout>0) {
							if(heartstoapply * 100 <= Player.save.regenTimeout) Player.save.regenTimeout -= heartstoapply * 100;
							else heartstoapply -= Player.save.regenTimeout / 100, Player.save.regenTimeout = 0;
						}
						Player.save.regenHp += heartstoapply;
						
					}
					else if(image=="1f528") {
						Player.save.inventory.weapon.push("hammer");
						alert('Item successfully purchased!');
						UI.addLog("You bought a hammer for <b>"+tools.num(price)+"</b> gold.");
					}
				}
			}
		}
		else alert('Not enough gold!');
		
		UI.update();
		
	},
	
}