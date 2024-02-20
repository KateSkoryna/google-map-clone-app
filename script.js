const TOKEN = 'pk.eyJ1Ijoia2F0ZXNrbyIsImEiOiJjbHN1a3hhNG8yMXpiMmlwczNsc3NlcnMxIn0.0MwemZnMjXbNqSRSxARcLA'

mapboxgl.accessToken = TOKEN;

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
            enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude] )
}

function errorLocation() {
    setupMap([13.41, 52.52])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center,
            zoom: 14
        });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    var directions = new MapboxDirections({
    accessToken: TOKEN,
});

map.addControl(directions, 'top-left');
}