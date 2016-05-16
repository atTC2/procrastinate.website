// How many places to remember the user has been to (so as to not visit them again for a while).
var rememberHistoryLength = 10;

// The name of the cookie
var cookieTitle = "places=";

// All the places to procrastinate.
var places = [
    "https://www.youtube.com/watch?v=QH2-TGUlwu4",
    "https://www.youtube.com/watch?v=8DbfUvcD6tc",
    "https://www.youtube.com/watch?v=IfeyUGZt8nk",
    "https://www.youtube.com/watch?v=sCNrK-n68CM",
    "https://www.youtube.com/watch?v=F-S0T4xTdLY",
    "https://www.youtube.com/watch?v=-T7gBgKOnWQ",
    "https://www.youtube.com/watch?v=ZXsQAXx_ao0",
    "https://www.youtube.com/watch?v=k4pbfT5pupc",
    "https://www.youtube.com/watch?v=1MIo0gJRReA",
    "https://www.youtube.com/watch?v=R8kDsM0M-vg",
    "https://www.youtube.com/watch?v=G8KpPw303PY",
    "https://www.youtube.com/watch?v=o0u4M6vppCI",
    "https://www.youtube.com/watch?v=lnt-KGx6LoM",
    "https://www.youtube.com/watch?v=MtN1YnoL46Q",
    "https://www.youtube.com/watch?v=UD-MkihnOXg",
    "https://www.youtube.com/watch?v=a-xWhG4UU_Y",
    "https://www.youtube.com/watch?v=Y6ljFaKRTrI",
    "https://www.facebook.com/ads/preferences/",
    "http://belarr.com/bakercat/",
    "http://ostagram.ru/",
    "http://labs.majestic.com/2015/mracing/",
    "https://www.geoguessr.com/world/play",
    "http://www.googlefeud.com/",
    "https://en.wikipedia.org/wiki/Special:Random",
    "http://map.norsecorp.com/",
    "http://www.google.co.uk/trends/explore",
    "http://www.brainyquote.com/quotes/keywords/procrastination.html",
    "http://www.nerdcubed.co.uk/",
    "https://www.reddit.com/r/procrastinate/",
    "http://store.steampowered.com/app/253030/",
    "https://timeglo.be/",
    "http://www.donothingfor2minutes.com/",
    "https://earthview.withgoogle.com/",
    "http://agar.io/",
    "http://www.neopets.com/games/play_flash.phtml?game_id=999&r=7872676&&width=909&height=683&quality=high",
    "http://trumpdonald.org/",
    "http://slither.io/",
    "http://www.findtheinvisiblecow.com/",
    "http://whatcolourisit.scn9a.org/"
];

// Let's the procrastination commence.
function procrastinate() {
    var cookie = document.cookie;
    var placesBeen = [];
    
    // If the cookie was set, remove places the user has already been to.
    if (cookie !== "") {
        placesBeen = JSON.parse(cookie.split(cookieTitle)[1]);
        for (var i = 0; i < placesBeen.length; i++) {
            indexToRemove = places.indexOf(placesBeen[i]);
            if (indexToRemove > -1)
                places.splice(indexToRemove, 1);
        }
    }
    
    // Choose a new place to procrastinate.
    var indexChosen = Math.floor(Math.random() * places.length);
    var nextPlace = places[indexChosen];
    
    // Add the new place to the recently visited list and save it.
    if (placesBeen.length > rememberHistoryLength)
        placesBeen.shift();
    placesBeen.push(nextPlace);
    document.cookie = cookieTitle + JSON.stringify(placesBeen) + ";";
    
    // Procrastinate!
    window.location.href = nextPlace;
}