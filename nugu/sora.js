var computerChoice = Math.random();
let sora = {}

sora.soragame = function(){

    if (computerChoice < 0.34) {
        return computerChoice = "아니,안,돼";

    }else if(computerChoice <= 0.67) {
        return computerChoice = "응,돼";

    } else {
        return computerChoice = "몰,라";
    }
}

module.exports = sora;
