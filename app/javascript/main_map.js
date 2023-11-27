console.log("map");

const zoom = 17;
const coord = {
  lat: 44.50861,
  lng:33.57975
}

$(document).ready(function () {
  var map = L.map("map", {
    center: [44.503, 33.588],
    zoom: zoom,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var wmsLayer = L.tileLayer.wms("http://0.0.0.0:8080/geoserver/wms", {
    layers: "web_gis:gis_osm_traffic",
    format: "image/png",
    transparent: true,
  });
  // wmsLayer.addTo(map);

  // var wfsLayer = L.Geoserver.wfs("http://0.0.0.0:8080/geoserver/wfs", {
  //   layers: "web_gis:gis_osm_traffic",
  //   onEachFeature: function(feature, layer){
  //     console.log(feature.properties);
  //     layer.bindPopup("cool " + feature.name);
  //     layer.bindPopup(feature.properties);
  //   }
  // });
  // wfsLayer.addTo(map);

  // map.setView(new L.LatLng(coord.lat, coord.lng), zoom);

  map.on("click", function (event) {
    var latlng = map.mouseEventToLatLng(event.originalEvent);
    console.log(latlng.lat + ", " + latlng.lng);
    $("#plot_number").text(latlng.lat);
    $("#plot_number_kadastr").text(latlng.lat);
    $("#owner_fio").text(latlng.lat);
    $("#owner_tel").text(latlng.lat);
    $("#owner_adr").text(latlng.lat);
  });


  // --------------------------
  // end of work section
  // --------------------------


  // another background map
  // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  //       attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  //   }).addTo(map);

  // L.geoJSON(wmsLayer, {onEachFeature: function(feature, layer){}}).addTo(map);

  // --------------------------
  // https://github.com/storuky/map/blob/master/app/assets/javascripts/application.js

  // -----------------------------
  // yandex example
  // var center = [67.6755, 33.936];

  // 	var map = L.map('map', {
  // 		center: center,
  // 		zoom: 10,
  // 		zoomAnimation: true
  // 	});

  //   L.yandex() // 'map' is default
  // 			.addTo(map)

  // map.attributionControl
  // 	.setPosition('bottomleft')
  // 	.setPrefix('');

  // function traffic () {
  // 	// https://tech.yandex.ru/maps/jsbox/2.1/traffic_provider
  // 	var actualProvider = new ymaps.traffic.provider.Actual({}, { infoLayerShown: true });
  // 	actualProvider.setMap(this._yandex);
  // }

  // var baseLayers = {
  // 	'Yandex map': L.yandex() // 'map' is default
  // 		.addTo(map),
  // 	'Yandex map + Traffic': L.yandex('map')
  // 		.on('load', traffic),
  // 	'Yandex satellite':  L.yandex({ type: 'satellite' }), // type can be set in options
  // 	'Yandex hybrid':     L.yandex('hybrid'),
  // 	'OSM': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  // 		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  // 	})
  // };

  // var overlays = {'Traffic': L.yandex('overlay').on('load', traffic)};

  // L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(map);
  // var marker = L.marker(center, { draggable: true }).addTo(map);
  // map.locate({ setView: true, maxZoom: 14 })
  // 	.on('locationfound',function (e) {
  // 		marker.setLatLng(e.latlng);
  // 	});
});
