const uuid = require('uuid').v4
const _ = require('lodash')
const { DOMAIN } = require('../config')
let gameon = 0
let numbertwo = 0
var soil = require("./db");
var rcp = require("./rcp");
let srvalue = soil.value();
let srstat = soil.stat();
let temp = soil.tempvalue();
let humi = soil.humivalue();
let rcpresult = 0;
let soilkind = 0;
let rcpon = 0;
let rcpcall = {}

function threegameon(){
  gameon = 1
  numbertwo = 0
  console.log('-----------삼육구 게임시작-----------')
  console.log(gameon)
}


function gameoff(){
  rcpon = 0
  gameon = 0
  numbertwo = 0
  console.log('-----------게임종료-----------')
  console.log(gameon)
}


rcpcall.rcpcallon = function(){
  return rcpon
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
if(gameon == 1){
  if(isTensClapt && isUnitsClapt){
    console.log('사용자 짝짝')
    if(numberone == '짝짝'){
      console.log('사용자' + numbertwo)
      return {number, numbertwo}
    }else{
      console.log('틀림')
      number = '헤헷 제가 이겼어용!'
      gameoff()
      return {number, numbertwo}
    }
  } else if(isTensClapt || isUnitsClapt) {
      console.log('사용자 짝')
      if(numberone == '짝'){
        console.log('사용자' + numbertwo)
        return {number, numbertwo}
       }else{
         console.log('틀림')
         number = '헤헷 제가 이겼어용!'
         numbertwo = 0
         gameoff()
         return {number, numbertwo}
    }
  } else if (numberone == numbertwo){
    console.log('사용자' + numbertwo)
    return {number, numbertwo}
  } else {
    console.log('틀림')
    number = '헤헷 제가 이겼어용!'
    numbertwo = 0
    gameoff()
    return {number, numbertwo}
  }  
}else{
  gameon = 0
  number = "삼,육,구 , 게임이 시작하지 않았습니다."
  return {number, numbertwo}
}
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
        threegameon()
        npkResponse.setOutputgamevalue()
    break  
    case 'GAMEACTION_STOP':
        npkResponse.setOutputgamevalue()
    break     
    case 'GAMEACTION_STOP_INSERT':
        gameoff()
    break
    case 'WATER_ALLSTAT':  
    if (!!parameters) {
      const kindslot = parameters.WATER_COUNT
      if (parameters.length != 0 && kindslot) {
        if(isNaN(kindslot.value) == true){
          soilkind = kindslot.value
          console.log(kindslot)
        }else{
          soilkind = parseInt(kindslot.value)
        }
      }
    }
    srvalue = soil.value();
    srstat = soil.stat();
    temp = soil.tempvalue();
    humi = soil.humivalue();
    npkResponse.setOutputsrvaluePar()
    break 
    case 'WATER_HUMI':  
    if (!!parameters) {
      const kindslot = parameters.WATER_COUNT
      if (parameters.length != 0 && kindslot) {
        if(isNaN(kindslot.value) == true){
          soilkind = kindslot.value
          console.log(kindslot)
        }else{
          soilkind = parseInt(kindslot.value)
        }
      }
    }
    humi = soil.humivalue();
    npkResponse.setOutputwaterhumi()
    break
    case 'WATER_TEMP':  
    if (!!parameters) {
      const kindslot = parameters.WATER_COUNT
      if (parameters.length != 0 && kindslot) {
        if(isNaN(kindslot.value) == true){
          soilkind = kindslot.value
          console.log(kindslot)
        }else{
          soilkind = parseInt(kindslot.value)
        }
      }
    }
    temp = soil.tempvalue();
    npkResponse.setOutputwatertemp()
    break
    case 'WATER_STAT':  
    if (!!parameters) {
      const kindslot = parameters.WATER_COUNT
      if (parameters.length != 0 && kindslot) {
        if(isNaN(kindslot.value) == true){
          soilkind = kindslot.value
          console.log(kindslot)
        }else{
          soilkind = parseInt(kindslot.value)
        }
      }
    }
    srvalue = soil.value();
    srstat = soil.stat();
    npkResponse.setOutputwaterstat()
    break
    case 'GAME_RCP':  
      rcpon = 1;
    break  
    case 'RCP_ANSWER':  
    if (!!parameters) {
      const rcpkind = parameters.RCP_RESULT
      if (parameters.length != 0 && rcpkind) {
        if(rcpon == 1){
          rcpresult = rcp.rcpgmae(rcpkind.value);
          console.log(rcpkind)
        }else{
          rcpresult = "가위바위보 게임이 시작하지 않았어요!";
        }
      }
    }
    npkResponse.setOutputrcpanswer();    
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
      gameon: gameon,
    }
  }
  setOutputclapPar(clapnum){
    this.output = {
      clapnumber: clapnum.number,
    }
  }
  setOutputsrvaluePar(){
    this.output = {
      nowwater: srvalue,
      watersay: srstat,
      srtemp: temp,
      srhumi: humi
    }
  }
  setOutputwatertemp(){
    this.output = {
      tsrtemp: temp,
    } 
  }    
  setOutputwaterhumi(){
    this.output = {
      hsrhumi: humi,
    } 
  }
  setOutputwaterstat(){
    this.output = {
      nowwatersr: srvalue,
      watersaysr: srstat
    } 
  }
  setOutputrcpanswer(){
    this.output = {
      brcpresult: rcpresult,
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
  module.exports = rcpcall;



  
