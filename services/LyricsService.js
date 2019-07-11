'use strict';

function LyricsService() {                //link to API
    this.baseUrl = 'https://api.lyrics.ovh/v1/'
}


LyricsService.prototype.getAllLyrics = async function(artist, song) {
    var response = await fetch(`${this.baseUrl}${artist}/${song}`);
    console.log(response);
    var data = await response.json();
    return data;
}

var lyricsServiceInstance = new LyricsService();



