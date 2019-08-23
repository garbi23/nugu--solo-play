let mod = {}
let msn = 0


mod.modselect = function(number){

    msn = number
}

mod.modnumber = function(){
    return msn
}


module.exports = mod;
