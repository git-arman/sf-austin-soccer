public class FacilityTypesController {
    
    @AuraEnabled 
    public static List<Facility_Type__c> getFacilityTypes() {
        List<Facility_Type__c> facilityTypes = [SELECT Id, Name FROM Facility_Type__c];
        System.debug('__facilityTypes = '+facilityTypes);
        return facilityTypes;
    }
}