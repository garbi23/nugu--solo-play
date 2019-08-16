let coin = {}

coin.coingame = function(){
    var computerChoice = Math.random();

    if (computerChoice <= 0.5) {
        return "앞,면";
    } else {
        return "뒷,면";
    }
}

module.exports = coin;
