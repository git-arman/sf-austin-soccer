public class FacilitySearchResults {
    
    @AuraEnabled
    public static List<Facility__c> getFacilities(String facilityTypeId) {
        System.debug('__facilityTypeId = '+facilityTypeId);
        List<Facility__c> facilities = new List<Facility__c>();
        String soql = 'SELECT Id, Name, Picture__c, Primary_Contact__r.Name'+
            ', Main_Location__Latitude__s, Main_Location__Longitude__s' + 
            ', Description__c, Hours__c' +
            ' FROM Facility__c';

        if (! String.isEmpty(facilityTypeId)) {
            soql += ' WHERE Facility_Type__c = :facilityTypeId';
        }

        facilities = Database.query(soql);
        System.debug('facilities='+facilities);

        return facilities;
    }
}