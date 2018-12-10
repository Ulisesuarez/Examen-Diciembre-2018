// singleton de Rick

function Rick() {
    this.id = "C-137";
}
Rick.prototype.ondas= "altas";
Rick.prototype.habla= function (){
    return "Es Rick-dículo!";
};

Rick.prototype.disparar=function(pistola,dimension){
    pistola.disparar(dimension);
};
Rick.prototype.setId=function(id){
    this.id=id;
};
exports.Rick=Rick;
function Morty() {
    this.id = "earthMorty";
    this.partner ={};
}
Morty.prototype.ondas= "bajas";
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

function Clone(factory){
let character = Object.create(factory.get());
character.id= character.id + factory.llamadas;
return character;
}
exports.Clone=Clone;