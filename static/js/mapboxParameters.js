// MapBox import
mapboxgl.accessToken = 'pk.eyJ1IjoibGViZXJyZWIiLCJhIjoiY2s1NDJtaXF3MGRxMjNubHp3d3kxeDZ5ayJ9.t8vR-bQq05tnhhxR9nXwRw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [5, 45],
    zoom: 3.5
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

// Counter variable
var counter = 1;

// MapBox OnLoad parameters
map.on('load', function () {
    map.addSource('geojson', {
        'type': 'geojson',
        'data': geojson
    });

    map.addLayer({
        id: 'measure-points',
        type: 'circle',
        source: 'geojson',
        paint: {
            'circle-radius': 5,
            'circle-color': '#000'
        },
        filter: ['in', '$type', 'Point']
    });

    map.addLayer({
        id: 'measure-lines',
        type: 'line',
        source: 'geojson',
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#000',
            'line-width': 2.5
        },
        filter: ['in', '$type', 'LineString']
    });

    map.on('click', function (e) {
        // Import requiered features
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['measure-points']
        });

        // Remove the linestring from the group
        // So we can redraw it based on the points collection
        if (geojson.features.length > 1) geojson.features.pop();

        // If a feature was clicked, remove it from the map
        if (features.length) {
            var id = features[0].properties.id;
            geojson.features = geojson.features.filter(function (point) {
                removeRowById(id)
                return point.properties.id !== id;
            });
        } else {
            var point = {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [e.lngLat.lng, e.lngLat.lat]
                },
                'properties': {
                    'id': String(counter)
                }
            };

            // Update Elevation
            getElevation(e.lngLat.lng, e.lngLat.lat)

            // Add row in the DataTable
            addRow(e.lngLat.lng, e.lngLat.lat)

                // Increment the counter by 1
                ++counter;

            geojson.features.push(point);
        }

        if (geojson.features.length > 1) {
            linestring.geometry.coordinates = geojson.features.map(function (
                point
            ) {
                return point.geometry.coordinates;
            });

            geojson.features.push(linestring);
        }

        map.getSource('geojson').setData(geojson);
    });
});

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['measure-points']
    });
    // UI indicator for clicking/hovering a point on the map
    map.getCanvas().style.cursor = features.length ?
        'pointer' :
        'crosshair';
});

map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        "Longitude : " + e.lngLat.lng.toFixed(2) +
        '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        "Latitude : " + e.lngLat.lat.toFixed(2);
});

// MapBox imported
console.log("MapBox Parameters and actions imported.");