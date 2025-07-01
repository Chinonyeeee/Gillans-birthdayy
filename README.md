<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Happy Birthday Gillian</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      background: linear-gradient(to bottom, #0d0d0d, #1a1a1a);
      color: #f5f5f5;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* Gift section styles */
    .gift-section {
      text-align: center;
      padding: 50px 20px;
    }
    #gift-button {
      background: #ff6b6b;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 30px;
    }
    #gift-button:hover {
      background: #ff5252;
      transform: scale(1.05);
    }
    #gift-content {
      display: none;
    }
    #gift-content.show {
      display: block;
    }

    /* Birthday card styles */
    .center {
      text-align: center;
      padding: 100px 20px 40px;
    }
    .countdown {
      font-size: 3rem;
      animation: fadeIn 2s ease forwards;
    }
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .fireworks {
      font-size: 1.2rem;
      margin-top: 10px;
      animation: float 1.5s infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .message, .wish-list, .fun-facts, .dream {
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
    }
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 10px;
      text-align: center;
      font-weight: 600;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      margin: 10px 0;
    }
    audio {
      display: block;
      margin: 20px auto;
    }
  </style>
</head>
<body>
  <div class="gift-section">
    <button id="gift-button" onclick="revealGift()" aria-expanded="false">Click to Open Your Gift 🎁</button>
    <div id="gift-content">
      <div class="center">
        <div class="countdown" id="countdown">0...</div>
        <div class="fireworks">🎈🎇🎂</div>
      </div>

      <div class="message">
        <div class="section-title">Dear Gillian,</div>
        <p>
          I hope this new chapter of your life brings you all the happiness, love, and peace you truly deserve.
          I wish you prosperity, wisdom, and good health — and may you excel in everything your heart sets out to do.
          May God's peace and comfort surround you, now and always.
        </p>
      </div>

      <div class="wish-list">
        <div class="section-title">19 Things I Wish for You</div>
        <ul>
          <li>I wish you strength, like Van Dijk holding the line.</li>
          <li>I wish you loyalty, like Trent with the badge on his chest.</li>
          <li>I wish you passion, like Anfield on a derby night.</li>
          <li>I wish you creativity, like Bobby Firmino's flicks.</li>
          <li>I wish you joy, the kind that scoring a last-minute winner brings.</li>
          <li>I wish you a heart that forgives quickly but never settles for less.</li>
          <li>I wish you the calm of Alisson when the world feels fast.</li>
          <li>I wish you focus, like Salah at the edge of the box.</li>
          <li>I wish you belief — You'll Never Walk Alone, ever.</li>
          <li>I wish you love that's safe, steady, and silly sometimes.</li>
          <li>I wish you friendships that feel like home.</li>
          <li>I wish you clarity, even when life throws fog on the pitch.</li>
          <li>I wish you peace in every room you walk into.</li>
          <li>I wish you the courage to say no to what doesn't serve your spirit.</li>
          <li>I wish you giggles in chaos and calm in confusion.</li>
          <li>I wish you art, music, and midnight rants about nothing.</li>
          <li>I wish you enough tears to keep your heart tender.</li>
          <li>I wish you wins, and also the grace to rise from losses.</li>
          <li>I wish you a life so bright, even Klopp would pause and smile.</li>
        </ul>
      </div>

      <div class="dream">
        <div class="section-title">Your Dream</div>
        <p>
          May you become the coding master you dream to be. A mind like yours, creative and kind, deserves to build things the world hasn't even imagined yet.
        </p>
      </div>

      <div class="fun-facts">
        <div class="section-title">Fun Facts About You</div>
        <ul>
          <li>He has a heart of gold 💛</li>
          <li>He makes people feel safe just by being himself.</li>
          <li>He loves football — but he's not just a fan, he's a thinker.</li>
          <li>He's the kind of guy who remembers the little things.</li>
          <li>He might lowkey be the main character in every room he walks into.</li>
        </ul>
      </div>

      <audio controls>
        <source src="ynwa.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>

  <script>
    // Gift reveal function
    function revealGift() {
      const content = document.getElementById('gift-content');
      const button = document.getElementById('gift-button');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      content.classList.toggle('show', !isExpanded);
      button.setAttribute('aria-expanded', !isExpanded);
      button.textContent = isExpanded ? "Click to Open Your Gift 🎁" : "Close Gift 🎁";
    }

    // Countdown Animation
    const countdown = document.getElementById('countdown');
    let numbers = ['0...', '1...', '2...', 'Happy Birthday Gillian 🎉🎂'];
    let i = 0;
    const interval = setInterval(() => {
      countdown.textContent = numbers[i];
      i++;
      if (i >= numbers.length) clearInterval(interval);
    }, 1000);
  </script>
</body>
</html>
