var gameData = {
    Stellar: 10,
    opponentLevel: 1,
    opponentHealth: 1,
    opponentRewards: 5,
    wpw: 1
}



/*for (let i = 0; i < 100; i + 0.05) {
    let automator = {
        cost: Math.pow(50, 1 + i),
        amount: 0,
        mult: 1 
    }
    
}  */

//automator.push(automators)

function format(amount) {
  let power = Math.floor(Math.log10(amount));
  let mantissa = amount / Math.pow(10, power);
  if (power < 3) return amount.toFixed(2);
  return mantissa.toFixed(2) + "e" + power
}

/* function updateGUI() {
    for (let i = 0; automatorNumber < 10; automatorNumber++) {
        let a = automators[automatorNumber]
        document.getElementById("auto" + (automatorNumber + 1)).innerHTML = "Amount: " + format(a.amount) + "<br>Multiplier: " + format(a.mult) + "<br>Cost: " + format(a.cost)
    }
} */

function levelUp() {
    gameData.opponentLevel = gameData.opponentLevel + 1;
    gameData.opponentHealth = Math.pow(20, gameData.opponentLevel);
    gameData.Stellar = gameData.opponentRewards + gameData.Stellar;
    gameData.opponentRewards = Math.pow(14, gameData.opponentLevel);
    document.getElementById("opponentLevel").innerHTML = "Level: " + gameData.opponentLevel;
    document.getElementById("opponentHealth").innerHTML = "HP: " + format(gameData.opponentHealth);
    document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
    document.getElementById("opponentRewards").innerHTML = "You will earn " + format(gameData.opponentRewards) + " Stellar per computer hacked.";
} 



var newsArray = ["congratulations! you have an internet connection.", " 'im gonna implement that later.' -shark " , " 'this game sucks.' -IGN " , "isn't this just a worse version of cookie clicker?"];

function randomString(items){
 return items[Math.floor(Math.random()*items.length)];
}

console.log(randomString(newsArray));

var randomNews = randomString(newsArray);

document.getElementById("randomNews").innerHTML = "Breaking news: " + randomNews;

var words_1to100 = ["cookie", "string", "array", "python", "DDoS", "denial", "service", "variable", "constant", "function", "brute", "force", "framework", "script", "code", "spaghetti", "error", "html", "javascript", "hacker", "firewall", "css"];

var wordAmount = gameData.opponentHealth / gameData.wpw


var hackArray = [];
var finalHackArray = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function generateHackArray() {
  if (gameData.opponentLevel < 101) {
      if (words_1to100.length > wordAmount) {
          hackArray = shuffle(words_1to100);
      } else {
         for (i = 0; i < (wordAmount / words_1to100.length); i + 1) {
         hackArray = shuffle(words_1to100);
         finalHackArray = hackArray.concat(hackArray);
      }
    }  
    return finalHackArray;
 }
}


generateHackArray();


// updateGUI();



