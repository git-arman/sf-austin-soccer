({
	onFacilityClick : function(component, event, helper) {
        var facilityTile = component.find("facilityTile");
        //alert("facilityTile= "+facilityTile);
		var facilityId = facilityTile.get("v.value");
        //alert("onFacilityClick: facilityId="+facilityId);
      	var facilitySelectEvent = component.getEvent("FacilitySelect");
        facilitySelectEvent.setParams({ "facilityId": facilityId });
        facilitySelectEvent.fire();
        
        ////
        var facility = component.get("v.facility");
        //alert('FacilityTileController: onFacilityClick - facility = '+facility);
        
        // Get the application event by using the  e.<namespace>.<event> syntax
        var appEvent = $A.get("e.c:FacilitySelected");
        appEvent.setParams({ "facility": facility });
        appEvent.fire();

        // Get Latitude & Longitude for map
        var mapEvent = $A.get("e.c:PlotMapMarker");
        var latitude = facility.Main_Location__Latitude__s;
        var longitude = facility.Main_Location__Longitude__s;
        var facilityName = facility.Name;
        //alert("onFacilityClick: lat="+latitude+", long="+longitude+", sObjectId="+facilityId+", label="+facilityName);
        mapEvent.setParams({ "lat" : latitude });
        mapEvent.setParams({ "long" : longitude });
        mapEvent.setParams({ "sObjectId" : facilityId });
        mapEvent.setParams({ "label" : facilityName });
        mapEvent.fire();
	}
})