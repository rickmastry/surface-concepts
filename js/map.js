mapboxgl.accessToken = 'pk.eyJ1IjoiamFocmlrIiwiYSI6ImNscG9nejMzczBuaGkya3E0MTc5Ym9wMDEifQ.Km4kW98r76OaOAhllYWtSQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/standard',
/*projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator*/
zoom: 7,
center: [-78.885681,33.690085]
});

const places = [
        {
            message: 'Myrtle Beach - We cover all areas of the Grand Strand',
            lnglat: [-78.885681,33.690085]
        },
        {
            message: 'Murrels Inlet - We cover all areas of NC & SC',
            lnglat: [-79.041000,33.549928]
        },
        {
            message: 'Georgetown - We cover all areas of NC & SC',
            lnglat: [-79.295334,33.374462]
        },
        {
            message: 'Morth Myrtle Beach - We cover all areas of NC & SC',
            lnglat: [-78.682296,33.826832]
        },
        {
            message: 'Pawleys Island - We cover all areas of NC & SC',
            lnglat: [-79.150863,33.425810]
        },
        {
            message: 'Conway - We cover all areas of NC & SC',
            lnglat: [-79.052536,33.835955]
        },
        {
            message: 'Wilmington - We cover all areas of NC & SC',
            lnglat: [-77.971069,34.196302]
        }
]

places.forEach(({name, message, lnglat}) => {
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(message)
    
    // Create a default Marker and add it to the map.
    new mapboxgl.Marker({
        scale: 1,
        color: 'green'
    })
    .setLngLat(lnglat)
    .setPopup(popup)
    .addTo(map);
})


 
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});
 
// The following values can be changed to control rotation speed:
 
// At low zooms, complete a revolution every two minutes.
const secondsPerRevolution = 120;
// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;
 
let userInteracting = false;
let spinEnabled = true;
 
function spinGlobe() {
const zoom = map.getZoom();
if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
let distancePerSecond = 360 / secondsPerRevolution;
if (zoom > slowSpinZoom) {
// Slow spinning at higher zooms
const zoomDif =
(maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
distancePerSecond *= zoomDif;
}
const center = map.getCenter();
center.lng -= distancePerSecond;
// Smoothly animate the map over one second.
// When this animation is complete, it calls a 'moveend' event.
map.easeTo({ center, duration: 1000, easing: (n) => n });
}
}
 
// Pause spinning on interaction
map.on('mousedown', () => {
userInteracting = true;
});
 
// Restart spinning the globe when interaction is complete
map.on('mouseup', () => {
userInteracting = false;
spinGlobe();
});
 
// These events account for cases where the mouse has moved
// off the map, so 'mouseup' will not be fired.
map.on('dragend', () => {
userInteracting = false;
spinGlobe();
});
map.on('pitchend', () => {
userInteracting = false;
spinGlobe();
});
map.on('rotateend', () => {
userInteracting = false;
spinGlobe();
});
 
// When animation is complete, start spinning if there is no ongoing interaction
map.on('moveend', () => {
spinGlobe();
});
 
document.getElementById('btn-spin').addEventListener('click', (e) => {
spinEnabled = !spinEnabled;
if (spinEnabled) {
spinGlobe();
e.target.innerHTML = 'Pause rotation';
} else {
map.stop(); // Immediately end ongoing animation
e.target.innerHTML = 'Start rotation';
}
});
 
spinGlobe();