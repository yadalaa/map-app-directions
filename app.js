var map = L.map('map').setView([18.8027230945381, 98.968252287072], 11);
mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

var Icon = L.icon({
    iconUrl: 'img/Ramenlogo.png',
    iconSize: [70, 70]
})

var marker = L.marker([18.8027230945381, 98.968252287072], { icon: Icon }).addTo(map);

map.on('click', function (e) {
    console.log(e)
    var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    L.Routing.control({
        waypoints: [
            L.latLng(18.8027230945381, 98.968252287072),
            L.latLng(e.latlng.lat, e.latlng.lng)
        ]

    }).addTo(map);
});