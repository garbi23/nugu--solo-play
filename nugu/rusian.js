var runumchoice = 0
let ru = {}
let result = 0
let ruson = 1;
let now = 0



ru.ruchoice = function(num){
    now = 0
    runumchoice = (Math.floor(Math.random() * num) + 1)
    console.log(runumchoice)
    ruson = 1
    return runumchoice
}

ru.rugame = function(){
    now++

    if(now == runumchoice){
        result = "빵야!, 당첨 되셨습니다! 다시 하실려면 장전 해주세요!"
        ruson = 0
    }else{
        result = "휴...., 총알이 없어요!"
        ruson = 1
    }

    return result


}

ru.reson = function(){
    return ruson
}

module.exports = ru;
