const canvas = document.getElementById('garden');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];

function drawFlower(x, y) {
ctx.fillStyle = '#FF69B4';
ctx.beginPath();
ctx.arc(x, y, 10, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#32CD32';
ctx.fillRect(x - 2, y + 10, 4, 15);
}

canvas.addEventListener('click', function(e) {
const rect = canvas.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

flowers.push({x, y});
drawFlower(x, y);
});
