document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        column.addEventListener('mousemove', function(e) {
            const rect = column.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const width = column.offsetWidth;
            const height = column.offsetHeight;
            // Adjust displacement calculation for a more subtle movement effect
            const deltaX = (mouseX - width / 2) / 20; // Reduced for subtlety
            const deltaY = (mouseY - height / 2) / 20; // Reduced for subtlety
            // Reduced blur for a sharper shadow
            const blurRadius = 5; // Less blur for a sharper effect
            let color;

            // Adjusting the color opacity for higher opacity shadows
            if (column.classList.contains('dark-mode')) {
                color = 'rgba(255, 255, 255, 1)'; // Bright yellow with higher opacity
            } else {
                color = 'rgba(0, 0, 0, 1)'; // Black with higher opacity
            }

            // Apply the calculated shadow effect
            const textShadow = `${deltaX}px ${deltaY}px ${blurRadius}px ${color}`;
            column.style.textShadow = textShadow;
        });

        column.addEventListener('click', function() {
            // Toggle between dark and light mode on click
            if (column.classList.contains('dark-mode')) {
                column.classList.replace('dark-mode', 'light-mode');
                column.style.color = 'black';
                // Adjusting the shadow for the clicked state
                column.style.textShadow = '0 0 10px rgba(0, 0, 0, 1)';
            } else {
                column.classList.replace('light-mode', 'dark-mode');
                column.style.color = 'lightyellow';
                // Adjusting the shadow for the clicked state
                column.style.textShadow = '0 0 10px rgba(255, 255, 255, 1)';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const glowText = document.querySelector('.glow-text');
    glowText.style.visibility = 'visible';
    setTimeout(() => glowText.style.visibility = 'hidden', 5000);
});
  