const arenasEl = document.querySelector(".arenas");

const player1 = {
  player: 1,
  name: "SCORPION",
  hp: 30,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["the-fire"],
  attack: function (name) {
    console.log(name + " " + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "SUB-ZERO",
  hp: 50,
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

arenasEl.append(createPlayer(player1));
arenasEl.append(createPlayer(player2));
