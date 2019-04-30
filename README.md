# WeatherApp

A simple weather app created with **React** and powered by Darksky API.

The main reason behind creating it was to practice React by making something that works at the same time.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

-   You need the latest version of Node.js and npm installed.
-   Clone the project and `npm install` the dependencies.
-   I used [react-mapbox-autocomplete](https://www.npmjs.com/package/react-mapbox-autocomplete) for geolocation autocomplete. You're gonna need an public key to use it, you can sign up for one on mapbox website.
-   For all the weather data, I used [DarkSky API](https://darksky.net/dev). You're gonna need a secret key to use their service.
-   They disables CORS on their servers so you'll need a proxy. In development, see `package.json` file.

## Deployment

I used netlify to deploy this project and used their proxy feature to be able to make requests to darksky api. for more information, visit their DOCs [here](https://www.netlify.com/docs/redirects/#rewrites-and-proxying).

## Contributing

I am still learning and new to all this, so if you have the time to review this project and give me a feedback I'll be very grateful.

## Acknowledgments

-   erikflowers for the great icons. Check out the project [here](https://github.com/erikflowers/weather-icons).
-   DarkSKy API.
