'use strict';

function main(){
    //va a ser Home Page
    var ENTRY_POINT = '/';          //ENTRY_POINT es la url de entrada         
    var layoutInstance = null;
    //navbar - un array de objetos 
    var links = [
        {name: 'HOME',
        url: '/'}
    ];
    var rootElement = document.querySelector('#root');

    var navbarInstance = null;

    generateLayout();
    generateNavbar();    
    addListenersToNavbar();
    activateRouter();   

    function generateLayout() {
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();                                         //creer un nueva instancia y llamar 
    }
    
    function generateNavbar() {
        navbarInstance = new Navbar(layoutInstance.header, links)          //parent element es layoutInstance.header
        navbarInstance.generate();
    }

    function activateRouter () {                                     //va a llamar distintos metedos de router 
        routerInstance.buildDom(ENTRY_POINT,layoutInstance.main)                       //donde queremos que se genere
    }

    function addListenersToNavbar() {
        var anchors = document.querySelectorAll('nav a');            
        anchors.forEach(function(anchor) {                  //forEach para coger cada uno de ellos 
            anchor.addEventListener('click', changePage)                //dentro vamos a definir 'click' que siempre esta escuchando - funcion de link a buildDOM
        })
    }

    function changePage(event) {
        var url = event.target.attributes.url.value;       //dir() displays list of properties of the specified object
        routerInstance.buildDom(url, layoutInstance.main);      //router - para cambiar pagina
    }                                                            
};

window.addEventListener('load', main);