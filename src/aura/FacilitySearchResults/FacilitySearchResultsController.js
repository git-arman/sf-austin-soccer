// FacilitySearchResults (CHILD) CONTROLLER code
({
	doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        var facilityTypeId = "";
        if (params) {
            facilityTypeId = params.facilityTypeId;
        }
        //alert("doSearch: facilityTypeId="+facilityTypeId);
        helper.onSearch(component, facilityTypeId);
	},
    
    onFacilitySelect : function(component, event, helper) {
        //alert('onFacilitySelect: event='+event);
        var params = event.getParam('facilityId');
        var selectedFacilityId = "";
        if (params) {
            //alert('params='+params);
            selectedFacilityId = params;
            //alert("onFacilitySelect: selectedFacilityId="+selectedFacilityId);
            component.set("v.selectedFacilityId", selectedFacilityId);
        }
	},
})