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
            <div class="title">
                <div class="title-name"> 
                    <h1>en<br>Canta 
                    </h1>
                </div>
                <div class="title-legend">
                    <h2>where music and language meet
                    </h2>
                    </div>
            </div>
            <div class="search">
            <form>
                <input type="text" name="artist" class="search-artist" autofocus="autofocus" placeholder="artist" id="search-input">

                <input type="text" name="song" class="search-song" autofocus="autofocus" placeholder="song" id="search-input">
                
                <input type="submit" class="submit-button"></input>
            </form>
                <ul class="results" id="results">
                </ul>
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









