({
	onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        var facilityTypeId = formData.facilityTypeId;
        //alert("onFormSubmit: facilityTypeId = "+facilityTypeId);
      	
      	var childCmp = component.find("FacilitySearchResults");
        //var auraMethodResult = childCmp.search(facilityTypeId);
        childCmp.search(facilityTypeId);
	},
})