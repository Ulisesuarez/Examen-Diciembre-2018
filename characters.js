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
Rick.prototype.setId=function(id){
    this.id=id;
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
Morty.prototype.setId=function(id){
    this.id=id;
};
exports.Morty=Morty;
function Jerry() {
    this.id = "Jerry";
    this.monedas =["R2-D2","R2-D2","R2-D2","R2-D2"];
}
Jerry.prototype.speak= function (){
    return "Tengo una colección de monedas antiguas raras!";
};
Jerry.prototype.monedas= function (){
    return this.monedas;
};


exports.Jerry=Jerry;