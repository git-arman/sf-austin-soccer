@isTest
private class FacilityTypesControllerTest {
	
	@testSetup
	private static void testSetup() {
		List<Facility_Type__c> facilityTypes = new List<Facility_Type__c>();
		
		Facility_Type__c ft1 = new Facility_Type__c(Name='Park');
		facilityTypes.add(ft1);

		Facility_Type__c ft2 = new Facility_Type__c(Name='Park');
		facilityTypes.add(ft2);

		insert facilityTypes;
	}

	@isTest 
	static void testGetFacilityTypes() {
		List<Facility_Type__c> fTypesSetup = [SELECT Id, Name FROM Facility_Type__c];

		Test.startTest();
		List<Facility_Type__c> fTypes = FacilityTypesController.getFacilityTypes();
		Test.stopTest();

		System.assertNotEquals(null, fTypes);
		System.assertEquals(fTypesSetup, fTypes);
	}
}