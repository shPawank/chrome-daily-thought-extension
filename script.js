const thoughts = [
    "Believe in yourself and all that you are.",
    "Every day is a second chance.",
    "Dream big. Start small. Act now.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
  ];
  
  const thoughtEl = document.getElementById("thought");
  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  thoughtEl.textContent = randomThought;
  