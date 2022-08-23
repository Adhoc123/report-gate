const playerNameArray = [];
function display(playerList){
    const player = document.getElementById('player-list');
    player.innerHTML = "";
    console.log(playerNameArray.length);
    for(let i=0;i<playerList.length;i++){
        if(i==5){
            alert("You can't add more than five players");
            return;
        }
    const name = playerList[i];
    const li = document.createElement('li');
    li.innerHTML = name;
    player.appendChild(li);
   }
   return playerNameArray.length;
}
function addNameToList(feature){
    playerName = feature.parentNode.parentNode.children[0].innerText;
    playerNameArray.push(playerName);
    if(playerNameArray.length<=5){
         feature.disabled = true;
    }
    display(playerNameArray);
}
//console.log(playerNameArray.length);