const playerNameArray = [];
function display(playerList){
    const player = document.getElementById('player-list');
   for(let i=0;i<playerList.length;i++){
    console.log(playerList[i]);
   }

}
function addNameToList(feature){
    playerName = feature.parentNode.parentNode.children[0].innerText;
    playerNameArray.push(playerName);
    display(playerNameArray);
}
