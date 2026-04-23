var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Google_1 = new ol.layer.Tile({
            'title': 'Google',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Parcuri_2 = new ol.format.GeoJSON();
var features_Parcuri_2 = format_Parcuri_2.readFeatures(json_Parcuri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcuri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcuri_2.addFeatures(features_Parcuri_2);
var lyr_Parcuri_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcuri_2, 
                style: style_Parcuri_2,
                popuplayertitle: 'Parcuri',
                interactive: false,
                title: '<img src="styles/legend/Parcuri_2.png" /> Parcuri'
            });
var format_Obiective_3 = new ol.format.GeoJSON();
var features_Obiective_3 = format_Obiective_3.readFeatures(json_Obiective_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obiective_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obiective_3.addFeatures(features_Obiective_3);
var lyr_Obiective_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obiective_3, 
                style: style_Obiective_3,
                popuplayertitle: 'Obiective',
                interactive: true,
    title: 'Obiective<br />\
    <img src="styles/legend/Obiective_3_0.png" /> Constructie<br />\
    <img src="styles/legend/Obiective_3_1.png" /> Cultural<br />\
    <img src="styles/legend/Obiective_3_2.png" /> Pom<br />\
    <img src="styles/legend/Obiective_3_3.png" /> <br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_Google_1.setVisible(true);lyr_Parcuri_2.setVisible(true);lyr_Obiective_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Google_1,lyr_Parcuri_2,lyr_Obiective_3];
lyr_Parcuri_2.set('fieldAliases', {'id': 'id', '@id': '@id', 'is_in:city': 'is_in:city', 'leisure': 'leisure', 'name': 'name', 'name:de': 'name:de', 'name:en': 'name:en', 'wikidata': 'wikidata', 'tip_spatiu_verde': 'tip_spatiu_verde', 'check_date': 'check_date', 'foot': 'foot', 'name:ro': 'name:ro', 'old_name:-1993': 'old_name:-1993', 'alt_name': 'alt_name', 'old_name': 'old_name', 'old_name:-2012': 'old_name:-2012', 'landuse': 'landuse', 'access': 'access', 'old_name:-1990': 'old_name:-1990', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'place': 'place', 'opening_hours': 'opening_hours', 'bicycle': 'bicycle', 'wikipedia': 'wikipedia', 'leaf_cycle': 'leaf_cycle', 'leaf_type': 'leaf_type', 'level': 'level', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:postcode:source': 'addr:postcode:source', 'source': 'source', 'natural': 'natural', 'religion': 'religion', 'type': 'type', '@geometry': '@geometry', 'intermittent': 'intermittent', 'water': 'water', 'SIRUTA:code': 'SIRUTA:code', 'codul_entității_muzeale': 'codul_entității_muzeale', 'description:ro': 'description:ro', 'email': 'email', 'fax': 'fax', 'fee': 'fee', 'heritage': 'heritage', 'heritage:operator': 'heritage:operator', 'museum': 'museum', 'operator': 'operator', 'operator:type': 'operator:type', 'phone': 'phone', 'ref:RO:lmi': 'ref:RO:lmi', 'source:link': 'source:link', 'start_date': 'start_date', 'tourism': 'tourism', 'tourism_survey': 'tourism_survey', 'website': 'website', 'CLC:code': 'CLC:code', 'CLC:explanation': 'CLC:explanation', 'CLC:shapeId': 'CLC:shapeId', 'CLC:year': 'CLC:year', 'source:ro': 'source:ro', 'aeroway': 'aeroway', 'surface': 'surface', 'salt': 'salt', 'tidal': 'tidal', 'addr:country': 'addr:country', 'stars': 'stars', 'proposed': 'proposed', 'layer': 'layer', 'club': 'club', 'sport': 'sport', 'garden:type': 'garden:type', 'man_made': 'man_made', 'basin': 'basin', });
lyr_Obiective_3.set('fieldAliases', {'fid': 'fid', 'media': 'Media', 'color': 'Marker color', 'title': 'Title', 'note': 'Note', 'timestamp': 'Time', 'Tip': 'Tip', });
lyr_Parcuri_2.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'is_in:city': 'TextEdit', 'leisure': 'TextEdit', 'name': 'TextEdit', 'name:de': 'TextEdit', 'name:en': 'TextEdit', 'wikidata': 'TextEdit', 'tip_spatiu_verde': 'TextEdit', 'check_date': 'DateTime', 'foot': 'TextEdit', 'name:ro': 'TextEdit', 'old_name:-1993': 'TextEdit', 'alt_name': 'TextEdit', 'old_name': 'TextEdit', 'old_name:-2012': 'TextEdit', 'landuse': 'TextEdit', 'access': 'TextEdit', 'old_name:-1990': 'TextEdit', 'addr:city': 'TextEdit', 'addr:street': 'TextEdit', 'place': 'TextEdit', 'opening_hours': 'TextEdit', 'bicycle': 'TextEdit', 'wikipedia': 'TextEdit', 'leaf_cycle': 'TextEdit', 'leaf_type': 'TextEdit', 'level': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:postcode:source': 'TextEdit', 'source': 'TextEdit', 'natural': 'TextEdit', 'religion': 'TextEdit', 'type': 'TextEdit', '@geometry': 'TextEdit', 'intermittent': 'TextEdit', 'water': 'TextEdit', 'SIRUTA:code': 'TextEdit', 'codul_entității_muzeale': 'TextEdit', 'description:ro': 'TextEdit', 'email': 'TextEdit', 'fax': 'TextEdit', 'fee': 'TextEdit', 'heritage': 'TextEdit', 'heritage:operator': 'TextEdit', 'museum': 'TextEdit', 'operator': 'TextEdit', 'operator:type': 'TextEdit', 'phone': 'TextEdit', 'ref:RO:lmi': 'TextEdit', 'source:link': 'TextEdit', 'start_date': 'TextEdit', 'tourism': 'TextEdit', 'tourism_survey': 'TextEdit', 'website': 'TextEdit', 'CLC:code': 'TextEdit', 'CLC:explanation': 'TextEdit', 'CLC:shapeId': 'TextEdit', 'CLC:year': 'TextEdit', 'source:ro': 'TextEdit', 'aeroway': 'TextEdit', 'surface': 'TextEdit', 'salt': 'TextEdit', 'tidal': 'TextEdit', 'addr:country': 'TextEdit', 'stars': 'TextEdit', 'proposed': 'TextEdit', 'layer': 'TextEdit', 'club': 'TextEdit', 'sport': 'TextEdit', 'garden:type': 'TextEdit', 'man_made': 'TextEdit', 'basin': 'TextEdit', });
lyr_Obiective_3.set('fieldImages', {'fid': 'Hidden', 'media': 'ExternalResource', 'color': 'Color', 'title': 'TextEdit', 'note': 'TextEdit', 'timestamp': 'DateTime', 'Tip': 'TextEdit', });
lyr_Parcuri_2.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'is_in:city': 'no label', 'leisure': 'no label', 'name': 'no label', 'name:de': 'no label', 'name:en': 'no label', 'wikidata': 'no label', 'tip_spatiu_verde': 'no label', 'check_date': 'no label', 'foot': 'no label', 'name:ro': 'no label', 'old_name:-1993': 'no label', 'alt_name': 'no label', 'old_name': 'no label', 'old_name:-2012': 'no label', 'landuse': 'no label', 'access': 'no label', 'old_name:-1990': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'place': 'no label', 'opening_hours': 'no label', 'bicycle': 'no label', 'wikipedia': 'no label', 'leaf_cycle': 'no label', 'leaf_type': 'no label', 'level': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'addr:postcode:source': 'no label', 'source': 'no label', 'natural': 'no label', 'religion': 'no label', 'type': 'no label', '@geometry': 'no label', 'intermittent': 'no label', 'water': 'no label', 'SIRUTA:code': 'no label', 'codul_entității_muzeale': 'no label', 'description:ro': 'no label', 'email': 'no label', 'fax': 'no label', 'fee': 'no label', 'heritage': 'no label', 'heritage:operator': 'no label', 'museum': 'no label', 'operator': 'no label', 'operator:type': 'no label', 'phone': 'no label', 'ref:RO:lmi': 'no label', 'source:link': 'no label', 'start_date': 'no label', 'tourism': 'no label', 'tourism_survey': 'no label', 'website': 'no label', 'CLC:code': 'no label', 'CLC:explanation': 'no label', 'CLC:shapeId': 'no label', 'CLC:year': 'no label', 'source:ro': 'no label', 'aeroway': 'no label', 'surface': 'no label', 'salt': 'no label', 'tidal': 'no label', 'addr:country': 'no label', 'stars': 'no label', 'proposed': 'no label', 'layer': 'no label', 'club': 'no label', 'sport': 'no label', 'garden:type': 'no label', 'man_made': 'no label', 'basin': 'no label', });
lyr_Obiective_3.set('fieldLabels', {'media': 'inline label - always visible', 'color': 'hidden field', 'title': 'inline label - visible with data', 'note': 'inline label - always visible', 'timestamp': 'hidden field', 'Tip': 'hidden field', });
lyr_Obiective_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});