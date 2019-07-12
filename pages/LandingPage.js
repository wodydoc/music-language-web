'use strict';
//-------- PROPIEDADES --------
function LandingPage(parentElement){
    this.parentElement = parentElement;
    
    this.elements = null;
}
//--------- MÉTODOS -----------
LandingPage.prototype.generate = function() {
    this.elements = `
        <div class="container">
            <marquee style=font-family:'Inconsolata', monospace; bgcolor="#FF4301" behavior="scroll"> el verbo «can» en inglés  es uno de los verbos modales más importantes pues tiene diversos usos como expresar habilidad y posibilidad --- «can» significa "poder" en el sentido de "tener capacidad" </marquee>
            <div class="title">
                <div class="can-title">
                    <h1 id="white">can</h1>
                </div>
                <div class="tar-title"> 
                    <h1>tar</h1>
                </div>
            </div>
                <div class="title-legend">
                    <h2>where music & language meet
                    </h2>
                </div>
            
            <div class="search">
            <form>
                <input type="text" name="artist" class="search-artist" autofocus="autofocus" placeholder="artist" id="search-input">

                <input type="text" name="song" class="search-song" autofocus="autofocus" placeholder="song" id="search-input">
                
                <input type="submit" class="submit-button"></input>
            </form>
            </div>
    `;
    this.render();
    this.setListener();
}

LandingPage.prototype.render = function() {
    //coger este parent element y anadir los elementos a esto funcion constructura
    this.parentElement.innerHTML = this.elements;
}

LandingPage.prototype.setListener = function() {
    var form = document.querySelector('form');
    var self = this;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var lyricsPage = new LyricsPage(self.parentElement, event.target[0].value, event.target[1].value)
        lyricsPage.generate();
    })
}









