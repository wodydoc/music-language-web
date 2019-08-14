'use strict';
//---------------------------------------------------ES5

//-------- PROPIEDADES --------
function Navbar(parentElement, links, style) {                 //funcion constructura - va a recibir parent, links, style 
    this.parentElement = parentElement;
    this.links = links; 
    this.style = style;
    this.elements = null;
}
//--------- MÉTODOS -----------
Navbar.prototype.generate = function() {                //generar dinamicamente los elementos 
    this.elements = `<nav>
                        <ul>`;
    this.links.forEach((link) => {
        this.elements += `
            <li>
                <a href="#0" url=${link.url}>${link.name}</a>  
  
            </li>
        `;                                              
    });                      
    this.elements += `</ul>
                    </nav>
    `;
    this.render();
}

Navbar.prototype.render = function() {                  //añadir los elementos a DOM
    this.parentElement.innerHTML = this.elements;
}

//---------------------------------------------------ES6
class Navbar{
    constructor(parentElement, links, style){
        this.parentElement = parentElement;
        this.links = links; 
        this.style = style;
        this.elements = null;
    }
    generate(){
        this.elements
    }
    render(){

    }
}
