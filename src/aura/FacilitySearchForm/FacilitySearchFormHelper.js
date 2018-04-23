({
	getFacilityTypes : function(component) {
        var action = component.get("c.getFacilityTypes");
        action.setCallback(this, function(a){
            //get the response state
            var state = a.getState();
            
            //check if result is successfull
            if (state == "SUCCESS"){
                var result = a.getReturnValue();
                if(!$A.util.isEmpty(result) && !$A.util.isUndefined(result))
                    component.set("v.facilityTypes",result);
            } 
            else if (state == "ERROR"){
                alert('Error in retrieving Facility Types');
            }
        });

        $A.enqueueAction(action);
    },
    
    checkRecordCreation : function(component, event) {
        var createRecordEvent = $A.get('event.force:createRecord');
        if ( createRecordEvent ) {
            component.set("v.showNewButton", "true");
        }
        else {
            component.set("v.showNewButton", "false"); 
        }
    },
 
})