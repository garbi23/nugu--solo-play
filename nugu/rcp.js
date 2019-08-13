var computerChoice = Math.random();
let rcp = {}

rcp.rcpgmae = function(choice1){

    if (computerChoice < 0.34) {
        computerChoice = "바위";

    }else if(computerChoice <= 0.67) {
        computerChoice = "보";

    } else {
        computerChoice = "가위";
    }
        console.log("Computer: " + computerChoice);

    if (choice1 === computerChoice){
        return "저는" + computerChoice + "결과는 무승부에요!";
    }

        if (choice1 === "바위"){
            if (computerChoice === "가위"){
                return "저는" + computerChoice +"제가 이겼어용 헤헷!";
        }else {
            return "저는" + computerChoice +"주인님이 이겼어요, 유,유,유";
        }
    }

    if (choice1 === "보자기"){
        if (computerChoice === "가위"){
            return "저는" + computerChoice +"제가 이겼어용 헤헷!";
        }else {
            return "저는" + computerChoice +"주인님이 이겼어요, 유,유,유";
        }
    }

    if (choice1 === "가위"){
        if (computerChoice === "바위"){
            return "저는" + computerChoice + "제가 이겼어용 헤헷!";
        }else {
            return "저는" + computerChoice + "주인님이 이겼어요, 유,유,유";
        }
    }
}

module.exports = rcp;
