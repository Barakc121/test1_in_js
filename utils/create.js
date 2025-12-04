import input from "analiza-sync";
const startTime = new Date().getTime(); 

function player(name=input("what is your name  :")){

    let players =[]
    const men={name:name,times:[]}
    players.push(men)
    return players
}
console.log(player())

function createPlayer(name){
    if(name=== "string" && name !==Number)
        return name
}
// console.log(createPlayer(player))

function addSolveTime(player, seconds){
    const endTime = new Date().getTime();
    const timeTaken = endTime - startTime;
    const avg=timeTaken+ player

    return {timeTaken,avg}
}
console.log(addSolveTime())


function showStats(player){

}
