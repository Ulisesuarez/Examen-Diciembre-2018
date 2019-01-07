function Universo () {
    this.length = 0;
}
Universo.prototype.addDimension = function (nombre,dimension) {
    this[nombre] = dimension;
    this.length = this.length+1;
};
exports.Universo = Universo;

function Gun(universo) {
    this.historial = [];
    this.scan = function(){
        return this.historial;
    };
    this.universo = universo;
    this.setDimensionHistorial = function(dimension){
        this.historial.unshift(dimension);
    };
    this.disparar = function (anteriorDimension, nuevaDimension, noCruzan) {
        this.setDimensionHistorial(nuevaDimension);
        this.universo.addDimension(nuevaDimension, []);
        this.cruzarDimension(anteriorDimension, nuevaDimension, noCruzan);
        };
    this.cruzarDimension = function (anteriorDimension, nuevaDimension, noCruzan = []){
        this.universo[nuevaDimension] = this.universo[anteriorDimension]
                                            .filter(character => !noCruzan.includes(character.id));
        this.universo[anteriorDimension] = this.universo[anteriorDimension]
                                            .filter(character => noCruzan.includes(character.id));
    };
return this;}
exports.Gun = Gun;