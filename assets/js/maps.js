function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    // <!-- creating labels for map markers-->
    var labels = "ABCDEFGHIJKLMNOPQRSTYVWXYZ"
    // Setting a string consists of all letters of alphabet //
    var locations = [{
        lat: 40.785091,
        lng: -73.968285
    }, {
        lat: 41.084045,
        lng: -73.874256
    }, {
        lat: 40.754932,
        lng: -73.984016
    }];


    // iterate thru array and create new marker that has the label from our string //
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    // taken from google maps maker clusterer tutorial //
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
} // closing the intiMap function //