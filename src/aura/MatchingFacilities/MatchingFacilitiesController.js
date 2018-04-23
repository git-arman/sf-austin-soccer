({
	onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        alert("Matching Facilities onFormSubmit: formData = "+formData);
        var facilityTypeId = formData.facilityTypeId;
        alert("Matching Facilities onFormSubmit: facilityTypeId = "+facilityTypeId);
      	var childCmp = component.find("FacilitySearchResults");
        //alert('boatTypeId='+boatTypeId);
        var auraMethodResult = childCmp.search(facilityTypeId);
	}
})