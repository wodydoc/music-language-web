'use strict';

function LandingPage(parentElement){
    this.parentElement = parentElement;
    this.elements = null;       //tenemos que guardar
}

//-------- dos MÉTODOS ---
LandingPage.prototype.generate = function() {
    this.elements = `
        <header>
            <h1> TYPE THE SONG YOU WANT THE LYRICS. </h1>
            <h2> -SEARCH BAR- </h2>
        </header>
    `;
    this.render();
}

LandingPage.prototype.render = function() {
    //coger este parent element y anadir los elementos a esto funcion constructura
    this.parentElement.innerHTML = this.elements;
}