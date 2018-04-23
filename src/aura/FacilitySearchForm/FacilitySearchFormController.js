({
    doInit : function(component, event, helper) {
        component.set("v.formData", new Object());
        helper.getFacilityTypes(component);
    },
	
    onFormSubmit : function(component, event, helper) {
      	component.resetMap();
        component.resetFacilityDetails();

        var facilityTypeId = component.find("facilityTypesDropdown").get("v.value");
      	var formData = component.get("v.formData");
        formData.facilityTypeId = facilityTypeId;
        //alert('formData.facilityTypeId = '+formData.facilityTypeId);
        component.set("v.formData", formData);
      	var formSubmitEvent = component.getEvent("formSubmit");
        formSubmitEvent.setParams({ "formData": formData });
        formSubmitEvent.fire();
    },

    resetMap : function() {
        //alert('IN resetMap');
        var mapEvent = $A.get("e.c:PlotMapMarker");
        mapEvent.setParams({ "lat" : null });
        mapEvent.setParams({ "long" : null });
        mapEvent.setParams({ "sObjectId" : '' });
        mapEvent.setParams({ "label" : '' });
        mapEvent.fire();
    },

    resetFacilityDetails : function() {
        //alert('IN resetFacilityDetails');
        var appEvent = $A.get("e.c:FacilitySelected");
        appEvent.setParams({ "facility": null });
        appEvent.fire();
    }

    
    /* FUTURE:
    createNewFacility : function(component, event, helper) {
        var createRecordEvent = $A.get('event.force:createRecord');
        if ( createRecordEvent ) {
            createRecordEvent.setParams({
                'entityApiName': 'Facility__c',
                'defaultFieldValues': {
                    'Facility_Type__c' : 'Park',
                    'Contact__c' : '',
                    'Description__c' : 100,
                    'Size__c'  : 999
                }
            });
            createRecordEvent.fire();
        } else {
            // Create Record Event is not supported 
            alert("Create Record Event - Facility creation not supported");
        }
	},*/
})