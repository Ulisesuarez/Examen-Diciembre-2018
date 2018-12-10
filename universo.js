function Universo() {
    this.length=0;
}
Universo.prototype.addDimension=function(nombre,dimension){
    this[nombre]=dimension;
    this.length=this.length+1;
};
exports.Universo=Universo;

function Gun(universo) {
    this.historial=[];
    this.scan=function(){
        return this.historial;
    };
    this.universo=universo;
    this.primeraDimension=function(dimension){
    this.historial.push(dimension);};
    this.disparar=function(nuevadimension){
        this.historial.unshift(nuevadimension);
        this.universo.addDimension(nuevadimension,[]);
        this.cruzarDimension();
        };
    this.cruzarDimension=function(){
        this.universo[this.historial[0]]=
        this.universo[this.historial[1]]
        .filter(character=> character.id!=='Jerry');
        this.universo[this.historial[1]]=this.universo[this.historial[1]]
        .filter(character=> character.id==='Jerry');
    };    
return this;}

    



exports.Gun=Gun;