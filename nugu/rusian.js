var runumchoice = 0
let ru = {}
let result = 0
let now = 0



ru.ruchoice = function(num){
    now = 0
    runumchoice = (Math.floor(Math.random() * num) + 1)
    console.log(runumchoice)
    return runumchoice
}

ru.rugame = function(){
    
    now++

    if(now == runumchoice){
        result = "빵,야!, 당첨 되셨습니다!"
    }else{
        result = "휴...., 총알이 없어요!"
    }

    return result


}

module.exports = ru;
