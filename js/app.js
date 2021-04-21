// ----------- User Name -----------
let userName = prompt("What's your name?");
if (userName == '' || userName == null) {
  userName = 'Player';
}

// ----------- Game -----------
const gameResults = ["Tie", "Victory", "Defeat"];
const gameOptions = ["Rock", "Paper", "Scissors"];
const gameLogic = [
  [0, 1, 2],
  [2, 0, 1],
  [1, 2, 0]
];

const startGame = (user) => {
  const cpuLogic = Math.floor(Math.random() * 3);
  const cpuSelect = gameOptions[cpuLogic];

  const userSelect = gameOptions[user];

  const resultNum = gameLogic[cpuLogic][user];
  const resultTxt = gameResults[resultNum];

  writeDom(cpuSelect, userSelect, resultTxt);
}