//Import base maps

let osm = new ol.layer.Tile({
    visible: true,
    source: new ol.source.OSM(),
    title: 'OpenStreetMap',
    baseLayer: true
});

var BING_MAPS_KEY = 'AnNqLx-s6BPA6zT8HTa_uUlzxl8RlW_b_Z4okX1OE4reksi-Bu2WKgyC2cc4Fuzn';
var bingRoads = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    }),
    title: 'Bing Maps Roads',
    baseLayer: true
})
var bingAerial = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Aerial'
    }),
    title: 'Bing Maps Aerial',
    baseLayer: true
})

var stamenWatercolor = new ol.layer.Tile({
    title: 'Stamen Watercolor',
    baseLayer: true,
    visible: false,
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});
var stamenToner = new ol.layer.Tile({
    title: 'Stamen Toner',
    baseLayer: true,
    visible: false,
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});

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

var slope = new ol.layer.Image({
    title: 'Slope',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:slope'}
    }),
    visible: false
})

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
    visible: true
});

var nls = new ol.layer.Image({
    title: 'Theoretical no hazard zone',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:NLS'}
    }),
    visible: true
});

var train0 = new ol.layer.Image({
    title: 'Training points no hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Train_0'}
    }),
    visible: true
});

var train1 = new ol.layer.Image({
    title: 'Training points hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Train_1'}
    }),
    visible: true
});

var test0 = new ol.layer.Image({
    title: 'Testing points no hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Test_0'}
    }),
    visible: true
});

var test1 = new ol.layer.Image({
    title: 'Testing points hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:Test_1'}
    }),
    visible: true
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

var ppp = new ol.layer.Image({
    title: 'Population density',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: {'LAYERS': 'gisgeoserver_01:ita_ppp_group1'}
    }),
    visible: false
})

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
    fold: true,
    layers: [osm, bingRoads, bingAerial, stamenWatercolor, stamenToner]
});

let dataLayers = new ol.layer.Group({
    title: "Data Layers",
    fold: false,
    layers: [dusaf, dtm, ndvi, faults, rivers, roads]
})

let trainingLayers = new ol.layer.Group({
    title: "Training",
    fold: true,
    visible: false,
    layers: [nls, ls, train0, train1, test0, test1]
})

let computedLayers = new ol.layer.Group({
    title: "Computed Layers",
    fold: false,
    layers: [trainingLayers, aspect, slope, plan, profile, suscRec, suscRecRes, ppp, susc10k]
})

//Create the map

let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, dataLayers, computedLayers],
    view: new ol.View({
        center: ol.proj.fromLonLat([10.20, 46.22]),
        zoom: 12
    }),
});

// //Create and add layer for testing error management

// var test = new ol.layer.Image({
//     title: 'test',
//     source: new ol.source.ImageWMS({
//         url: 'https://www.gis-geoserver.poli.it/geoserver/wms',
//         params: {'LAYERS': 'gisgeoserver_01:profile'}
//     }),
//     visible: false
// })

// map.addLayer(test);

// Add the map controls:

map.addControl(new ol.control.ScaleLine());
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
    mouseover: true,
});
map.addControl(layerSwitcher);

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

    content.innerHTML = '<h5>Data:</h5>'; //Resets the popup content
    let visibleLayers = getVisibleLayers(map); //Find the visible layers with a function
    
    // For each visible layer it retrives the url for the request and make the ajax request
    visibleLayers.forEach(visibleLayer =>{
        if (typeof visibleLayer.getSource().getFeatureInfoUrl === 'function') {
            var viewResolution = map.getView().getResolution();
            var url = visibleLayer.getSource().getFeatureInfoUrl(
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

                        // Iterate over the features (in our case there's only 1 feature per layer)
                        var features = data.features;
                        if (features.length > 0) {
                            for (var i = 0; i < features.length; i++) {
                                var feature = features[i];
                                var value = feature.properties.GRAY_INDEX; //All layers have the significant data on GRAY_INDEX
                                
                                //Append to the popup
                                content.innerHTML += '<b>' + (visibleLayer.get('title')) + '</b><br>';
                                    if(value!=undefined) //For geometries (no gray index) only append the name
                                        content.innerHTML += '   ' + value + '<br>';                              
                            }
                            popup.setPosition(coord);
                        }
                    })
                    .fail(function(error) {
                        console.log(error);
                        content.innerHTML += '<b>' + (visibleLayer.get('title')) + '</b><br> Error retriving layer information<br>';
                    });
            }
        }
       
    });
});

// This closes the pop-up when the X button is clicked
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};


// Adding map event for pointermove

map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});


//Recursive function to get all visible layers
function getVisibleLayers(stuff) {
    let layers = stuff.getLayers().getArray();
  
    layers = layers.filter(layer => layer.getVisible());
  
    layers = layers.map(layer => {
      if (layer instanceof ol.layer.Group) {
        return getVisibleLayers(layer);
      } else {
        return layer;
      }
    });

    return layers.flat();
  }