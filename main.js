var gameData = {
    Stellar: 10,
    cardano: 0,
    opponentLevel: 1,
    opponentHealth: 1,
    opponentRewards: 30,
    computerAmount: 1,
    computerCost: 20,
    damagePerSecond: 0,
    auto1cost: 10,
    auto2cost: 500,
    auto3cost: 4e4,
    auto4cost: 2e8,
    auto5cost: 5e14,
    auto6cost: 1e21,
    auto7cost: 2e29,
    auto8cost: 8e38,
    auto9cost: 5e48,
    auto1mult: 1,
    auto2mult: 1,
    auto3mult: 1,
    auto4mult: 1,
    auto5mult: 1,
    auto6mult: 1,
    auto7mult: 1,
    auto8mult: 1,
    auto9mult: 1,
    auto1amount: 0,
    auto2amount: 0,
    auto3amount: 0,
    auto4amount: 0,
    auto5amount: 0,
    auto6amount: 0,
    auto7amount: 0,
    auto8amount: 0,
    auto9amount: 0,
    hackSpeed: 1000,
    hackSpeedCost: 10000,
    hackSpeedTest: 1000,
    multCap: 1e35,
    tempDamageCost: 1e16,
    stellarMult: 1,
    playerStatus: "surfaceWeb",
    deepWebCost: 1e75
}

function format(amount) {
  let power = Math.floor(Math.log10(amount));
  let mantissa = amount / Math.pow(10, power);
  if (power < 3) return amount.toFixed(2);
  return mantissa.toFixed(2) + "e" + power
}

function levelUp() {
   if (gameData.damagePerSecond >= (gameData.opponentHealth * 10)) {
    gameData.opponentLevel = gameData.opponentLevel + 1;
    gameData.opponentHealth = Math.pow(10, gameData.opponentLevel - 1);
    gameData.opponentRewards = Math.pow(25, gameData.opponentLevel) * gameData.stellarMult;
    document.getElementById("opponentLevel").innerHTML = "Level: " + gameData.opponentLevel;
    document.getElementById("opponentHealth").innerHTML = "HP: " + format(gameData.opponentHealth);
    document.getElementById("opponentRewards").innerHTML = "You will earn " + format(gameData.opponentRewards) + " Stellar per computer hacked.";
    document.getElementById("levelProgress").innerHTML = format(gameData.damagePerSecond) + " / " + format(gameData.opponentHealth * 10);
  }
}

function lastLevel() {
  if (gameData.opponentLevel > 1) {
  gameData.opponentLevel = gameData.opponentLevel - 1;
  gameData.opponentHealth = Math.pow(10, gameData.opponentLevel - 1);
  gameData.opponentRewards = Math.pow(25, gameData.opponentLevel) * gameData.stellarMult;
  document.getElementById("opponentLevel").innerHTML = "Level: " + gameData.opponentLevel;
  document.getElementById("opponentHealth").innerHTML = "HP: " + format(gameData.opponentHealth);
  document.getElementById("opponentRewards").innerHTML = "You will earn " + format(gameData.opponentRewards) + " Stellar per computer hacked.";
 } 
}

function buyComputer() {
  if (gameData.Stellar >= gameData.computerCost) {
    gameData.computerAmount = gameData.computerAmount + 1;
    gameData.Stellar = gameData.Stellar - gameData.computerCost;
    gameData.computerCost = gameData.computerCost * 1.1;
    document.getElementById("buyComputer").innerHTML = "Buy Computer (" + format(gameData.computerAmount) + ") Cost: " + format(gameData.computerCost);
    document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
 }
}

function buyMaxComputer() {
  while (gameData.Stellar >= gameData.computerCost) {
    buyComputer();
  }
}

function buyAutomator1() {
  if (gameData.Stellar >= gameData.auto1cost && gameData.computerAmount > gameData.auto1amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto1cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto1mult * 2;
     gameData.auto1cost = gameData.auto1cost * 1.2;
     gameData.auto1amount = gameData.auto1amount + 1;
     if (gameData.auto1amount % 5 == 0) {
       gameData.auto1mult = Math.pow(2, gameData.auto1amount / 5);
       if (gameData.auto1mult > gameData.multCap) {
         gameData.auto1mult = gameData.multCap  
        }
     }
     if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto1").innerHTML = "Upgrade Console (" + format(gameData.auto1amount) + ") Cost: " + format(gameData.auto1cost) + " Stellar | Damage: 2 | x" + format(gameData.auto1mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}


function buyAutomator2() {
  if (gameData.Stellar >= gameData.auto2cost && gameData.computerAmount > gameData.auto2amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto2cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto2mult * 50;
     gameData.auto2cost = gameData.auto2cost * 1.2;
     gameData.auto2amount = gameData.auto2amount + 1;
     if (gameData.auto2amount % 5 == 0) {
      gameData.auto2mult = Math.pow(2, gameData.auto2amount / 5);
      if (gameData.auto2mult > gameData.multCap) {
        gameData.auto2mult = gameData.multCap  
       }
    }
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto2").innerHTML = "Upgrade Script (" + format(gameData.auto2amount) + ") Cost: " + format(gameData.auto2cost) + " Stellar | Damage: 50 | x" + format(gameData.auto2mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}


function buyAutomator3() {
  if (gameData.Stellar >= gameData.auto3cost && gameData.computerAmount > gameData.auto3amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto3cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto3mult * 600;
     gameData.auto3cost = gameData.auto3cost * 1.25;
     gameData.auto3amount = gameData.auto3amount + 1;
     if (gameData.auto3amount % 5 == 0) {
      gameData.auto3mult = Math.pow(2, gameData.auto3amount / 5);
      if (gameData.auto3mult > gameData.multCap) {
        gameData.auto3mult = gameData.multCap  
       }
    }
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto3").innerHTML = "Upgrade Beginner Hacker (" + format(gameData.auto3amount) + ") Cost: " + format(gameData.auto3cost) + " Stellar | Damage: 600 | x" + format(gameData.auto3mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}


function buyAutomator4() {
  if (gameData.Stellar >= gameData.auto4cost && gameData.computerAmount > gameData.auto4amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto4cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto4mult * 14000;
     gameData.auto4cost = gameData.auto4cost * 1.25;
     gameData.auto4amount = gameData.auto4amount + 1;
     if (gameData.auto4amount % 5 == 0) {
      gameData.auto4mult = Math.pow(2, gameData.auto4amount / 5);
      if (gameData.auto4mult > gameData.multCap) {
        gameData.auto4mult = gameData.multCap  
       }
    }
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto4").innerHTML = "Upgrade Library (" + format(gameData.auto4amount) + ") Cost: " + format(gameData.auto4cost) + " Stellar | Damage: 1.4e4 | x" + format(gameData.auto4mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}

function buyAutomator5() {
  if (gameData.Stellar >= gameData.auto5cost && gameData.computerAmount > gameData.auto5amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto5cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto5mult * 1500000;
     gameData.auto5cost = gameData.auto5cost * 1.3;
     gameData.auto5amount = gameData.auto5amount + 1;
     if (gameData.auto5amount % 5 == 0) {
      gameData.auto5mult = Math.pow(2, gameData.auto5amount / 5);
      if (gameData.auto5mult > gameData.multCap) {
        gameData.auto5mult = gameData.multCap  
       }
    }
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto5").innerHTML = "Upgrade Code Editor (" + format(gameData.auto5amount) + ") Cost: " + format(gameData.auto5cost) + " Stellar | Damage: 1.5e6 | x" + format(gameData.auto5mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}


function buyAutomator6() {
  if (gameData.Stellar >= gameData.auto6cost && gameData.computerAmount > gameData.auto6amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto6cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto6mult * 700000000;
     gameData.auto6cost = gameData.auto6cost * 1.3;
     gameData.auto6amount = gameData.auto6amount + 1;
     if (gameData.auto6amount % 5 == 0) {
      gameData.auto6mult = Math.pow(2, gameData.auto6amount / 5);
      if (gameData.auto6mult > gameData.multCap) {
        gameData.auto6mult = gameData.multCap  
       }
    } 
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto6").innerHTML = "Upgrade Brute-Force Hacks (" + format(gameData.auto6amount) + ") Cost: " + format(gameData.auto6cost) + " Stellar | Damage: 7e8 | x" + format(gameData.auto6mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
     
  }
}

function buyAutomator7() {
  if (gameData.Stellar >= gameData.auto7cost && gameData.computerAmount > gameData.auto7amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto7cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto7mult * 5e12;
     gameData.auto7cost = gameData.auto7cost * 1.35;
     gameData.auto7amount = gameData.auto7amount + 1;
     if (gameData.auto7amount % 5 == 0) {
      gameData.auto7mult = Math.pow(2, gameData.auto7amount / 5);
      if (gameData.auto7mult > gameData.multCap) {
        gameData.auto7mult = gameData.multCap  
       }
    }
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto7").innerHTML = "Upgrade Framework (" + format(gameData.auto7amount) + ") Cost: " + format(gameData.auto7cost) + " Stellar | Damage: 5e12 | x" + format(gameData.auto7mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}

function buyAutomator8() {
  if (gameData.Stellar >= gameData.auto8cost && gameData.computerAmount > gameData.auto8amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto8cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto8mult * 2e17;
     gameData.auto8cost = gameData.auto8cost * 1.35;
     gameData.auto8amount = gameData.auto8amount + 1;
     if (gameData.auto8amount % 5 == 0) {
      gameData.auto8mult = Math.pow(2, gameData.auto8amount / 5);
      if (gameData.auto8mult > gameData.multCap) {
        gameData.auto8mult = gameData.multCap  
       }
    }
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto8").innerHTML = "Upgrade i3 (" + format(gameData.auto8amount) + ") Cost: " + format(gameData.auto8cost) + " Stellar | Damage: 2e17 | x" + format(gameData.auto8mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}

function buyAutomator9() {
  if (gameData.Stellar >= gameData.auto9cost && gameData.computerAmount > gameData.auto9amount) {
     gameData.Stellar = gameData.Stellar - gameData.auto9cost;
     gameData.damagePerSecond = gameData.damagePerSecond + gameData.auto9mult * 9e24;
     gameData.auto9cost = gameData.auto9cost * 1.4;
     gameData.auto9amount = gameData.auto9amount + 1;
     if (gameData.auto9amount % 5 == 0) {
      gameData.auto9mult = Math.pow(2, gameData.auto9amount / 5);
      if (gameData.auto9mult > gameData.multCap) {
        gameData.auto9mult = gameData.multCap  
       }
    }
    if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
      gameData.opponentRewards = gameData.opponentRewards * 1.5;
    }
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("upgradeAuto9").innerHTML = "Upgrade Malware (" + format(gameData.auto9amount) + ") Cost: " + format(gameData.auto9cost) + " Stellar | Damage: 9e24 | x" + format(gameData.auto9mult)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}

function buyMax1() { 
  while (gameData.Stellar >= gameData.auto1cost && gameData.computerAmount > gameData.auto1amount) {
    buyAutomator1();
 }
}

function buyMax2() {
  while (gameData.Stellar >= gameData.auto2cost && gameData.computerAmount > gameData.auto2amount) {
    buyAutomator2();
 }
}

function buyMax3() {
  while (gameData.Stellar >= gameData.auto3cost && gameData.computerAmount > gameData.auto3amount) {
    buyAutomator3();
 }
}

function buyMax4() {
  while (gameData.Stellar >= gameData.auto4cost && gameData.computerAmount > gameData.auto4amount) {
    buyAutomator4();
 }
}

function buyMax5() {
  while (gameData.Stellar >= gameData.auto5cost && gameData.computerAmount > gameData.auto5amount) {
    buyAutomator5();
 }
}

function buyMax6() {
  while (gameData.Stellar >= gameData.auto6cost && gameData.computerAmount > gameData.auto6amount) {
    buyAutomator6();
 }
}

function buyMax7() {
  while (gameData.Stellar >= gameData.auto7cost && gameData.computerAmount > gameData.auto7amount) {
    buyAutomator7();
 }
}

function buyMax8() {
  while (gameData.Stellar >= gameData.auto8cost && gameData.computerAmount > gameData.auto8amount) {
    buyAutomator8();
 }
}

function buyMax9() {
  while (gameData.Stellar >= gameData.auto9cost && gameData.computerAmount > gameData.auto9amount) {
    buyAutomator9();
 }
}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

function autoHack() {
  if (gameData.damagePerSecond >= gameData.opponentHealth) {
   gameData.Stellar = gameData.opponentRewards + gameData.Stellar;
   document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}


var mainGameLoop;

function buyHackSpeed() {
  if (gameData.Stellar >= gameData.hackSpeedCost) {
  gameData.hackSpeedTest = gameData.hackSpeed; 
  gameData.Stellar = gameData.Stellar - gameData.hackSpeedCost;
  gameData.hackSpeed = gameData.hackSpeed / 1.5;
  gameData.hackSpeedCost = gameData.hackSpeedCost * 100;
  clearInterval(mainGameLoop);
     mainGameLoop = window.setInterval(function() {
      autoHack()
    }, gameData.hackSpeed)
  document.getElementById("hackSpeedButton").innerHTML = "Increase Hack Speed, Cost: " + format(gameData.hackSpeedCost)
  document.getElementById("hackSpeed").innerHTML = "You hack every " + format(gameData.hackSpeed) + "ms."
  document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  }
}

function buyMaxHackSpeed() {
  while (gameData.Stellar >= gameData.hackSpeedCost) {
    buyHackSpeed();
  }
}

function temporaryDamageIncrease() {
   if (gameData.Stellar >= gameData.tempDamageCost) {
     gameData.Stellar = gameData.Stellar - gameData.tempDamageCost;
     gameData.damagePerSecond = gameData.damagePerSecond * 2;
     gameData.tempDamageCost = gameData.tempDamageCost * 100;
     document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage."
     document.getElementById("tempDamageIncrease").innerHTML = "Increase your current damage by 2x, Cost: " + format(gameData.tempDamageCost)
     document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
   }
}

function hardReset() {
  gameData = {
    Stellar: 10,
    cardano: 0,
    opponentLevel: 1,
    opponentHealth: 1,
    opponentRewards: 30,
    computerAmount: 1,
    computerCost: 20,
    damagePerSecond: 0,
    auto1cost: 10,
    auto2cost: 500,
    auto3cost: 4e4,
    auto4cost: 2e8,
    auto5cost: 5e14,
    auto6cost: 1e21,
    auto7cost: 2e29,
    auto8cost: 8e38,
    auto9cost: 5e48,
    auto1mult: 1,
    auto2mult: 1,
    auto3mult: 1,
    auto4mult: 1,
    auto5mult: 1,
    auto6mult: 1,
    auto7mult: 1,
    auto8mult: 1,
    auto9mult: 1,
    auto1amount: 0,
    auto2amount: 0,
    auto3amount: 0,
    auto4amount: 0,
    auto5amount: 0,
    auto6amount: 0,
    auto7amount: 0,
    auto8amount: 0,
    auto9amount: 0,
    hackSpeed: 1000,
    hackSpeedCost: 10000,
    hackSpeedTest: 1000,
    multCap: 1e35,
    tempDamageCost: 1e16,
    stellarMult: 1,
    playerStatus: "surfaceWeb",
    deepWebCost: 1e75
}
 updateAll();
}

function deepWeb() {
  if (gameData.Stellar >= gameData.deepWebCost) {
   if (gameData.Stellar >= 1e100) {
    gameData.stellarMult = gameData.stellarMult * 1.2;
   } else if (gameData.Stellar < 1e100 && gameData.Stellar >= 1e95) {
    gameData.stellarMult = gameData.stellarMult * 1.19;
   } else if (gameData.Stellar < 1e95 && gameData.Stellar >= 1e90) {
    gameData.stellarMult = gameData.stellarMult * 1.18;
   } else if (gameData.Stellar < 1e90 && gameData.Stellar >= 1e85) {
    gameData.stellarMult = gameData.stellarMult * 1.17;
   } else if (gameData.Stellar < 1e85 && gameData.Stellar >= 1e80) {
    gameData.stellarMult = gameData.stellarMult * 1.16;
   } else if (gameData.Stellar < 1e80 && gameData.Stellar >= 1e75) {
    gameData.stellarMult = gameData.stellarMult * 1.15;
  }
  hardReset();
  gameData.playerStatus = "deepWeb";
 }
}

function hackrifice() {
   if (gameData.playerStatus = "deepWeb") {
     gameData.auto1amount = 0;
     gameData.auto1amount = 0;
    
     gameData.auto1amount = 0; 
     gameData.auto1amount = 0;
     
     gameData.auto1amount = 0;
     
     gameData.auto1amount = 0;
     
     gameData.auto1amount = 0;
     
     gameData.auto1amount = 0;
     
   }
}

function permanentDamageBoost() {

}

function doubleDamageAuto1() {
  
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("hacklickerSave", JSON.stringify(gameData))
}, 10000)

var savegame = JSON.parse(localStorage.getItem("hacklickerSave"))
if (savegame !== null) {
  gameData = savegame
} 

var newsArray = ["congratulations! you have an internet connection.", " 'im gonna implement that later.' -shark " , " 'this game sucks.' -IGN " , "isn't this just a worse version of cookie clicker?", "retard makes hack game, influencing generations to hack", "the developer of this game works on this stupid thing more than actual features and bug fixes.","#sharkisoverparty","ReferenceError: yourLife is not defined.","why does the code work? why doesn't it work?", "the developer publicly states that he is NOT a hacker.", "if it's worth doing, it's worth overdoing.", "only retards read the news here.", "stop afking!"];

function randomString(items){
 return items[Math.floor(Math.random()*items.length)];
}

var randomNews = randomString(newsArray);

document.getElementById("randomNews").innerHTML = randomNews;




var words_1to100 = ["cookie", "string", "array", "python", "DDoS", "denial", "service", "variable", "constant", "function", "brute", "force", "framework", "script", "code", "spaghetti", "error", "html", "javascript", "hacker", "firewall", "css"];


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

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("hacklickerSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("hacklickerSave"))
if (savegame !== null) {
  gameData = savegame
}

var saveHackLoop = window.setInterval(function() {
  localStorage.setItem("gameLoopSave", JSON.stringify(mainGameLoop))
}, 100)

var hackLoop = JSON.parse(localStorage.getItem("gameLoopSave"))
if (savegame !== null) {
  mainGameLoop = hackLoop
}

function tab(tab) {
  document.getElementById("Automators").style.display = "none";
  document.getElementById("Upgrades").style.display = "none";
  document.getElementById("Options").style.display = "none";
  document.getElementById("Stats").style.display = "none";
  document.getElementById("Achievements").style.display = "none";
  document.getElementById("Ascension").style.display = "none";
  document.getElementById(tab).style.display = "inline";
}
tab("Automators")

function updateAll() {
  if (gameData.damagePerSecond >= gameData.opponentHealth * 5) {
    gameData.opponentRewards = gameData.opponentRewards * 1.5;
  }
  document.getElementById("buyComputer").innerHTML = "Buy Computer (" + format(gameData.computerAmount) + ") Cost: " + format(gameData.computerCost);
  document.getElementById("levelProgress").innerHTML = format(gameData.damagePerSecond) + " / " + format(gameData.opponentHealth * 10);
  document.getElementById("upgradeAuto1").innerHTML = "Upgrade Console (" + format(gameData.auto1amount) + ") Cost: " + format(gameData.auto1cost) + " Stellar | Damage: 2 | x" + format(gameData.auto1mult);
  document.getElementById("upgradeAuto2").innerHTML = "Upgrade Script (" + format(gameData.auto2amount) + ") Cost: " + format(gameData.auto2cost) + " Stellar | Damage: 50 | x" + format(gameData.auto2mult);
  document.getElementById("upgradeAuto3").innerHTML = "Upgrade Beginner Hacker (" + format(gameData.auto3amount) + ") Cost: " + format(gameData.auto3cost) + " Stellar | Damage: 600 | x" + format(gameData.auto3mult);
  document.getElementById("upgradeAuto4").innerHTML = "Upgrade Library (" + format(gameData.auto4amount) + ") Cost: " + format(gameData.auto4cost) + " Stellar | Damage: 1.4e4 | x" + format(gameData.auto4mult);
  document.getElementById("upgradeAuto5").innerHTML = "Upgrade Code Editor (" + format(gameData.auto5amount) + ") Cost: " + format(gameData.auto5cost) + " Stellar | Damage: 1.5e6 | x" + format(gameData.auto5mult);
  document.getElementById("upgradeAuto6").innerHTML = "Upgrade Brute-Force Hacks (" + format(gameData.auto6amount) + ") Cost: " + format(gameData.auto6cost) + " Stellar | Damage: 7e8 | x" + format(gameData.auto6mult);
  document.getElementById("upgradeAuto7").innerHTML = "Upgrade Framework (" + format(gameData.auto7amount) + ") Cost: " + format(gameData.auto7cost) + " Stellar | Damage: 5e12 | x" + format(gameData.auto7mult);
  document.getElementById("upgradeAuto8").innerHTML = "Upgrade i3 (" + format(gameData.auto8amount) + ") Cost: " + format(gameData.auto8cost) + " Stellar | Damage: 2e17 | x" + format(gameData.auto8mult);
  document.getElementById("upgradeAuto9").innerHTML = "Upgrade Malware (" + format(gameData.auto9amount) + ") Cost: " + format(gameData.auto9cost) + " Stellar | Damage: 9e24 | x" + format(gameData.auto9mult);
  document.getElementById("hackSpeedButton").innerHTML = "Increase Hack Speed, Cost: " + format(gameData.hackSpeedCost)
  document.getElementById("hackSpeed").innerHTML = "You hack every " + format(gameData.hackSpeed) + "ms.";
  document.getElementById("opponentLevel").innerHTML = "Level: " + gameData.opponentLevel;
  document.getElementById("opponentHealth").innerHTML = "HP: " + format(gameData.opponentHealth);
  document.getElementById("opponentRewards").innerHTML = "You will earn " + format(gameData.opponentRewards) + " Stellar per computer hacked.";
  document.getElementById("Stellar").innerHTML = "You have " + format(gameData.Stellar) + " Stellar.";
  document.getElementById("damagePerSecond").innerHTML = "You deal " + format(gameData.damagePerSecond) + " damage.";
  document.getElementById("tempDamageIncrease").innerHTML = "Increase your current damage by 2x, Cost: " + format(gameData.tempDamageCost);
  clearInterval(mainGameLoop);
     mainGameLoop = window.setInterval(function() {
      autoHack()
    }, gameData.hackSpeed)
}

updateAll();




