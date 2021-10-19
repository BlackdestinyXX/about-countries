const fetch = require("node-fetch")

async function getCountry(code) {

    if(!code) {
        throw "getCountry(): please specify a country code. Here a full list of codes: https://countrycode.org/"
    }

    let country = await fetch(`https://countriesapi.ga/countries/${code}`, {
        method: "POST"
    }).then(response => response.json())

    return country;

}

module.exports = { getCountry }