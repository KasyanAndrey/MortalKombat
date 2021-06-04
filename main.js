const player1 = {
  id: "player1",
  name: "SCORPION",
  hp: 30,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["the-fire"],
  attack() {
    console.log(player1.name + "Fight...");
  },
};

const player2 = {
  id: "player2",
  name: "SUB-ZERO",
  hp: 50,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["ice"],
  attack() {
    console.log(player2.name + "Fight...");
  },
};
// ------------------

const arenasEl = document.querySelector(".arenas");

function createPlayer(players) {
  const playerEl = document.createElement("div");
  playerEl.classList.add(players.id);

  const progressbarEl = document.createElement("div"); // lifeEl nameEl
  progressbarEl.classList.add("progressbar");

  const characterEl = document.createElement("div"); // imgEl
  characterEl.classList.add("character");

  const lifeEl = document.createElement("div");
  lifeEl.classList.add("life");
  lifeEl.style.width = players.hp + "%";

  const nameEl = document.createElement("div");
  nameEl.classList.add("name");
  nameEl.textContent = players.name;

  const imgEl = document.createElement("img");
  imgEl.src = players.img;

  characterEl.append(imgEl);
  progressbarEl.append(lifeEl, nameEl);
  playerEl.append(progressbarEl, characterEl);
  arenasEl.append(playerEl);

  return arenasEl;
}

createPlayer(player1, "SCORPION", 50);
createPlayer(player2, "SUB-ZERO", 80);
