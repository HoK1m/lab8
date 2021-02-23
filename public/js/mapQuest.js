function initMap() {
	L.mapquest.key = 'UNvwHKZ5eGCjneRgpu4l1oOR3sTqPQ2D';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.87855572003468, -117.23590009040727]).addTo(map);
}