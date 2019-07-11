'use strict';
//-------- PROPIEDADES --------
function LyricsPage(parentElement, artist, song){
    this.parentElement = parentElement;
    
    this.artist = artist
    this.song = song
    this.elements = null;

    this.lyrics = null;
    this.loading = null;
}
//--------- MÉTODOS -----------
LyricsPage.prototype.generate = async function() {      //ASYNC FUNCTION **
    this.loading = new Loading(this.parentElement);
    this.loading.generate();
    
    await this.connectToAPI();                          //AWAIT EXPRESSION ** 
    this.elements = `
        <div class="container">
        <header>
            <section class="artist-name">${this.artist}</section>
            <section class="song-name">${this.song}</section>
        </header>
            <section class="cards-container"> 
       <div>
    `;

             //todos de los articulos que necesitaremos -desde API 
        this.elements += `
            <article>
                <p class="cards-container">${this.lyrics.lyrics.replace(/\n/g, '<br />')} </p>
            </article>
        `;

    this.elements += '</section>'
    this.render();
}

LyricsPage.prototype.render = function() {
    this.parentElement.innerHTML = this.elements;           //coger este parent element y anadir los elementos a esto funcion constructura
}

//MÉTODO DE LLAMAR A API
LyricsPage.prototype.connectToAPI = async function() {
    this.lyrics = await lyricsServiceInstance.getAllLyrics(this.artist, this.song);
    console.log(this.lyrics);
}