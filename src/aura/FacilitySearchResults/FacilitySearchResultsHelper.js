// FacilitySearchResults (CHILD) HELPER code
({
	onSearch : function(component, facilityTypeId) {
        //alert("onSearch: facilityTypeId="+facilityTypeId);
        var action = component.get("c.getFacilities");
        action.setParams({
            facilityTypeId : facilityTypeId
        });

        action.setCallback(this,function(a){
            //get the response state
            var state = a.getState();
            //check if result is successful
            if (state == "SUCCESS"){
                var result = a.getReturnValue();
                //alert("onSearch: facilities="+result);
                component.set("v.facilities", result);

                /*if($A.util.isEmpty(result) || $A.util.isUndefined(result)) {
                    component.resetMap();
                }
                else {
                    component.set("v.facilities", result);
                }*/
            } 
            else if(state == "ERROR"){
                alert('Error in retrieving facilities');
                console.log('Error in retrieving facilities');
            }
        });
        $A.enqueueAction(action);
    },
})