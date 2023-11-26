console.log("map");

$(document).ready(function () {
  var map = L.map("map", {
    center: [44.50861, 33.57975],
    zoom: 17,
  });
  // 17/44.50861/33.57975
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var wmsLayer = L.tileLayer.wms("http://0.0.0.0:8080/geoserver/wms", {
    layers: "web_gis:gis_osm_traffic",
    format: "image/png",
    transparent: true,
  });
  map.addLayer(wmsLayer);

  // var popup = L.popup();

  // function onMapClick(e) {
  //   popup
  //     .setLatLng(e.latlng)
  //     .setContent("You clicked the map at " + e.latlng.toString())
  //     .openOn(map);
  // }

  // map.on("click", onMapClick);

  // L.geoJson(wmsLayer)
  //   .on('click', function(e){
  //       console.log(e.sourceTarget.feature);
  //   })
  //   .addTo(map)

  // Set vectorTileOptions
  // var vectorTileOptions = {
  //   vectorTileLayerStyles: {
  //   'gis_osm_traffic': function() {
  //   return {
  //     color: 'red',
  //     opacity: 1,
  //     fillColor: 'yellow',
  //     fill: true,
  //   }
  //   },
  //   },
  //   interactive: true,	// Make sure that this VectorGrid fires mouse/pointer events
  //   }

  //   // Set the coordinate system
  //   var projection_epsg_no = '900913';
  //   // Set the variable for storing the workspace:layername
  //   var campground_geoserverlayer = 'web_gis:gis_osm_traffic';
  //   // Creating the full vectorTile url
  //   var campingURL = '/geoserver/gwc/service/tms/1.0.0/' + campground_geoserverlayer + '@EPSG%3A' + projection_epsg_no + '@pbf/{z}/{x}/{-y}.pbf';
  //   // Creating the Leaflet vectorGrid object
  //   var camping_vectorgrid = L.vectorGrid.protobuf(campingURL, vectorTileOptions)

  //   // Define the action taken once a polygon is clicked. In this case we will create a popup with the camping name
  // camping_vectorgrid.on('click', function(e) {
  //     L.popup()
  //       .setContent(e.layer.properties.naamnl)
  //       .setLatLng(e.latlng)
  //       .openOn(map);
  //   })
  //   .addTo(map);

  //   // Add the vectorGrid to the map
  // camping_vectorgrid.addTo(map);

  //   // Set the map view. In this case we set it to the Netherlands
  //   map.setView([52.2,5.5], 8);

  // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  //       attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  //   }).addTo(map);

  // --------------------------
  // https://github.com/storuky/map/blob/master/app/assets/javascripts/application.js

  // var map = L.map('map').setView([54.76267040025495,37.37548828125], 8),
  //     leafletView = new PruneClusterForLeaflet();

  // map.options.crs = L.CRS.EPSG3395;

  // L.Icon.Default.imagePath = "/leaflet";
  // L.tileLayer(
  //   'http://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU', {
  //     subdomains: ['01', '02', '03', '04'],
  //     attribution: '<a http="yandex.ru" target="_blank">Яндекс</a>',
  //     reuseTiles: true,
  //     updateWhenIdle: false,
  //     zoomControl: false,
  //     maxNativeZoom: 17
  //   }
  // ).addTo(map);

  // jQuery.getJSON("/markers.json", {}, function(res){
  //   res.forEach(function (item) {
  //     leafletView.RegisterMarker(new PruneCluster.Marker(item[1], item[2], {id: item[0]}));
  //   });
  //   map.addLayer(leafletView);
  // })

  // leafletView.PrepareLeafletMarker = function (marker, data) {
  //   marker.on('click', function () {
  //     jQuery.ajax({
  //       url: "/markers/"+data.id
  //     }).done(function (res) {
  //       marker.bindPopup(res);
  //       marker.openPopup();
  //     })
  //   })
  // }

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

  // var overlays = {
  // 	'Traffic': L.yandex('overlay')
  // 		.on('load', traffic)
  //       };

  // L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(map);
  // var marker = L.marker(center, { draggable: true }).addTo(map);
  // map.locate({ setView: true, maxZoom: 14 })
  // 	.on('locationfound',function (e) {
  // 		marker.setLatLng(e.latlng);
  // 	});
});
