{
    var APIKey = "3c2708df10b6a2b88d777609178106b0";
    
    function queryOpenWeatherMapAPIByCoordinates(lon, lat, callback) {
        var queryURL = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial";
    
        $.getJSON(queryURL, callback);
    }
    
    function queryOpenWeatherMapAPIByCity(cityState, callback) {
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityState + ",USA&appid=" + APIKey + "&units=imperial";
    
        $.getJSON(queryURL, callback);
    } 
}