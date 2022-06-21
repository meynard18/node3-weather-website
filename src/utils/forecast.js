const request = require('request');

const forecast = (latitude, longitude, callback) => {
   const url = `http://api.weatherstack.com/current?access_key=9025dc5b7843347839964aa394aae108&query=${longitude},${latitude}&units=f`;

   request({ url, json: true }, (error, { body }) => {
      if (error) {
         callback('Unable to connect to weather API', undefined);
      } else if (body.error) {
         callback('unable to find location', undefined);
      } else {
         callback(
            undefined,
            `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out`
         );
      }
   });
};

module.exports = forecast;
