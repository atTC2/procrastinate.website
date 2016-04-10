var places;
var isLoaded = false;

// Loads the places to procrastinate at. Take a bool, which if true automatically calls procrastinate.
function loadPlaces(autoProcrastinate) {
    $.ajax({
        url: "places.json",
        dataType: "json",
        success: function(data) { 
            places = data.places;
            isLoaded = true;
            if (autoProcrastinate) 
                procrastinate();
        }
    });
}

// Let's the procrastination commence.
function procrastinate() {
    if (!isLoaded)
        loadPlaces(true);
    else if (places) {
        var indexChosen = Math.floor(Math.random() * places.length);
        window.location.href = places[indexChosen];
    }
}