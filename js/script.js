  /*----- constants -----*/
  const symbols = ['🥭', '🍑', '🍓', '🍉', '🎰',]
  const payouts = {
    '🥭🥭🥭': 50,
    '🍑🍑🍑': 70,
    '🍓🍓🍓': 80,
    '🍉🍉🍉': 100,
    '🎰🎰🎰': 500
  };
  
  const startingCredits = 1000;
  const spinCost = 25;

  /*----- state variables -----*/
  let credits = startingCredits;
  let reel1, reel2, reel3;
  /*----- cached elements  -----*/
  const creditsEl = document.querySelector('#credits');
  const betEl = document.querySelector('#bet');
  const reel1El = document.querySelector('#reel1');
  const reel2El = document.querySelector('#reel2');
  const reel3El = document.querySelector('#reel3');
  const messageEl = document.querySelector('#message');
  

  /*----- event listeners -----*/
  document.querySelector('#bet').addEventListener('click', initSpin);
  document.querySelector('#replay').addEventListener('click', handleReset);

  /*----- functions -----*/
  init()

  function init() {
    credits = startingCredits;
    render();
  }


  function render() {
  creditsEl.innerHTML = credits;
  betEl.innerHTML = spinCost;
  reel1El.textContent = reel1;
  reel2El.textContent = reel2;
  reel3El.textContent = reel3;
  messageEl.innerHTML = '';
  }
  
  
  function initSpin() {
    if (credits < spinCost) {
      messageEl.innerHTML = '😅 Oh no! You have no credits left, HIT replay to play ▶️ again ! ';
      return;
  }
  
  credits -= spinCost;
  const result = spinReels();
  const payout = calculatePayout(result);
  credits += payout;
  render();

  if (credits <= 0) {
    messageEl.innerHTML = 'Game Over! You have no credits left 😣';
  } else if (payout > 0) {
    messageEl.innerHTML = `You won ${payout} credits!`;
  } else {
    messageEl.innerHTML = 'Want to play 🎮▶️👾? Gotta pay 🤑!';
  }
}

  function handleReset() {
    credits = startingCredits;
    render();
  }


  function spinReels() {
    reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    reel3 = symbols[Math.floor(Math.random() * symbols.length)];
    return reel1 + reel2 + reel3;
  }
  

  function calculatePayout(result) {
    return payouts[result] || 0;
  }
  
