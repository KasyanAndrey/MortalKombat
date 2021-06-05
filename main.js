const arenasEl = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["the-fire"],
  attack: function (name) {
    console.log(name + " " + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["ice"],
  attack: function (name) {
    console.log(name + " " + "Fight...");
  },
};

function createElement(tag, className) {
  const tagEl = document.createElement(tag);

  if (className) {
    tagEl.classList.add(className);
  }

  return tagEl;
}

function createPlayer(playerObj) {
  const playerEl = createElement("div", "player" + playerObj.player);
  const progressbarEl = createElement("div", "progressbar");
  const characterEl = createElement("div", "character");
  const lifeEl = createElement("div", "life");
  const nameEl = createElement("div", "name");
  const imgEl = createElement("img");

  lifeEl.style.width = playerObj.hp + "%";
  nameEl.textContent = playerObj.name;
  imgEl.src = playerObj.img;

  characterEl.append(imgEl);
  progressbarEl.append(lifeEl, nameEl);
  playerEl.append(progressbarEl, characterEl);

  return playerEl;
}

function playerWins(name) {
  const winsTitle = createElement("div", "winsTitle");
  winsTitle.textContent = name + " wins";

  return winsTitle;
}

function changeHp(player) {
  const playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= subtractRandomQuantityHp();
  playerLife.style.width = player.hp + "%";

  if (player.hp <= 0) {
    arenasEl.append(playerWins(player.name));
    player.hp = 0;
    playerLife.style.width = 0 + "%";
    randomButton.disabled = true;
  }
}

function subtractRandomQuantityHp() {
  return Math.ceil(Math.random() * 20);
}

randomButton.addEventListener("click", function () {
  changeHp(player1);
  changeHp(player2);
});

arenasEl.append(createPlayer(player1));
arenasEl.append(createPlayer(player2));
