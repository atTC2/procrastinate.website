// Let's the procrastination commence (from extension).
function procrastinate() {
    if (!isLoaded)
        loadPlaces(true);
    else if (places) {
        var indexChosen = Math.floor(Math.random() * places.length);
        chrome.tabs.create({ url: places[indexChosen] });
    }
}