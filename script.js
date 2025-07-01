
function revealGift() {
  document.getElementById('gift-content').style.display = 'block';
  document.getElementById('gift-button').style.display = 'none';
}

// Confetti animation
window.onload = function() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement('div');
    confetti.innerText = '🎊';
    confetti.style.position = 'absolute';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * 100 + 'vh';
    confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
    confetti.style.animation = 'fall ' + (Math.random() * 3 + 2) + 's linear infinite';
    document.body.appendChild(confetti);
  }
}
