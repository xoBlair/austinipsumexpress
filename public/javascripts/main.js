
// 15
var foodWords = [ "Butter my bacon. ", "Royal Blue is too expensive. ",  "I only eat the best burnt ends. ", "If Anthony Bourdain can be swooned by Gourdough&#39;s warm, fresh, holy-shit-delicious donuts, you should expect to fall in love with this little Austin treasure, too. ", "I want a big fat donut.   ", "Breakfast tacos for days.   ", "This one time I saw a bird covered in queso at Torchy&#39;s and wanted to cry.   ", "I had brunch plans but..   ", "There's never enough queso.   ", "Frozen avocado margarita with sugar and chili-lime salt. ", "Let's go to Slake instead. ", "Pineapple basil lime lemon watermelon infused water. ", "Breaking news: Bluebell Ice Cream is back in stock. ", "Grande, iced, sugar-free, vanilla latte with soy milk. ", "Texas-fried turkey breast with award-winning oaxacan mole sauce, mexican rice, avocado, quest fresco, and fresh cilantro - served on a flour tortilla. "];

// 22
var funWords = ["Bro! ", "Akash is the best guy!", "Mike Dang! Mike Dang! Mike Daaaang! ", "Drunk shopping. ", "JSONP. ", "Space Toe Jam. ",  "Ahh Real Monsters was my fav! " , "Bro... ", "Alrighty alrighty alright. ", "Sorry, not sorry. ", "RIP Leslie. ", "LOL, I&#39;m @ ACL! ", "I barely remember SXSW. ", "Just ordered an Uber. ", "Don&#39;t Dallas my Austin.   ", "Castle Hill Hope Outdoor gallery.   ", "Pedicab Realness.   ", "Tweet that!   ", "Don&#39;t worry, I&#39;m not sick, it&#39;s allergies.   ", "Wishing Ikea sold clothes.   ", "KVUE, where trust is earned.   ", "I <3 General Assembly Austin!   ", "Download PackStack for iOS!!! ", "Is that a rescue dog? ", "The local badass is playing at Scoot Inn and we got tickets! "];
// var num = $("#number").val();
var count = 0;

function chooseParagraph(number){ 
	if (count == 1){ 
		var wordArray = foodWords;
	}
	else if (count == 2){
		var wordArray = funWords;
	}

	$("#paragraph").text("");
	var nonRepeating = [];
	for (var i = 0; i < number; i++){
		checkWord();
		function checkWord(){
			var word = wordArray[i];
			var randomNum = Math.random() * wordArray.length;
			var randomIndex = Math.floor(randomNum);
			var randomWord = wordArray[randomIndex];
			var isUnique = true;
			nonRepeating.forEach(function(existingWord){
				if (existingWord == randomWord)
				{ 
					isUnique = false;
				}
			});
			if (isUnique == true)
			{
				nonRepeating.push(randomWord);
				$("#paragraph").append(randomWord);
			}
			else if (isUnique == false)
			{
				checkWord();
			} 
		}
	}
}

$("#food").click(function(){
	count = 1;	
});


$("#fun").click(function(){
	count = 2;
});

//go button function
$("#go").click(function(){
	 var num = $("#number").val();
	chooseParagraph(num);
});

//clear button function

$("#clear").click(function() {
    $("#paragraph").html("");
    $("#number").val("");
});










