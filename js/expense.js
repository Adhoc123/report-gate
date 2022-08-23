let perPlayerCost;
function getInputFieldValue(inputId){
    const field = document.getElementById(inputId);
    const fieldString = field.value;
    const fieldCost = parseInt(fieldString);
    field.value = "";
    return fieldCost;
}

function getPlayerExpense(){
    const playerExpense = perPlayerCost*playerNameArray.length;
    return playerExpense;
}

document.getElementById('calculate').addEventListener('click',function(){ 
    perPlayerCost = getInputFieldValue('per-player');
    if(isNaN(perPlayerCost)){
        alert('Provide interger values to calculate');
        return;
    }
    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = getPlayerExpense();
})

document.getElementById('calculate-total').addEventListener('click',function(){
    
    const managerCost = getInputFieldValue('manager');
    const coachCost = getInputFieldValue('coach');
    if(isNaN(managerCost && coachCost && getPlayerExpense())){
        alert('Provide values to calculate');
        return;
    }
    const total = document.getElementById('total');
    total.innerText = managerCost + coachCost + getPlayerExpense();
})