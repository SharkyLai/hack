var Stellar = 10;
var automators = []
var opponentLevel = 1;
var opponentHealth = 1;
var opponentRewards = 5;

for (let i = 0; i < 10000; i + 0.05) {
    let automator = {
        cost: Math.pow(50, 1 + i),
        amount: 0,
        mult: 1,  
    }
    automators.push(automator)
}    

function format(amount) {
  let power = Math.floor(Math.log10(amount))
  let martissa = amount * Math.pow(10, power)
  if (power < 3) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + power
}

function updateGUI() {
    for (let i = 0; i < 10; i++) {
        let a = automators[i]
        document.getElementById("auto" + (i + 1)).innerHTML = "Amount: " + format(a.amount) + "<br>Multiplier: " + format(a.mult) + "<br>Cost: " + format(g.cost)
    }
}

function levelUp() {
    opponentLevel = opponentLevel + 1;
    opponentHealth = Math.pow(opponentLevel, 3);
    Stellar = opponentRewards + Stellar;
    opponentRewards = Math.pow(opponentLevel, 1.5);
} 

updateGUI();

