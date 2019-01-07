function singletonFactory(objeto) {

    const prototipo = new objeto();
    this.llamadas = 0;
    return {
        get: function () {
            this.llamadas = this.llamadas + 1;
            return prototipo;
        },
        "llamadas": this.llamadas
    };
}
exports.singletonFactory = singletonFactory;