document.getElementById('calculate').addEventListener('click',function(){
    const perPlayer = document.getElementById('per-player');
    const perPlayerCostString = perPlayer.value;
    const perPlayerCost = parseInt(perPlayerCostString);

    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = perPlayerCost*playerNameArray.length;
    perPlayer.value = "";
})