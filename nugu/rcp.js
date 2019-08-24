let rcp = {}
let alcol = 0
let result = 0
var mod = require("./mod")

function alresult(number, computerChoice){

if(mod.modnumber() == 1){
    if(alcol >= 3){
        if(number == 1){
            result = "후헤헤헹 뭐양... , 저능 "+computerChoice+"! ,주인님이 이겼어요, 한잔 할게용...";
        }else if(number == 2){
            result = "하하하! 주인님이 졌어용!... , 저능 "+computerChoice+"! ,한잔 먹어랏!";
        }else if(number == 3){
            result = "흐극흐극흐극 뭐양... , 저능 "+computerChoice+"! ,주인님이 이겼어요, 한잔 할겡...";
        }else if(number == 4){
            result = "푸헤헤헤헤! 주인님이 졌어용!... , 저능 "+computerChoice+"! ,한잔 원샷 먹어야징!";
        }else if(number == 5){
            result = "라라라라! 주인님이 졌어용!... , 저능 "+computerChoice+"! ,한잔 가랏!";
        }else if(number == 6){
            result = "흥흥 뭐양... , 저능 "+computerChoice+"! ,주인님이 이겼어요, 한잔 먹어야겠당...";
        }else if(number == 7){
            result = "어라라라? 무승부넹.. 한번더하장!";
        }
    }else{
        if(number == 1){
            result = "저는 "+computerChoice+"! ,주인님이 이겼어요, 한잔 할게요!";
        }else if(number == 2){
            result = "저는 "+computerChoice+"! ,제가 이겼어용 헤헷! 한잔 하시죠!";
        }else if(number == 3){
            result = "저는 "+computerChoice+"! ,주인님이 이겼어요, 한잔 원샷 해볼게요!";
        }else if(number == 4){
            result = "저는 "+computerChoice+"! ,제가 이겼어용 헤헷!, 한잔 원샷 가시죠!";
        }else if(number == 5){
            result = "저는 "+computerChoice+"! ,제가 이겼어용 헤헷!, 한잔 달려요!";
        }else if(number == 6){
            result = "저는 "+computerChoice+"! ,주인님이 이겼어요, 한잔 달려볼게요!";
        }else if(number == 7){
            result = "결과는 무승부에요! 다음번에는 제가 이겨요!";
        }
    }
}else{
        if(number == 1){
            result = "저는 "+computerChoice+"! ,주인님이 이겼어요,";
        }else if(number == 2){
            result = "저는 "+computerChoice+"! ,제가 이겼어용 헤헷!";
        }else if(number == 3){
            result = "저는 "+computerChoice+"! ,주인님이 이겼어요,";
        }else if(number == 4){
            result = "저는 "+computerChoice+"! ,제가 이겼어용 헤헷!";
        }else if(number == 5){
            result = "저는 "+computerChoice+"! ,제가 이겼어용 헤헷!";
        }else if(number == 6){
            result = "저는 "+computerChoice+"! ,주인님이 이겼어요,";
        }else if(number == 7){
            result = "결과는 무승부에요! 다음번에는 제가 이겨요!!";
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

        if(alcol >= 3){
            computerChoice = "바윙";
        }else{
            computerChoice = "바위";
        }

    }else if(computerChoice <= 0.67) {
        if(alcol >= 3){
            computerChoice = "보자깅";
        }else{
            computerChoice = "보자기";
        }         
    } else {
        if(alcol >= 3){
            computerChoice = "가윙";
        }else{
            computerChoice = "가위";
        }   
    }
        console.log("Computer: " + computerChoice);

    if (choice1 == computerChoice){
        alresult(7)
        return result
    }

    if (choice1 == "바위"){
        if (computerChoice == "보자기"){ 
            alresult(2,computerChoice)
            return result
        }else{
            rcpmod()
            console.log(alcol);
            alresult(1,computerChoice)
            return result
        }
    }
    if (choice1 == "보자기" || choice1 == "보"){
        if (computerChoice == "가위"){
            alresult(4,computerChoice)
            return result
        }else{
            rcpmod()
            console.log(alcol);
            alresult(3,computerChoice)
            return result
        }
    }
    if (choice1 == "가위"){
        if (computerChoice == "바위"){
            alresult(5,computerChoice)
            return result
        }else {
            rcpmod()
            console.log(alcol);
            alresult(6,computerChoice)
            return result
        }
    }

}

module.exports = rcp;
