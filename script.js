const heartPattern = [
    "    ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️    ",
    "  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ",
    " ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ ",
    "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
    "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
    " ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ ",
    "  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ",
    "   ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️    ",
    "    ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️     ",
    "     ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️      ",
    "      ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️       ",
    "       ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️        ",
    "        ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️       ",
    "         ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️      ",
    "          ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️     ",
    "           ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️    ",
    "            ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️   ",
    "             ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️  ",
    "              ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ ",
    "               ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️"
];

const container = document.getElementById("heart-container");

let currentRow = 0;

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

        // Yavaşça kalp emojilerini görsel olarak yavaşça ortaya çıkartıyoruz
        heartCells.forEach((cell, index) => {
            setTimeout(() => {
                cell.style.color = "red";
            }, 100 * index); // Kalp emojileri yavaşça rengini alacak
        });

        currentRow++;
        setTimeout(drawHeart, 300); // 300ms aralıkla sonraki satırı çiziyoruz
    }
}

drawHeart();
