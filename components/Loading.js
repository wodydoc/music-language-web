'use strict';
//-------- PROPIEDADES --------
function Loading(parentElement) {                        //FUNCION CONSTRUCTURA
    this.parentElement = parentElement;
    this.elements = null;
}
//--------- MÉTODOS -----------
Loading.prototype.generate = function() {                   //los elementos que conformen nuestro loading 
    this.elements = '<p>May the lyrics be with you...</p>'       
    this.render();
}

Loading.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;
}