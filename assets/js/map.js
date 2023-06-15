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

//Import data layers

var dusaf = new ol.layer.Image({
    title: 'DUSAF',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:dusaf'}
    }),
    visible: false
});

var dtm = new ol.layer.Image({
    title: 'DTM',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:dtm'}
    }),
    visible: false
});

var ndvi = new ol.layer.Image({
    title: 'NDVI',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:ndvi'}
    }),
    visible: false
});

var faults = new ol.layer.Image({
    title: 'Faults',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:faults'}
    }),
    visible: false
});

var rivers = new ol.layer.Image({
    title: 'Rivers',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:rivers'}
    }),
    visible: false
});

var roads = new ol.layer.Image({
    title: 'Roads',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:roads'}
    }),
    visible: false
});

//Import computed layers

var aspect = new ol.layer.Image({
    title: 'Aspect',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:aspect'}
    }),
    visible: false
});

var plan = new ol.layer.Image({
    title: 'Plan',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:plan'}
    }),
    visible: false
});

var profile = new ol.layer.Image({
    title: 'Profile',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:profile'}
    }),
    visible: false
});

var ls = new ol.layer.Image({
    title: 'Landslides',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:LS'}
    }),
    visible: false
});

var nls = new ol.layer.Image({
    title: 'Theoretical no hazard zone',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:NLS'}
    }),
    visible: false
});

var train0 = new ol.layer.Image({
    title: 'Training points no hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Train_0'}
    }),
    visible: false
});

var train1 = new ol.layer.Image({
    title: 'Training points hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Train_1'}
    }),
    visible: false
});

var test0 = new ol.layer.Image({
    title: 'Testing points no hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Test_0'}
    }),
    visible: false
});

var test1 = new ol.layer.Image({
    title: 'Testing points hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Test_1'}
    }),
    visible: false
});

var suscRec = new ol.layer.Image({
    title: 'Susceptibility_Map_reclassify',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Susceptibility_Map_reclassify'}
    }),
    visible: false
});

var suscRecRes = new ol.layer.Image({
    title: 'Susceptibility_Map_reclassify_resamp',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Susceptibility_Map_reclassify_resamp'}
    }),
    visible: false
});

var susc10k = new ol.layer.Image({
    title: 'Susceptibility_Map_10k',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Susceptibility_Map_map_10k'}
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
    layers: [dusaf, dtm, ndvi, faults, rivers, roads]
})

let trainingLayers = new ol.layer.Group({
    title: "Training",
    fold: 'close',
    layers: [nls, ls, train0, train1, test0, test1]
})

let computedLayers = new ol.layer.Group({
    title: "Computed Layers",
    fold:'close',
    layers: [trainingLayers, aspect, plan, profile, suscRec, suscRecRes, susc10k]
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
        projection: 'EPSG:32632',
        className: 'custom-control',
        placeholder: '-, -'
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

// Add the code for the Pop-up

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container
});
map.addOverlay(popup);

// This is the event listener for the map. It fires when a single click is made on the map.
map.on('singleclick', function (event) {
    // Check if the Susceptibility_Map_10k layer is visible
    if (susc10k.getVisible()) {
        var viewResolution = map.getView().getResolution();
        var url = susc10k.getSource().getFeatureInfoUrl(
            event.coordinate,
            viewResolution,
            map.getView().getProjection(),
            {'INFO_FORMAT': 'application/json'}
        );

        if (url) {
            var pixel = event.pixel;
            var coord = map.getCoordinateFromPixel(pixel);
            // We do an AJAX request to get the data from the GetFeatureInfo request
            $.ajax({ url: url })
                .done(function(data) {
                    console.log(data);
                    // Iterate over the features and display pop-up for each feature
                    var features = data.features;
                    if (features.length > 0) {
                        content.innerHTML = '';
                        for (var i = 0; i < features.length; i++) {
                            var feature = features[i];
                            var value = feature.properties.GRAY_INDEX;
                            content.innerHTML +=
                                '<h5>' + (susc10k.get('title')) + '</h5><br>' +
                                '<b>Value: </b>' + value + '<br>';
                        }
                        popup.setPosition(coord);
                    }
                })
                .fail(function(error) {
                    console.log(error);
                });
        }
    }
});

// This closes the pop-up when the X button is clicked
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};


//https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_01/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image%2Fjpeg&TRANSPARENT=true&QUERY_LAYERS=gisgeoserver_01%3Adusaf&STYLES&LAYERS=gisgeoserver_01%3Adusaf&exceptions=application%2Fvnd.ogc.se_inimage&INFO_FORMAT=text%2Fhtml&FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG%3A32632&WIDTH=101&HEIGHT=101&BBOX=590893.49998748%2C5116893.576095287%2C592821.3743756937%2C5118821.450483501

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
