@isTest
private class FacilitySearchResultsTest {
	
	@testSetup
	private static void testSetup(){
		GenerateData.createNewData();
	}

	@isTest static void testFacilitySearchResults() {
		List<Facility__c> facilitiesCreated = new List<Facility__c>();
        
        String soql = 'SELECT Id, Name, Picture__c, Primary_Contact__r.Name'+
            ', Main_Location__Latitude__s, Main_Location__Longitude__s' + 
            ', Description__c, Hours__c' +
            ' FROM Facility__c';

        facilitiesCreated = Database.query(soql);

        String facilityTypeId = ''; // ALL facilities

        Test.startTest();
        List<Facility__c> facilities = FacilitySearchResults.getFacilities(facilityTypeId);
        Test.stopTest();

        System.assertNotEquals(null, facilities);
	}
	
	@isTest static void testFacilitySearchResults_FakeFacility() {
		List<Facility__c> facilitiesCreated = new List<Facility__c>();
        
        String soql = 'SELECT Id, Name, Picture__c, Primary_Contact__r.Name'+
            ', Main_Location__Latitude__s, Main_Location__Longitude__s' + 
            ', Description__c, Hours__c' +
            ' FROM Facility__c';

        facilitiesCreated = Database.query(soql);

        String facilityTypeId = '1234'; // Fake Facility

        Test.startTest();
        List<Facility__c> facilities = FacilitySearchResults.getFacilities(facilityTypeId);
        Test.stopTest();

        System.assert(facilities.isEmpty());
	}
	
}