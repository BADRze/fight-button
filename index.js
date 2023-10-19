let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageEl = document.getElementById('stage');//<div id="stage"></div>
let fightButton = document.getElementById('fightButton'); //<button id="fightButton">Pick Fighters!</button>

fightButton.addEventListener('click', function() {
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    let totalRandomIndex = fighters[randomIndexOne] + " VS " + fighters[randomIndexTwo]
    stageEl.textContent = totalRandomIndex
})