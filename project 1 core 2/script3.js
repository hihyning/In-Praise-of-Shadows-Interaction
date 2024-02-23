document.getElementById('toggleText').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", function() {
    // Select all .text elements within the .text-container
    var texts = document.querySelectorAll('.text-container .text');

    texts.forEach(function(text) {
      // Randomize word spacing
      var randomWordSpacing = Math.random() * 50; // Random number between 0 and 10px

      // Apply random word spacing to each .text element
      text.style.wordSpacing = randomWordSpacing + 'px';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('toggleText');
    var colors = ['lightyellow', 'black']; // Corrected list of colors to toggle between
    var currentColorIndex = 0; // Start with the first color
  
    button.addEventListener('click', function() {
      currentColorIndex++; // Move to the next color
      if (currentColorIndex >= colors.length) {
        currentColorIndex = 0; // Reset to first color if at the end
      }
      // If you also want to change the text color for better contrast:
      button.style.color = currentColorIndex === 0 ? 'black' : 'lightyellow'; // Toggle text color based on background
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const glowText = document.querySelector('.glow-text');
    glowText.style.visibility = 'visible';
    setTimeout(() => glowText.style.visibility = 'hidden', 5000);
});
  