// ASCII ile oluşturulmuş kalp şekli
const heartPattern = [
  "   *****       *****   ",
  " *********   ********* ",
  "*********** ***********",
  "***********************",
  " ********************* ",
  "  *******************  ",
  "   *****************   ",
  "    ***************    ",
  "     *************     ",
  "      ***********      ",
  "       *********       ",
  "        *******        ",
  "         *****         ",
  "          ***          ",
  "           *           "
];

const container = document.getElementById("heart-container");
const message = document.querySelector(".message");
let currentRow = 0;

function drawHeart() {
  if (currentRow < heartPattern.length) {
    const row = heartPattern[currentRow];
    row.split("").forEach(char => {
      const div = document.createElement("div");
      div.classList.add("heart");
      div.innerText = char;
      container.appendChild(div);
    });
    currentRow++;
    setTimeout(drawHeart, 100);
  } else {
    message.innerText = "Onur <3 Buse";
    message.style.color = "white"; // Ekstra garanti
  }
}

drawHeart();
