document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('pulsing-text');
    const originalText = textElement.innerText;
    textElement.innerHTML = ""; // Clear existing text

    // Wrap each word in a span and re-insert into the document
    originalText.split(' ').forEach(function(word) {
        let wordSpan = document.createElement('span');
        wordSpan.innerHTML = word.split('').map(letter => `<span>${letter}</span>`).join('') + ' ';
        textElement.appendChild(wordSpan);
    });
});

let spotlightDiameter = 150; // Initial Spotlight size

document.addEventListener('mousemove', updateSpotlight);
document.addEventListener('wheel', adjustSpotlightSize);

function updateSpotlight(e) {
    const spotlightArea = document.getElementById('spotlight-area');
    const spotlightRadius = spotlightDiameter / 2;

    // Spotlight creation or update
    let spotlight = document.getElementById('spotlight');
    if (!spotlight) {
        spotlight = document.createElement('div');
        spotlight.id = 'spotlight';
        spotlight.style.position = 'absolute';
        spotlight.style.borderRadius = '50%';
        spotlight.style.backgroundColor = 'lightyellow';
        spotlight.style.pointerEvents = 'none';
        spotlight.style.mixBlendMode = 'difference';
        spotlight.style.boxShadow = `0 0 15px 10px lightyellow`;
        spotlightArea.appendChild(spotlight);
    }

    spotlight.style.width = `${spotlightDiameter}px`;
    spotlight.style.height = `${spotlightDiameter}px`;
    spotlight.style.left = `${e.pageX - spotlightRadius}px`;
    spotlight.style.top = `${e.pageY - spotlightRadius}px`;

    adjustLetterScale(e);
}

function adjustSpotlightSize(e) {
    const zoomDirection = e.deltaY;
    spotlightDiameter += zoomDirection > 0 ? 20 : -20; // Increase or decrease diameter
    spotlightDiameter = Math.max(100, Math.min(spotlightDiameter, 300)); // Constrain size between 100px and 300px
    updateSpotlight(e);
}

function adjustLetterScale(e) {
    document.querySelectorAll('#pulsing-text span > span').forEach(span => {
        const rect = span.getBoundingClientRect();
        const spanCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        const distance = Math.sqrt(Math.pow(spanCenter.x - e.pageX, 2) + Math.pow(spanCenter.y - e.pageY, 2));
        const spotlightRadius = spotlightDiameter / 2;

        // Calculate scale based on distance, within a certain range
        let scale = 1;
        if (distance < spotlightRadius) {
            scale = Math.min(2, 1 + (1 - distance / spotlightRadius)); // Scale up to 2x within the spotlight radius
        }
        span.style.transform = `scale(${scale})`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const glowText = document.querySelector('.glow-text');
    glowText.style.visibility = 'visible';
    setTimeout(() => glowText.style.visibility = 'hidden', 5000);
});
