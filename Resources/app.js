var WinView = Ti.UI.createView({
top:0,
width: '100%',
height: '100%',
backgroundColor: '#1C1C1C'
});

var win2 = Titanium.UI.createWindow({  
    backgroundColor:'#FFF'
});

var Map = require('ti.map');
var mapview = Map.createView({mapType:Map.NORMAL_TYPE});

var Map = require('ti.map');
var win2 = Titanium.UI.createWindow();

var moscowView = Map.createAnnotation({
    latitude:46.725761,
    longitude:-117.011401,
    title:"Stovers Deli",
    subtitle:'J.A. Albertson Building: 1st Floor',
    pincolor:Map.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});

win2.add(moscowView);

var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: {latitude:46.7261, longitude:-117.0111,
            latitudeDelta:0.008, longitudeDelta:0.008},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[moscowView]
});

win2.add(mapview);
// Handle click events on any annotations on this map.
mapview.addEventListener('click', function(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
});

WinView.add(win2);
win2.open();