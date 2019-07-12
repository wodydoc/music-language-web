'use strict';

function TranslateService() {                //link to API
    this.baseURL = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190711T125839Z.1877a1020326d7fd.487517ab76fc5ba4cd01112f56d8afa0f4c81026&lang=en-es&text=';
    this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
}

TranslateService.prototype.getSong = async function(text){
    var response = await fetch(this.proxyUrl+this.baseURL+text);
    console.log(response)
    var data = await response.json();
    console.log(data)
    return data.text[0];
}

document.addEventListener('mouseup', async function() {
    var test = window.getSelection().extentNode.data;
    console.log(test);
    if(window.getSelection().extentNode.data) {
        var translation = await instance.getSong(window.getSelection().extentNode.data)
        showText(translation);
        // alert(transaltion);
    }
})

// TRANSLATION ANIMATED ALERT DESIGN
function showText(translation) {
    var headerSong = document.querySelector('#header-song');
    var newTranslation = document.createElement('p');
    newTranslation.classList.add('alert');
    newTranslation.appendChild(document.createTextNode(translation));
    headerSong.appendChild(newTranslation);
}




    






var instance = new TranslateService();



//-----------------------

   