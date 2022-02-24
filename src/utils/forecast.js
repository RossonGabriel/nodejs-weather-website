const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current'
            + '?access_key=9ab562ce2b53fc42ff3011e54c73051c'
            + '&query=' + latitude + ',' + longitude


    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = body.current.weather_descriptions[0] 
                + '. It is currently ' + body.current.temperature + ' degrees' 
                + '. It feels like ' + body.current.feelslike + ' degrees out.' + body.location.timezone_id
            callback(undefined, data)
        }
    })
}

module.exports = forecast