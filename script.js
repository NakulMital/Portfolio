const subtitleElement = document.getElementById('subtitle');
const subtext = "Student.   Developer.   Human."; // Replace with your actual subtext (including spaces)

function revealWords() {
  const words = subtext.split(' '); // Split on spaces

  let wordIndex = 0;

  function revealNextWord() {
    if (wordIndex >= words.length) return; // Exit if all words revealed

    const currentWordElement = document.createElement('span');
    currentWordElement.textContent = words[wordIndex];
    subtitleElement.appendChild(currentWordElement);

    wordIndex++;

    setTimeout(revealNextWord, 5000); // Adjust delay between words (optional)
  }

  revealNextWord();
}

revealWords();
