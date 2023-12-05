require('dotenv').config();
const express = require('express');
const port = 3000;
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Simple Hiking Trails Map</title>
        <style>
            #map {
                height: 750px;
                width: 100%;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script>
            function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: {lat: 42.3601, lng: -71.0589}
                });
                map.data.loadGeoJson('/data.geojson');
                map.data.setStyle({
                    strokeColor: 'blue',
                    strokeWeight: 2
                });
            }
        </script>
        <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&callback=initMap">
        </script>
    </body>
    </html>
    `);
});
let open;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    import('open').then(pkg => {
        open = pkg.default;
        open(`http://localhost:${port}`);
    });
});
