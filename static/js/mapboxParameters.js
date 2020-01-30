// MapBox import
mapboxgl.accessToken = 'pk.eyJ1IjoibGViZXJyZWIiLCJhIjoiY2s1NDJtaXF3MGRxMjNubHp3d3kxeDZ5ayJ9.t8vR-bQq05tnhhxR9nXwRw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

// GeoJSON collection import
var geojson = {
    'type': 'FeatureCollection',
    'features': []
};

// Lines to draw between points
var linestring = {
    'type': 'Feature',
    'geometry': {
        'type': 'LineString',
        'coordinates': []
    }
};

// MapBox OnLoad parameters
map.on('load', function () {
    map.addSource('geojson', {
        'type': 'geojson',
        'data': geojson
    });
});

var test;

// Get coordinates on map click
map.on('click', function (e) {
    // Add a row in the Datatable
    addRow(e.lngLat.lng, e.lngLat.lat)
});

// DataTable imported
console.log("MapBox Parameters and actions imported.");