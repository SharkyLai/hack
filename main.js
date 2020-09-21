var gameData = {
    Stellar: 10,
    opponentLevel: 1,
    opponentHealth: 1,
    opponentRewards: 5,
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
    gameData.opponentHealth = Math.pow(gameData.opponentLevel, 2.75);
    gameData.Stellar = gameData.opponentRewards + gameData.Stellar;
    gameData.opponentRewards = Math.pow(gameData.opponentLevel, 2.5);
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


// updateGUI();



