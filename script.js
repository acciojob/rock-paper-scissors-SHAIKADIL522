const $ = (n) => document.querySelector(`[data-ns-test="${n}"]`);
const NAMES = ["ROCK", "PAPER", "SCISSORS"];

let roundsLeft = 0, userPts = 0, compPts = 0;

function render() {
  $("rounds-left").textContent = roundsLeft;
  $("user-points").textContent = userPts;
  $("computer-points").textContent = compPts;
}

$("play-game").addEventListener("click", () => {
  const input = $("game-number");
  const n = parseInt(input.value, 10) || 0;

  roundsLeft = n;
  userPts = 0;
  compPts = 0;

  $("rounds-left").textContent = input.value;
  $("user-points").textContent = 0;
  $("computer-points").textContent = 0;
  $("computer-choose").textContent = "";
  $("round-result").textContent = "";
  $("game-result").textContent = "";
});

function play(user) {
  if (roundsLeft <= 0) return;

  const comp = Math.floor(Math.random() * 3);
  window.computerChoose = comp;
  $("computer-choose").textContent = NAMES[comp];

  let res;
  if (user === comp) res = "TIE";
  else if ((user - comp + 3) % 3 === 1) { res = "WON"; userPts++; }
  else { res = "LOSE"; compPts++; }

  $("round-result").textContent = res;
  roundsLeft--;
  render();

  if (roundsLeft === 0) {
    $("game-result").textContent =
      userPts > compPts ? "WON" : userPts < compPts ? "LOSE" : "TIE";
  }
}

$("rock").addEventListener("click", () => play(0));
$("paper").addEventListener("click", () => play(1));
$("scissors").addEventListener("click", () => play(2));