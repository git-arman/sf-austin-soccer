// FacilitySearch (PARENT) CONTROLLER code
({
	onFormSubmitted : function(component, event, helper) {
        var formData = event.getParam("formData");
        var facilityTypeId = formData.facilityTypeId;
        //alert("PARENT onFormSubmitted: facilityTypeId = "+facilityTypeId);

      	var childCmp = component.find("FacilitySearchResults");
        childCmp.search(facilityTypeId);
	},
})