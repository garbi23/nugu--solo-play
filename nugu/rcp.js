let rcp = {}
let alcol = 0
let result = 0
var mod = require("./mod")

function alresult(number){
    if(alcol >= 3){
        if(number == 1){
            result = "후헤헤헹 뭐양... , 저능 가윙! ,주인님이 이겼어요, 한잔 할게용...";
        }else if(number == 2){
            result = "하하하하하! 주인님이 졌어용!... , 저능 가윙! ,한잔 먹어랏!";
        }else if(number == 3){
            result = "흐극흐극흐극 뭐양... , 저능 가윙! ,주인님이 이겼어요, 한잔 할겡...";
        }else if(number == 4){
            result = "푸헤헤헤헤! 주인님이 졌어용!... , 저능 가윙! ,한잔 원샷 먹어야징!";
        }else if(number == 5){
            result = "라라라라라라! 주인님이 졌어용!... , 저능 바윙! ,한잔 가랏!";
        }else if(number == 6){
            result = "흥흥흥흥 뭐양... , 저능 바윙! ,주인님이 이겼어요, 한잔 먹어야겠당...";
        }else if(number == 7){
            result = "어라라라? 무승부넹.. 한번더하장!";
        }
    }else{
        if(number == 1){
            result = "저는 가위! ,주인님이 이겼어요,";
        }else if(number == 2){
            result = "저는 가위! ,제가 이겼어용 헤헷!";
        }else if(number == 3){
            result = "저는 가위! ,주인님이 이겼어요,";
        }else if(number == 4){
            result = "저는 가위! ,제가 이겼어용 헤헷!";
        }else if(number == 5){
            result = "저는 바위! ,제가 이겼어용 헤헷!";
        }else if(number == 6){
            result = "저는 바위! ,주인님이 이겼어요,";
        }else if(number == 7){
            result = "결과는 무승부에요! 다음번에는 이길거에요!";
        }
    }

}

function rcpmod(){
    if(mod.modnumber() == 1){
        alcol++
    }
}


rcp.resetal = function(){
    alcol = 0
}


rcp.rcpgmae = function(choice1){
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "바위";

    }else if(computerChoice <= 0.67) {
        computerChoice = "보자기";

    } else {
        computerChoice = "가위";
    }
        console.log("Computer: " + computerChoice);

    if (choice1 == computerChoice){
        alresult(7)
        return result
    }

    if (choice1 == "바위"){
        if (computerChoice == "가위"){ 
            rcpmod()
            alresult(1)
            return result
        }else{
            alresult(2)
            return result
        }
    }
    if (choice1 == "보자기" || choice1 == "보"){
        if (computerChoice == "가위"){
            rcpmod()
            alresult(3)
            return result
        }else{
            alresult(4)
            return result
        }
    }
    if (choice1 == "가위"){
        if (computerChoice == "바위"){
            alresult(5)
            return result
        }else {
            rcpmod()
            alresult(6)
            return result
        }
    }

}

module.exports = rcp;
