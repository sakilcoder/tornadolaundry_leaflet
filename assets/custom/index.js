
var zipLayer = L.geoJSON(zips, {
    style: styleAoi,
    onEachFeature: onEachAoi,
});

var zipPointLayer = L.geoJSON(zip_points, {
    onEachFeature: onEachZipPoint,
});

var locationLayer = L.geoJSON(locs, {
    onEachFeature: onEachLocation,
});

var map = L.map('map', {
    center: [35.220, -101.895],
    zoom: 12,
    layers: [basemapCarto, zipLayer, zipPointLayer, locationLayer] // default checked layers
});

map.options.minZoom = 9;
// map.fitBounds(aoiLayer.getBounds());

var baseLayers = {
    'Carto': basemapCarto,
    'Google': googleTerrain,
    'OSM': OpenStreetMap_Mapnik,
    'Satellite': Esri_WorldImagery,
};



var overlays = {
    'Zip': zipLayer,
    'Zip 2': zipPointLayer,
    'Business Location': locationLayer,
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

L.easyButton('fa-home fa-lg', function () {
    map.setView([35.320, -101.895], 12);
    // map.fitBounds(aoiLayer.getBounds());
}).addTo(map);

// let polylineMeasure = L.control.polylineMeasure ({position:'topleft', unit:'kilometres', showBearings:true, clearMeasurementsOnStop: false, showClearControl: true, showUnitControl: true});
// polylineMeasure.addTo (map);

document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

// L.Control.geocoder().addTo(map);

// ---------------------------------
var popup_info = L.control({ position: 'topright' });
popup_info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info-panel');
    this.update();
    return this._div;
};

popup_info.update = function (html) {
    if (html == null)
        html = '';
    this._div.innerHTML = html;
};

popup_info.addTo(map);

let infoView = 0;
var infoPanel = document.getElementsByClassName("info-panel")[0];


