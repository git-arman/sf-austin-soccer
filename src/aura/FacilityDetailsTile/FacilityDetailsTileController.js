({
	onFacilitySelected : function(component, event, helper) {
        var facility = event.getParam('facility');
        //alert('FDTileController: facility = '+facility.Name);
        component.set("v.facility", facility);
	},
})