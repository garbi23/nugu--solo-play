let numchoice = 0
let ud = {}
let result = 0


ud.udoption = function(num){
    numchoice = (Math.random() * (num + 1))
    console.log(numchoice)
}

ud.udgame = function(num){
    
    if(num == numchoice){
        result = numchoice + "!, 축하해요! 맞췄어요!"
    }else if(num > numchoice){
        result = "다운"
    }else{
        result = "업"
    }

    return result


}

module.exports = ud;
