({
    rerender: function (component) {
        //alert("IN rerender");
        var nodes = this.superRerender();
        
        var location = component.get('v.location');

        if (!location) {
           
        } else {
            // If the Leaflet library is not yet loaded, we can't draw the map: return
            if (!window.L) {
                return nodes;
            }
            
            var latLng = ''; //[30.277554, -97.740307]; // TX State Capitol default
            var facilityName = ''; // = 'TX State Capitol';

            if (location && location.latitude && location.longitude) {
                latLng = [location.latitude, location.longitude];
                facilityName = component.get('v.facilityName');
            
                //alert('RERENDER: facilityName = '+facilityName);
                //alert('RERENDER: location.latitude ='+location.latitude+', location.longitude ='+location.longitude);

                // Draw the map if it hasn't been drawn yet
                if (!component.map) {
                    var mapElement = component.find("map").getElement();
                    //component.map = L.map(mapElement, {zoomControl: true}).setView([30.277554, -97.740307], 13); // TX State Capitol
                    component.map = L.map(mapElement, {zoomControl: true}).setView([location.latitude, location.longitude], 13);
                    //component.map.scrollWheelZoom.disable();
                }

                // if tileLayer does not exist
                if (!component.map.tileLayer) {
                    window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles © Esri'}).addTo(component.map);
                }

                // if map market does not exist
                if (!component.map.marker) {
                    component.marker = window.L.marker(latLng);
                    component.marker.addTo(component.map).bindPopup(facilityName);
                }
                
                component.map.setView(latLng);
            }
            else {
                //alert('No location available');
                if (component.map) {
                    // removes tileLayer and Markers, for a map "reset"
                    component.map.eachLayer(function (layer) {
                        component.map.removeLayer(layer);
                    });
                }
            }

            return nodes;
        }
    }
})