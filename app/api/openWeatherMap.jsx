var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=837a333216fd7fe79c96d6fd4db' +
        '60b31&units=imperial';
module.exports = {
    getTemp: function (location) {
        console.log('API Path full: ' + OPEN_WEATHER_MAP_URL);
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;
        // debugger;
        return axios
            .get(requestUrl)
            .then(function (res) {
                // Success alert(res.cod); 
                console.log(res);
                // debugger;
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            }, function (res) {
                // debugger;
                throw new Error(res.response.data.message);
            });
    }
}