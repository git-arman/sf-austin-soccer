({
    jsLoaded: function(component) {
    	//alert("IN jsLoaded");
        component.set("v.jsLoaded", true);
    },

    plotMapMarker: function(component, event) {
        //alert("IN plotMapMarker");
        var sObjectId = event.getParam("sObjectId");
        //alert("sObjectId="+sObjectId);
        var lat = event.getParam('lat');
        //alert("lat="+lat);
        var long = event.getParam('long');
		//alert("long="+long);
		var facilityLabel = event.getParam('label');
        component.set("v.facilityName", facilityLabel);

		var location = [lat, long];
		//alert("LOCATION: "+location);
		component.set("v.location", { latitude : lat, longitude : long });
    },  

})