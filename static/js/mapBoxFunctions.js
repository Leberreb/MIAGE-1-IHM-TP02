var currentElevation;

// Function that returns the elevation from coordiante
function getElevation(longitude, latitude) {
    // make API request
    var query = 'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/' + longitude + ',' + latitude + '.json?layers=contour&limit=50&access_token=' + mapboxgl.accessToken;
    var result;

    // Ajax request
    $.ajax({
        method: 'GET',
        url: query,
    }).done(function (data) {
        // Get all the returned features
        var allFeatures = data.features;
        // Create an empty array to add elevation data to
        var elevations = [];
        // For each returned feature, add elevation data to the elevations array
        for (i = 0; i < allFeatures.length; i++) {
            elevations.push(allFeatures[i].properties.ele);
        }

        // In the elevations array, find the largest value
        var highestElevation = Math.max(...elevations);
        
        // Get the elevation
        currentElevation = highestElevation;
    });
}

// MapBox imported
console.log("MapBox Functions imported.");