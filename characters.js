// singleton de Rick
function singletonFactory(character) {

    const prototipo = new character();

    return {
        get: function() {
            return prototipo;
        }
    };
}
exports.singletonFactory=singletonFactory;
function Rick() {
    this.id = "C-137";
    this.ondas = "altas";
}
Rick.prototype.habla= function (){
    return "Es Rick-dículo!";
};

Rick.prototype.disparar=function(pistola){
    pistola();
};
exports.Rick=Rick;
function Morty() {
    this.id = "earthMorty";
    this.ondas = "bajas";
    this.partner ={};
}
Morty.prototype.habla= function (){
    return "Oohh man!";
};

Morty.prototype.setPartner=function(partner){
    this.partner=partner;
};
Morty.prototype.id=function(id){
    this.id=id;
};
exports.Morty=Morty;