$(document).bind('pageinit', function() {
	var zaehler;
	var running = false;
	var namen = ["Abraham Lincoln",
					"Angela Merkel",
					"Barack Obama",
					"Donald Duck",
					"Elvis Presley",
					"George W. Bush",
					"Harry Potter",
					"Isaac Newton",
					"Johannes Paul II",
					"Karl der Große",
					"Lady Gaga",
					"Miley Cyrus",
					"Prinzessin Liliefee",
					"Spongebob Schwammkopf",
					"Taylor Swift",
					"Theodor Heuss",
					"Zeus",
					"Homer Simpson",
					"Paris Hilton",
					"Heidi Klum",
					"Kevin James",
					"Cameron Diaz",
					"Ashton Kutscher",
					"Charlie Sheen",
					"Pipi Langstrumpf",
					"Katy Perry",
					"Van Helsing",
					"Spiderman",
					"Eva Longoria",
					"Harry Potter",
					"Edward Cullen",
					"Jane Austen",
					"Bridget Jones ",
					"Micky Maus ",
					"Herr Nilsson ",
					"Weinachtsmann",
					"Dumbledore",
					"Hugh Hefner",
					"Stitch (Lilo & Stitch)",
					"Kapitän Blaubär",
					"Pikachu",
					"Joker (Dark Knight)",
					"Daniela Katzenberger",
					"Günther Jauch",
					"Stefan Raab",
					"Bart Simpson",
					"Homer Simpson",
					"Mr. Bean",
					"Angela Merkl",
					"Der Glöckner von Notre-Dame",
					"Olivia Jones",
					"Tarzan",
					"Moglie",
					"Barbie",
					"Winnie Pooh",
					"Justin Bieber",
					"Rihanna",
					"Madonna",
					"Michael Jackson",
					"Lucky Luke ",
					"Barack Obama",
					"Justin Bieber",
					"Heidi Klum",
					"Selena Gomez",
					"Superman",
					"King Kong",
					"Heidi"];

	$( "#name" ).click(function() {
		if (running == false){
			running = true;
			zaehler = Math.floor(Math.random() * namen.length);
			var sec = 10;
			var timer = setInterval(function() {
			   	$('#name').text(sec--);
			   	if (sec == -1) {
			    	$('#name').text(namen[zaehler]);
			    	running = false;
			      	clearInterval(timer);
		   		} 
			}, 1000);
		}
	});

});	