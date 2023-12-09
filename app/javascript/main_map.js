console.log("map");

const zoom = 17;
const coord = {
  lat: 44.50861,
  lng:33.57975
}

$(document).ready(function () {
  var map = L.map("map", {
    center: [coord.lat, coord.lng],
    zoom: zoom,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom:23
  }).addTo(map);

  var wmsLayer = L.tileLayer.wms("http://0.0.0.0:8080/geoserver/wms", {
    layers: "web_gis:plots",
    format: "image/png",
    transparent: true,
  });
  // wmsLayer.addTo(map);

  var wfsLayer = L.Geoserver.wfs("http://0.0.0.0:8080/geoserver/wfs", {
    layers: "web_gis:plots",
    onEachFeature: function(feature, layer){
      layer.on("click", function (event) {
        $.get("/plot/" + feature.id.split(".")[1],
          {id: feature.properties.id},
          function(data){
            $("#plot_number").text(data.plot.number);
            $("#plot_number_kadastr").text(data.plot.number_kadastr);
            $("#owner_fio").text(data.owner.surname + " " + data.owner.first_name + " " + data.owner.middle_name);
            $("#owner_tel").text(data.owner.tel);
            $("#owner_adr").text(data.owner.adr);
            $("#owner_type").text(data.owner.type);
            $("#owner_adr").text(data.owner.adr);
            $("#plot_area").text(data.plot.area);
            $("#plot_perimetr").text(data.plot.perimetr);
            $("#plot_sale_status").text(data.plot.sale_status);
            $("#plot_description").text(data.plot.description);

            $("#form_person_id").val(data.plot.number).change();
            $("#open_form_button").removeAttr("disabled");
            $("#update_form").attr("action", "plot/"+data.plot.number);

          })
      });
    }
  });
  wfsLayer.addTo(map);

  // map.setView(new L.LatLng(coord.lat, coord.lng), zoom);

  //   var latlng = map.mouseEventToLatLng(event.originalEvent);

  $("#open_form_button").click(function(){
    $("#show_data_form").addClass("hidden");
    $("#update_data_form").removeClass("hidden");
  });

  $("#update_data_button").click(function(){
    $("#show_data_form").removeClass("hidden");
    $("#update_data_form").addClass("hidden");

  });

  $("#update_form").submit(function(form=this){
    $.ajax({
      url: form.currentTarget.action,
      type: 'PATCH',
      data: {
        owner:{
          person_id: $("#form_person_id").val()
        },
        plot_data:{
          sale_status: $("#form_sale_status").val(),
          owner_type: $("#form_owner_type").val(),
          description: $("#form_description").val()
        }
      },
      dataType: "json",
      success: function(result){
        $("#plot_number").text(result.plot.number);
        $("#plot_number_kadastr").text(result.plot.number_kadastr);
        $("#owner_fio").text(result.owner.surname + " " + result.owner.first_name + " " + result.owner.middle_name);
        $("#owner_tel").text(result.owner.tel);
        $("#owner_adr").text(result.owner.adr);
        $("#owner_type").text(result.owner.type);
        $("#owner_adr").text(result.owner.adr);
        $("#plot_area").text(result.plot.area);
        $("#plot_perimetr").text(result.plot.perimetr);
        $("#plot_sale_status").text(result.plot.sale_status);
        $("#plot_description").text(result.plot.description);

        $("#show_data_form").removeClass("hidden");
        $("#update_data_form").addClass("hidden");
      },
      error: function(error){
        console.log(error)
        return false;
      }
    });
    return false;
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
