'use strict';
//---------------------------------------------------ES5
//-------- PROPIEDADES --------
function Searchbar(parentElement, style) {
    this.parentElement = parentElement;
    this.style = style;
    this.textSearch = null;
}
//--------- MÉTODOS -----------
Searchbar.prototype.generate = function() {
    this.textSearch
}


//---------------------------------------------------ES6
class Searchbar{
    constructor(parentElement, style){
        this.parentElement = parentElement;
        this.style = style;
        this.textSearch = null;
    }
    generate(){
        this.textSearch;
    }
}