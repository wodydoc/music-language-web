'use strict';

function Router() {                                

}

Router.prototype.buildDom = function(url, parentElement) {  
    switch (url){                                      
        case '/':
            this.generateLandingPage(parentElement);
            break;
        case '/searchLyrics':
            this.generateLyricsPage(parentElement);
            break;
        default:
            this.generateLandingPage(parentElement);
    }
}


Router.prototype.generateLandingPage = function(parentElement) {                  
    this.page = new LandingPage(parentElement);                              
    this.page.generate();
}

Router.prototype.generateLyricsPage = function(parentElement) {                   
    this.page = new LyricsPage(parentElement);                                        
    this.page.generate();
}

var routerInstance = new Router();