document.addEventListener("DOMContentLoaded", function () {
    //code JavaScript
    function myMap() {
        var mapProp= {
            center:new google.maps.LatLng(21.085158,105.714238),
            zoom:5,
        };
        var map = new google.maps.Map(document.getElementById("map"),mapProp);
    }
    google.maps.event.addDomListener(window, 'load',myMap());
}, false);