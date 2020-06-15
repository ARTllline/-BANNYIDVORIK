var center = [46.271429, 30.630141];
var map = L.map('map').setView(center, 17);

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

L.marker(center).addTo(map);