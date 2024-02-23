document.body.addEventListener('mousemove', function(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt(Math.pow(e.pageX - centerX, 2) + Math.pow(e.pageY - centerY, 2));

    if (distance < 50 && document.getElementById('main-text').classList.contains('hidden')) { // Sensitivity adjustment
        fadeText();
    }
});

function handleMouseMove() {
    let lastTime = Date.now();
    document.addEventListener('mousemove', e => {
        const currentTime = Date.now();
        if (currentTime - lastTime < 10) return;
        lastTime = currentTime;

        // Trail segment creation logic as before
        createTrailSegment(e.pageX, e.pageY);
    });
}

function createTrailSegment(x, y) {
    const trailSegment = document.createElement('div');
    trailSegment.classList.add('trail');
    document.body.appendChild(trailSegment);
    trailSegment.style.left = `${x}px`;
    trailSegment.style.top = `${y}px`;

    let size = 20;
    let fadeEffect = setInterval(() => {
        if (size <= 0) {
            clearInterval(fadeEffect);
            trailSegment.remove();
        } else {
            size--;
            trailSegment.style.width = `${size}px`;
            trailSegment.style.height = `${size}px`;
            trailSegment.style.opacity = size / 20;
        }
    }, 20);
}

function fadeText() {
    const mainText = document.getElementById('main-text');
    const startText = document.getElementById('start-text');

    mainText.classList.remove('hidden');
    mainText.classList.add('fade-in');

    setTimeout(function() {
        startText.classList.remove('hidden');
        startText.classList.add('fade-in');
    }, 500); // Adjusted timing for the start text
}
//document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('cursorCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    let lastX;
    let lastY;

    // Set initial canvas state
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.strokeStyle = 'rgba(255, 255, 207, 0.8)'; // Glowing color
    ctx.lineWidth = 30; // Line thickness
    ctx.shadowBlur = 35; // Glow effect size
    ctx.shadowColor = 'rgba(255, 255, 207, 0.5)'; // Glow color

    function fadeOutTrail() {
        // Apply a semi-transparent white overlay
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(255, 255, 207, 0.1)'; // Adjust the alpha to control the fade speed
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
    }

    function animate() {
        fadeOutTrail();
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
document.getElementById('start-text').addEventListener('click', function() {
    const circle = document.createElement('div');
    circle.id = 'transition-circle';
    document.body.appendChild(circle);
  
    // Start the fade-in and grow animation
    setTimeout(() => circle.classList.add('circle-expand'),);
  
    // Change the page after the animation
    setTimeout(() => {
      window.location.href = '1.html'; // Specify the next page URL
    }, 1000); // Match the duration of the CSS transition
  });
  

