var runumchoice = 0
let ru = {}
let result = 0
let ruson = 1
let now = 0
let nugunow = 0
let nowturn = 0
var mod = require("./mod")
let drink = '한잔! 원샷 가시죠! 술이 들어간다 술이 들어간다~! 쭈우욱 쭉 쭉,  쭈우욱 쭈욱 쭉 '
let aldrink = '원샷 가자! 마셔 마셩 마셩 하핳'
let alcol = 0


ru.ruchoice = function(num){
    now = 0
    nugunow = 0
    runumchoice = (Math.floor(Math.random() * num) + 1)
    console.log(runumchoice)
    ruson = 1
    return runumchoice
}

function alcoset(number){
    if(alcol >= 2){
        if(number == 1){
            result = "하하하하하! 주인님이 당첨 뎄서요옹!, 원샷 가장! 마셔 마셩 마셩 , 다쉬 할려명, 장전 해르아"
        }else if(number == 2){
            result = "힝... 주인님이 안걸렸엉 훙흥"
        }else if(number == 3){
            result = "헤헤헤헤헤 나는 안걸렸지롱~"
        }else if(number == 4){
            result = "후헤헤헹 뭐양... 내가 걸렸엉... 후흐흐... 원샷 할게용.."
        }
    }else{
        if(number == 1){
            result = "빵야!, 당첨 되셨습니다! "+ drink +" ,다시 하실려면 장전 해주세요!"
        }else if(number == 2){
            result = "휴... 주인님 차례는 총알이 없어요!"
        }else if(number == 3){
            result = "휴... 제가 당겼더니 총알이 없네요!"
        }else if(number == 4){
            result = "으엑!.... 제가 당첨 됬네요! 한잔 마실게요! 크으.. 좋다!,다시 하실려면 장전 해주세요!"
        }
    }
}


ru.rugame = function(){
    if(mod.modnumber() == 1){
        if(nowturn == 0 && now == runumchoice){
            alcoset(1)
            ruson = 0
        }else if(nowturn == 0 && now != runumchoice){
            now++
            alcoset(2)
            ruson = 1
        }else if(nowturn == 1 && nugunow != runumchoice){
            nugunow++
            alcoset(3)
            ruson = 1
        }else if(nowturn == 1 && nugunow == runumchoice){
            alcoset(4)
            ruson = 0
            alcol++
        }
    }else{
        now++
        if(now == runumchoice){
            result = "빵야!, 당첨 되셨습니다! 다시 하실려면 장전 해주세요!"
            ruson = 0
        }else{
            result = "휴...., 총알이 없어요!"
            ruson = 1
        }
    }
    return result


}

ru.reson = function(){
    return ruson
}

module.exports = ru;
