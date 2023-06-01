let osm = new ol.layer.Tile({
    visible: true,
    source: new ol.source.OSM(),
    title: 'OpenStreetMap',
    type: 'base'
});

var BING_MAPS_KEY = 'AnNqLx-s6BPA6zT8HTa_uUlzxl8RlW_b_Z4okX1OE4reksi-Bu2WKgyC2cc4Fuzn';
var bingRoads = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    }),
    title: 'Bing Maps Roads',
    type: 'base'
})
var bingAerial = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Aerial'
    }),
    title: 'Bing Maps Aerial',
    type: 'base'
})

let colombiaBoundary = new ol.layer.Image({
    title: 'Colombia Boundary',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_adm0', 'STYLES': 'restricted' }
    }),
    visible: false
});
var colombiaDepartments = new ol.layer.Image({
    title: 'Colombia Departments',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_adm1' }
    }),
    opacity: 0.5
});

var colombiaRoads = new ol.layer.Image({
    title: 'Colombia Roads',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_roads' }
    }),
    visible: false
});
var colombiaRivers = new ol.layer.Image({
    title: 'Colombia Rivers',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_rivers' }
    }),
    minResolution: 1000,
    maxResolution: 5000
});

var tiranoDusaf = new ol.layer.Image({
    title: 'Tirano DUSAF',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:dusaf'}
    })
});

//Create the layer groups and add the layers to them

let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    fold: 'close',
    layers: [osm]
});
let dataLayers = new ol.layer.Group({
    title: "Data Layers",
    fold: 'close',
    layers: [tiranoDusaf]
})

let computedMatteo = new ol.layer.Group({
    title: "Matteo",
    fold: 'close',
    layers: [colombiaRivers]
})

let computedLorenzo = new ol.layer.Group({
    title: "Lorenzo",
    fold: 'close',
    layers: [colombiaBoundary]
})

let computedEllen = new ol.layer.Group({
    title: "Ellen",
    fold: 'close',
    layers: [colombiaDepartments]
})

let computedLayers = new ol.layer.Group({
    title: "Computed Layers",
    fold:'close',
    layers: [computedEllen, computedLorenzo, computedMatteo]
})

let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, dataLayers, computedLayers],
    view: new ol.View({
        center: ol.proj.fromLonLat([10.20, 46.22]),
        zoom: 12
    }),
});


// Add the map controls:

map.addControl(new ol.control.ScaleLine()); //Controls can be added using the addControl() map function
map.addControl(new ol.control.FullScreen());
map.addControl(new ol.control.OverviewMap());
map.addControl(
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: 'NAN, NAN'
    })
);

var layerSwitcher = new ol.control.LayerSwitcher({
    groupSelectStyle: 'none'
});
map.addControl(layerSwitcher);

//OPTIONAL
//Add the Bing Maps layers

basemapLayers.getLayers().extend([bingRoads, bingAerial]);

//Add the Stamen base layers

var stamenWatercolor = new ol.layer.Tile({
    title: 'Stamen Watercolor',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});
var stamenToner = new ol.layer.Tile({
    title: 'Stamen Toner',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});

basemapLayers.getLayers().extend([stamenWatercolor, stamenToner]);

//Add the WFS layer
/*
let vectorSource = new ol.source.Vector({});
const vectorLayer = new ol.layer.Vector({
    title: "Colombia water areas",
    source: vectorSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(58, 255, 81)',
            width: 4
        })
    }),
    zIndex: 10
});
overlayLayers.getLayers().extend([vectorLayer]);

function loadFeatures(response) {
    vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(response))
}
var base_url = "https://www.gis-geoserver.polimi.it/geoserver/gis/ows?";
var wfs_url = base_url;
wfs_url += "service=WFS&"
wfs_url += "version=2.0.0&"
wfs_url += "request=GetFeature&"
wfs_url += "typeName=gis%3ACOL_water_areas&"
wfs_url += "outputFormat=text%2Fjavascript&"
wfs_url += "srsname=EPSG:3857&"
wfs_url += "format_options=callback:loadFeatures"
$.ajax({ url: wfs_url, dataType: 'jsonp' });

//Add the code for the Pop-up

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container
});
map.addOverlay(popup);
//This is the event listener for the map. It fires when a single click is made on the map.
map.on('singleclick', function (event) {
    //This iterates over all the features that are located on the pixel of the click (can be many)
    var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
        return feature;
    });

    //If there is a feature, open the popup by setting a position to it and put the data from the feature
    if (feature != null) {
        var pixel = event.pixel;
        var coord = map.getCoordinateFromPixel(pixel);
        popup.setPosition(coord);
        content.innerHTML =
            '<h5>Colombia Water Areas</h5><br><b>Name: </b>' +
            feature.get('NAME') +
            '</br><b>Description: </b>' +
            feature.get('HYC_DESCRI');
    } else {
        //Only if the colombiaRoads layer is visible, do the GetFeatureInfo request
        if (colombiaRoads.getVisible()) {
            var viewResolution = (map.getView().getResolution());
            var url = colombiaRoads.getSource().getFeatureInfoUrl(event.coordinate, viewResolution, 'EPSG:3857', { 'INFO_FORMAT': 'text/html' });

            if (url) {
                var pixel = event.pixel;
                var coord = map.getCoordinateFromPixel(pixel);
                //We do again the AJAX request to get the data from the GetFeatureInfo request
                $.ajax({ url: url })
                    .done((data) => {
                        console.log(data);
                        //Put the data of the GetFeatureInfo response inside the pop-up
                        //The data that arrives is in HTML
                        if(data.includes('<table')){
                            content.innerHTML = data;
                            popup.setPosition(coord);
                        }
                    }).fail((error) => {
                        console.log(error);
                    });
            }
        }
    }

});
//This closes the pop-up when the X button is clicked
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};
*/
// Adding map event for pointermove

map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});
