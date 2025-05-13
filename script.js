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

let currentRow = 0;

// Kalp şekli ve yazıyı yavaşça ekleyen fonksiyon
function drawHeart() {
    if (currentRow < heartPattern.length) {
        const row = heartPattern[currentRow];
        const heartCells = row.split("").map(char => {
            const div = document.createElement("div");
            div.classList.add("heart");
            div.innerText = char;
            container.appendChild(div);
            return div;
        });

        // Yavaşça kalp şekli çizilecek
        currentRow++;
        setTimeout(drawHeart, 300); // 300ms aralıkla sonraki satırı çiziyoruz
    } else {
        // Yazıyı kalbin ortasında göstermek için
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = "Onur <3 Buse";
        container.appendChild(message);
    }
}

drawHeart();
