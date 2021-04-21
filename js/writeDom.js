const writeDom = (us, cpu, res) => {
  const userTxt = document.getElementById('result__user');
  userTxt.innerHTML = `User: ${us}`;
  const cpuTxt = document.getElementById('result__cpu');
  cpuTxt.innerHTML = `Cpu: ${cpu}`;

  const resultGame = document.getElementById('result__game');
  resultGame.innerHTML = `<h2>Resultado: ${res}</h2>`;
}
