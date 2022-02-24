const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current'
            + '?access_key=9ab562ce2b53fc42ff3011e54c73051c'
            + '&query=' + latitude + ',' + longitude


    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined, undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined, undefined)
        } else {
            const data = 'Hi guys! Local time now in your city is ' + body.location.localtime 
                + '. The weather today is "' + body.current.weather_descriptions[0] + '"'
                + '. It is currently ' + body.current.temperature + ' degrees' 
                + ', but it feels like ' + body.current.feelslike + ' degrees right :D'
                + ' The humidity is ' + body.current.humidity + '% with UV index is ' + body.current.uv_index
                + '. Thank you!'
            const weatherForecastImg = body.current.weather_icons
            callback(undefined, data, weatherForecastImg)
        }
    })
}

module.exports = forecast