var computerChoice = Math.random();
let rcp = {}
var rcpon = require("./index");
var rcponresult = 0;

rcp.rcpgmae = function(choice1){

    rcponresult = rcpon.rcpcallon();

if(rcponresult == 1){
    if (computerChoice < 0.34) {
        computerChoice = "바위";

    }else if(computerChoice <= 0.67) {
        computerChoice = "보";

    } else {
        computerChoice = "가위";
    }
        console.log("Computer: " + computerChoice);

    if (choice1 === computerChoice){
        return "결과는 무승부!";
    }

        if (choice1 === "바위"){
            if (computerChoice === "가위"){
                return "바위승";
        }else {
            return "보자기승";
        }
    }

    if (choice1 === "보자기"){
        if (computerChoice === "가위"){
            return "가위승";
        }else {
            return "보자기승";
        }
    }

    if (choice1 === "가위"){
        if (computerChoice === "바위"){
            return "제가 이겼어용 헤헷!";
        }else {
            return "주인님이 이겼어요, 유,유,유";
        }
    }
}else{
    return "가위바위보 게임이 시작되지 않았습니다."
}
}

module.exports = rcp;
