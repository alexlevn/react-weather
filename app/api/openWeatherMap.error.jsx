var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=837a333216fd7fe79c96d6fd4db60b31&units=imperial';

// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=837a333216fd7fe79c96d6fd4db60b31&units=imperial';
// Tạo Tài khoản + Tạo 1 key: 837a333216fd7fe79c96d6fd4db60b31

module.exports = {
    getTemp: function(location){
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

        return axios.get(requestUrl).then(function(res){
            // Success
            // alert(res.cod);
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            // Error: res that ra la tin nhan loi
            // throw new Error(res.cod);
            throw new Error(res);
            // Làm đến bài 035. Làm tiếp sau
        });
    }
}