document.addEventListener("DOMContentLoaded", function() {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const textElements = left.querySelectorAll('h1, p'); // Assuming you want to target left side text elements
    
    var delayInMilliseconds = 3000; //1 second

    setTimeout(function() {
      //your code to be executed after 1 second
    }, delayInMilliseconds);
    
    // Combine all initial setup functions and event listeners here
    initialSetup();
    updateScrollEffect();
    handleMouseMove();

    function initialSetup() {
        left.style.transform = 'translateY(0)';
        right.style.transform = 'translateY(0)';
    }

    function updateScrollEffect() {
        window.addEventListener('scroll', function() {
            requestAnimationFrame(() => {
                let scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                let offsetLeft = -scrollPercent * 50;
                let offsetRight = scrollPercent * 50;
                
                left.style.transform = `translateY(${offsetLeft}vh)`;
                right.style.transform = `translateY(${offsetRight}vh)`;

                // Adjust text color based on scroll
                let r = Math.round(255 + (0 - 255) * scrollProgress);
                let g = Math.round(255 + (0 - 255) * scrollProgress);
                let b = Math.round(255 + (0 - 255) * scrollProgress);
                textElements.forEach(el => {
                    el.style.color = `rgb(${r}, ${g}, ${b})`;
                });
            });
        });
    }

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
    function toggleGradient() {
        const leftSide = document.querySelector('.left');
        const rightSide = document.querySelector('.right');

        leftSide.classList.toggle('left-toggled');
        rightSide.classList.toggle('right-toggled');
    }

    // Add click event listener to the new div for toggling gradients
    document.getElementById('toggle-gradient').addEventListener('click', toggleGradient);

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
});

document.addEventListener("DOMContentLoaded", function() {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const textElements = left.querySelectorAll('h1, p'); // Assuming you want to target left side text elements
    
    var delayInMilliseconds = 3000; //1 second

    setTimeout(function() {
      //your code to be executed after 1 second
    }, delayInMilliseconds);
    
    // Combine all initial setup functions and event listeners here
    initialSetup();
    updateScrollEffect();
    handleMouseMove();

    function initialSetup() {
        left.style.transform = 'translateY(0)';
        right.style.transform = 'translateY(0)';
    }

    function updateScrollEffect() {
        window.addEventListener('scroll', function() {
            requestAnimationFrame(() => {
                let scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                let offsetLeft = -scrollPercent * 50;
                let offsetRight = scrollPercent * 50;
                
                left.style.transform = `translateY(${offsetLeft}vh)`;
                right.style.transform = `translateY(${offsetRight}vh)`;

                // Adjust text color based on scroll
                let r = Math.round(255 + (0 - 255) * scrollProgress);
                let g = Math.round(255 + (0 - 255) * scrollProgress);
                let b = Math.round(255 + (0 - 255) * scrollProgress);
                textElements.forEach(el => {
                    el.style.color = `rgb(${r}, ${g}, ${b})`;
                });
            });
        });
    }

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
    function toggleGradient() {
        const leftSide = document.querySelector('.left');
        const rightSide = document.querySelector('.right');

        leftSide.classList.toggle('left-toggled');
        rightSide.classList.toggle('right-toggled');
    }

    // Add click event listener to the new div for toggling gradients
    document.getElementById('toggle-gradient').addEventListener('click', toggleGradient);

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
});

document.addEventListener("DOMContentLoaded", function() {
    const glowText = document.querySelector('.glow-text');
    glowText.style.visibility = 'visible';
    setTimeout(() => glowText.style.visibility = 'hidden', 5000);

    document.getElementById('nextpage').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        const href = this.getAttribute('href'); // Store the URL to navigate to
        const fader = document.getElementById('fader');
        fader.style.visibility = 'visible'; // Make the fader visible
        fader.style.zIndex = 100; // Bring fader to the front to cover the screen
        fader.style.opacity = '1'; // Start the fade effect

        setTimeout(() => {
            window.location = href; // Navigate after the fade effect
        }, 500); // Adjust to match the CSS transition time
    });
});
