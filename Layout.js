'use strict';
//-------- PROPIEDADES --------
function Layout(root, style) {             //tenemos q pasar (root) como parametro
    this.root = root;
    this.style = style;

    this.elements = null;           //Layout.prototype.generate 

    this.header = null;             //Layout.prototype.getContainers
    this.main = null;
    this.footer = null;
}
//--------- MÉTODOS -----------
Layout.prototype.generate = function() {                          //generar elementos del DOM
    this.elements = `                       
        <header id="site-header"></header>
        <main id="site-main"></main>
        <footer id="site-footer"></footer>
    `;
    this.render();
    this.getContainers();
}

Layout.prototype.render = function() {                           //añadir los elementos al DOM
    this.root.innerHTML = this.elements;                         //root elemento en app.js
}

Layout.prototype.getContainers = function() {                    //definir cada uno de los propiedades del DOM
    this.header = document.querySelector('#site-header');            //llamar a id's bajo de this.elements
    this.main = document.querySelector('#site-main');
    this.footer = document.querySelector('#site-footer');
}