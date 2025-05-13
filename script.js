const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

ctx.translate(250, 250);
ctx.beginPath();

for (let t = 0; t < Math.PI * 2; t += 0.01) {
  let x = 16 * Math.pow(Math.sin(t), 3);
  let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  ctx.lineTo(x * 10, y * 10);
}

ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.font = '30px Arial';
ctx.fillStyle = 'darkred';
ctx.fillText('buse', -40, 10);
