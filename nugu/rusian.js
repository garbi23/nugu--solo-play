var numchoice = 0
let ru = {}
let result = 0
let num = 0;


ru.ruchoice = function(num){
    numchoice = (Math.floor(Math.random() * num) + 1)
    console.log(numchoice)
    return numchoice
}

ru.rugame = function(){
    
    num++

    if(num == numchoice){
        result = "빵,야!, 당첨 되셨습니다!"
    }else{
        result = "휴...., 총알이 없어요!"
    }

    return result


}

module.exports = ru;
