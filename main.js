const canvas = document.getElementById('garden');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

function createPetal() {
    petals.push({
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 6 + 4,
        speed: Math.random() * 1 + 0.5
    });
}

function drawPetals() {
    for (let i = 0; i < petals.length; i++) {
        let p = petals[i];
        ctx.fillStyle = "rgba(255,105,180,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speed;

        if (p.y > canvas.height) {
            petals.splice(i, 1);
        }
    }
}

function drawFlower(x, y) {
    // petals
    ctx.fillStyle = "#ff69b4";
    for (let i = 0; i < 6; i++) {
        let angle = i * (Math.PI / 3);
        let px = x + Math.cos(angle) * 12;
        let py = y + Math.sin(angle) * 12;

        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fill();
    }

    // center
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();

    // stem
    ctx.fillStyle = "green";
    ctx.fillRect(x - 2, y, 4, 20);

    drawHeart(x, y - 15);
}

function drawHeart(x, y) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 10, y - 10, x - 20, y + 10, x, y + 20);
    ctx.bezierCurveTo(x + 20, y + 10, x + 10, y - 10, x, y);
    ctx.fill();
}

canvas.addEventListener("click", function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawFlower(x, y);
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPetals();
    if (Math.random() < 0.1) createPetal();
    requestAnimationFrame(animate);
}

animate();
