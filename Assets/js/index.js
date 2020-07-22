{
    var APIKey = "3c2708df10b6a2b88d777609178106b0";
    
    function queryOWMAPIByCoord(lon, lat, callback) {
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + APIKey + "&units=imperial";
    
        $.getJSON(queryURL, response => {
            callback(response, "local");
        });
    }
    
    function queryOWMAPIByCity(cityState, callback) {
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState.replace(" ", "%20") + ",USA&appid=" + APIKey + "&units=imperial";

        $.getJSON(queryURL, response => {
            queryOWMAPIByCoord(response.city.coord.lon, response.city.coord.lat, response2 => {
                callback(response2, cityState);
            });
        });
    }
}