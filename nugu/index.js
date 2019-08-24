const uuid = require('uuid').v4
const _ = require('lodash')
const { DOMAIN } = require('../config')
let numbertwo = 0
var rcp = require("./rcp")
var ru = require("./rusian")
var coin = require("./coin")
var ud = require("./ud")
var mod = require("./mod")
var soil = require("./rankdb")
let gamekind = 0
let gameop = 0
let rcpresult = 0;
let udch = 0;
let udrand = 0;
let drink = '헤헷 제가 이겼어요! 한잔! 원샷 가시죠! 술이 들어간다 술이 들어간다~! 쭈우욱 쭉 쭉,  쭈우욱 쭈욱 쭉 '
let time = 0
var intervalObj = 0

function gameoff(){
  clearInterval(intervalObj)
  time = 0
  gamekind = 0
  gameop = 0
  ru.resetalcol()
  rcp.resetal()
}

function threegameon(){
  let answer = 0
  if(mod.modnumber() == 2){
    answer = '삼육구 랭킹 모드를 시작합니다! 최대한 틀리지 않고 맞추어 보세요!, 삼육구 게임을 시작합니다!' +
    ', 숫자 1 ,짝수는 짝 이라는 형태로 말해주세요! 게임시작합니다! 삼,육구, 삼육구 , 삼,육구 ,삼육구! , 1 !'
    intervalObj = setInterval(() => {time++}, 1000);
  }else{
    answer = '삼육구 게임을 시작합니다!' +
    ', 숫자 1 ,짝수는 짝 이라는 형태로 말해주세요! 게임시작합니다! 삼,육구, 삼육구 , 삼,육구 ,삼육구! , 1 !'
  }
  gamekind = 1
  numbertwo = 0
  npkResponse.setOutputtnson(answer)
}

function threesixnine(numberone){
  numbertwo = numbertwo + 2
  let number = 0
  if(numberone == '짝' || numberone == '짝짝'){
    number = numbertwo + 1
  }else{
    number = numberone + 1
  }
  let units = number%10
  let tens = parseInt(number/10)
  let isUnitsClap = (units == 3 || units == 6 || units == 9)
  let isTensClap = (tens == 3 || tens == 6 || tens == 9)
  let unitst = numbertwo%10
  let tenst = parseInt(numbertwo/10)
  let isUnitsClapt = (unitst == 3 || unitst == 6 || unitst == 9)
  let isTensClapt = (tenst == 3 || tenst == 6 || tenst == 9)

  if(isTensClap && isUnitsClap){
    number = '짝짝'
    console.log('짝짝')
  } else if(isTensClap || isUnitsClap) {
    number = '짝'
    console.log('짝')
  } else {
    console.log(number)
  }
if(gamekind == 1){
  if(isTensClapt && isUnitsClapt){
    console.log('사용자 짝짝')
    if(numberone == '짝짝'){
      console.log('사용자' + numbertwo)
    }else{
      if(mod.modnumber() == 1){
        number = drink
    
      }else if(mod.modnumber() == 2){
        let nownumber = numbertwo - 1
        let score = nownumber*100 - time*10
        soil.value(score)
        number = '총 ' + nownumber  +',번 까지,' + time + ',초로 삼육구를 클리어 하셨습니다! 총 점수는. '
        + score +',점으로 랭킹은 '+ soil.bring() +',위 입니다! 축하합니다!'
        clearInterval(intervalObj)
        time = 0
      }else{
        number = '헤헷 제가 이겼어요!'
      }
      gamekind = 0
      numbertwo = 0
    }
  } else if(isTensClapt || isUnitsClapt) {
      console.log('사용자 짝')
      if(numberone == '짝'){
        console.log('사용자' + numbertwo)
       }else{
        if(mod.modnumber() == 1){
          number = drink
      
        }else if(mod.modnumber() == 2){
          let nownumber = numbertwo - 1
          let score = nownumber*100 - time*10
          soil.value(score)
          number = '총 ' + nownumber  +',번 까지,' + time + ',초로 삼육구를 클리어 하셨습니다! 총 점수는. '
          + score +',점으로 랭킹은 '+ soil.bring() +',위 입니다! 축하합니다!'
          clearInterval(intervalObj)
          time = 0
        }else{
          number = '헤헷 제가 이겼어요!'
        }
        gamekind = 0
        numbertwo = 0
    }
  } else if (numberone == numbertwo){
    console.log('사용자' + numbertwo)
  } else {
    if(mod.modnumber() == 1){
      number = drink
  
    }else if(mod.modnumber() == 2){
      let nownumber = numbertwo - 1
      let score = nownumber*100 - time*10
      soil.value(score)
      number = '총 ' + nownumber  +',번 까지,' + time + ',초로 삼육구를 클리어 하셨습니다! 총 점수는. '
      + score +',점으로 랭킹은 '+ soil.bring() +',위 입니다! 축하합니다!'
      clearInterval(intervalObj)
      time = 0
    }else{
      number = '헤헷 제가 이겼어요!'
    }
    gamekind = 0
    numbertwo = 0
  }  
}else{
  number = "삼,육,구 , 게임이 시작하지 않았습니다."
  }
  return {number, numbertwo}
}


class NPKRequest {
  constructor (httpReq) {
    this.context = httpReq.body.context
    this.action = httpReq.body.action
    console.log(`NPKRequest: ${JSON.stringify(this.context)}, ${JSON.stringify(this.action)}`)
  }

  do(npkResponse) {
    this.actionRequest(npkResponse)
  }

  actionRequest(npkResponse) {
    console.log('actionRequest')
    console.dir(this.action)

    const actionName = this.action.actionName
    const parameters = this.action.parameters
  switch (actionName) {
    case 'NUMBER_ACTION': //특정 액션 작동하는 부분
         let numberone = 1
      if (!!parameters) {
        const numCountSlot = parameters.numberone
        if (parameters.length != 0 && numCountSlot) {
          if(isNaN(numCountSlot.value) == true){
            numberone = numCountSlot.value
            console.log(numberone)
          }else{
            numberone = parseInt(numCountSlot.value)
          }
        }
      }
      const numreset = threesixnine(numberone)
      npkResponse.setOutputParameters(numreset)
    break  
    case 'CLAP_ACTION': //특정 액션 작동하는 부분
         let clapcount = 1
      if (!!parameters) {

        const numCountSlot = parameters.CLAP_COUNT
        if (parameters.length != 0 && numCountSlot) {
          {
            if(parseInt(numCountSlot.value) == 1){
              clapcount = '짝'
            }else{
              clapcount = '짝짝'
            }
            console.log(clapcount)
          }
        }
      }
      const clapnum = threesixnine(clapcount)
      npkResponse.setOutputclapPar(clapnum)
    break            
    case 'GAME_THREENINESIX':
      gameoff()
      threegameon()
    break  
    case 'GAMEACTION_STOP':
      npkResponse.setOutputgamevalue()
    break     
    case 'GAMEACTION_STOP_INSERT':
      gameoff()
    break
    case 'GAME_RCP':  
      gameoff()
      gamekind = 2
    break
    case 'GAME_UPDOWN':  
      gameoff()
      gamekind = 4
    break
    case 'UPDOWN_NEXT_OP':  
      let uno = 0;
        if (!!parameters) {
          const rcpkind = parameters.UPDOWN_NUM1
          if (parameters.length != 0 && rcpkind) {
            if(gamekind == 4){
              gameop = 1
              udch = Math.floor(rcpkind.value/10 + 1);
              udrand = ud.udoption(rcpkind.value);
              uno  = "1 에서 " + rcpkind.value +" 까지 업다운 설정이 완료되었습니다, 총기회는 "+ udch 
              + "번 입니다, 업다운 숫자 형태로 말해주세요!, 업다운 시작합니다!, 숫자를 말해주세요!"
              console.log(rcpkind.value)
            }else{
              uno = "업다운 게임이 시작하지 않았어요!";
            }
          }
        }
        npkResponse.setOutputuno(uno);
    break   
    case 'UPDOWN_NEXT_NUM':  
      let unn = 0;
        if (!!parameters) {
          const rcpkind = parameters.UPDOWN_NUM1
          if (parameters.length != 0 && rcpkind) {
            if(gameop == 1){
              if(udch != 0){
              unn = ud.udgame(rcpkind.value);
              udch--;
              }else{
               unn = "기회를 다 사용하셨어요!, 정답은" +udrand+ "였어요! 다시 하실려면 업다운 설정을 해주세요!";
              }
            }else{
               unn = "업다운 설정이되지 않았어요!";
            }
          }
        }
        npkResponse.setOutputunn(unn);
    break              
    case 'RCP_ANSWER':  
    if (!!parameters) {
      const rcpkind = parameters.RCP_RESULT
      if (parameters.length != 0 && rcpkind) {
        if(gamekind == 2){
          rcpresult = rcp.rcpgmae(rcpkind.value);
          console.log(rcpkind)
        }else{
          rcpresult = "가위바위보 게임이 시작하지 않았어요!";
        }
      }
    }
    npkResponse.setOutputrcpanswer();    
    break
    case 'GAME_COIN': 
      gameoff()
      gamekind = 3 
    break
    case 'COIN_THROW': 
      let coinresult;
      if(gamekind == 3){
        coinresult = "동전을 던졌습니다! 결과는?,,,, 짜잔!, " + coin.coingame() +", 입니다!"
        
      }else{
        coinresult = "코인던지기 게임이 시작되지 않았습니다."
      }

    npkResponse.setOutputcointhrow(coinresult)
    break 
    case 'GAME_RU': 
      gameoff()
      gamekind = 5
    break
    case 'RU_OP':  
      let ruo = 0;
        if (!!parameters) {
          const rcpkind = parameters.RU_NUMBER
          if (parameters.length != 0 && rcpkind) {
            if(gamekind == 5){
              let numva = 0
              numva = parseInt(rcpkind.value)
              gameop = 2
              ru.ruchoice(numva)
              ruo  = "러시안 룰렛. 총알 기회,"+ rcpkind.value + ", 으로 설정 되었습니다."+ 
              "게임을 시작합니다.! 당겨, 라고 말해주세요!"
              console.log(numva)
            }else{
              ruo = "러시안룰렛 게임이 시작하지 않았어요!";
            }
          }
        }
        npkResponse.setOutputruop(ruo);
    break
    case 'RU_SHOOT':  
      let run = 0;
            if(gameop == 2 && ru.reson() == 1){
              run = ru.rugame()
            }else{
              run = "러시안룰렛이 장전되지 않았어요!";
            }
        npkResponse.setOutputrushoot(run);
    break     
    case 'MOD_SOLO_DRINK':  
      mod.modselect(1)
    break    
    case 'MOD_RANKING_MOD':  
      mod.modselect(2)
    break      
    case 'MOD_BASIC_MOD':  
      mod.modselect(0)
    break      
    }                                   
  }
}


class NPKResponse {
  constructor () {
    console.log('NPKResponse constructor')

    this.version = '2.0'
    this.resultCode = 'OK'
    this.output = {}
    this.directives = []
  }
  setOutputParameters(numreset) {

    this.output = {
      number: numreset.number,
      numbertwo: numreset.numbertwo,
    }
  }
  setOutputgamevalue(){
    this.output = {
      GAME_VALUE: gamekind,
    }
  }
  setOutputclapPar(clapnum){
    this.output = {
      clapnumber: clapnum.number,
    }
  }
  setOutputrcpanswer(){
    this.output = {
      brcpresult: rcpresult,
    } 
  }           
  setOutputuno(soranswer){
    this.output = {
      udgame: soranswer,
    } 
  }     
  setOutputunn(soranswer){
    this.output = {
      udresult: soranswer,
    } 
  }
  setOutputcointhrow(soranswer){
    this.output = {
      coinresult: soranswer,
    } 
  }
  setOutputruop(soranswer){
    this.output = {
      ruoption: soranswer,
    } 
  }
  setOutputrushoot(soranswer){
    this.output = {
      ruresult: soranswer,
    } 
  }
  setOutputtnson(soranswer){
    this.output = {
      gameon: soranswer,
    } 
  }              
}
  const nuguReq = function (httpReq, httpRes, next) {
    npkResponse = new NPKResponse()
    npkRequest = new NPKRequest(httpReq)
    npkRequest.do(npkResponse)
    console.log(`NPKResponse: ${JSON.stringify(npkResponse)}`)
    return httpRes.send(npkResponse)
  };
  
  module.exports = nuguReq;



  
