# sunsetVibe_SlottoMachineGame

Pseudo Code for # sunsetVibe_SlottoMachineGame

1. I want my game to have three reels, each reel should have five symbols, 🥭', '🍑', '🍓', '🍉', '🎰' Payouts: 3 mangos = 50 credits, 3 peaches = 70 credits, 3 strawberries = 80 credits, 3 watermelons = 100 3 sevens = 500 credits. Player starts with a credit balance of 1000 credits, each spin is 25 credits.
2. Generate a random combination for each reel, generate a random number between 1 and the number of symbols. Set the reel to the symbol corresponding to the random number.
3. Check the result , check if the player has won anything based on the game logic defined in step 1.
4. Deduct the bet of 25 credits from the players credit balance(1000 credits).
5. Repeat the process , ask the player if they want to play again. If yes go back to step 2. If no end the game.
