// ----------- User Name -----------
let userName = prompt("What's your name?");
if (userName == '' || userName == null) {
  userName = 'Player';
}

// ----------- Game -----------
const gameResults = ["Tie", "Victory", "Defeat"]; // game conditions
const gameOptions = ["Rock", "Paper", "Scissors"]; // game options
const gameLogic = [ // game matriz
  [0, 1, 2],
  [2, 0, 1],
  [1, 2, 0]
];

const startGame = (user) => {
  // game options cpu
  const cpuLogic = Math.floor(Math.random() * 3);
  const cpuSelect = gameOptions[cpuLogic];

  // game options user
  const userSelect = gameOptions[user];

  // game result
  const resultNum = gameLogic[cpuLogic][user];
  const resultTxt = gameResults[resultNum];

  // write in index.html
  writeDom(cpuSelect, userSelect, resultTxt);
}