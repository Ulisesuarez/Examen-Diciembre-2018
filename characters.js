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
